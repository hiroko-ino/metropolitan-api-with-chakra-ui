import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

type callback = (status: number, data: any) => void;

class api {
  api: AxiosInstance;

  constructor() {
    let api = axios.create();
    api.interceptors.response.use(this.handleSuccess, this.handleError);
    this.api = api;
  }

  handleSuccess(response: AxiosResponse<any, any>) {
    return response;
  }

  handleError = (error: AxiosError<any, any>) => {
    switch (error.response?.status) {
      case 401:
        console.log('401 error');
        break;
      case 404:
        console.log('404 error');
        break;
      default:
        break;
    }
    return Promise.reject(error)
  }

  get(path: string, callback: callback) {
    return this.api.get(path).then((response) => {
      callback(response.status, response.data)
    });
  }
}

export default new api();