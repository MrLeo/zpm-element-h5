import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// NOTE 全局引用插件
import zpm from "../packages/index";
Vue.use(zpm);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
