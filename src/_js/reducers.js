import init_state from './init_state.js';

// Object merge utility
function object_merge(a, b) {
  return Object.assign({}, a, b);
}

function todo_toggle_reducer(state = [], action) {
  return state.map(function(todo) {
    return object_merge(
      todo,
      action.id === todo.id ? { completed: !todo.completed } : {}
    );
  });
}

function todo_add_reducer(state = [], action) {
  return [...state, { text: action.text, completed: false, id: action.id }];
}
function visibility_reducer(state = 'SHOW_ALL', action) {
  return action.filter;
}

function todo_app_reducer(state = init_state, action) {
  return {
    // Reduces visibility filter
    visibility_filter: (
      action.type == 'SET_VISIBILITY_FILTER' ?
      visibility_filter(action) : state.visibility_filter
    ),
    // Reduces specifically todos array
    todos: function() {
      if (action.type == 'ADD_TODO') return todo_add_reducer(state.todos, action);
      if (action.type == 'TOGGLE_TODO') return todo_toggle_reducer(state.todos, action);
      return state.todos;
    }()
  };
}

export { todo_app_reducer };
