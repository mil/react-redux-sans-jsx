import React, { PropTypes } from 'react';
var d = require('jsnox')(React);

var todo_component  = React.createClass({
  propTypes: {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  },
  render: function() {
    return d('li', {
      onClick: this.props.onClick,
      style:  {
        textDecoration: this.props.completed ? 'line-through' : 'none'
      }
    }, this.props.text);
  }
});

export default todo_component;
