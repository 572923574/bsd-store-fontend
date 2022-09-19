<template>
  <el-form
    ref="loginForm"
    :model="loginForm"
    label-width="0"
    :rules="rules"
    class="login-form"
  >
    <div class="welcome-title">{{ welcomeTitle }}</div>
    <div class="welcome-detail">{{ welcomeDetail }}</div>
    <el-form-item prop="phone" class="login-form-item">
      <el-input
        v-model="loginForm.phone"
        size="large"
        placeholder="请输入手机号"
      />
    </el-form-item>
    <el-form-item prop="password" class="login-form-item">
      <el-input
        v-model="loginForm.password"
        size="large"
        placeholder="请输入密码"
        type="password"
      />
    </el-form-item>
    <el-form-item class="login-form-item">
      <el-checkbox v-model="loginForm.agreement" size="large" label="" />
      <span class="agreement-text"
        >我已阅读同意
        <span @click.native.stop="goAgreement" class="agreement-span"
          >《邦速达用户服务协议》</span
        >，接受或免除限制责任、诉讼管辖约定等标识条款</span
      >
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="sumbitLogin()"
        class="btn-full"
        size="large"
        >立即登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { storeLogin } from "@/api/login/index.js";
export default {
  data() {
    return {
      loginForm: { phone: null, password: null, agreement: false },
      welcomeTitle: "欢迎回来",
      welcomeDetail: "仓库管理系统，完善的仓储及物流系统，您贴心的合作伙伴",
      storeLogin,
      rules: {
        phone: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    sumbitLogin() {
      if (!this.loginForm.agreement) {
        return this.$message({
          message: "请同意用户协议后才可以使用本系统",
          grouping: true,
          type: "error",
        });
      }
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          storeLogin(this.loginForm).then((res) => {
            console.log(res, "请求返回的数据");
            this.$store.commit("setUser", res.data);
            this.$router.push({ name: "home" });
          });
        }
      });
    },
    goAgreement(e) {
      window.open("https://store.shopeex.cn/agreement.html", "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
.login-form {
  padding: 60px 80px 0px 80px;
  width: 420px;
  .welcome-title {
    color: #012257;
    margin-bottom: 4px;
    font-size: 22px;
    text-align: left;
    font-weight: 500;
    line-height: 30px;
  }
  .welcome-detail {
    font-size: 12px;
    line-height: 17px;
    color: #97a2b5;
    margin: 12px 0px 49px 0px;
  }
  .login-form-item {
    height: 60px;
    .agreement-text {
      width: 376px;
      margin-left: -10px;
      line-height: 20px;
      .agreement-span {
        color: $textBlue;
        padding: 0 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
