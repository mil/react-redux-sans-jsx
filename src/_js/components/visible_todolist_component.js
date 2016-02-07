import { connect } from 'react-redux';
import { toggle_todo } from '../actions.js';

import todolist_component from './todolist_component.js';

function map_state_to_props(state)  {
  return { todos: state.todos };
}

function map_dispatch_to_props(dispatch) {
  return {
    on_todo_click: function(id) {
      dispatch(toggle_todo(id));
    }
  };
};

var visible_todolist_component = connect(
  map_state_to_props,
  map_dispatch_to_props
)(todolist_component);

export default visible_todolist_component;
