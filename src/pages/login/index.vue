<template>
  <div class="login-page">
    <div class="login-title">{{ isLogin ? loginTitle : registerTitel }}</div>
    <div class="login-container">
      <a class="login-img"
        ><img src="@/assets/login/login.png" alt="" class="login-pic"
      /></a>
      <div class="form-div">
        <LoginForm v-if="isLogin"></LoginForm>
        <RegisterForm v-else></RegisterForm>
        <div class="switch">
          <template v-if="isLogin">
            <span @click="isLogin = false">前往注册</span>
            <span>忘记密码</span>
          </template>
          <span v-else @click="isLogin = true">返回登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from "@/pages/login/components/loginForm.vue";
import RegisterForm from "@/pages/login/components/registerForm.vue";
export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      loginTitle: "邦速达仓库管理系统",
      registerTitel: "邦速达仓库管理系统注册",
      isLogin: true,
    };
  },
  created() {
    console.log(this.$route.query)
    this.isLogin = !this.$route.query.isRegister;
  },
};
</script>
<style lang="scss" scoped>
.login-page {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  .login-title {
    text-align: center;
    width: 100%;
    font-size: 28px;
    font-weight: 900;
    padding: 20px;
  }
  .login-container {
    display: flex;
    .login-img {
      width: 340px;
      height: 525px;
      .login-pic {
        width: 100%;
        height: 100%;
      }
    }
    .form-div {
      .switch {
        display: flex;
        justify-content: space-between;
        color: $textBlue;
        cursor: pointer;
        padding: 0 80px;
      }
    }
  }
}
</style>
