// axiosConfig.js
import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

// Tambahkan interceptor untuk menyertakan token di header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('userToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Tambahkan token ke header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
