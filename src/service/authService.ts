import { UserLogin } from '../interfaces/User/Auth';
import { api } from './api';

export async function login(dto: UserLogin) {
  return api.post('/user/login', dto).then((x) => x.data);
}
