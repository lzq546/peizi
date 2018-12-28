<template>
  <div class="Cashwithdrawal">
    <top :msg="msg"></top>
    <div class="text1">
      <div>子账户提现余额：</div><span>自行查看是否符合提现条件</span>
    </div>
    <div class="text2">
      <div class="one">子账户</div>
      <span @click="accountshow=!accountshow">
        {{account}}
        <i></i>
        <div class="two"
              v-if="accountshow">
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
    <h4>提现金额</h4>
    <div class="cashmoney">
      <input
        type="text"
        v-model="cashmoney"
        placeholder="请输入提现金额"
      >
    </div>
    <div class="text">可提现金额0.00元</div>
    <div
      class="radioone radio"
      @click="radio = 1"
    >
      <span><i v-if="radio==1"></i></span>正常提现T+1
    </div>
    <div
      class="radiotwo radio"
      @click="radio = 2"
    >
      <span><i v-if="radio==2"></i></span>加急提现T+1
    </div>
    <div class="xian"></div>
    <h5>手续费{{fee}}元</h5>
    <h4>提现密码</h4>
    <div class="cashpassword cashmoney">
      <input
        type="password"
        v-model="password"
        placeholder="请输入提现密码"
      >
    </div>
    <div class="text3 clearfix">
        <router-link to="modifyCash">
        <div class="fl">未设置提现密码</div>
        <div class="fr">前往设置»</div>
        </router-link>
    </div>
    <button>确认提现</button>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'Cashwithdrawal',
  components: {
    top
  },
  data () {
    return {
      msg: '我要提现',
      money: '',
      cashmoney: '',
      radio: 1,
      account: '暂无子账户',
      accountshow: false,
      password: '',
      fee: '0', // 手续费
      accountnav: ['账户1', '账户2', '账户3']
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Cashwithdrawal {
  margin-bottom: 178px;
  .money {
    width: 100%;
    padding: 0 50px;
    margin-top: 40px;
    input {
      width: 100%;
      height: 92px;
      border: 2px solid #c43236;
      font-size: 32px;
      text-indent: 20px;
    }
  }
  .text {
    width: 100%;
    height: 110px;
    line-height: 110px;
    padding-left: 49px;
    font-size: 32px;
    color: #666666;
  }
  .text1 {
    width: 100%;
    height: 78px;
    line-height: 78px;
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
    margin-bottom: 108px;
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
        border: 2px solid #e2e2e2;
        top: 78px;
        z-index: 10;
        li {
          width: 100%;
          height: 50px;
          line-height: 50px;
        }
      }
    }
  }
  h4 {
    font-size: 32px;
    color: #666666;
    margin: 38px 0 31px 39px;
  }
  .cashmoney {
    width: 100%;
    padding: 0 125px;
    margin-top: 40px;
    input {
      width: 100%;
      height: 92px;
      border: 2px solid #b2b2b2;
      font-size: 32px;
      text-indent: 39px;
      border-radius: 15px;
    }
  }
  .radio {
    margin-left: 145px;
    font-size: 32px;
    color: #666666;
    margin-bottom: 28px;
    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #c43236;
      margin-right: 20px;
      position: relative;
      i {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
  }
  .xian {
    width: 200px;
    height: 2px;
    background: rgba(173, 173, 173, 1);
    margin-left: 145px;
  }
  h5 {
      margin-left: 154px;
      margin-top: 17px;
      font-size: 32px;
      color: #666666;
  }
  .cashpassword {
      margin-bottom: 10px;
  }
  .text3 {
      font-size: 24px;
      color: #C43236;
      padding: 0 145px;
  }
  button {
      display: block;
      width: 230px;
      height: 90px;
      line-height: 90px;
      text-align: center;
      color: #fff;
      font-size: 32px;
      background-color: #C43236;
      margin: 38px auto;
      border-radius: 21px;
  }
}
</style>
