import { api } from './api';

export async function getTodos() {
  return api.get('/todos/list').then((x) => x.data);
}

export async function createTodo(todo: string) {
  return api.post('/todos', { text: todo }).then((x) => x.data);
}
