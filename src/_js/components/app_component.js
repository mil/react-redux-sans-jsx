import React from 'react';
import uuid from 'uuid';
var d = require('jsnox')(React);

import visible_todolist_component from './visible_todolist_component.js';
import add_component from './add_component.js';

var app_component = React.createClass({
  render: function() {
    return d("div", { key: uuid.v1(), store: this.props.store }, [
      React.createElement(visible_todolist_component),
      React.createElement(add_component, { key: uuid.v1() })
    ]);
  }
});

export default app_component;
