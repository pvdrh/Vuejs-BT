<template>
  <div class="container">
    <div class="Wrap">
      <div class="logo">
        <img
          src="http://dev-fms.zentsoft.com/static/media/logo-login.2d516aef.png"
          alt=""
        />
      </div>
      <div class="inputWrap" style="margin-bottom: 24px">
        <el-input
          placeholder="Email"
          v-model="username"
          type="text"
          @input="onChangeUser($event)"
        ></el-input>
        <div v-if="errorUsername" class="error">
          <i class="el-icon-warning"></i> Email không được bỏ trống
        </div>
      </div>
      <div class="inputWrap">
        <el-input
          placeholder="Mật khẩu"
          v-model="password"
          type="password"
          @input="onChangePass($event)"
        ></el-input>
        <div v-if="errorPass" class="error">
          <i class="el-icon-warning"></i> Mật khẩu không được bỏ trống
        </div>
      </div>
      <div class="forgotPass">
        <el-button @click="forgotPass()">Quên mật khẩu?</el-button>
      </div>
      <button class="btn-login" @click="login()">ĐĂNG NHẬP</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      errorUsername: false,
      errorPass: false,
    };
  },
  methods: {
    forgotPass() {
      this.$router.push("forgot-password");
    },
    login() {
      if (this.username.length == "") {
        this.errorUsername = true;
      }
      if (this.password.length == "") {
        this.errorPass = true;
      }
    },
    onChangeUser(user) {
      this.username = user;
      this.errorUsername = false;
    },
    onChangePass(pass) {
      this.password = pass;
      this.errorPass = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9, #80d0c7);
  .Wrap {
    width: 444px;
    padding: 24px;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    .logo {
      width: 100%;
      margin-bottom: 24px;
      img {
        width: 200px;
      }
    }
    .inputWrap {
      width: 100%;
      height: auto;
      overflow: hidden;
      .el-input {
        height: 50px !important;
      }
      .error {
        font-size: 12px;
        color: #f54b5e;
        float: left;
      }
    }
    .forgotPass {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-button {
        border: 0;
        color: #0080dd;
        padding: 7px;
      }
    }
    .btn-login {
      width: 100%;
      height: 50px;
      background-color: #0080dd;
      color: #ffffff;
      border: 0;
      border-radius: 4px;
      margin-top: 24px;
    }
  }
}
</style>