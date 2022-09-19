import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"), //绝对路径
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  server: {
    host: "0.0.0.0",
    cors: true,
    open: true,
    hmr: true,
    port: 5173,
    proxy: {
      // 选项写法
      "/api/v1": {
        target: "http://localhost:7001", //代理目标地址
        // target: "http://www.bangsuda.com:7001", //代理目标地址
        //兼容基于名字的虚拟主机
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api\/v1/, ""),
      },
      // 正则表达式写法
      "^/fallback/.*": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ""),
      },
      // 使用 proxy 实例
      "/apiss": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
      },
    },
  },
});
