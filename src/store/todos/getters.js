const getters = {
  getAllTodos(state) {
    return state.todoList.filter((todo) => !todo.isDeleted);
  },
  getDoneAllTodos(state) {
    return getters.getAllTodos(state).filter((todo) => todo.isDone);
  },
  getPendingAllTodos(state) {
    return getters.getAllTodos(state).filter((todo) => !todo.isDone);
  },
  getFavTodos(state) {
    return state.todoList.filter((todo) => todo.isFavourite && !todo.isDeleted);
  },
  getDoneFavTodos(state) {
    return getters.getFavTodos(state).filter((todo) => todo.isDone);
  },
  getPendingFavTodos(state) {
    return getters.getFavTodos(state).filter((todo) => !todo.isDone);
  },
  getBookmarkTodos(state) {
    return state.todoList.filter((todo) => todo.isBookmark && !todo.isDeleted);
  },
  getDoneBookmarkTodos(state) {
    return getters.getBookmarkTodos(state).filter((todo) => todo.isDone);
  },
  getPendingBookmarkTodos(state) {
    return getters.getBookmarkTodos(state).filter((todo) => !todo.isDone);
  },
  getImportantTodo(state) {
    return state.todoList.filter((todo) => todo.isImportant && !todo.isDeleted);
  },
  getDoneImportantTodo(state) {
    return getters.getImportantTodo(state).filter((todo) => todo.isDone);
  },
  getPendingImportantTodo(state) {
    return getters.getImportantTodo(state).filter((todo) => !todo.isDone);
  },
  getDeletedTodo(state) {
    return state.todoList.filter((todo) => todo.isDeleted);
  },
};

export default getters;
