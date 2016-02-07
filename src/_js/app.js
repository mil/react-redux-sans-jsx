import React from 'react'
import { createStore } from '../../node_modules/redux/dist/redux.js';
import { Provider } from 'react-redux';
import { render } from 'react-dom'

import * as reducers from './reducers.js';
import app_component from './components/app_component.js';

function init_app() {
  var store = createStore(reducers.todo_app_reducer);
  render(
    React.createElement(
      Provider,
      { store },
      React.createElement(app_component)
    ),
    document.getElementById('todo-app')
  );
}

window.onload = init_app;
