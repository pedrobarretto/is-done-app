import axios from 'axios';

const getToken = () => {
  return localStorage.getItem('AuthToken');
};

export const api = axios.create({
  baseURL: 'https://isdone.pedrobarretto.dev.br/api',
  headers: {
    Authorization: `${getToken()}`,
  },
});
