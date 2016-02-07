import React, { PropTypes } from 'react';
var d = require('jsnox')(React);

import todo_component from './todo_component.js';

var todolist_component = React.createClass({
  propTypes: {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired }).isRequired
    ).isRequired
  },
  render: function() {
    var on_todo_click = this.props.on_todo_click;
    var id = this.props.id;

    var child_nodes = this.props.todos.map(
      function({onClick, text, completed, id }) {
        return React.createElement( todo_component, {
          onClick: function(dispatch) { on_todo_click(id); },
          text,
          completed,
          id: id,
          key: id
        });
      }
    );

    return d( "ul", { todos: this.props.todos }, child_nodes);
  }
});

export default todolist_component;
