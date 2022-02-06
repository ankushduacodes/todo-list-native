import { useToast } from 'vue-toastification';
// eslint-disable-next-line import/extensions,import/no-unresolved
import axiosInstance from '@/api';

export default {
  // eslint-disable-next-line no-unused-vars
  async login({ commit }, payload) {
    let response;
    const toast = useToast();
    try {
      response = await axiosInstance.post('user/login', {
        email: payload.email,
        password: payload.password,
      });
      const { data } = response;
      const {
        email, firstName, lastName, accessToken,
      } = data;
      const userInfo = {
        email, firstName, lastName, accessToken,
      };
      await localStorage.setItem('auth-token', accessToken);
      await localStorage.setItem('user-info', JSON.stringify(userInfo));
      toast.success('Login successful');
      commit('setUser', userInfo);
    } catch (err) {
      toast.error('Login failed. Please try again!...');
      console.log(err);
    }
  },
  tryLogin({ commit }) {
    const token = localStorage.getItem('auth-token');
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    if (token && userInfo) {
      commit('setUser', userInfo);
    }
  },

  async logout({ commit }) {
    commit('unsetUser');
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-info');
  },

  async register(context, payload) {
    const toast = useToast();
    try {
      await axiosInstance.post('user/register', payload);
      toast.success('Registration successful, Please login!...');
    } catch (err) {
      console.log(err);
      toast.error('Registration unsuccessful due to a server error!... Please try again');
      throw new Error('');
    }
  },
};
