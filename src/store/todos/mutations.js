export default {
  addNewTodo(state, payload) {
    const { newTodo } = payload;
    state.todoList.push(newTodo);
  },
  markTodoDone(state, payload) {
    const target = state.todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isDone = true;
  },
  markTodoUndone(state, payload) {
    const target = state.todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isDone = false;
  },
  markImp({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.important = true;
  },
  unmarkImp({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.important = false;
  },
  markFav({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.favourite = true;
  },
  unmarkFav({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.favourite = false;
  },
  markBook({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.bookmark = true;
  },
  unmarkBook({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.bookmark = false;
  },
  deleted({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.deleted = true;
  },
  restored({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.deleted = false;
  },
  setAllTodos({ todoList }, payload) {
    payload.todos.forEach((todo) => {
      todoList.push(todo);
    });
  },
  unsetTodos(state) {
    // eslint-disable-next-line no-param-reassign
    state.todoList = [];
  },
};
