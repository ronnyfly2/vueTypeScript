// TODO: Use some sort of mediator in order to invert dependencies

import store from "@/store";
import router from "@/router";
import Session from "@/utils/session";

export default {
  request: [
    {
      success: (config: { headers: { Authorization: string; }; }) => {
        const authToken = Session.getToken();
        config.headers.Authorization = `Bearer ${authToken}`;

        return config;
      },
      error: (error: any) => Promise.reject(error),
    },
  ],

  response: [
    {
      success: (response: any) => response,
      error: (error: { config: { url: string; }; response: { status: number; }; }) => {

        const isLoginUrl = error.config.url === "/login";
        const isUnauthorized = error.response.status === 401;

        if (isUnauthorized && !isLoginUrl) {
          store.dispatch("logout").then(() => router.push("/login"));
        }
        return Promise.reject(error);
      },
    },
  ],
};
