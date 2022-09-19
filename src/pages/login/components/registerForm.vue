<template>
  <el-form
    ref="registerForm"
    :model="registerForm"
    label-width="0px"
    :rules="rules"
    :label-position="'left'"
    class="register-form"
  >
    <!-- <div class="register-title">{{ registerTitle }}</div>
    <div class="register-detail">{{ registerDetail }}</div> -->
    <el-form-item prop="storeName" class="register-form-item" label="">
      <el-input
        v-model="registerForm.storeName"
        size="large"
        placeholder="请输入仓库名称"
      />
    </el-form-item>
    <el-form-item prop="userName" class="register-form-item" label="">
      <el-input
        v-model="registerForm.userName"
        size="large"
        placeholder="请输入仓库负责人姓名"
      /> </el-form-item
    ><el-form-item prop="phone" class="register-form-item" label="">
      <el-input
        v-model="registerForm.phone"
        size="large"
        placeholder="请输入手机号码"
      />
    </el-form-item>
    <el-form-item prop="password" class="register-form-item" label="">
      <el-input
        v-model="registerForm.password"
        size="large"
        type="password"
        placeholder="请输入密码"
      />
    </el-form-item>
    <el-form-item class="register-form-item">
      <el-checkbox v-model="registerForm.agreement" size="large" label="" />
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
        @click="sumbitRegister()"
        class="btn-full"
        size="large"
        >立即注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { storeRegister } from "@/api/login/index.js";
export default {
  data() {
    return {
      registerForm: {
        storeName: "邦速达货",
        userName: "李建",
        phone: "18682028219",
        password: 123,
        agreement: true,
      },
      storeRegister,
      registerTitle: "注册",
      registerDetail: "仓库管理系统，完善的仓储及物流系统，您贴心的合作伙伴",
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
        storeName: [
          {
            required: true,
            message: "请输入仓库名称",
            trigger: "change",
          },
        ],
        userName: [
          {
            required: true,
            message: "请输入仓库负责人姓名",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    sumbitRegister() {
      if (!this.registerForm.agreement) {
        return this.$message({
          message: "请同意用户协议后才可以使用本系统",
          grouping: true,
          type: "error",
        });
      }
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          console.log("校验通过,提交登录");
          storeRegister(this.registerForm).then((res) => {
            console.log(res, "请求返回的数据");
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
.register-form {
  padding: 0 80px;
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
  .register-form-item {
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
