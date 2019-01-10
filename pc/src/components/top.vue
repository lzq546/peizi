<template>
  <div id="top" class="topindex" :class="{'top':current!=0}">
    <img
    v-if="current==0"
      src="../assets/images/bj.png"
      alt=""
    >
    <img
    v-if="current!=0"
      src="../assets/images/bj1.png"
      alt=""
    >
    <div class="nav">
      <ul>
        <li
          @click="current=0"
          :class="{'color':current==0}"
        ><router-link to="index">首页</router-link></li>
        <li
          @click="current=1"
          :class="{'color':current==1}"
        ><router-link to="Recharge">配资充值</router-link></li>
        <li
          @click="current=2"
          :class="{'color':current==2}"
        >按天配资</li>
        <li
          @click="current=3"
          :class="{'color':current==3}"
        >按月配资</li>
        <li
          @click="current=4"
          :class="{'color':current==4}"
        >免费体验</li>
        <li
          @click="current=5"
          :class="{'color':current==5}"
        ><router-link to="Accountcenter">账户中心</router-link></li>
        <li
          @click="current=6"
          :class="{'color':current==6}"
        ><router-link to="Helpcenter">帮助中心</router-link></li>
      </ul>
    </div>
    <div
      class="box"
      :class="{'box1':current!=0}"
    >
      <div class="text">点点配</div>
      <div class="text1">选股有策略，涨跌有妙招</div>
      <div class="text2">一路红运。</div>
      <div class="btn">立即注册</div>
    </div>
    <!-- 登录 -->
    <div
      class="login"
      v-if="loginshow&&current==0"
    >
      <div class="text3">登录</div>
      <div class="username userbox">
        <div class="text4">账号</div>
        <input
          type="text"
          placeholder="请输入用户名"
        >
      </div>
      <div class="userpws userbox">
        <div class="text4">密码</div>
        <input
          type="text"
          placeholder="请输入密码"
        >
      </div>
      <div class="pws-yn">
        <div
          class="left"
          @click="selection"
        >
          <div :class="{'booleancolor':boolean==true}">✔</div>记住密码
        </div>
        <div @click="loginshow=false,registershow=false,restshow=true" class="right fr">忘记密码？</div>
      </div>
      <div class="loginbtn">
        登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
      </div>
    <!-- 注册账户 -->
      <div
        class="registerbtn"
        @click="registershow=true,loginshow=false"
      >
        注册账号
      </div>
    </div>
    <div
      class="register"
      v-if="registershow&&current==0"
    >
      <div class="text3">注册</div>
      <div class="userbox">
        <div class="text4">手机号码</div>
        <input
          type="text"
          placeholder="请输入手机号"
        >
      </div>
      <div class="userbox">
        <div class="text4">邀请码</div>
        <input
          type="text"
          placeholder="请输入邀请码"
        >
      </div>
      <div class="Verificationbox userbox">
        <div class="text4">验证码</div>
        <input
          type="text"
          placeholder="请输入验证码"
        >
        <div class="Verification">获取验证码</div>
      </div>
      <div class="userbox">
        <div class="text4">密码</div>
        <input
          type="text"
          placeholder="请输入密码"
        >
      </div>
      <div class="userbox">
        <div class="text4">确认密码</div>
        <input
          type="text"
          placeholder="请再次输入密码"
        >
      </div>
      <div class="pws-yn">
        <div
          class="left"
          @click="selection"
        >
          <div :class="{'booleancolor':boolean==true}">✔</div><span>我同意《网站注册协议》</span>
        </div>
      </div>
      <div
        class="registerbtn"
        @click="registerbtn"
      >
        注册账号
      </div>
    </div>
    <!-- 找回密码 -->
<div
      class="rest"
      v-if="restshow&&current==0"
    >
      <div class="text3">找回密码</div>
      <div class="userbox">
        <div class="text4">手机号码</div>
        <input
          type="text"
          placeholder="请输入手机号"
        >
      </div>
      <div class="Verificationbox userbox">
        <div class="text4">验证码</div>
        <input
          type="text"
          placeholder="请输入验证码"
        >
        <div class="Verification">获取验证码</div>
      </div>
      <div class="userbox">
        <div class="text4">密码</div>
        <input
          type="text"
          placeholder="请输入密码"
        >
      </div>
      <div class="userbox">
        <div class="text4">确认密码</div>
        <input
          type="text"
          placeholder="请再次输入密码"
        >
      </div>
      <div
        class="restbtn"
        @click="restbtn"
      >
        确认
      </div>
</div>

    <div class="textbox" v-if="current!=0">
      <div class="one">股票配资优势</div>
      <div class="xian"></div>
      <div class="two">
        <div class="nav1">
          <div class="img"></div>
          <div class="div">
            <div class="toptext">股票交易：</div>
            <div class="downtex">严格风险，让你自由</div>
          </div>
        </div>
        <div class="nav2">
          <div class="img"></div>
          <div class="div">
            <div class="toptext">
              平台实力雄厚：
            </div>
            <div class="downtex">安全高效,追求极致资金体验</div>
          </div>
        </div>
        <div class="nav3">
          <div class="img"></div>
          <div class="div">
            <div class="toptext">三方监管：</div>
            <div class="downtex">资金三方托管，专款专用</div>
          </div>
        </div>
        <div class="nav4">
          <div class="img"></div>
          <div class="div">
            <div class="toptext">股票配资：</div>
            <div class="downtex">让您的资金放大10倍</div>
          </div>
        </div>
      </div>
    </div>
    <div class="Notice clearfix" v-if="current!=0">
      <div class="left fl">最新公告</div>
      <div class="right fr"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  components: {},
  props: ['current'],
  data () {
    return {
      boolean: false,
      registershow: false,
      loginshow: true,
      restshow: false
    }
  },
  methods: {
    selection () {
      if (this.boolean === false) {
        this.boolean = true
      } else {
        this.boolean = false
      }
    },
    registerbtn () {
      this.registershow = false
      this.loginshow = true
    },
    restbtn () {
      this.restshow = false
      this.loginshow = true
    }
  }
}
</script>

<style lang="scss">
.topindex {
  width: 100%;
  height: 47.5rem;
  position: relative;
  color: #fff;
  overflow: hidden;
  img {
    width: 100%;
  }
  .nav {
    width: 74rem;
    position: absolute;
    top: 2.55rem;
    left: 50%;
    font-size: 1.3rem;
    margin-left: -37rem;
    font-weight: normal;
    ul {
      width: 100%;
      height: 1.7rem;
      overflow: hidden;
      > li:first-child {
        margin-left: 0;
      }
      li {
        display: inline-block;
        margin-left: 6rem;
        cursor: pointer;
      }
      .color {
        color: #9fcbff;
      }
    }
  }
  .box {
    position: absolute;
    top: 16.6rem;
    left: 13.85rem;
  }
  .box1 {
    position: absolute;
    top: 9.6rem;
    left: 13.85rem;
  }
  .text {
    font-size: 1.95rem;
    margin-bottom: 1.45rem;
  }
  .text1 {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }
  .text2 {
    font-size: 2rem;
    margin-bottom: 2.65rem;
  }
  .btn {
    font-size: 1.6rem;
    width: 12.1rem;
    height: 3.1rem;
    line-height: 3.1rem;
    text-align: center;
    border-radius: 3rem;
    background-color: #005dca;
    cursor: pointer;
  }
  .login {
    width: 23.55rem;
    height: 26.15rem;
    padding: 1.45rem 1.95rem;
    background-color: #fff;
    opacity: 0.9;
    border-radius: 10px;
    position: absolute;
    top: 11.9rem;
    right: 11.55rem;
    .text3 {
      text-align: center;
      font-size: 1.25rem;
      color: #111111;
      margin-bottom: 1.5rem;
    }
    .userbox {
      width: 100%;
      height: 2.75rem;
      line-height: 2.75rem;
      border-bottom: 2px solid #98bdfb;
      .text4 {
        display: inline-block;
        color: #111111;
        font-size: 0.9rem;
        margin-right: 1.1rem;
      }
      input {
        font-size: 0.95rem;
      }
    }
    .pws-yn {
      margin-top: 0.95rem;
      margin-bottom: 1.8rem;
      font-size: 0.92rem;
      color: #999999;
      .left {
        div {
          width: 0.88rem;
          height: 0.98rem;
          // overflow: hidden;
          border: 1px solid #bbbbbb;
          display: inline-block;
          text-align: top;
        }
        .booleancolor {
          background-color: #007aff;
          color: #ffffff;
        }
      }
      div {
        height: 28px;
        display: inline-block;
        cursor: pointer;
      }
    }
    .loginbtn {
      width: 19.63rem;
      height: 2.62rem;
      line-height: 2.62rem;
      text-align: center;
      background-color: #005dca;
      border-radius: 16px;
      margin-bottom: 1.95rem;
      cursor: pointer;
    }
    .registerbtn {
      width: 19.63rem;
      height: 2.62rem;
      line-height: 2.62rem;
      text-align: center;
      background-color: #fff;
      border-radius: 16px;
      border: 2px solid #c53336;
      color: #c53336;
      cursor: pointer;
    }
  }
  .register {
    width: 23.55rem;
    height: 26.15rem;
    padding: 1.45rem 1.95rem;
    background-color: #fff;
    opacity: 0.9;
    border-radius: 10px;
    position: absolute;
    top: 11.9rem;
    right: 11.55rem;
    .text3 {
      text-align: center;
      font-size: 1.25rem;
      color: #111111;
      margin-bottom: 1.5rem;
    }
    .userbox {
      width: 100%;
      height: 2.75rem;
      line-height: 2.75rem;
      border-bottom: 2px solid #98bdfb;
      .text4 {
        display: inline-block;
        width: 3.85rem;
        color: #111111;
        font-size: 0.9rem;
        margin-right: 1.1rem;
      }
      input {
        font-size: 0.95rem;
      }
    }
    .Verificationbox {
      input {
        width: 7rem;
      }
      .Verification {
        display: inline-block;
        background-color: #005dca;
        padding: 0 1rem;
        cursor: pointer;
      }
    }
    .pws-yn {
      margin-top: 0.95rem;
      margin-bottom: 1.8rem;
      font-size: 0.92rem;
      color: #999999;
      .left {
        div {
          width: 0.88rem;
          height: 0.98rem;
          // overflow: hidden;
          border: 1px solid #bbbbbb;
          display: inline-block;
          text-align: top;
        }
        span {
          margin-left: 1rem;
        }
        .booleancolor {
          background-color: #007aff;
          color: #ffffff;
        }
      }
      div {
        height: 28px;
        display: inline-block;
        cursor: pointer;
      }
    }
    .registerbtn {
      width: 19.63rem;
      height: 2.62rem;
      line-height: 2.62rem;
      text-align: center;
      background-color: #fff;
      border-radius: 16px;
      border: 2px solid #c53336;
      color: #c53336;
      cursor: pointer;
    }
  }
  .rest {
    width: 23.55rem;
    height: 26.15rem;
    padding: 1.45rem 1.95rem;
    background-color: #fff;
    opacity: 0.9;
    border-radius: 10px;
    position: absolute;
    top: 11.9rem;
    right: 11.55rem;
    .text3 {
      text-align: center;
      font-size: 1.25rem;
      color: #111111;
      margin-bottom: 1.5rem;
    }
    .userbox {
      width: 100%;
      height: 2.75rem;
      line-height: 2.75rem;
      border-bottom: 2px solid #98bdfb;
      .text4 {
        display: inline-block;
        width: 4rem;
        color: #111111;
        font-size: 0.9rem;
        margin-right: 0.6rem;
      }
      input {
        font-size: 0.95rem;
      }
    }
    .Verificationbox {
      input {
        width: 7rem;
      }
      .Verification {
        display: inline-block;
        float: right;
        background-color: #005dca;
        padding: 0 1rem;
        cursor: pointer;
      }
    }
    .restbtn {
      width: 19.63rem;
      height: 2.62rem;
      margin-top: 5rem;
      line-height: 2.62rem;
      text-align: center;
      background-color: #fff;
      border-radius: 16px;
      border: 2px solid #c53336;
      color: #c53336;
      cursor: pointer;
    }
  }
  .textbox {
    width: 100%;
    height: 14.1rem;
    padding: 2.45rem 8rem 3rem 8rem;
    overflow: hidden;
    .one {
      font-size: 1.4rem;
      color: #333333;
    }
    .xian {
      width: 100%;
      height: 2px;
      background-color: #b5b5b5;
      margin-top: 0.95rem;
      margin-bottom: 1.5rem;
    }
    .two {
      color: #111111;
      font-size: 1.1rem;
      .img {
        display: inline-block;
        width: 4.7rem;
        height: 4.7rem;
        background-color: #fce9ea;
        border-radius: 50%;
        vertical-align: bottom;
      }
      .div {
        display: inline-block;
        > div:first-child {
          line-height: 2.5rem;
        }
        > div:nth-child(2) {
          line-height: 1.5rem;
        }
      }
      .nav1 {
        width: 19rem;
        display: inline-block;
      }
      .nav2 {
        width: 19rem;
        display: inline-block;
        img {
          background-color: #feefc4;
        }
      }
      .nav3 {
        width: 19rem;
        display: inline-block;
        img {
          background-color: #ebeafb;
        }
      }
      .nav4 {
        width: 19rem;
        display: inline-block;
        img {
          background-color: #ffe7cf;
        }
      }
    }
  }
  .Notice {
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    padding-left: 8rem;
    font-size: 1.4rem;
    color: #111111;
    background-color: #F3F3F3;
  }
}
.top {
  width: 100%;
  height: 46.7rem;
  position: relative;
  color: #fff;
  overflow: hidden;
}
</style>
