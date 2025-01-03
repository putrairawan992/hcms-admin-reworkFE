import Cookies from "js-cookie";
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const httpClient = axios.create({
  baseURL: `${baseURL}/api`,
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

httpClient.interceptors.request.use(
  async config => {
    if (Cookies.get("userToken")) {
      config.headers.Authorization = `Bearer ${Cookies.get("userToken")}`;
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized error, e.g., redirect to login page
    }
    return Promise.reject(error);
  },
);

export { httpClient };
