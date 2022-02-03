import axios from 'axios';
import NProgress from 'nprogress';

const baseURL = 'https://todo-list-app-bknd.herokuapp.com/api/v1/';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const axiosInstance = axios.create({
  baseURL,
  headers,
  timeout: 15000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${localStorage.getItem('auth-token')}`;
    NProgress.start();
    return config;
  },
  async (error) => {
    NProgress.done();
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
