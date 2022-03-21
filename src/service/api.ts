import axios, { AxiosRequestConfig } from 'axios';

export class Service {
  api = axios.create({
    baseURL: 'http://localhost:3333',
    withCredentials: true,
    timeout: 12000,
    headers: { 'Content-Type': 'application/json' },
  });

  interceptor = this.api.interceptors.request.use(
    (req: AxiosRequestConfig): AxiosRequestConfig => {
      if (req.headers === undefined) {
        req.headers = {};
      }

      if (req.url?.includes('/todos')) {
        req.headers.Authorization = `${localStorage.getItem('AuthToken')}`;
      } else {
        delete req.headers.Authorization;
      }

      return req;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // get
  public get = async (
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<any> => {
    return this.api.get(url, config);
  };

  // post
  public post = async (
    url: string,
    params?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> => {
    return this.api.post(url, params, config);
  };

  // put
  public put = async (
    url: string,
    params?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> => {
    return this.api.put(url, params, config);
  };

  // delete
  public delete = async (
    url: string,
    params?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> => {
    return this.api.delete(url, config);
  };

  // patch
  public patch = async (
    url: string,
    params?: any,
    config?: AxiosRequestConfig,
  ): Promise<any> => {
    return this.api.patch(url, params, config);
  };
}
