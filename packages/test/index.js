import Test from "./src/Test.vue";
// Vue.user(Test) 安装插件
Test.install = function(Vue) {
  Vue.component(Test.name, Test);
};
export default Test;
