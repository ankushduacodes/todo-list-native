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
    return state.todoList.filter((todo) => todo.favourite);
  },
  getDoneFavTodos(state) {
    return getters.getFavTodos(state).filter((todo) => todo.done);
  },
  getPendingFavTodos(state) {
    return getters.getFavTodos(state).filter((todo) => !todo.done);
  },
  getBookmarkTodos(state) {
    return state.todoList.filter((todo) => todo.bookmark);
  },
  getDoneBookmarkTodos(state) {
    return getters.getBookmarkTodos(state).filter((todo) => todo.done);
  },
  getPendingBookmarkTodos(state) {
    return getters.getBookmarkTodos(state).filter((todo) => !todo.done);
  },
  getImportantTodo(state) {
    return state.todoList.filter((todo) => todo.important);
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
