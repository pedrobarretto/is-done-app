import { api } from './api';

export async function getTodos() {
  return api.get('/todos/list').then((x) => x.data);
}
