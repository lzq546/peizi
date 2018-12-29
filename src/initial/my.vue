<template>
  <div class="my">
    <topindex :msg="msg"></topindex>
    <div class="user">
      <div class="userimg"></div>
      <div class="useriPhone">151****3963</div>
      <div class="userinformation">
        <div class="balance">账户总余额：{{balance}}</div>
        <div class="assets">交易总资产：{{assets}}</div>
        <div class="profit">浮动盈亏：{{profit}}</div>
        <div class="cordon">浮动盈亏：{{cordon}}</div>
        <div class="openline">浮动盈亏：{{openline}}</div>
      </div>
      <router-link to="Messagecenter"><div class="message">
        <div class="text">
        <i class="messagebox"><img src="../assets/images/喇叭.png" alt=""></i>消息中心<span>{{message}}</span></div>
      </div></router-link>
    </div>
    <div class="nav">
      <ul>
        <li><router-link to="Mybankcard"><div class="navbox"><img src="@/assets/images/我要充值.png" alt=""><div class="text">我要充值</div></div></router-link></li>
        <li><router-link to="Cashwithdrawal"><div class="navbox"><img src="@/assets/images/我要提现图标.png" alt=""><div class="text">我要提现<br><span>可提金额{{cash}}</span></div></div></router-link></li>
      </ul>
    </div>
    <div class="conter">
      <h3>我要充值</h3>
      <div class="nav1">
        <ul>
          <li><router-link to="Mybankcard"><img src="@/assets/images/银行卡管理.png" alt=""><div>银行卡管理</div></router-link></li>
          <li><router-link to="security"><img src="@/assets/images/安全设置.png" alt=""><div>安全设置</div></router-link></li>
          <li><router-link to="Capital"><img src="@/assets/images/资金明细.png" alt=""><div>资金明细</div></router-link></li>
        </ul>
      </div>
      <h3>操盘管理</h3>
      <div class="nav1">
        <ul>
          <li><router-link to="Administration"><img src="@/assets/images/账户管理.png" alt=""><div>账号管理</div></router-link></li>
          <li><router-link to="query"><img src="@/assets/images/配资订单.png" alt=""><div>配资订单</div></router-link></li>
          <li><router-link to="Settlement"><img src="@/assets/images/结算申请图标.png" alt=""><div>结算申请</div></router-link></li>
        </ul>
      </div>
      <h3>推广返佣</h3>
      <div class="nav1 navlast">
        <ul>
          <li><router-link to="Invitation"><img src="@/assets/images/我的邀请图标.png" alt=""><div>我的邀请</div></router-link></li>
          <li @click="commission"><router-link to="Commission"><img src="@/assets/images/奖励明细.png" alt=""><div>奖励明细</div></router-link></li>
          <li><router-link to="activity"><img src="@/assets/images/精彩活动.png" alt=""><div>精彩活动</div></router-link></li>
        </ul>
      </div>
    </div>
    <div class="service">
      <h3>更多服务</h3>
      <ul>
        <li @click="apply"><div class="one"><div class="two"><span>申</span>申请代理</div></div></li>
        <li><router-link to="rule"><span>规</span>规则解释</router-link></li>
        <li><router-link to="feedback"><span>意</span>意见反馈</router-link></li>
        <li><router-link to="Helpcenter"><span>帮</span>帮助中心</router-link></li>
      </ul>
    </div>
    <!-- <foot></foot> -->
  </div>
</template>

<script>
import topindex from '@/components/topindex'
import foot from '@/components/foot'
export default {
  name: 'my',
  components: {
    foot,
    topindex
  },
  data () {
    return {
      msg: '账户',
      balance: '0.00',
      assets: '0',
      profit: '0',
      cordon: '0',
      openline: '0',
      message: '1',
      cash: '466666'
    }
  },
  methods: {
    apply () {
      this.$router.push({name: 'Apply', path: '/Apply'})
    },
    commission () {
      let a = '奖励收入明细'
      this.$store.commit('Yongjin_name', a)
    }
  }
}
</script>

<style scoped lang="scss">
.my {
  background-color: #E6E6E6;
  margin-bottom: 198px;
  .user {
    width: 100%;
    height: 280px;
    color: #fff;
    font-size: 26px;
    background-color: #333333;
    position: relative;
    overflow: hidden;
    .userimg {
      width: 118px;
      height: 118px;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      top: 50px;
      left: 100px;
    }
    .useriPhone {
      position: absolute;
      top: 188px;
      left: 79px;
    }
    .userinformation {
      position: absolute;
      left: 289px;
      top: 7px;
      // margin: 7px auto;
      div {
        margin-top: 23px;
      }
      .balance {
        font-size: 30px;
      }
    }
    .message {
      position: absolute;
      right: 53px;
      top: 24px;
      .text {
        display: inline-block;
        font-size: 22px;
        .messagebox {
          display: inline-block;
          width: 39px;
          height: 33px;
          vertical-align: middle;
          margin-right: 5px;
          margin-top: -5px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          font-size: 18px;
          padding: 5px 10px;
          background-color: #C53336;
          color: #fff;
          border-radius: 50%;
          position: absolute;
          top: -10px;
          right: -28px;
        }
      }
    }
  }
  .nav {
    width: 100%;
    margin-top: 20px;
    background-color: #fff;
    ul {
      width: 100%;
      display: flex;
      li {
        flex: 1;
        padding: 15px 0px;
        border-bottom: 2px solid #E2E2E2;
        :nth-child(1) {
          border-left: none;
        }:nth-child(2) {
          border-right: none;
        }
        .navbox {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 2px solid #E2E2E2;
          border-right: 2px solid #E2E2E2;
          img {
            width: 50px;
            height: 50px;
            margin-right: 24px;
          }
          .text {
            font-size: 30px;
            color: #555555;
            position: relative;
            span {
              font-size: 16px;
              color: #999999;
              // margin-top: 8px;
              // line-height: 24px;
            }
          }
        }
      }
    }
  }
  .conter {
    padding: 20px 0 50px 0;
    background-color: #fff;
    h3 {
      font-size: 30px;
      color: #444444;
      margin-left: 40px;
    }
    .nav1 {
      width: 100%;
      margin-top: 40px;
      margin-bottom: 78px;
      ul {
        width: 100%;
        display: flex;
        li {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          :first-child{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          }
          img {
            width: 70px;
            height: 70px;
          }
          div {
            font-size: 30px;
            color: #444444;
            margin-top: 30px;
          }
        }
      }
    }
    .navlast {
      margin-bottom: 50px;
    }
  }
  .service {
    margin-top: 12px;
    background-color: #fff;
    h3 {
      font-size: 30px;
      color: #444444;
      padding: 20px 0 21px 40px;
      border-bottom: 2px solid #EFEFEF;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        height: 60px;
        border-bottom: 2px solid #EFEFEF;
        font-size: 26px;
        color: #444444;
        display: flex;
        justify-content: center;
        align-items: center;
        .one {
          width:156px;
          height:42px;
          border:1px solid rgba(102,102,102,1);
          border-radius:8px;
        }
        .two {
          width:156px;
          height:42px;
          line-height: 42px;
          text-align: center;
          border:1px solid rgba(102,102,102,1);
          border-radius:8px;
          margin: -5px 0 0 -5px;
          background-color: #fff;
        }
        span {
          font-size: 32px;
          color: #DA5730;
          margin-right: 7px;
        }
      }
    }
  }
}
</style>
