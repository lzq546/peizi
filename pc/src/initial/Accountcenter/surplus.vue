<template>
  <div class="surplus">
    <div class="surplus_text">提盈结算</div>
    <div class="surplus_xian"></div>
    <div class="text clearfix">
      <div
        @click="color=1"
        class="one fl"
        :class="{'color':color==1}"
      >我要提盈</div>
      <div
        @click="color=2"
        class="two fr"
        :class="{'color':color==2}"
      >提盈记录</div>
    </div>
    <div class="center" v-if="color==1">
        <div class="text1">
        <div class="one">股票账户余额：</div>
        <div class="two">自行查看是否符合提现条件</div>
        </div>
        <div class="text1">
        <div class="one">股票账户：</div>
        <div
            @click="surplusshow=!surplusshow"
            class="two clearfix"
        >{{surplustext}}
            <span class="fr">
            <img
                src="../../assets/images/下箭头.png"
                alt=""
            >
            </span>
            <ul v-if="surplusshow">
            <li
                v-for="(item,index) in surplusnav"
                @click.stop="surplus(item)"
                :key="index"
            >{{item}}</li>
            </ul>
        </div>
        </div>
        <div class="text1">
        <div class="one">提盈金额：</div>
        <div class="two"><input
            type="text"
            placeholder="请正确填写提盈余额"
            v-model="money"
            ><i style="color:#9A9A9A">元</i></div>
        </div>
        <div class="btn">确认提现</div>
        <div class="text2">
        <div>温馨提示：</div>
        <div>您的单个账户符合以下条件时，点点配（月）有权按1000元的整数倍申请提取盈利，钱程策略在下个交易日将您的提盈转到您的钱程策略账户，账户总资产超过初始申请资金110%且有现金的，可以每天提盈一次。</div>
        <div>例如：10万元领投本金申请50万跟投资金的该合同，总资产60万元</div>
        <div>提盈：600000×110%=660000之上部分可以提取，当账户总资产达到67万时可以提取1万元盈利，小于110%部分，即660000里60000的部分可以缴纳利息。（天天策略不受该110%提盈标准限制），当天的提盈截止时间15:00，盈利金额以当天收盘后的资产净值为准</div>
        </div>
    </div>
    <div class="center" v-if="color==2">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        prop="date"
        align="center"
        label="时间">
        </el-table-column>
        <el-table-column
        prop="account"
        align="center"
        label="子账号">
        </el-table-column>
        <el-table-column
        prop="money"
        align="center"
        label="金额">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'surplus',
  components: {},
  data () {
    return {
      color: 1,
      money: '',
      surplustext: '暂无子账户',
      surplusshow: false,
      surplusnav: ['日配', '月配', '体验'],
      tableData: [{
        date: '2016-05-02',
        money: '300.00',
        account: '日配'
      }, {
        date: '2016-05-04',
        money: '300.00',
        account: '日配'
      }, {
        date: '2016-05-01',
        money: '300.00',
        account: '体验'
      }, {
        date: '2016-05-03',
        money: '300.00',
        account: '月配'
      }]
    }
  },
  mounted () {
    let a = 8
    this.$emit('router_left', a)
  },
  methods: {
    surplus (val) {
      this.surplustext = val
      this.surplusshow = false
    }
  }
}
</script>

<style lang="scss">
.surplus {
  width: 100%;
  padding: 1.5rem 8.05rem 1.5rem 2.05rem;
  .surplus_text {
    font-size: 2rem;
    margin-bottom: 1.8rem;
  }
  .surplus_xian {
    width: 100%;
    height: 2px;
    background-color: #b5b5b5;
    margin-bottom: 1.6rem;
  }
  .text {
    width: 28rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 1.8rem;
    color: #fff;
    margin: 3rem auto;
    border-radius: 1rem;
    overflow: hidden;
    div {
      width: 50%;
      background-color: #adadad;
      cursor: pointer;
    }
    .color {
      background-color: #c43236;
    }
  }
  .text1 {
    width: 40rem;
    font-size: 1.4rem;
    line-height: 3rem;
    padding-left: 2rem;
    border-bottom: 1px solid #b5b5b5;
    margin: 1rem auto;
    div {
      display: inline-block;
    }
    .one {
      width: 15rem;
    }
    .two {
      color: #c43236;
      width: 20rem;
      padding-right: 2rem;
      img {
        vertical-align: middle;
      }
      ul {
        width: 22.7rem;
        border: 1px solid #b5b5b5;
        background-color: #fff;
        position: absolute;
        z-index: 10;
        li {
          width: 100%;
          line-height: 3.3rem;
          font-size: 1.2rem;
          text-indent: 1rem;
          border-bottom: 1px solid #b5b5b5;
        }
      }
      input {
        border: 1px solid #9a9a9a;
        margin-right: 0.5rem;
        font-size: 1.2rem;
        height: 1.8rem;
        width: 12rem;
        text-indent: 0.5rem;
        color: #9a9a9a;
        vertical-align: middle;
      }
    }
  }
  .btn {
    width: 12rem;
    height: 3.8rem;
    line-height: 3.8rem;
    text-align: center;
    font-size: 1.4rem;
    background-color: #c43236;
    color: #fff;
    border-radius: 1rem;
    margin: 3rem auto;
    cursor: pointer;
  }
  .text2 {
    width: 56rem;
    font-size: 1.1rem;
    line-height: 1.8rem;
    margin: 2rem auto;
    color: #333333;
    > div:first-child {
      margin-bottom: 2rem;
    }
  }
}
</style>
