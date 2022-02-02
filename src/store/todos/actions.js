import { useToast } from 'vue-toastification';
// eslint-disable-next-line import/extensions,import/no-unresolved
import axiosInstance from '@/api';

export default {
  async addTodo({ commit }, payload) {
    try {
      await axiosInstance.post('todo/addTodo', payload.newTodo);
      commit('addNewTodo', payload);
    } catch (err) {
      console.log(err.message);
      const toast = useToast();
      toast.error('Something went wrong while adding the todo');
    }
  },
  async markDone({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markDone', { todoId: payload.todo.todoId, isDone: true });
      commit('markTodoDone', payload);
    } catch (err) {
      console.log(err.message);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async markUndone({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markDone', { todoId: payload.todo.todoId, isDone: false });
      commit('markTodoUndone', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async markImportant({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markImportant', { todoId: payload.todo.todoId, isImportant: true });
      commit('markImp', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async unmarkImportant({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markImportant', { todoId: payload.todo.todoId, isImportant: false });
      commit('unmarkImp', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async markBookmark({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markBookmark', { todoId: payload.todo.todoId, isBookmark: true });
      commit('markBook', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async unmarkBookmark({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markBookmark', { todoId: payload.todo.todoId, isBookmark: false });
      commit('unmarkBook', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async markDeleted({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markDeleted', { todoId: payload.todo.todoId, isDeleted: true });
      commit('deleted', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async unmarkDeleted({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markDeleted', { todoId: payload.todo.todoId, isDeleted: false });
      commit('restored', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async markFavourite({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markFavourite', { todoId: payload.todo.todoId, isFavourite: true });
      commit('markFav', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
  },
  async unmarkFavourite({ commit }, payload) {
    try {
      await axiosInstance.post('todo/markFavourite', { todoId: payload.todo.todoId, isFavourite: false });
      commit('unmarkFav', payload);
    } catch (err) {
      console.error(err);
      const toast = useToast();
      toast.error('Something went wrong... Please try again.');
    }
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
  clearTodoList({ commit }) {
    commit('unsetTodos');
  },
};
