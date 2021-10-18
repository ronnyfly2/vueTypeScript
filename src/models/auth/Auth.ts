import Api from "@/api/Api";

export default class Auth {
  static register(payload: any) {
    throw new Error("Method not implemented.");
  }
  static api = Api.getInstance();
  static BASE_URL = Auth.api.http.defaults.baseURL
    ? Auth.api.http.defaults.baseURL
    : "/";
  static _url(url:any) {
    return [Auth.BASE_URL].concat(url).join("/");
  }

  static login(data:any) {
    return Auth.api.post(Auth._url("login"), data);
  }

  // static register(data) {
  //   return Auth.api.post(Auth._url("register"), data);
  // }

  static logout() {
    return Auth.api.post(Auth._url("logout"));
  }
}
