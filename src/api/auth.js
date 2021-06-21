import axiosClient from './axiosClient';

const login = credentials => axiosClient.post('/users/login', { user: credentials });

const register = credentials => axiosClient.post('/users', { user: credentials });

export default {
  login,
  register,
};
