<template>
    <section class="loginClass">
        <div style="height: 1px"></div>
        <!-- <el-row class="titleClass">厦门国际银行-积分与营销管理系统</el-row> -->
        <el-row class="firstRowClass">
        <el-form class="mainForm" :model="loginForm" :rules="ruleObject" ref="loginForm">
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
        </el-row>
    </section>
</template>
<script>
export default {
  created () {

  },
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
    // 登录
    login () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let params = {
            userId: this.loginForm.username,
            userPwd: this.loginForm.password
          }
          this.http.get(this.api.login, params).then((resp) => {
            console.log(resp)
            // if (resp.resultCode && resp.resultCode === '000000' && resp.data != null) {
            //   this.$router.push({ path: '/home' })
            // } else {
            //   this.$message({
            //     message: '您输入的账号或密码有误',
            //     center: true
            //   })
            // }
            sessionStorage.setItem('key1', 'value1')
            var svalue = sessionStorage.getItem('key1')
            console.log(svalue)
            if (this.remember === true) {
              this.rememberLogin(this.loginForm.password)
            }
            this.$router.push({ path: '/home' })
          }, (error) => {
            console.log(error)
          })
        } else {
          console.log('valid error')
          return false
        }
      })
    },
    // 保存登录用户
    rememberLogin (userName) {
      localStorage.setItem('loginName', userName)
    },
    // 获取登录用户名
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
  }
}
</script>
<style scoped>
.titleClass{
  font-size: 30px;
  float: left;
  color: white;
  margin: 15% 0 0 15%
}
.loginClass{
    height: 100%;
    background: url("../../assets/image/login-background.jpg") no-repeat center fixed;
    background-size: cover;
}
.firstRowClass{
  height: 250px;
  width: 250px;
  margin: 15% 10% 0 60%;
  background: rgba(255, 255, 255, 0.2)
}
.mainForm{
    text-align: center;
    /* margin-left: 40%; */
    /* padding-top: 18%; */
    width: 200px;
    height: 300px;
    padding: 40px 25px;
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
.body{
  background: url("../../assets/image/login-background.jpg") no-repeat center fixed;
  background-size: cover;
}
</style>
