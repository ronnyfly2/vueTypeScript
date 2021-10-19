import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "bootstrap-icons/font/bootstrap-icons.scss";
import "@fortawesome/fontawesome-free/scss/regular.scss";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/brands.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";

import "./styles/base.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const shopApp = createApp(App);

shopApp.use(store);
shopApp.use(router);

shopApp.mount( '#app' )
