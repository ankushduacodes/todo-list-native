export default {
  addNewTodo(state, payload) {
    const { newTodo } = payload;
    console.log('MUTATAION');
    state.todoList.push(newTodo);
  },
};
