<template>
  <div class="month">
    <top :msg="msg"></top>
    <h5>
      <div class="text">手动输入资金</div>
      <router-link to="Additionalmargin">
      <div
        class="text2"
        :class="{'color':colorshow}"
      >您的保证金不足 前往充值»</div>
      </router-link>
    </h5>
    <div class="box">
      <h4>第一步：输入投资本金（2000-300万）</h4>
      <div class="inputbox">
        <div class="input_box"><input type="text" placeholder="最少2千元，最多300万"></div><span>元</span>
      </div>
      <div class="text1">备注：不小于2000元，不大于300万元，且为100的整数倍</div>
      <router-link to="Additionalmargin">
      <div
        class="text3"
        :class="{'color':colorshow}"
      >您的保证金不足 前往充值»</div>
      </router-link>
      <h4>第二步：选择获得资金（选择杠杆，资金放大5-7倍）</h4>
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in nav"
            @click="allocation(item,index)"
            :key="index"
            :class="{'boxcolor':index==current}"
          >
            <div class="one">{{item.one}}</div>
            <div class="two">{{item.two}}</div>
            <div class="three">{{item.three}}</div>
          </li>
        </ul>
      </div>
    </div>
    <h3>第三步：选择你的操盘周期</h3>
    <div class="Deadline Deadlinebox">期限：<div>
        <span class="text"><input type="text" ></span>
      </div>
    </div>
    <div class="text4">账户管理费：0元/交易月</div>
    <div class="text5">备注：按交易月收取管理费</div>
    <div class="nav1">
      <ul>
        <li>
          <div>总操盘金额</div>
          <div><span>20000</span>元</div>
        </li>
        <li>
          <div>亏损警戒线</div>
          <div><span>11500</span>元</div>
        </li>
        <li>
          <div>亏损平仓线</div>
          <div><span>11500</span>元</div>
        </li>
        <li>
          <div>账户管理费</div>
          <div>
            <div class="mb" style="text-align: right"><span>1.2</span>分/每月</div>
            <div>单月利息<span>120</span>元，总利息<span>120</span>元</div>
          </div>
        </li>
        <li>
          <div>支付风险保证金：</div>
          <div><span>10000</span>元</div>
        </li>
        <li>
          <div>账户管理费：</div>
          <div><span>120</span>元</div>
        </li>
      </ul>
    </div>
    <div class="text6 clearfix">
      <div class="left">共计应支付：<span>10120</span>元</div>
      <router-link to="limit"><div class="right fr">限制个股名单</div></router-link>
    </div>
    <div class="pws-yn">
      <div
        class="left"
        @click="selection"
      >
        <div :class="{'color':boolean==true}">✔</div>我已阅读并同意
        <router-link to="Agreement">《点点配协议》</router-link>
        <router-link to="risk">《风险提示书》</router-link>
      </div>
    </div>
    <div class="btn" @click="btn">立即申请</div>
    <div class="message" v-if="messagebox" @click="messagebox=!messagebox">
    <div class="messagebox clearfix">
        <div>申请确认</div>
        <button class="fl" @click.stop="confirm">确认</button>
        <button class="fr" @click.stop="cancel">取消</button>
    </div>
    </div>
    <div
      class="message"
      v-if="messagenobox"
      @click="messagenobox=!messagenobox"
    >
      <div class="messagebox clearfix">
        <span>请勾选并同意</span>
        <span>《点点配协议》</span>
        <span>《风险提示书》</span>
        <span>后再申请</span>
      </div>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'month',
  components: {
    top
  },
  data () {
    return {
      msg: '按月配资',
      colorshow: true,
      current: 0,
      Deadline: '5个交易日',
      Deadlineshow: false,
      boolean: false,
      messagebox: false,
      messagenobox: false,
      nav: [
        { one: '5倍', two: '日利率为0%', three: '15000元' },
        { one: '6倍', two: '日利率为0%', three: '18000元' },
        { one: '7倍', two: '日利率为0%', three: '21000元' }
      ],
      Deadlinenav: [
        '1个交易日',
        '2个交易日',
        '3个交易日',
        '4个交易日',
        '5个交易日'
      ]
    }
  },
  mounted () {},
  methods: {
    allocation (item, index) {
      let self = this
      self.current = index
    },
    Deadlineclick (val) {
      this.Deadline = val
      this.Deadlineshow = false
    },
    selection () {
      if (this.boolean === false) {
        this.boolean = true
      } else {
        this.boolean = false
      }
    },
    btn () {
      if (this.boolean) {
        this.messagebox = true
      } else {
        this.messagenobox = true
      }
    },
    cancel () {
      this.messagebox = false
    },
    confirm () {

    }
  },
  destroyed: function () {}
}
</script>

<style scoped lang="scss">
.month {
  width: 100%;
  height: 100%;
  margin-bottom: 168px;
  h5 {
    padding: 64px 0px 0px 39px;
    font-size: 28px;
    color: #333333;
    font-weight: normal;
    .text {
      display: inline-block;
    }
    .text2 {
      display: inline-block;
      color: #c4c4c4;
      margin-left: 20px;
    }
  }
  .box {
    width: 627px;
    height: 643px;
    margin: 62px auto;
    border: 2px solid rgba(112, 112, 112, 1);
    padding: 25px 0 0 33px;
    h4 {
      color: #ec6941;
      font-size: 24px;
      font-weight: normal;
    }
    .inputbox {
      display: flex;
      align-items: center;
      .input_box {
        width: 484px;
        height: 64px;
          padding: 5px;
        margin-top: 15px;
        border: 1px solid rgba(112, 112, 112, 1);
        display: flex;
        justify-content: center;
        overflow: hidden;
        input {
          width: 242px;
          font-size: 24px;
        }
      }
      span {
        font-size: 40px;
        color: #333333;
        margin-left: 14px;
      }
    }
    .text1 {
      color: #c4c4c4;
      margin: 8px 0px;
    }
    .text3 {
      font-size: 20px;
      color: #c4c4c4;
      margin-bottom: 19px;
    }
    .nav {
      width: 100%;
      margin-top: 24px;
      ul {
        width: 100%;
        color: #333333;
        display: flex;
        flex-wrap: wrap;
        .boxcolor {
          color: #fff !important;
          background-color: #ec6941;
          border-color: #ec6941;
        }
        > li:nth-child(1),
        > li:nth-child(4) {
          margin-left: 0px;
        }
        li {
          // display: inline-block;
          width: 161px;
          height: 137px;
          margin-top: 23px;
          margin-left: 32px;
          text-align: center;
          border: 2px solid rgba(112, 112, 112, 1);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .one {
            font-size: 48px;
          }
          .two {
            font-size: 16px;
            margin: 16px 0px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .three {
            font-size: 24px;
          }
        }
      }
    }
  }
  h3 {
    font-size: 24px;
    color: #ec6941;
    margin-top: 73px;
    margin-left: 41px;
    margin: 49px;
  }
  .Deadlinebox {
    color: #333333;
    margin-left: 41px;
    font-size: 24px;
    display: flex;
    align-items: center;
    position: relative;
    div {
      display: inline-block;
      width: 108px;
      height: 29px;
      background-color: #eaeaea;
      display: flex;
      align-items: center;
      .text {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        margin-left: 2px;
        font-size: 18px;
        text-indent: 0px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        input {
          width: 100%;
          background-color: #eaeaea;
        }
      }
    }
  }
  .text4 {
    margin-top: -25px;
    font-size: 24px;
    margin-left: 304px;
  }
  .text5 {
    font-size: 16px;
    color: #c9c9c9;
    margin: 13px 0px 56px 40px;
  }
  .nav1 {
    width: 100%;
    ul {
      width: 100%;
      padding: 0 25px;
      > li:first-child {
        border-top: 2px solid #e0e0e0;
      }
      li {
        width: 100%;
        height: 100px;
        padding: 0 8px 0 14px;
        font-size: 28px;
        color: #333333;
        border-bottom: 2px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          span {
            color: #e60012;
          }
        }
      }
    }
  }
  .text6 {
    margin: 37px 38px 17px 43px;
    font-size: 28px;
    .left {
      display: inline-block;
      span {
        color: #e60012;
      }
    }
    .right {
      display: inline-block;
      color: #1c89cf;
    }
  }
  .pws-yn {
    margin-left: 40px;
    margin-bottom: 40px;
    font-size: 22px;
    color: #333;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      div {
        width: 24px;
        height: 24px;
        border: 1px solid #bbbbbb;
        display: inline-block;
        text-align: top;
        overflow: hidden;
      }
      .color {
        background-color: #007aff;
        color: #ffffff !important;
      }
    }
    div {
      height: 28px;
      display: inline-block;
    }
  }
  .btn {
    width: 80%;
    height: 90px;
    line-height: 90px;
    margin: 0 auto;
    text-align: center;
    font-size: 36px;
    background-color: #c43236;
    border-radius: 16px;
    color: #fff;
    margin-bottom: 148px;
  }
  .message {
    width: 100%;
    height: 100%;
    background: rgba(112, 112, 112, 0.5);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 11;
  }
  .messagebox {
    width: 534px;
    height: 534px;
    font-size: 40px;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -267px;
    margin-left: -267px;
    padding: 88px 60px;
    button {
      background-color: #C43236;
      color: #fff;
      padding: 21px 41px;
      margin-top: 107px;
    }
    span {
      display: block;
      margin-bottom: 20px;
      font-size: 28px;
    }
    >span:first-child{
      margin-top: 80px;
    }
  }
  .color {
    color: #c43236 !important;
  }

  a {
    color: #1c89cf !important;
  }
  .mb {
    margin-bottom: 10px;
  }
}
</style>
