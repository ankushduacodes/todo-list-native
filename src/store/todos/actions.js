export default {
  addTodo({ commit }, payload) {
    commit('addNewTodo', payload);
  },
  markDone({ commit }, payload) {
    commit('markTodoDone', payload);
  },
  markUndone({ commit }, payload) {
    commit('markTodoUndone', payload);
  },
  markImportant({ commit }, payload) {
    commit('markImp', payload);
  },
  unmarkImportant({ commit }, payload) {
    commit('unmarkImp', payload);
  },
  markBookmark({ commit }, payload) {
    commit('markBook', payload);
  },
  unmarkBookmark({ commit }, payload) {
    commit('unmarkBook', payload);
  },
  markDeleted({ commit }, payload) {
    commit('deleted', payload);
  },
  unmarkDeleted({ commit }, payload) {
    commit('restored', payload);
  },
  markFavourite({ commit }, payload) {
    commit('markFav', payload);
  },
  unmarkFavourite({ commit }, payload) {
    commit('unmarkFav', payload);
  },
};
