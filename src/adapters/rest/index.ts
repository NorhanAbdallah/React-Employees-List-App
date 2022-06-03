import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://62973a6114e756fe3b2b5ea8.mockapi.io/api/v1',
  withCredentials: false,
});

instance.interceptors.request.use(config => {
  return config;
});

export default instance;
