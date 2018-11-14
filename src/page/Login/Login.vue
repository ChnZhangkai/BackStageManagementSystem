<template>
    <section class="loginClass">
        <el-form class="mainForm">
            <!-- <h3 class="title">系统登录</h3> -->
            <el-form-item>
                <el-input prefix-icon="el-icon-mine-my" v-model="username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input prefix-icon="el-icon-mine-lock" v-model="password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login" style="width:100%">登录</el-button>
            </el-form-item>
            <el-form-item class="bottomClass">
                <el-checkbox v-model="remember" class="rememberClass">记住账号</el-checkbox>
                <a class="forgetClass">忘记密码</a>
            </el-form-item>
        </el-form>
    </section>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      remember: false
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>
<style scoped>
.loginClass{
    height: 100%;
    background: url("../../assets/image/bg.jpg");
    background-size: cover;
}
.mainForm{
    text-align: center;
    margin-left: 36%;
    padding-top: 18%;
    width: 300px;
    height: 300px;
}
.bottomClass{
    width: 100%;
}
.rememberClass{
    float: left;
}
.forgetClass{
    float: right;
}
</style>
