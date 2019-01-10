<template>
    <div class="register">
        <div class="top">
            <span @click="back"><img src="../assets/images/左箭头灰.png" alt=""></span>
        </div>
        <div class="center">
            <div class="user-img"><img src="../assets/images/logo.png" alt=""></div>
            <div class="user_box">
                <div class="phone-number user-box">
                    <div><img src="../assets/images/手机.png" alt=""></div>
                    <input type="text" placeholder="请输入手机号" @blur="test" v-model="phonenumber">
                </div>
                <div class="verificationcode user-box">
                    <div><img src="../assets/images/验证.png" alt=""></div>
                    <input type="password" placeholder="请输入验证码" v-model="verificationcode">
                    <div class="verification" @click="verification">获取验证码</div>
                </div>
                <div class="user-pws user-box" style="margin-top: 20px;">
                    <div><img src="../assets/images/密码.png" alt=""></div>
                    <input type="password" placeholder="请输入8-16位字母数字混合密码" @blur="test1" v-model="password">
                </div>
                <div class="user-invitation user-box" style="margin-top: 20px;">
                    <div><img src="../assets/images/邀请码.png" alt=""></div>
                    <input type="password" placeholder="请输入邀请码" v-model="invitation">
                </div>
            </div>
            <div class="login-box" @click="register_user">确认注册</div>
            <div class="careful">登录即表示同意
                <router-link to="Agreement">《点点配APP注册协议》</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {message, register} from '@/api/api'
import { Toast } from 'mint-ui'
export default {
  name: 'register',
  data () {
    return {
      phonenumber: '',
      verificationcode: '',
      password: '',
      invitation: ''
    }
  },
  mounted () {
  },
  methods: {
    back () {
      this.$router.go(-1) // 返回上一层
    },
    test () {
      if (!(/^1[34578]\d{9}$/.test(this.phonenumber))) {
        Toast('请输入正确的手机号码')
      }
    },
    test1 () {
      if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(this.password))) {
        Toast('请输入8-16位字母数字混合密码')
      }
    },
    // 获取短信验证码
    verification () {
      console.log(this.phonenumber)
      message(this.phonenumber).then(res => {
        console.log(res)
      })
    },
    // 注册账号
    register_user () {
      console.log(this.phonenumber)
      console.log(this.verificationcode)
      console.log(this.password)
      register(this.phonenumber, this.password, this.verificationcode, this.invitation).then(res => {
        console.log(res)
        if (res.code == '0010') {
          Toast('成功注册账号')
          this.$router.push({name: 'login', path: '/login'})
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.register {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  background-color: #fff;
  overflow: scroll;
  z-index: 3;
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
    .user_box {
      margin-top: 122px;
    }
    .user-box {
      width: 100%;
      height: 70px;
      line-height: 70px;
      font-size: 28px;
      border-bottom: 2px solid #5a97ff;
      display: flex;
      .verification {
        display: inline-block;
        width: 157px;
        color: #e60012;
        margin-right: 18px;
      }
      div {
        width: 120px;
        img {
          transform: scale(0.6)
        }
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
    .login-box {
      width: 100%;
      height: 88px;
      line-height: 88px;
      text-align: center;
      font-size: 38px;
      color: #ffffff;
      background-color: #e60012;
      border-radius: 6px;
      margin-bottom: 248px;
      margin-top: 130px;
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
  .mint-msgbox-confirm {
      color: red;
  }
}
</style>
