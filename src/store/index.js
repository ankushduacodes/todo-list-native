import { createStore } from 'vuex';
// eslint-disable-next-line ,import/no-unresolved,import/extensions
import todos from '@/store/todos';
// eslint-disable-next-line import/extensions,import/no-unresolved
import auth from '@/store/auth';

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos,
    auth,
  },
});
