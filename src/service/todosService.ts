import { Service } from './api';

// export async function getTodos() {
//   return api.get('/todos/list').then((x) => x.data);
// }

// export async function createTodo(todo: string) {
//   return api.post('/todos', { text: todo }).then((x) => x.data);
// }

export class TodosService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private api: Service) {}

  public getTodos = async () => this.api.get('/todos/list').then((x) => x.data);

  public createTodo = async (todo: string) =>
    this.api.post('/todos', { text: todo }).then((x) => x.data);
}

const service = new Service();
const todosService = new TodosService(service);
export { todosService };
