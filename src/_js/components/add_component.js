import uuid from 'uuid';
import React from 'react';
import { connect } from 'react-redux';
import { add_todo } from '../actions.js';
var d = require('jsnox')(React);

var add_component = React.createClass({
  render: function(_ref) {
    let dispatch = this.props.dispatch;
    let input;

    var input_dom = d("input", {
      ref: function(node) { input = node; }
    });
    var button_dom = d("button", {
      onClick: function() {
        dispatch(add_todo(input.value));
        input.value = '';
      }
    }, "Add Todo");

    return d("div", {}, [ input_dom, button_dom ]);
  }
});

export default connect()(add_component);
