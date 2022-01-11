// eslint-disable-next-line import/extensions,import/no-unresolved
import getters from '@/store/auth/getters';

export default {
  namespaced: true,
  state() {
    return {
      isLoggedIn: true,
      user: null,
    };
  },
  getters,
};
