import { api } from './api';

export async function getTodos(id: string) {
  return api.get(`/todos/${id}`).then((x) => x.data);
}
