import axios from 'axios';

const getToken = () => {
  return localStorage.getItem('AuthToken');
};

// 'https://isdone.pedrobarretto.dev.br/api'
export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `${localStorage.getItem('AuthToken')}`,
  },
});
