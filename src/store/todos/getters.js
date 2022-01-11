const getters = {
  getAllTodos(state) {
    return state.todoList.filter((todo) => !todo.deleted);
  },
  getDoneAllTodos(state) {
    return getters.getAllTodos(state).filter((todo) => todo.done);
  },
  getPendingAllTodos(state) {
    return getters.getAllTodos(state).filter((todo) => !todo.done);
  },
  getFavTodos(state) {
    return state.todoList.filter((todo) => todo.favourite && !todo.deleted);
  },
  getDoneFavTodos(state) {
    return getters.getFavTodos(state).filter((todo) => todo.done);
  },
  getPendingFavTodos(state) {
    return getters.getFavTodos(state).filter((todo) => !todo.done);
  },
  getBookmarkTodos(state) {
    return state.todoList.filter((todo) => todo.bookmark && !todo.deleted);
  },
  getDoneBookmarkTodos(state) {
    return getters.getBookmarkTodos(state).filter((todo) => todo.done);
  },
  getPendingBookmarkTodos(state) {
    return getters.getBookmarkTodos(state).filter((todo) => !todo.done);
  },
  getImportantTodo(state) {
    return state.todoList.filter((todo) => todo.important && !todo.deleted);
  },
  getDoneImportantTodo(state) {
    return getters.getImportantTodo(state).filter((todo) => todo.done);
  },
  getPendingImportantTodo(state) {
    return getters.getImportantTodo(state).filter((todo) => !todo.done);
  },
  getDeletedTodo(state) {
    return state.todoList.filter((todo) => todo.deleted);
  },
};

export default getters;
