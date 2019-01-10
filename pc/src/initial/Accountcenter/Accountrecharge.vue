<template>
  <div class="Accountrecharge">
      <div class="Accountrecharge_text">我要充值</div>
      <div class="Accountrecharge_xian"></div>
        <div class="Accountrecharge_box">
            <div class="Accountrecharge_nav clearfix">
                <div @click="color =1" :class="{'color':color ==1}">认证充值</div>
                <div @click="color =2" :class="{'color':color ==2}">快捷支付</div>
                <div @click="color =3" :class="{'color':color ==3}">线下充值</div>
            </div>
            <div class="center" v-if="color==1">
                <div class="text">账户余额：{{balance}}元</div>
                <div class="box">
                    <div>银行账户：</div>
                    <input type="text" v-model="Bankaccount">
                </div>
                <div class="box">
                    <div>真实姓名：</div>
                    <input type="text" v-model="name">
                </div>
                <div class="box">
                    <div>身份证号：</div>
                    <input type="text" v-model="IDnumber">
                </div>
                <div class="box">
                    <div>手机号码：</div>
                    <input type="text" v-model="iPhone">
                </div>
                <div class="box">
                    <div>充值金额：</div>
                    <input type="text" v-model="Rechargeamount">
                </div>
                <div class="btn">提交</div>
                <div class="text">温馨提示：</div>
                <div class="text1">认证支付限额</div>
                <div class="box1" v-for="(item,index) in Quotabox" :key="index">
                    <div>
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="text2">{{item.bank}}</div>
                    </div>
                    <div>
                        <span>{{item.Singlestroke}}万</span>
                        <span>单笔限额</span>
                    </div>
                    <div>
                        <span>{{item.Singleday}}万</span>
                        <span>单日限额</span>
                    </div>
                </div>
            </div>
            <!-- 快捷支付 -->
            <div class="center" v-if="color==2">
                <div class="text">账户余额：{{balance}}元</div>
                <div class="box">
                    <div>充值金额：</div>
                    <input type="text" v-model="Rechargeamount">
                </div>
                <div class="btn">提交</div>
                <div class="text">温馨提示：</div>
                <div class="text1">快捷支付-手机端限额</div>
                <div class="box1" v-for="(item,index) in Quotabox" :key="index">
                    <div>
                        <div class="img">
                            <img src="" alt="">
                        </div>
                        <div class="text2">{{item.bank}}</div>
                    </div>
                    <div>
                        <span>{{item.Singlestroke}}万</span>
                        <span>单笔限额</span>
                    </div>
                    <div>
                        <span>{{item.Singleday}}万</span>
                        <span>单日限额</span>
                    </div>
                </div>
            </div>
            <div class="center" v-if="color==3">
                <div class="text" style="color:#888">您可以通过网上银行或银行柜台向钱程策略转账</div>
                <div class="boxnav" v-for="(item,index) in navbox" :key="index">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                    <div>
                        <span>账号：{{item.Accountnumber}}</span>
                        <span>户名：{{item.Accountname}}</span>
                        <span>开户行：{{item.bank}}</span>
                    </div>
                </div>
                <div class="text3">
                    <div class="text33">
                        <div>您可以通过网上银行或银行柜台向钱程策略转账</div>
                        <div>您可以通过网上银行或银行柜台向钱程策略转账</div>
                        <div>您可以通过网上银行或银行柜台向钱程策略转账</div>
                    </div>
                </div>
                <div class="text4">
                    充值金额：<input type="text" placeholder="请输入充值金额" v-model="Rechargeamount">
                </div>
                <div class="text5" @click="Paymentshow=!Paymentshow">
                    支付方式：<div class="clearfix">
                        {{Paymenttext}}
                        <span><i></i></span>
                    </div>
                    <ul v-if="Paymentshow">
                        <li v-for="(item,index) in Paymentnav" @click.stop="payment(item)" :key="index">{{item}}</li>
                    </ul>
                </div>
                <div class="text4">
                    充值账户名称：<input style="border-top:none;border-left:none;border-right:none;" type="text">
                </div>
                <div class="btn">提交</div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Accountrecharge',
  components: {
  },
  data () {
    return {
      color: 1,
      balance: '0.00',
      Paymentshow: false,
      Paymenttext: '请选择',
      Rechargeamount: '', // 充值金额
      iPhone: '', // 手机号码
      IDnumber: '', // 身份证号
      name: '', // 姓名
      Bankaccount: '', // 银行卡账号
      Quotabox: [
        { imgsrc: '', bank: '工商银行', Singlestroke: '0.2', Singleday: '0.2' },
        { imgsrc: '', bank: '工商银行', Singlestroke: '0.2', Singleday: '0.2' },
        { imgsrc: '', bank: '工商银行', Singlestroke: '0.2', Singleday: '0.2' }
      ],
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
  mounted () {
    let a = 2
    this.$emit('router_left', a)
  },
  methods: {
    payment (val) {
      this.Paymenttext = val
      this.Paymentshow = false
    }
  }
}
</script>

<style lang="scss">
.Accountrecharge {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .Accountrecharge_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .Accountrecharge_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .Accountrecharge_box {
        background-color: #F4F4F4;
        border-radius: 2.5rem;
        overflow: hidden;
        .Accountrecharge_nav {
                display: inline-block;
            height: 4.4rem;
            line-height: 4.4rem;
            border: 2px solid #B5B5B5;
            border-top-left-radius: 2.5rem;
            overflow: hidden;
            div {
                display: inline-block;
                width: 13rem;
                font-size: 1.4rem;
                text-align: center;
                border-right: 2px solid #B5B5B5;
                float: left;
                cursor: pointer;
            }
            .color {
                background-color: #C43236;
                color: #fff;
            }
            >div:nth-last-child(1) {
                border-right: none;
            }
        }
        .center {
            width: 38rem;
            margin: 5rem auto;
            .text {
                font-size: 1.4rem;
                margin-bottom: 2rem;
            }
            .box {
                width: 100%;
                height: 3.4rem;
                margin-bottom: 1rem;
                div {
                    width: 8rem;
                    font-size: 1.4rem;
                    line-height: 3.4rem;
                    display: inline-block;
                }
                input {
                    width: 28rem;
                    height: 3rem;
                    font-size: 1.2rem;
                    text-indent: 1rem;
                    border: 1px solid #B5B5B5;
                    background-color: #f4f4f4;
                }
            }
                .btn {
                    width: 16rem;
                    height: 3.8rem;
                    line-height: 3.8rem;
                    text-align: center;
                    font-size: 1.4rem;
                    background-color: #C43236;
                    color: #fff;
                    border-radius: 1.6rem;
                    margin: 5rem auto;
                    cursor: pointer;
                }
                .text1 {
                    width: 100%;
                    height: 2.3rem;
                    line-height: 2.3rem;
                    font-size: 1.6rem;
                    text-indent: 1rem;
                    border-left: 0.5rem solid #00A0E9;
                }
                .box1 {
                    width: 100%;
                    margin-top: 2rem;
                    font-size: 1.2rem;
                    .img {
                        width: 3rem;
                        height: 3rem;
                        background-color: #009944;
                        margin-right: 0;
                    }
                    div {
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 5rem;
                        span {
                            display: block;
                            line-height: 2rem;
                        }
                    }
                    .text2 {
                        margin-right: 0;
                    }
                }
                .boxnav {
                    width: 100%;
                    margin-bottom: 1rem;
                    .img {
                        width: 9.6rem;
                        height: 9.6rem;
                        background-color: #AC6A00;
                        vertical-align: middle;
                    }
                    div {
                        display: inline-block;
                        vertical-align: middle;
                        span {
                            display: block;
                            font-size: 1.4rem;
                            line-height: 3rem;
                        }
                    }
                }
                .text3 {
                    width: 100%;
                    height: 11rem;
                    padding: 0.5rem 0.75rem;
                    background-color: #E6E6E6;
                    .text33 {
                        width: 100%;
                        height: 100%;
                        font-size: 1.2rem;
                        color: #666666;
                        border: 1px solid #C5C5C5;
                        padding-left: 2rem;
                        padding-top: 1rem;
                        div {
                            margin-bottom: 2rem;
                        }
                    }
                }
                .text4 {
                    font-size: 1.4rem;
                    margin-top: 2rem;
                    input {
                        width: 15rem;
                        height: 2rem;
                        border: 1px solid #B5B5B5;
                        background-color: #f4f4f4;
                        font-size: 1.2rem;
                        text-indent: 1rem;
                    }
                }
                .text5 {
                    font-size: 1.4rem;
                    margin-top: 2rem;
                        position: relative;
                    div {
                        display: inline-block;
                        width: 15rem;
                        height: 2rem;
                        line-height: 2rem;
                        border: 1px solid #B5B5B5;
                        background-color: #f4f4f4;
                        font-size: 1.2rem;
                        text-indent: 1rem;
                        vertical-align: middle;
                        overflow: hidden;
                        span {
                            display: inline-block;
                            width: 3rem;
                            height: 2rem;
                            background-color: #B5B5B5;
                            float: right;
                            position: relative;
                            i {
                                border: 0.5rem solid #B5B5B5;
                                border-top-color: #fff;
                                position: absolute;
                                top: 0.8rem;
                            }
                        }
                    }
                    ul {
                        width: 15rem;
                        position: absolute;
                        left: 7rem;
                        background-color: #f4f4f4;
                        border: 1px solid #B5B5B5;
                        z-index: 10;
                        li {
                            font-size: 1.2rem;
                            line-height: 2rem;
                        }
                    }
                }
        }
    }
}
</style>
