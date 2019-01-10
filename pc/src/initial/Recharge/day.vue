<template>
  <div class="day">
      <div class="day_text">股票配资流程</div>
      <div class="day_xian"></div>
      <div class="nav">
          <ul>
              <li><span>01</span><span>申请股票配资</span></li>
              <li><span>02</span><span>支付保证金（本金）</span></li>
              <li><span>03</span><span>配资申请成功</span></li>
              <li><span>04</span><span>开始投资股票</span></li>
          </ul>
      </div>
      <div class="day_text">选择配资方案</div>
      <div class="day_xian"></div>
      <div class="box clearfix">
          <div class="one fl">
              <div class="text">第一步：输入投资本金（2000-300万）</div>
              <div class="input">
                  <input type="text" placeholder="最少3千元，最多300万">元
              </div>
              <div class="text1">备注：不小于2000元，不大于300万元，且为100的整数倍</div>
              <div class="text2">您的保证金不足    前往充值»</div>
              <div class="text mb">第二步：选择获得资金（选择杠杆，资金放大1-5倍）</div>
              <div class="text3" v-for="(item,index) in nav" @click="navclick(index)" :key="index" :class="{'color':color==index,'mr':index==2}">
                  <div>{{item.one}}</div>
                  <div>{{item.two}}</div>
                  <div>{{item.three}}</div>
              </div>
          </div>
          <div class="two fr">
              <div class="text">第三步：选择你的操盘周期</div>
              <div class="text4">
                  期限：<div @click="dayshow=!dayshow">
                      {{daytext}}
                      <span><img src="../../assets/images/下箭头.png" alt=""></span>
                      <ul v-if="dayshow">
                          <li v-for="(item,index) in daynav" @click.stop="dayclick(item)" :key="index">{{item}}</li>
                      </ul>
                      </div>
                      <span>账户管理费：0元/交易日</span>
              </div>
              <div class="text1" style="margin-bottom:2rem;">备注：按交易日收取管理费</div>
              <div class="text">第四步：确认操盘信息</div>
              <div class="box_box">
                  <div class="box_div">
                      <div class="box_one">操盘须知</div>
                      <div class="box_two">盈利全归您</div>
                  </div>
                  <div class="box_div">
                      <div class="box_one">总操盘资金</div>
                      <div class="box_two"><span>0元</span> 0（本金）+0（操盘资金）</div>
                  </div>
                  <div class="box_div">
                      <div class="box_one">亏损警戒线</div>
                      <div class="box_two"><span>0元</span>（预警线=融资资金X1.05）</div>
                  </div>
                  <div class="box_div">
                      <div class="box_one">亏损平仓线</div>
                      <div class="box_two"><span>0元</span>（平仓线=融资资金X1.03）</div>
                  </div>
                  <div class="box_div" style="border-bottom:none;">
                      <div class="box_one">账户管理费</div>
                      <div class="box_two"><span>0元/交易日</span></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="text5">备注：您需支付的金额为：保证金0+0.00元（管理费）=0元</div>
      <div class="text6">如您不清楚规则，或有其他疑问，请联系客服</div>
      <div class="text7"><div @click="dayruleclick"><span :class="{'spancolor':dayrule}">✔</span>我已阅读并同意</div>    《免息配资合作协议》     《风险提示书》    《操盘须知》</div>
      <div class="btn">我要操盘</div>
      <div class="text8">
          <div class="storng">操盘须知</div>
          <div>1、全程只需按天支付利息，无其他任何费用，股市有风险，请合理利用杠杆；</div>
          <div>2、投资本金：您投资股票本金，最少2000，最高1000万，必须是干元的倍数；</div>
          <div>3、使用期限：按天计算，如使用8天，1月8日起至1月18日结束，节假日免收利息；</div>
          <div>4、利息支付：订单前支付利息，如8天时间，下订单时一次性支付利息，提前结算不退</div>
          <div>5、警戒线：当总操盘资金低于警戒线以下时，只能卖出不能买入，我们将有权把您的股票部分卖出减仓，使账户资金达到警戒线以上；</div>
          <div>6、当总操盘资金低于平仓线以下时，我们将有权把您的股票进行卖出平仓，为避免穿仓发生，且不保证卖出时的价格，所以请时刻关注本金是否充足；</div>
          <div>7、交易时间：一般选择下个交易日，如看中行情急需交易，可直接选择当日交易（当日开始计算利息）</div>
          <div>8、其他费用：交易印花税、过户费和佣金，直接由券商和证券交易所收取，实际费用以交易所和券商规定为准；</div>
          <div>9、当账户资金余额充足时，系统默认自动延期，如要停止继续操盘，请选择结算操作。</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'day',
  components: {
  },
  data () {
    return {
      color: 0,
      daytext: '1个交易日',
      dayshow: false,
      dayrule: false,
      nav: [
        { one: '1倍', two: '日利率为0.13%', three: '2000元' },
        { one: '2倍', two: '日利率为0.14%', three: '4000元' },
        { one: '3倍', two: '日利率为0.15%', three: '6000元' },
        { one: '4倍', two: '日利率为0.16%', three: '8000元' },
        { one: '5倍', two: '日利率为0.17%', three: '10000元' }
      ],
      daynav: ['1个交易日', '2个交易日', '3个交易日', '4个交易日', '5个交易日', '6个交易日', '7个交易日', '8个交易日',
        '9个交易日', '10个交易日', '11个交易日', '12个交易日', '13个交易日', '14个交易日', '15个交易日', '16个交易日', '17个交易日',
        '18个交易日', '19个交易日', '20个交易日', '21个交易日', '22个交易日', '23个交易日', '24个交易日', '25个交易日', '26个交易日',
        '27个交易日', '28个交易日', '29个交易日', '30个交易日' ]
    }
  },
  mounted () {
    let a = 5
    this.$emit('router_left', a)
  },
  methods: {
    navclick (index) {
      this.color = index
    },
    dayclick (val) {
      this.daytext = val
      this.dayshow = false
    },
    dayruleclick () {
      if (this.dayrule) {
        this.dayrule = false
      } else {
        this.dayrule = true
      }
    }
  }
}
</script>

<style lang="scss">
.day {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .day_text {
        font-size: 1.4rem;
        margin-bottom: 0.7rem;
    }
    .day_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .nav {
        width: 100%;
        margin-bottom: 2rem;
        ul {
            width: 100%;
            height: 8.53rem;
            border: 4px solid #B5B5B5;
            border-radius: 10px;
            overflow: hidden;
            li {
                display: inline-block;
                width: 24%;
                height: 8.53rem;
                line-height: 8.53rem;
                text-align: center;
                color: #444;
                font-size: 1.2rem;
                border-left: 4px solid #B5B5B5;

                    white-space: nowrap;
                    text-overflow:ellipsis;
                     overflow: hidden;
                >span:first-child{
                    font-size: 3rem;
                    vertical-align: middle;
                }
            }
            >li:first-child{
                border-left: 0px;
            }
        }
    }
    .box {
        width: 100%;
        .one {
            width: 32rem;
            height: 33rem;
            border: 2px solid #707070;
            padding: 1.2rem 1.6rem;
            .text {
                font-size: 1.2rem;
                color:#EC6941;
            }
            .input {
                font-size: 2rem;
                margin-top: 0.7rem;
                margin-bottom: 0.4rem;
                input {
                    width: 24rem;
                    height: 3rem;
                    border: 1px solid #707070;
                    text-align: center;
                    font-size: 1.2rem;
                    margin-right: 0.5rem;
                }
            }
            .text1 {
                font-size: 0.8rem;
                color: #888;
                margin-bottom: 0.4rem;
            }
            .text2 {
                font-size: 1rem;
                color: #C43236;
                margin-bottom: 1rem;
            }
            .mb {
                margin-bottom: 2rem;
            }
            .text3 {
                display: inline-block;
                width: 8.05rem;
                height: 6.83rem;
                border: 1px solid #707070;
                border-radius: 1rem;
                overflow: hidden;
                margin-right: 2rem;
                margin-bottom: 1rem;
                cursor: pointer;
                div {
                    text-align: center;
                }
                >div:nth-child(1){
                    font-size: 2rem;
                    margin-top: 0.6rem;
                }
                >div:nth-child(2){
                    width: 100%;
                    font-size: 0.8rem;
                    white-space: nowrap;
                    text-overflow:ellipsis;
                     overflow: hidden;
                     margin: 0.6rem 0;
                }
                >div:nth-child(3){
                    font-size: 1.2rem
                }
            }
            .mr {
                margin-right: 0;
            }
            .color {
                background-color: #EC6941;
                color: #fff;
            }
        }
        .two {
            width: 32rem;
            height: 33rem;
            border: 2px solid #707070;
            padding: 1.2rem 1.6rem;
            .text {
                font-size: 1.2rem;
                color:#EC6941;
            }
            .text1 {
                font-size: 0.8rem;
                color: #888;
                margin-bottom: 0.4rem;
            }
            .text4 {
                font-size: 1.2rem;
                margin: 1rem 0;
                div {
                    display: inline-block;
                    // width: 10rem;
                    font-size: 1.2rem;
                    text-align: center;
                    color: #888;
                    border-bottom: 1px solid #707070;
                    margin-right: 4rem;
                    position: relative;
                    cursor: pointer;
                    ul {
                        width: 100%;
                        height: 8rem;
                        position: absolute;
                        background-color: #fff;
                        border: 1px solid #707070;
                        overflow: auto;
                        cursor: pointer;
                        li {
                            line-height: 1.4rem;
                            font-size: 1rem;
                        }
                    }
                }
                img {
                    width: 1rem;
                }
            }
            .box_box {
                width: 100%;
                border: 2px solid #707070;
                margin-top: 1rem;
                overflow: hidden;
                .box_div {
                    width: 100%;
                    height: 3.15rem;
                    line-height: 3.15rem;
                    border-bottom: 1px solid #707070;
                    overflow: hidden;
                }
                .box_one {
                    width: 8.4rem;
                    height: 3.15rem;
                    display: inline-block;
                    text-align: center;
                    background-color: #FFE9E9;
                }
                .box_two {
                    display: inline-block;
                    margin-left: 0.8rem;
                    span {
                        color: #EC6941;
                    }
                }
            }
        }
    }
    .text5 {
        width: 100%;
        font-size: 1.4rem;
        text-align: center;
        color: #EC6941;
        margin-top: 4rem;
    }
    .text6 {
        width: 100%;
        font-size: 1.4rem;
        text-align: center;
        color: #333333;
        margin: 1.5rem;
    }
    .text7 {
        width: 100%;
        font-size: 1.4rem;
        text-align: center;
        color: #333333;
        cursor: pointer;
        div {
            display: inline-block;
        }
        span {
            display: inline-block;
            width: 1.5rem;
            height: 1.4rem;
            line-height: 1.4rem;
            text-align: center;
            border: 1px solid #707070;
            margin-right: 0.5rem;
        }
        .spancolor {
            background-color: aqua;
            color: #fff;
        }
    }
    .btn {
                    width: 10rem;
                    height: 3.8rem;
                    line-height: 3.8rem;
                    text-align: center;
                    background-color: #C43236;
                    color: #fff;
                    font-size: 1.2rem;
                    border-radius: 10px;
                    margin: 2rem auto;
                    cursor: pointer;
                }
                .text8 {
                    width: 100%;
                    padding: 1.6rem 2rem;
                    border: 1px solid #707070;
                    color: #7A7A7A;
                    font-size: 1rem;
                    line-height: 2rem;
                    .storng {
                        font-size: 2rem;
                        margin-bottom: 2rem;
                        color: #333333;
                    }
                }
}
</style>
