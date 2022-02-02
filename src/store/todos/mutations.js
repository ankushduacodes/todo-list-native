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
    target.isImportant = true;
  },
  unmarkImp({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isImportant = false;
  },
  markFav({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isFavourite = true;
  },
  unmarkFav({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isFavourite = false;
  },
  markBook({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isBookmark = true;
  },
  unmarkBook({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isBookmark = false;
  },
  deleted({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isDeleted = true;
  },
  restored({ todoList }, payload) {
    const target = todoList.find((todo) => todo.todoId === payload.todo.todoId);
    target.isDeleted = false;
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
