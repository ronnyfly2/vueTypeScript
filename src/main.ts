import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

const shopApp = createApp(App);

shopApp.use(store);
shopApp.use(router);

shopApp.mount( '#app' )
