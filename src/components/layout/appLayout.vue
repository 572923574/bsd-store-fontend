<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header">
        <header-menu></header-menu>
        <div class="user-name">
          <!-- <el-dropdown>
            <span class="el-dropdown-link">
              {{ user.userName }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ user.userName }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-container class="el-container">
        <el-aside width="200px">
          <side-menu></side-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import HeaderMenu from "@/components/layout/components/headerMenu.vue";
import SideMenu from "@/components/layout/components/sideMenu.vue";

import { storeLogout } from "@/api/login/index.js";
export default {
  components: { SideMenu, HeaderMenu },
  computed: {
    user() {
      console.log(this, "打印了什么东西", this.$store.state.user);
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      storeLogout().then((res) => {
        this.$store.commit("setUser", {});
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  padding: 0px;
  .user-name {
    position: fixed;
    right: 0;
    top: 0;
    height: 60px;
    color: #fff;
    :deep .el-dropdown-link {
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      line-height: 59px;
      padding: 0 20px;
    }
    :deep .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
