import axios from "axios";
import handlers from "./axios_handlers";

export default class Api {
  static instance: any;
  http: any;
  static getInstance() {
    if (typeof this.instance === "undefined") {
      this.instance = new Api();
    }
    return this.instance;
  }

  constructor() {
    this.http = axios.create({ baseURL: "http://localhost:2312" });

    const entries = Object.entries(handlers);

    entries.forEach(([key, entry]) => {
      const interceptor = this.http.interceptors[key];
      entry.forEach((handler:any) => {
        interceptor.use(handler.success, handler.error);
      });
    });
  }
  get(url: any, params: any) {
    return this.http
      .get(url, params)
      .then((response: { data: any; }) => {
        console.log('Error 1111', response);
        return response.data;
      })
      .catch((axiosError: { config: any; message: any; response: { header: any; status: any; data: any; }; }) => {
        console.log(JSON.stringify(axiosError));
        console.log('Error 1', axiosError.config);
        console.log('Error', axiosError.message);
        console.log('error 1', axiosError.response.header);
        console.log('error 2', axiosError.response);
        console.log('error 3', axiosError.response.status);
        return Promise.reject(axiosError.response.data);
      });
  }
  post(url: any, params: any, options: any) {
    return this.http
      .post(url, params, options)
      .then((response: { data: any; }) => {
        return response.data;
      })
      .catch((axiosError: { response: { data: any; }; }) => {
        return Promise.reject(axiosError.response.data);
      });
  }
}
