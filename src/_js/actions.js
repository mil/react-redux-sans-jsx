var uuid = require('uuid');

function add_todo(text) {
  return { type: 'ADD_TODO', id: uuid.v1(), text };
}

function toggle_todo(id) {
  return { type: 'TOGGLE_TODO', id };
}

export { add_todo, toggle_todo };
