// eslint-disable-next-line import/extensions,import/no-unresolved
import axiosInstance from '@/api';

export default {
  setLogin({ commit }) {
    commit('setLoginStatus');
  },
  // eslint-disable-next-line no-unused-vars
  async login({ commit }, payload) {
    let response;
    try {
      response = await axiosInstance.post('user/login', {
        email: payload.email,
        password: payload.password,
      });
    } catch (err) {
      console.log(err);
    }
    console.log(response);
    commit('setLoginStatus');
  },
};
