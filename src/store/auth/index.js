// eslint-disable-next-line import/extensions,import/no-unresolved
import getters from '@/store/auth/getters';
// eslint-disable-next-line import/extensions,import/no-unresolved
import actions from '@/store/auth/actions';
// eslint-disable-next-line import/extensions,import/no-unresolved
import mutations from '@/store/auth/mutations';

export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  getters,
  actions,
  mutations,
};
