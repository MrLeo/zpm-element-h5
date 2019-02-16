// #region 导入组件
import ZpmTest from "./test";
import { AuthCode, Codes, Send } from "./auth-code";
// #endregion

// #region 存储组件列表
const components = {
  // TODO 组件列表
  ZpmTest,
  AuthCode,
  Codes,
  Send
};
// #endregion

// #region // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = Vue => {
  if (install.installed) return; // 是否已经安装
  Object.keys(components).forEach(key => Vue.component(key, components[key]));
};
// #endregion

// #region 是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) install(window.Vue);
// #endregion

const API = {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 导出组件列表
  ...components
};
export default API;
