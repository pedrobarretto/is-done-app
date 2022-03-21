import { UserLogin } from '../interfaces/User/Auth';
import { Service } from './api';

export class AuthService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private api: Service) {}

  public login = async (dto: UserLogin) =>
    this.api.post('/user/login', dto).then((x) => x.data);
}

const service = new Service();
const authService = new AuthService(service);
export { authService };
