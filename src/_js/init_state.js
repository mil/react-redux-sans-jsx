import uuid from 'uuid';

var init_state = {
  visibility_filter: 'SHOW_ALL',
  todos: [
    { text: 'A first item', completed: true, id: uuid.v1() },
    { text: 'Another item', completed: false, id: uuid.v1() }
  ]
};

export default init_state;
