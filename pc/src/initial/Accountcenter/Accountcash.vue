<template>
  <div class="Accountcash">
      <div class="Accountcash_text">我要提现</div>
      <div class="Accountcash_xian"></div>
      <div class="text">
          暂无绑定银行卡，<span>立即绑定</span>
      </div>
      <div class="Accountcash_xian"></div>
      <div class="text1">
          <div class="one">子账户提现余额：</div>
          <div class="two">自行查看是否符合提现条件</div>
      </div>
      <div class="text1">
          <div class="one">子账户：</div>
          <div @click="Accountcashshow=!Accountcashshow" class="two clearfix">{{Accountcashtext}}
              <span class="fr">
                  <img src="../../assets/images/下箭头.png" alt="">
                  </span>
                  <ul v-if="Accountcashshow">
                      <li v-for="(item,index) in Accountcashnav" @click.stop="Accountcash(item)" :key="index">{{item}}</li>
                  </ul>
            </div>
      </div>
      <div class="text2">
          <div class="one">账户余额：</div>
          <div class="two">{{Rechargeamount}}元</div>
      </div>
      <div class="text3">
          <div class="one">提现金额：</div>
          <div class="two"><input type="text" placeholder="请输入提现金额"></div>
      </div>
      <div class="text4">
          <div class="one"></div>
          <div class="two">提现后剩余金额<span>0</span>元（手续费<span>0</span>元）</div>
      </div>
      <div class="text3">
          <div class="one">提现密码：</div>
          <div class="two"><input type="text" placeholder="请输入提现密码"></div>
      </div>
      <div class="text5">
          <div class="one"></div>
          <div class="two">
              <div @click="color=1">
                  <span><i v-if="color==1"></i></span>正常提现T+1    ？
              </div>
              <div @click="color=2">
                  <span><i v-if="color==2"></i></span>加急提现T+1    ？
              </div>
          </div>
      </div>
      <div class="btn">确认提现</div>
      <div class="nav">
          <ul>
              <li>
                  <span>最快<i style="color:#C43236;">15分钟</i>到账（工作日10:00-18:00）</span>
                  <span>最快15分钟到账，一般情况2小时到账，所有提现24小时内到账</span>
              </li>
              <li>
                  <span>正常提现免手续费，加急提现由公司垫付资金，加收万分之5手续费</span>
                  <span>更多优质服务只在点点配股票配资平台</span>
              </li>
              <li>
                  <span>支持银行多达<i style="color:#C43236;">10</i>多家</span>
                  <span>推荐您使用建设银行/工商银行/招商银行/农业银行提现最快</span>
              </li>
              <li>
                  <div>温馨提醒：如需要更快完成提现，可致电：4008921768</div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Accountcash',
  components: {
  },
  data () {
    return {
      color: 1,
      Accountcashtext: '暂无子账户',
      Accountcashshow: false,
      Accountcashnav: ['日配', '月配', '体验'],
      Rechargeamount: '0.00' // 充值金额
    }
  },
  mounted () {
    let a = 3
    this.$emit('router_left', a)
  },
  methods: {
    Accountcash (val) {
      this.Accountcashtext = val
      this.Accountcashshow = false
    }
  }
}
</script>

<style lang="scss">
.Accountcash {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .Accountcash_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .Accountcash_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .text {
        font-size: 1.4rem;
        color: #666666;
        margin-bottom: 1.8rem;
        span {
            color: #C43236;
        }
    }
    .text1 {
        width: 40rem;
        font-size: 1.4rem;
        line-height: 3rem;
        padding-left: 2rem;
        border-bottom: 1px solid #B5B5B5;
        margin: 0 auto;
        div {
            display: inline-block;
        }
        .one {
            width: 15rem;
        }
        .two {
            color: #C43236;
            width: 20rem;
            padding-right: 2rem;
            img {
                vertical-align: middle;
            }
            ul {
                        width: 22.7rem;
                        border: 1px solid #B5B5B5;
                        background-color: #fff;
                        position: absolute;
                        z-index: 10;
                        li {
                            width: 100%;
                            line-height: 3.3rem;
                            font-size: 1.2rem;
                            text-indent: 1rem;
                            border-bottom: 1px solid #B5B5B5;
                        }
                    }
        }
    }
    .text2 {
        width: 40rem;
        font-size: 1.4rem;
        line-height: 3rem;
        padding-left: 2rem;
        margin: 2rem auto;
        div {
            display: inline-block;
        }
        .one {
            width: 15rem;
        }
        .two {
            color: #C43236;
            width: 20rem;
            padding-right: 2rem;
        }
    }
    .text3 {
        width: 40rem;
        font-size: 1.4rem;
        line-height: 3rem;
        padding-left: 2rem;
        margin: 0 auto;
        div {
            display: inline-block;
        }
        .one {
            width: 15rem;
        }
        .two {
            color: #C43236;
            width: 20rem;
            border: 1px solid #B5B5B5;
            padding-left: 1rem;
            input {
                font-size: 1.4rem;
            }
        }
    }
    .text4 {
        width: 40rem;
        font-size: 1rem;
        line-height: 3rem;
        padding-left: 2rem;
        margin: 0rem auto;
        div {
            display: inline-block;
        }
        .one {
            width: 15rem;
        }
        .two {
            color: #888888;
            width: 20rem;
            padding-right: 2rem;
            span {
                color: #C43236;
            }
        }
    }
    .text5 {
        width: 40rem;
        font-size: 1rem;
        line-height: 3rem;
        padding-left: 2rem;
        margin: 0rem auto;
        div {
            display: inline-block;
        }
        .one {
            width: 15rem;
        }
        .two {
            color: #888888;
            width: 20rem;
            padding-right: 2rem;
            div {
                display: block;
                cursor: pointer;
            }
            span {
                display: inline-block;
                width: 1rem;
                height: 1rem;
                border: 1px solid #b5b5b5;
                border-radius: 50%;
                vertical-align: middle;
                margin-right: 0.5rem;
                position: relative;
                i {
                    display: inline-block;
                    width: 0.6rem;
                    height: 0.6rem;
                    background-color: #313131;
                    border-radius: 50%;
                    position: absolute;
                    top: 0.15rem;
                    left: 0.15rem;
                }
            }
        }
    }
    .btn {
                    width: 12rem;
                    height: 3.8rem;
                    line-height: 3.8rem;
                    text-align: center;
                    font-size: 1.4rem;
                    background-color: #C43236;
                    color: #fff;
                    border-radius: 16px;
                    margin: 2rem auto;
                    cursor: pointer;
                }
                .nav {
                    width: 100%;
                    ul {
                        width: 100%;
                        border: 1px solid #b5b5b5;
                        li {
                            height: 7.5rem;
                            padding-left: 2rem;
                            border-bottom: 1px solid #b5b5b5;
                            span {
                                display: block;
                                font-size: 1.4rem;
                                line-height: 3rem;
                            }
                            >span:nth-last-child(1){
                                color: #888;
                                font-size: 1.2rem;
                            }
                            div {
                                font-size: 1.4rem;
                                line-height: 7.5rem;
                                color: #C43236;
                            }
                        }
                        >li:nth-last-child(1){
                            border-bottom: none;
                            }
                    }
                }
}
</style>
