<template>
  <div class="login-container">
    <div class="left-container">
  <img src="https://vben.vvbin.cn/assets/login-box-bg-BwcHql23.svg" alt="Login Box Image" class="imgsvg" >
  <h1>网页信息管理</h1>
  </div>

      <div class="right-container" >

      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

        <div class="title-container">
          <h2 class="title">Login Form</h2>
        </div>
    
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input ref="username" v-model="loginForm.username" placeholder="Username" name="username" type="text" tabindex="1" autocomplete="on" required />
        </el-form-item>

        <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
          <el-form-item prop="password">
            <span class="svg-container">
        
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd" v-if="passwordType !== 'password'">
              <svg-icon icon-class="eye-open" />
            </span>
          </el-form-item>
        </el-tooltip>

        <el-button :loading="loading" type="primary" class="btn"  @click.native.prevent="handleLogin">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import SocialSign from './components/SocialSignin'

export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',

      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', message: 'Please enter the password' }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      userPasswords: {
        admin: '111', // 管理员用户的密码
        editor: '22' 
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          const username = this.loginForm.username
          const password = this.userPasswords[username]
          if (this.loginForm.password === password) {
            this.loading = true
            this.$store.dispatch('user/login', this.loginForm)
              .then(() => {
                this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            this.$message.error('Incorrect password')
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#ffffff;
$light_gray:#131111;
$cursor: #241b1b;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 57px;
      caret-color: $cursor;
      font: 20px sans-serif;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(235, 217, 217, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #1a2f8b;
$dark_gray:#181010;
$light_gray:#181010;
// background-image: linear-gradient(to right, #0e040b, #a6c1ee);
.login-container {
  display: flex;
  position: relative;height: 100vh;}

.left-container {
  flex: 1;
  background-color: $bg; /* 左边背景色蓝色 */
  position: relative;
  // border-top-right-radius: -150% ; /* 上右角半径 */
  border-radius: 0 0 30% 0;
  z-index: 10;
  // margin-right: 100px;
}
.login-container::before {
    content: "";
    width: 100%;
    height: 40%;
    background-color:$bg;
    position: absolute;
    top: 0;
    right: 350px;
    // border-radius: 0 300px 500px 0; /* 调整形状 */
 }

.right-container {
  background-color:#ffffff;
  flex: 1;
  position: relative;
  // padding: 10% 0 0 15%;
  border-radius: 30% 20% 30% 20%;
  z-index: 10;
  margin-right: 180px;
}

.imgsvg{width: 450px; height: auto; margin:30% 0  0 20%; 
}

  .login-form {
    position: relative;
    width: 520px;
    margin: 20% 0  0 30%;
    overflow: hidden;
    // background-color:#ffffff;
  }

 h1{color: #333333; position: absolute;font-family: "楷体";
      font-size:60px;
      white-space: nowrap;
    margin-left: 25%; margin-top: 3%;}


  span {
      &:first-of-type {
        margin-right: 16px;
      }
    }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

  .title {
      font-size: 36px;
      color: $light_gray;
      margin: 88px auto 88px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 26px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .btn {
      padding: 10px 120px;
      margin-top: 30px;
      color: #0f031a;
      position: relative;
      overflow: hidden;
      text-transform: uppercase;
      letter-spacing: 2px;
      left: 20%;
      background-color: #fff;
  }

  .btn:hover {
      border-radius: 5px;
      color: #fff;
      background: #03e9f4;
      box-shadow: 0 0 5px 0 #03e9f4,
          0 0 25px 0 #03e9f4,
          0 0 50px 0 #03e9f4,
          0 0 100px 0 #03e9f4;
      transition: all 1s linear;
  }

  .btn>span {
      position: absolute;
  }

  .btn>span:nth-child(1) {
      width: 100%;
      height: 2px;
      background: -webkit-linear-gradient(left, transparent, #03e9f4);
      left: -100%;
      top: 0px;
      animation: line1 1s linear infinite;
  }

  @keyframes line1 {

      50%,
      100% {
          left: 100%;
      }
  }

  .btn>span:nth-child(2) {
      width: 2px;
      height: 100%;
      background: -webkit-linear-gradient(top, transparent, #03e9f4);
      right: 0px;
      top: -100%;
      animation: line2 1s 0.25s linear infinite;
  }

  @keyframes line2 {

      50%,
      100% {
          top: 100%;
      }
  }

  .btn>span:nth-child(3) {
      width: 100%;
      height: 2px;
      background: -webkit-linear-gradient(left, #03e9f4, transparent);
      left: 100%;
      bottom: 0px;
      animation: line3 1s 0.75s linear infinite;
  }

  @keyframes line3 {

      50%,
      100% {
          left: -100%;
      }
  }

  .btn>span:nth-child(4) {
      width: 2px;
      height: 100%;
      background: -webkit-linear-gradient(top, transparent, #03e9f4);
      left: 0px;
      top: 100%;
      animation: line4 1s 1s linear infinite;
  }

  @keyframes line4 {

      50%,
      100% {
          top: -100%;
      }
  }

</style>
