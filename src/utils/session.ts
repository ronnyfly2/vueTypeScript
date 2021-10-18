/* eslint-disable */

export default class Session {
  static USER_DATA = "RESTAURANT_USER";
  static AUTH_TOKEN = "RESTAURANT_TOKEN";

  static setToken(token: string) {
    localStorage.setItem(this.AUTH_TOKEN, token);
  }

  static setUserData(userData: any) {
    let serializedUserData = JSON.stringify(userData);
    localStorage.setItem(this.USER_DATA, serializedUserData);
  }

  static getToken() {
    return localStorage.getItem(this.AUTH_TOKEN);
  }

  static getUserData() {
    let serializedUserData = localStorage.getItem(this.USER_DATA);
    if (serializedUserData === null) return {};

    return JSON.parse(serializedUserData);
  }

  static clear() {
    localStorage.removeItem(this.AUTH_TOKEN);
    localStorage.removeItem(this.USER_DATA);
  }
}
