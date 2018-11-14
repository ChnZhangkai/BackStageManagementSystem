<template>
    <section class="loginClass">
        <section>
        <el-form class="mainForm" :model="loginForm" :rules="ruleObject" ref="loginForm">
            <!-- <h3 class="title">系统登录</h3> -->
            <el-form-item prop="username">
                <el-input prefix-icon="el-icon-mine-my" v-model="loginForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input prefix-icon="el-icon-mine-lock" v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
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
    </section>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      remember: false,
      ruleObject: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let params = {
            username: this.loginForm.username,
            password: this.loginForm.password
          }
          this.http.get(this.api.login, params).then((resp) => {
            console.log(resp)
            if (resp.resultCode && resp.resultCode === '000000' && resp.data != null) {
              this.$router.push({ path: '/home' })
            } else {
              this.$message({
                message: '您输入的账号或密码有误',
                center: true
              })
            }
            sessionStorage.setItem('key1', 'value1')
            var svalue = sessionStorage.getItem('key1')
            console.log(svalue)
            if (this.remember === true) {
              this.rememberLogin(this.loginForm.password)
            }
          }, (error) => {
            console.log(error)
          })
        } else {
          console.log('valid error')
          return false
        }
      })
    },
    rememberLogin (userName) {
      localStorage.setItem('loginName', userName)
    },
    getLoginStatus () {
      if (localStorage.getItem('loginName')) {
        this.loginForm.username = localStorage.getItem('loginName')
        this.remember = true
      }
    }
  },
  mounted () { // 刷新页面时执行
    console.log('刷新啦')
    this.getLoginStatus()
  },
  created () {

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
    margin-left: 40%;
    padding-top: 18%;
    width: 250px;
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
