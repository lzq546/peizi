<template>
    <div class="Reset">
        <top :msg="msg"></top>
        <div class="center">
            <div class="user_box">
                <div class="phone-number user-box">
                    <div><img src="../assets/images/手机.png" alt=""></div>
                    <input type="text" placeholder="请输入手机号" v-model="phonenumber">
                </div>
                <div class="verificationcode user-box">
                    <div><img src="../assets/images/验证.png" alt=""></div>
                    <input type="password" placeholder="请输入验证码" v-model="verificationcode">
                    <div class="verification" @click="verification">获取验证码</div>
                </div>
                <div class="user-pws user-box" style="margin-top: 20px;">
                    <div><img src="../assets/images/密码.png" alt=""></div>
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <div class="user-pws user-box" style="margin-top: 20px;">
                    <div><img src="../assets/images/密码.png" alt=""></div>
                    <input type="password" placeholder="请再次输入密码" v-model="passwords">
                </div>
            </div>
            <div class="login-box" @click="Reset_user">重置密码</div>
        </div>
    </div>
</template>

<script>
import top from '@/components/top'
import { Toast } from 'mint-ui'
export default {
  name: 'Reset',
  components: {
    top
  },
  data () {
    return {
      msg: '忘记密码',
      phonenumber: '',
      verificationcode: '',
      password: '',
      passwords:''
    }
  },
  mounted () {},
  methods: {
    back () {
      this.$router.go(-1) // 返回上一层
    },
    verification () {
      console.log(this.phonenumber)
    },
    Reset_user () {
      console.log(this.phonenumber)
      console.log(this.verificationcode)
      console.log(this.password)
      Toast('密码重置成功')
      this.$router.push({name: 'login', path: '/login'})
    }
  }
}
</script>

<style scoped lang="scss">
.Reset {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  background-color: #fff;
  overflow: scroll;
  z-index: 3;
  .center {
    padding: 0 30px;
    .user_box {
      margin-top: 52px;
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
