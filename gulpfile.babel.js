#!/usr/bin/env node
'use strict';
import gulp from 'gulp';
import browserify from 'browserify';
import fs from 'fs';
import connect from 'gulp-connect';


const globals = {
  in_directory: './src',
  out_directory: './dist'
};
const u = {
  fs_out: path => {
    return `${globals.out_directory}/${path || ''}`;
  },
  fs_in: path => {
    return `${globals.in_directory}/${path || ''}`;
  }
};

gulp.task('browserify', ()=>{
  if (!fs.existsSync(globals.out_directory)){
    fs.mkdirSync(globals.out_directory);
  }

  return browserify(u.fs_in('_js/app.js'), { debug: true })
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(fs.createWriteStream("dist/all.js"));

});

gulp.task('copy-assets', ()=>{
  fs.readdir(u.fs_in(),function(err,files){
    if(err) throw err;
    files.forEach(function(file){
      if (file.match(/^_/)) { return false; }
      var copy_handle = fs.lstatSync(u.fs_in(file)).isDirectory() ? (file + '/**') : file;
      gulp
        .src(u.fs_in(copy_handle), { base: './' + u.fs_in()})
        .pipe(gulp.dest(u.fs_out()));
    });
  });
});

gulp.task('webserver', ()=> {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 5555
  });
});

gulp.task('watch', ()=> {
  gulp.watch(u.fs_in('**'), ['copy-assets']);
  gulp.watch(u.fs_in('_js/**'), ['browserify']);
});

gulp.task('default', [ 'webserver', 'copy-assets', 'browserify', 'watch' ]);
