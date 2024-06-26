import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../consts/localstorage';

export const $api = axios.create({
  baseURL: __API__,
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }

  return config;
});
