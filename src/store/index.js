import { createStore } from "vuex";

//创建Vuex容器
export default createStore({
  state: {
    token: "",
    user: JSON.parse(window.localStorage.getItem("user") || "null"),
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      console.log(user,'保存user')
      window.localStorage.setItem("user", JSON.stringify(state.user));
    },
  },
  actions: {},
  modules: {},
});
