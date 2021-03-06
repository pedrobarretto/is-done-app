import { Service } from './api';

export class TodosService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private api: Service) {}

  public getTodos = async () => this.api.get('/todos/list').then((x) => x.data);

  public createTodo = async (todo: string) =>
    this.api.post('/todos/newTodo', { text: todo }).then((x) => x.data);

  public markAsDone = async (id: string) =>
    this.api.put(`/todos/${id}`).then((x) => x.data);
}

const service = new Service();
const todosService = new TodosService(service);
export { todosService };
