import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VCalendar from "v-calendar";

Vue.config.productionTip = false;
Vue.use(VCalendar, {
  componentPrefix: "vc"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
