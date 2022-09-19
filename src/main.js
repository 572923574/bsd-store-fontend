import { createApp } from "vue";
import "@/styles/index.scss";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index.js";
import store from "@/store/index.js";
import App from "./App.vue";

const app = createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(store)
  .mount("#app");

//引入element 3.x 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
