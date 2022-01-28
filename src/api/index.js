import axios from 'axios';
import NProgress from 'nprogress';

const baseURL = 'https://todo-list-app-bknd.herokuapp.com/api/v1/';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('auth-token')}`,
};
// eslint-disable-next-line import/prefer-default-export
const axiosInstance = axios.create({
  baseURL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    NProgress.start();
    return config;
  },
  async (error) => {
    await Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use((response) => {
  NProgress.done();
  return response;
}, async (error) => {
  await Promise.reject(error);
});

export default axiosInstance;
