<template>
    <div class="login">
        <div class="top"><span @click="back"><img src="../assets/images/左箭头灰.png" alt=""></span></div>
        <div class="center">
          <div class="user-img"><img src="../assets/images/logo.png" alt=""></div>
          <div class="user_box">
            <div class="user-name user-box">
              <div>账号</div>
              <input type="text" placeholder="请输入用户名" v-model="username">
            </div>
            <div class="user-pws user-box">
              <div>密码</div>
              <input type="password" placeholder="请输入密码" v-model="password">
            </div>
          </div>
          <div class="pws-yn">
            <div class="left" @click="selection">
              <div :class="{'color':boolean==true}">✔</div>记住密码
            </div>
            <router-link to="Reset">
            <div class="right">忘记密码？</div>
            </router-link>
          </div>
          <div class="login-box" @click="login_user">登录</div>
          <div class="register"><router-link to="/register" style="display: block;">注册账号</router-link></div>
          <div class="careful">登录即表示同意<router-link to="Agreement">《点点配APP注册协议》</router-link></div>
        </div>
    </div>
</template>

<script>
import {login} from '@/api/api'
import { Header, Field } from 'mint-ui'
export default {
  name: 'login',
  components: {
    Header,
    Field
  },
  data () {
    return {
      boolean: false,
      username: '',
      password: ''
    }
  },
  methods: {
    back () {
      this.$router.go(-1) // 返回上一层
    },
    // 是否选中记住密码
    selection () {
      console.log(this.boolean)
      if (this.boolean === false) {
        this.boolean = true
      } else {
        this.boolean = false
      }
    },
    login_user () {
      console.log(this.username)
      console.log(this.password)
      login(this.username, this.password).then(res => {
        console.log(res)
        if (res.code == '0010') {
          this.$router.push({name: 'index', path: '/index'})
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: fixed;
  z-index: 3;
  overflow: scroll;
  .top {
      width: 100%;
      height: 78px;
      line-height: 78px;
      background-color: #e6e7e7;
      color: #666666;
      font-size: 28px;
      padding-left: 30px;
      img {
        height: 26px;
      }
  }
  .center {
      padding: 0 30px;
      .user-img {
      width: 213px;
      height: 213px;
      margin: 37px auto;
      border-radius: 22px;
      img {
        width: 100%;
        height: 100%;
      }
    }
      .user_box{
        margin-top: 74px;
      }
      .user-box {
        width: 100%;
        height: 70px;
        line-height: 70px;
        font-size: 28px;
        border-bottom: 2px solid #5a97ff;
        display: flex;
        div {
          width: 120px;
        }
        input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 28px;
        }
      }
      :first-child {
        margin-bottom: 20px;
      }
      .pws-yn {
        margin-top: 30px;
        margin-bottom: 60px;
        font-size: 28px;
        color: #555;
        display: flex;
        justify-content:space-between;
        .left {
          display: flex;
          div {
            width: 28px;
            height: 28px;
            border: 1px solid #bbbbbb;
            display: inline-block;
            text-align: top;
          }
          .color {
            background-color: #007aff;
            color: #ffffff;
          }
        }
        div {
          height: 28px;
          display: inline-block;
        }
      }
      .login-box {
        width: 100%;
        height: 88px;
        line-height: 88px;
        text-align: center;
        font-size: 38px;
        color: #ffffff;
        background-color: #e60012;
        border-radius: 6px;
        margin-bottom: 60px;
      }
      .register {
        width: 100%;
        height: 88px;
        line-height: 88px;
        text-align: center;
        font-size: 38px;
        color: #c43236;
        background-color: #ffffff;
        border-radius: 6px;
        margin-bottom: 248px;
        border: 2px solid #c53336;
      }
      .careful {
        font-size: 22px;
        color: #999999;
        text-align: center;
        margin-bottom: 120px;
        a {
          text-decoration: underline;
        }
      }
  }
}
</style>
