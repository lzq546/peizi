<template>
  <div class="Settlement">
    <top :msg="msg"></top>
    <h3>选择增配订单</h3>
    <div class="box">
      <div class="box1">
        <input type="text" v-model="Order">
        <span @click="Ordershow = !Ordershow"><img src="../../assets/images/下箭头.png" alt=""></span>
        <div class="nav" v-if="Ordershow">
          <ul>
            <li v-for="(item,index) in Ordernav" @click="Order=item,Ordershow=!Ordershow" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <button>确认提交</button>
    <h4>1.结算申请在下午4点以后进行提交</h4>
    <div class="settlementbox">
      <div
        class="lfet"
        @click="color=1"
        :class="{'color':color==1}"
      >我要提盈</div>
      <div
        class="rgiht"
        @click="color=2"
        :class="{'color':color==2}"
      >提盈记录</div>
    </div>
    <div class="text1">
      <div>子账户提现余额：</div><span>自行查看是否符合提现条件</span>
    </div>
    <div class="text2">
      <div class="one">子账户</div>
      <span @click="accountshow=!accountshow">
        {{account}}
        <i></i>
        <div
          class="two"
          v-if="accountshow"
        >
          <ul>
            <li
              v-for="(item,index) in accountnav"
              @click="account=item"
              :key="index"
            >{{item}}</li>
          </ul>
        </div>
      </span>
    </div>
    <div class="text3">
      <div>提盈金额</div>
      <div><input
          type="text"
          placeholder="请正确填写提盈余额"
          v-model="money"
        ><span>元</span></div>
    </div>
    <button>确认提现</button>
    <h5>温馨提示：</h5>
    <div class="text4">
        您的单个账户符合以下条件时，点点配（月）有权按1000元的整数倍申请提取盈利，钱程策略在下个交易日将您的提盈转到您的钱程策略账户，账户总资产超过初始申请资金110%且有现金的，可以每天提盈一次。
<br>例如：10万元领投本金申请50万跟投资金的该合同，总资产60万元
<br>提盈：600000×110%=660000之上部分可以提取，当账户总资产达到67万时可以提取1万元盈利，小于110%部分，即660000里60000的部分可以缴纳利息。（天天策略不受该110%提盈标准限制），当天的提盈截止时间15:00，盈利金额以当天收盘后的资产净值为准。
    </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'Settlement',
  components: {
    top
  },
  data () {
    return {
      msg: '提盈结算申请',
      money: '',
      color: 1,
      account: '暂无子账户',
      accountshow: false,
      accountnav: ['账户1', '账户2', '账户3'],
      Ordernav: ['假装有东西', '真有东西'],
      Order: '',
      Ordershow: false
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Settlement {
  margin-bottom: 178px;
  h3 {
    font-size: 36px;
    color: #333;
    margin-left: 21px;
    margin-top: 25px;
  }
  h4 {
    font-size: 26px;
    color: #333;
    margin-left: 21px;
    margin-top: 25px;
  }
  .box {
    width: 100%;
    padding: 0px 25px;
    .box1 {
      width: 100%;
      height: 90px;
      border-bottom: 2px solid #dbdbdb;
      display: flex;
      align-items: center;
      position: relative;
      .nav {
        width: 100%;
        position: absolute;
        font-size: 36px;
        background-color: #fff;
        border: 2px solid #dbdbdb;
        padding: 10px;
        top: 90px;
        ul {
          width: 100%;
          background-color: #fff;
          li {
            width: 100%;
            line-height: 40px;
          }
        }
      }
      input {
        flex: 1;
        font-size: 36px;
        text-indent: 30px;
      }
      span {
        font-size: 36px;
        color: rgb(122, 110, 110);
      }
      .big {
        font-size: 60px;
        color: #333333;
      }
    }
  }
  .settlementbox {
    width: 560px;
    font-size: 36px;
    margin: 0px auto;
    margin-top: 50px;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    div {
      flex: 1;
      text-align: center;
      height: 80px;
      line-height: 80px;
      background-color: #adadad;
      color: #fff;
    }
    .color{
        background-color: #C43236;
    }
  }
  .text1 {
    width: 100%;
    height: 78px;
    line-height: 78px;
    margin-top: 36px;
    display: flex;
    border-bottom: 2px solid #e2e2e2;
    div {
      flex: 2;
      padding-left: 54px;
      font-size: 28px;
      color: #333;
    }
    span {
      flex: 3;
      font-size: 26px;
      color: #c43236;
    }
  }
  .text2 {
    width: 100%;
    height: 78px;
    line-height: 78px;
    display: flex;
    border-bottom: 2px solid #e2e2e2;
    .one {
      flex: 2;
      padding-left: 54px;
      font-size: 28px;
      color: #333;
    }
    span {
      flex: 3;
      font-size: 26px;
      color: #c43236;
      position: relative;
      i {
        display: inline-block;
        border: 9px solid #1b1b1b;
        border-top-width: 18px;
        border-color: #1b1b1b transparent transparent transparent;
        position: absolute;
        right: 50px;
        top: 30px;
      }
      .two {
        width: 100%;
        background-color: #fff;
        position: absolute;
        top: 78px;
        border: 2px solid #e2e2e2;
        z-index: 10;
        li {
          width: 100%;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }
  .text3 {
    width: 100%;
    height: 78px;
    line-height: 78px;
    display: flex;
    border-bottom: 2px solid #e2e2e2;
    > div:nth-child(1) {
      flex: 2;
      padding-left: 54px;
      font-size: 28px;
      color: #333;
    }
    > div:nth-child(2) {
      flex: 3;
      input {
        width: 258px;
        height: 48px;
        border: 2px solid #d6d6d6;
        font-size: 26px;
        text-indent: 13px;
      }
      span {
        margin-left: 9px;
        font-size: 26px;
        color: #9a9a9a;
      }
    }
  }
  button {
    display: block;
    width: 340px;
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: #fff;
    font-size: 36px;
    background-color: #c43236;
    margin: 70px auto;
    border-radius: 16px;
  }
  h5 {
      margin-top: 40px;
      margin-left: 20px;
      color: #333333;
      font-size: 28px;
  }
  .text4 {
    padding: 48px 32px;
    color: #333333;
    font-size: 24px;
    line-height: 35px;
  }
}
</style>
