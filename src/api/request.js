import axios from "axios";
import store from "@/store/index.js";
console.log('这是什么',store)
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

//请求拦截器
request.interceptors.request.use(
  function (config) {
    const { user } = store.state;
    if (!user) {
    } else {
      config.headers.token = user.token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//响应拦截器
request.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
