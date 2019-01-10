<template>
  <div class="experience">
      <div class="experience_text">股票配资流程</div>
      <div class="experience_xian"></div>
      <div class="nav">
          <ul>
              <li><span>01</span><span>申请股票配资</span></li>
              <li><span>02</span><span>支付保证金（本金）</span></li>
              <li><span>03</span><span>配资申请成功</span></li>
              <li><span>04</span><span>开始投资股票</span></li>
          </ul>
      </div>
      <div class="experience_text">选择配资方案</div>
      <div class="experience_xian"></div>
      <div class="box clearfix">
          <div class="one fl">
              <div class="text">快捷操作</div>
              <div class="text3" v-for="(item,index) in nav" @click="navclick(index)" :key="index" :class="{'color':color==index,'mr':index==2}">
                  <div>{{item.one}}</div>
                  <div>{{item.two}}</div>
                  <div>{{item.three}}</div>
              </div>
              <div class="text2">您的保证金不足    前往充值»</div>
          </div>
          <div class="two fr">
              <div class="text">确认操盘信息</div>
              <div class="box_box">
                  <div class="box_div">
                      <div class="box_one">操盘须知</div>
                      <div class="box_two">盈利七成归您</div>
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
              <div class="text">特别提醒</div>
              <div class="text3">1、第15个交易日14:55前必须卖出股票</div>
              <div class="text3">2、下午15点之后或选择下一个交易日开户的，免费体验“股票交易账户”会在下个交易日9:30前开出。</div>
              <div class="text3">3、到期后如无提交结算，系统默认自动转为按天配资，会收取相对应的利息。</div>
              <div class="text3">4、每个新注册的用户可以免息体验一次。</div>
          </div>
      </div>
      <div class="text5">备注：您需支付的金额为：保证金0+0.00元（管理费）=0元</div>
      <div class="text6">如您不清楚规则，或有其他疑问，请联系客服</div>
      <div class="text7"><div @click="experienceruleclick"><span :class="{'spancolor':experiencerule}">✔</span>我已阅读并同意</div>    《免息配资合作协议》     《风险提示书》    《操盘须知》</div>
      <div class="btn">我要操盘</div>
      <div class="text8">
          <div class="storng">操盘须知</div>
          <div>1、无需支付账户管理费（不包含交易印花税、过户费和佣金），投资盈利7成归您。</div>
          <div>2、投资本金：您用于投资股票的资金起点相当低。</div>
          <div>3、资金使用期限：按天计算，不包含各类节假日。。</div>
          <div>4、亏损警告线：当总操盘资金低于警戒线以下时，只能平仓不能建仓，我们将有权把您的股票减仓。</div>
          <div>5、亏提平仓线：当总操盘资金低于平仓线以下时，我们将有权把您的股票进行平仓，为遊免平仓发生，请时刻关注本金是否充足。</div>
          <div>6、股市有风险，投资需谨慎。</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'experience',
  components: {
  },
  data () {
    return {
      color: 0,
      experiencerule: false,
      nav: [
        { one: '1千', two: '', three: '操盘本金' },
        { one: '2千', two: '', three: '操盘本金' }
      ]
    }
  },
  mounted () {
    let a = 7
    this.$emit('router_left', a)
  },
  methods: {
    navclick (index) {
      this.color = index
    },
    experienceruleclick () {
      if (this.experiencerule) {
        this.experiencerule = false
      } else {
        this.experiencerule = true
      }
    }
  }
}
</script>

<style lang="scss">
.experience {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .experience_text {
        font-size: 1.4rem;
        margin-bottom: 0.7rem;
    }
    .experience_xian {
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
                margin-top: 1rem;
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
            .box_box {
                width: 100%;
                border: 2px solid #707070;
                margin-top: 1rem;
                margin-bottom: 1rem;
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
            .text3 {
                color: #888;
                line-height: 1.5rem;
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
