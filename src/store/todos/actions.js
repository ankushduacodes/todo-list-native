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
};
