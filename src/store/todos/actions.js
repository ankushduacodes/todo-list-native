export default {
  addTodo({ commit }, payload) {
    console.log('aCTION');
    commit('addNewTodo', payload);
  },
};
