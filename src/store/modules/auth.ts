/* eslint-disable */
import Auth from "@/models/auth/Auth";
import Session from "@/utils/session";

export default {
  namespaced:true,
  state: {
    user: Session.getUserData(),
    isAuthenticated: Session.getToken() !== null,
  },
  getters: {
    userData: (state:any) => state.user,
    isAuthenticated: (state:any) => state.isAuthenticated,
  },
  mutations: {
    setUserData: (state:any, user:any) => (state.user = user),
    setAuthenticated: (state:any, isAuthenticated:any) => (state.isAuthenticated = isAuthenticated),
  },
  actions: {
    login: (context:any, payload:any) => {
      return Auth.login(payload)
        .then((loginData:any) => {
          Session.setToken(loginData.accessToken);
          Session.setUserData(loginData.user);

          context.commit("setUserData", loginData.user);
          context.commit("setAuthenticated", true);
          return Promise.resolve(loginData);
        })
        .catch((error:any) => {
          console.log('ssss', error)
          return Promise.reject("Usuario o contraseña incorrectas");
        });
    },
    // register: (payload:any) => {
    //   return Auth.register(payload)
    //     .then(() => {
    //       return "Usuario registrado correctamente";
    //     })
    //     .catch((error:any) => {
    //       return Promise.reject(error);
    //     });
    // },
    logout: (context:any) => {
      Session.clear();
      context.commit("setAuthenticated", false);
    },
  },
};
