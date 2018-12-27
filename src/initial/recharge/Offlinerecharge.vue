<template>
  <div class="Offlinerecharge">
    <top :msg="msg"></top>
    <h5>您可以通过网上银行或银行柜台向钱程策略转账</h5>
    <div class="nav">
      <ul>
        <li
          v-for="(item,index) in navbox"
          :key="index"
        >
          <div class="img">
            <img
              src="imgsrc"
              alt=""
            >
          </div>
          <div class="text">
            <div class="Accountnumber">账号：{{item.Accountnumber}}</div>
            <div class="Accountname">户名：{{item.Accountname}}</div>
            <div class="bank">开户行：{{item.bank}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="messagesbox">
      <div class="messages">
        <div>您可以通过网上银行或银行柜台向钱程策略转账</div>
        <div class="two">您可以通过网上银行或银行柜台向钱程策略转账</div>
        <div>您可以通过网上银行或银行柜台向钱程策略转账</div>
      </div>
    </div>
    <div class="Rechargeamount box">充值金额：<div><input
          type="text"
          placeholder="请填写正确充值金额"
          v-model="Rechargeamount"
        ></div>
    </div>
    <div class="Payment box">充值金额：<div>
        <span class="text">{{Payment}}</span>
        <span class="sanjiao" @click="Paymentshow = !Paymentshow"><i></i></span>
    </div>
        <ul v-if="Paymentshow">
            <li v-for="(item,index) in Paymentnav" @click="Paymentclick(item)" :key="index">{{item}}</li>
        </ul>
    </div>
    <div class="accountname box">充值账户名称：<div><input
          type="text"
          v-model="accountname"
        ></div>
    </div>
    <div class="btn">提交</div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Offlinerecharge',
  components: {
    top
  },
  data () {
    return {
      msg: '线下充值',
      Rechargeamount: '',
      Payment: '请选择', // 支付方式
      Paymentshow: false,
      accountname: '',
      navbox: [
        {
        //   imgsrc: '',
          Accountnumber: '6222034000003885377',
          Accountname: '许红星',
          bank: '工商银行'
        },
        {
        //   imgsrc: '',
          Accountnumber: '6222034000003885377',
          Accountname: '许红星',
          bank: '工商银行'
        },
        {
        //   imgsrc: '',
          Accountnumber: '6222034000003885377',
          Accountname: '许红星',
          bank: '工商银行'
        }
      ],
      Paymentnav: ['工商银行', '支付宝', '微信', '建设银行']
    }
  },
  mounted () {},
  methods: {
    Paymentclick (val) {
      this.Payment = val
      this.Paymentshow = false
    }
  },
  destroyed: function () {}
}
</script>

<style scoped lang="scss">
.Offlinerecharge {
  margin-bottom: 128px;
  h5 {
    padding: 23px 0 40px 20px;
    color: #888888;
    font-size: 22px;
  }
  .nav {
    width: 100%;
    color: #333333;
    font-size: 28px;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 254px;
        padding-left: 66px;
        border-bottom: 2px solid #d1d1d1;
        display: flex;
        // justify-content: center;
        align-items: center;
        .img {
          display: inline-block;
          width: 192px;
          height: 192px;
          background-color: #ac6a00;
        }
        .text {
          div {
            margin-bottom: 10px;
            margin-left: 8px;
          }
        }
      }
    }
  }
  .messagesbox {
    width: 100%;
    height: 220px;
    background-color: #efefef;
    padding: 10px 15px 14px 10px;
    .messages {
      border: 2px solid #cdcdcd;
      padding: 20px 50px;
      div {
        font-size: 24px;
        color: #858585;
      }
      .two {
        margin: 20px 0;
      }
    }
  }
  .box {
    height: 90px;
    line-height: 90px;
    text-indent: 66px;
    font-size: 24px;
    color: #333333;
    border-bottom: 2px solid #C2C2C2;
    display: flex;
    align-items: center;
    position: relative;
    ul {
        position: absolute;
      display: inline-block;
      width: 350px;
      top: 74px;
      left: 186px;
      background-color: #fff;
      border: 2px solid #C2C2C2;
          z-index: 10;
      li {
          width: 100%;
          height: 62px;
          line-height: 62px;
          font-size: 24px;
          color: #333;
          padding-left: 21px;
          text-indent: 0px;
          z-index: 10;
      }
    }
    div {
      display: inline-block;
      width: 350px;
      height: 62px;
      border: 2px solid #C2C2C2;
      display: flex;
      align-items: center;
      input {
        width: 269px;
        height: 23px;
        margin-left: 21px;
      }
      .text {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 21px;
        font-size: 24px;
        text-indent: 0px;
      }
      .sanjiao {
          width: 40px;
          height: 60px;
          background-color: #C2C2C2;
          position: relative;
          i {
              border-top: 6.5px solid #fff;
              border-left: 4.5px solid transparent;
              border-bottom: 6.5px solid transparent;
              border-right: 4.5px solid transparent;
              position: absolute;top: 0px;
              left: 50%;
              top: 50%;
              margin-left: -6.5px;
              margin-top: -4.5px;
          }
      }
    }
  }
  .accountname {
      div {
        display: inline-block;
        width: 168px;
        height: 62px;
        border: none;
        border-bottom: 2px solid #C2C2C2;
        display: flex;
        align-items: center;
        input {
            width: 150px;
            margin-left: 10px;
        }
      }
  }
  .btn {
    width: 421px;
    height: 68px;
    line-height: 68px;
    font-size: 30px;
    margin: 58px auto;
    margin-bottom: 30px;
    text-align: center;
    background: rgba(196, 50, 54, 1);
    border-radius: 34px;
    color: #fff;
  }
}
</style>
