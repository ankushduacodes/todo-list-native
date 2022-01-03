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
};
