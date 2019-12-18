import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

instance.interceptors.response.use(response => response.data,
  error => {
    switch (error.response.status) {
      case 401:
        break;
      case 403:
        break;
      default:
    }
    return Promise.reject(error.response.data);
  });

export const post = (url, data, config = {
  headers: {
    'Content-Type': 'application/json',
  },
}) => {
  return instance.post(url, data, config);
};

export const get = (url, params, config = {
  headers: {
    'Content-Type': 'application/json',
  },
}) => {
  return instance.get(url, { params }, config);
};
