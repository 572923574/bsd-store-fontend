import { createRouter, createWebHashHistory } from "vue-router";
import AppLayout from "@/components/layout/AppLayout.vue";
import store from "@/store";
const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "", //默认子路由
        name: "home",
        component: () => import("@/pages/home/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes, // 路由规则
});

router.beforeEach((to, from, next) => {
  const { user } = store.state;
  if (to.matched.some((record) => record.meta.requiresToken)) {
    if (!user || !user.token) {
      next({ path: "/login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
