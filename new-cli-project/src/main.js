import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Status from "./Status";

// 전역으로 선언
Vue.component("AppStatus", Status);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
