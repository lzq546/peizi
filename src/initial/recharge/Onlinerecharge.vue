<template>
  <div class="Onlinerecharge">
    <top :msg="msg"></top>
    <div class="nav">
      <ul>
        <li>
          <div
            :class="{'color':current == 0}"
            @click="btn1"
          >认证支付</div>
        </li>
        <li>
          <div
            :class="{'color':current == 1}"
            @click="btn2"
          >快捷支付</div>
        </li>
      </ul>
    </div>
    <div class="balance">账户余额：{{balance}}元</div>
    <div
      class="Quick"
      v-if="Quick"
    >
      <div class="Rechargeamount box">充值金额：<div><input
            type="text"
            placeholder="请填写正确充值金额"
            v-model="Rechargeamount"
          ></div>
      </div>
    </div>
    <div
      class="Authentication"
      v-if="Authentication"
    >
      <div class="Bankaccount box">银行账户：<div><input
            type="text"
            v-model="Bankaccount"
          ></div>
      </div>
      <div class="name box">真实姓名：<div><input
            type="text"
            v-model="name"
          ></div>
      </div>
      <div class="IDnumber box">真实姓名：<div><input
            type="text"
            v-model="IDnumber"
          ></div>
      </div>
      <div class="iPhone box">手机号码：<div><input
            type="text"
            v-model="iPhone"
          ></div>
      </div>
      <div class="Rechargeamount box">充值金额：<div><input
            type="text"
            v-model="Rechargeamount"
          ></div>
      </div>
    </div>
    <div class="btn">提交</div>
    <h4>温馨提示：</h4>
    <div class="Quota">
      <span>认证支付限额</span>
    </div>
    <div class="Quotabox">
      <ul>
        <li
          v-for="(item,index) in Quotabox"
          :key="index"
        >
          <div class="left">
            <div class="img"><img
                :src="item.imgsrc"
                alt=""
              ></div>{{item.bank}}
            <div class="text"></div>
          </div>
          <div class="conter">
            <div class="text">
              {{item.Singlestroke}}万<br>
              单笔限额
            </div>
          </div>
          <div class="right">
            <div class="text">
              {{item.Singleday}}万<br>
              单笔限额
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Onlinerecharge',
  components: {
    top
  },
  data () {
    return {
      msg: '线上充值',
      current: 0,
      show: 0,
      balance: '0.00',
      Quick: false, // 快捷支付
      Authentication: true,
      Rechargeamount: '', // 充值金额
      iPhone: '', // 手机号码
      IDnumber: '', // 身份证号
      name: '', // 姓名
      Bankaccount: '', // 银行卡账号
      Quotabox: [
        { imgsrc: '', bank: '工商银行', Singlestroke: '0.2', Singleday: '0.2' },
        { imgsrc: '', bank: '工商银行', Singlestroke: '0.2', Singleday: '0.2' },
        { imgsrc: '', bank: '工商银行', Singlestroke: '0.2', Singleday: '0.2' }
      ]
    }
  },
  mounted () {},
  methods: {
    btn1 () {
      this.current = 0
      this.show = 0
      this.Authentication = true
      this.Quick = false
    },
    btn2 () {
      this.current = 1
      this.show = 1
      this.Quick = true
      this.Authentication = false
    }
  },
  destroyed: function () {}
}
</script>

<style scoped lang="scss">
.Onlinerecharge {
  color: #333333;
  font-size: 32px;
  margin-bottom: 198px;
  .nav {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      li {
        flex: 1;
        height: 90px;
        border-bottom: 4px solid #f0f0f0;
        display: flex;
        justify-content: center;
        div {
          display: inline-block;
          height: 90px;
          line-height: 90px;
        }
        .color {
          border-bottom: 4px solid #c3091e;
        }
      }
    }
  }
  .balance {
    height: 90px;
    line-height: 90px;
    text-indent: 66px;
    border-bottom: 2px solid #f0f0f0;
  }
  .box {
    height: 90px;
    line-height: 90px;
    text-indent: 66px;
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    align-items: center;
    div {
      display: inline-block;
      width: 420px;
      height: 68px;
      border: 2px solid #f0f0f0;
      display: flex;
      align-items: center;
      input {
        width: 269px;
        height: 28px;
        margin-left: 40px;
        font-size: 30px;
      }
    }
  }
  .btn {
    width: 421px;
    height: 68px;
    line-height: 68px;
    margin: 40px auto;
    margin-bottom: 80px;
    text-align: center;
    background: rgba(196, 50, 54, 1);
    border-radius: 34px;
    color: #fff;
  }
  h4 {
    margin-left: 30px;
    margin-bottom: 30px;
    font-size: 28px;
    font-weight: normal;
  }
  .Quota {
    margin-left: 60px;
    height: 46px;
    display: flex;
    align-items: center;
    font-size: 28px;
    border-left: 10px solid #00a0e9;
    span {
      margin-left: 10px;
    }
  }
  .Quotabox {
    width: 100%;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 122px;
        padding-left: 100px;
        border-bottom: 2px solid #d1d1d1;
        font-size: 24px;
        color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
        .left {
          flex: 1;
          font-size: 28px;
          display: flex;
          align-items: center;
          .img {
            display: inline-block;
            width: 60px;
            height: 60px;
            background-color: #009944;
            margin-right: 20px;
          }
        }
        .conter {
          flex: 1;
          text-align: center;
        }
        .right {
          flex: 1;
          text-align: center;
        }
      }
    }
  }
}
</style>
