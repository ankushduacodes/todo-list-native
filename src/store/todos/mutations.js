export default {
  addNewTodo(state, payload) {
    const { newTodo } = payload;
    state.todoList.push(newTodo);
  },
  markTodoDone(state, payload) {
    const target = state.todoList.find((todo) => todo.id === payload.todo.id);
    target.done = true;
  },
  markTodoUndone(state, payload) {
    const target = state.todoList.find((todo) => todo.id === payload.todo.id);
    target.done = false;
  },
  markImp({ todoList }, payload) {
    const target = todoList.find((todo) => todo.id === payload.todo.id);
    target.important = true;
  },
  unmarkImp({ todoList }, payload) {
    const target = todoList.find((todo) => todo.id === payload.todo.id);
    target.important = false;
  },
  markFav({ todoList }, payload) {
    const target = todoList.find((todo) => todo.id === payload.todo.id);
    target.favourite = true;
  },
  unmarkFav({ todoList }, payload) {
    const target = todoList.find((todo) => todo.id === payload.todo.id);
    target.favourite = false;
  },
  markBook({ todoList }, payload) {
    const target = todoList.find((todo) => todo.id === payload.todo.id);
    target.bookmark = true;
  },
  unmarkBook({ todoList }, payload) {
    const target = todoList.find((todo) => todo.id === payload.todo.id);
    target.bookmark = false;
  },
  deleted({ todoList }, payload) {
    const target = todoList.find((todo) => todo.id === payload.todo.id);
    target.deleted = true;
  },
  restored({ todoList }, payload) {
    const target = todoList.find((todo) => todo.id === payload.todo.id);
    target.deleted = false;
  },
};
