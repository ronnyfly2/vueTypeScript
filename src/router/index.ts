import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store/index";

import AuthLogin from '@/views/Layouts/AuthLayout.vue';

import Layout from '@/views/Layouts/Layout.vue';

import Header from "./../components/Layouts/Header.vue";

const loadView = (path: string, view: string) => {
  return () => /* webpackChunkName: "about" */ import(`@/views/${path}/${view}.vue`);
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Auth",
    component: AuthLogin,
    redirect: {
      name: "Login",
    },
    beforeEnter: (to, from, next) => {
      console.log('man', store.getters)
      if (store.getters['auth/isAuthenticated']) {
        return next({ name: "App" });
      }
      next();
    },
    children: [
      {
        path: "/login",
        name: "Login",
        components: {
          containerBlock: loadView("Auth", "Login"),
        },
      },
      {
        path: "/register",
        name: "Register",
        components: {
          containerBlock: loadView("Register", "Register"),
        },
      },
    ],
  },
  {
    path: "/",
    name: "App",
    redirect: {
      name: "Home",
    },
    beforeEnter: (to, from, next) => {
      console.log('man w', store.getters.isAuthenticated)
      if (store.getters['auth/isAuthenticated']) {
        return next();
      }
      next({ name: "Auth" });
    },
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        components: {
          default: Header,
          containerBlock: import(/* webpackChunkName: "home" */ "../views/Home.vue"),
        },
      },
      {
        path: "/about",
        name: "About",
        components: {
          default: Header,
          containerBlock: import(/* webpackChunkName: "about" */ "../views/About.vue"),
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: loadView("ErrorPage", "PageNotFound"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
