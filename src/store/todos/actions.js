import { useToast } from 'vue-toastification';
// eslint-disable-next-line import/extensions,import/no-unresolved
import axiosInstance from '@/api';

export default {
  addTodo({ commit }, payload) {
    let res;
    console.log(payload);
    try {
      res = axiosInstance.post('todo/addTodo', payload.newTodo);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
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
  async fetchAllTodo({ commit }) {
    let response;
    const toast = useToast();
    try {
      response = await axiosInstance.get('todo/allTodos');
      const { data } = response;
      const { todos } = data;
      commit('setAllTodos', { todos });
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong while loading the todos. Please try logging out...');
    }
  },
};
