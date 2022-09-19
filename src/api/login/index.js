/**
 * @ Description:登录页面接口调用
 * @ Created by: Lijianguo
 * @ Create Time: 2022-09-09 14:31:12
 * @ Location: shenzhen
 */

import request from "@/api/request.js";

console.log(request, "request");
//仓库注册
export const storeRegister = (data) => {
  return request.post("/store/register", data);
};
// 仓库管理登录;
export const storeLogin = (data) => {
  return request.post("/store/user/login", data);
};

// 仓库管理退出;
export const storeLogout = (data) => {
  return request.post("/store/user/logout", data);
};
