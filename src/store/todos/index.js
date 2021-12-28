// eslint-disable-next-line import/extensions,import/no-unresolved
import actions from '@/store/todos/actions';
// eslint-disable-next-line import/extensions,import/no-unresolved
import getters from '@/store/todos/getters';
// eslint-disable-next-line import/extensions,import/no-unresolved
import mutations from '@/store/todos/mutations';

export default {
  namespaced: true,
  state() {
    return {
    };
  },
  getters,
  mutations,
  actions,
};
