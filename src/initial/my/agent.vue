<template>
  <div class="agent">
    <top :msg="msg"></top>
    <div class="bjimg"><img
        src="../../assets/images/背景.png"
        alt=""
      ></div>
    <div class="text">
      <div class="userimg"></div>
      <div class="username">用户昵称</div>
      <div class="box">
        <div class="one">
          <div>总收入佣金</div>
          <span>104800</span>
        </div>
        <div class="one">
          <div>总收入佣金</div>
          <span>104800</span>
        </div>
        <div class="one">
          <div>可提现余额</div>
          <span>******</span>
        </div>
      </div>
    </div>
    <div class="text1">
      <div class="nav">
        <ul>
          <li
            @click="color=1"
            :class="{'color':color==1}"
          >今日战报</li>
          <li
            @click="color=2"
            :class="{'color':color==2}"
          >本月数据</li>
          <li
            @click="color=3"
            :class="{'color':color==3}"
          >业务数据</li>
        </ul>
      </div>
      <table v-if="color==1">
        <tr>
          <td>
            <div>邀请注册账户</div>
            <span>0</span>
          </td>
          <td>
            <div>充值金额</div>
            <span>0</span>
          </td>
        </tr>
        <tr>
          <td>
            <div>团队日佣金</div>
            <span>0</span>
          </td>
          <td>
            <div>个人日佣金</div>
            <span>0</span>
          </td>
        </tr>
      </table>
      <table v-if="color==2">
        <tr>
          <td>
            <div>团队邀请数</div>
            <span>0</span>
          </td>
          <td>
            <div>个人邀请数</div>
            <span>0</span>
          </td>
        </tr>
        <tr>
          <td>
            <div>团队日佣金</div>
            <span>0</span>
          </td>
          <td>
            <div>个人日佣金</div>
            <span>0</span>
          </td>
        </tr>
      </table>
      <table v-if="color==3">
        <tr>
          <td>
            <div>下级用户人数</div>
            <span>0</span>
          </td>
          <td>
            <div>下级代理人数</div>
            <span>0</span>
          </td>
        </tr>
        <tr>
          <td>
            <div>团队历史收益</div>
            <span>0</span>
          </td>
          <td>
            <div>个人历史收益</div>
            <span>0</span>
          </td>
        </tr>
      </table>
      <div class="xian"></div>
      <router-link to="Myusers">
      <div class="text2">
        <div>我的用户</div>
        <span><img
            src="../../assets/images/右箭头.png"
            alt=""
          ></span>
      </div>
      </router-link>
      <router-link to="Rechargedetails">
      <div class="text2 text3">
        <div>用户充值明细</div>
        <span><img
            src="../../assets/images/右箭头.png"
            alt=""
          ></span>
      </div>
      </router-link>
      <router-link to="Presentationdetails">
      <div class="text2">
        <div>用户提现明细</div>
        <span><img
            src="../../assets/images/右箭头.png"
            alt=""
          ></span>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'agent',
  components: {
    top
  },
  data () {
    return {
      msg: '代理首页',
      name: '',
      iphone: '',
      color: 1
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.agent {
  width: 100%;
  padding-bottom: 198px;
  background-color: #f8f8f8;
  position: relative;
  .bjimg {
    width: 100%;
    height: 356px;
    position: absolute;
    top: 0px;
    left: 0px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    width: 590px;
    height: 290px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 15px 1px rgba(176, 176, 175, 0.15);
    border-radius: 23px;
    margin: 0px auto;
    margin-top: 126px;
    position: relative;
    z-index: 10;
    .userimg {
      width: 146px;
      height: 146px;
      background-color: black;
      border-radius: 50%;
      position: absolute;
      overflow: hidden;
      top: -73px;
      left: 222px;
    }
    .username {
      font-size: 32px;
      text-align: center;
      padding-top: 100px;
      padding-bottom: 20px;
    }
    .box {
      width: 100%;
      font-size: 24px;
      color: #333;
      display: flex;
      .one {
        flex: 1;
        height: 136px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        span {
          margin-top: 13px;
        }
      }
    }
  }
  .text1 {
    width: 600px;
    height: 627px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 15px 1px rgba(176, 176, 175, 0.15);
    border-radius: 23px;
    margin: 30px auto;
    overflow: hidden;
    .nav {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        border-top-left-radius: 23px;
        border-top-right-radius: 23px;
        border: 2px solid #c43236;
        > li:first-child {
          border-left: none;
        }
        li {
          flex: 1;
          height: 58px;
          line-height: 58px;
          text-align: center;
          font-size: 30px;
          border-left: 2px solid #c43236;
        }
        .color {
          background-color: #c43236;
          color: #fff;
        }
      }
    }
    table {
      width: 100%;
      margin-top: 90px;
      tr {
        width: 100%;
        display: flex;
        td {
          flex: 1;
          height: 78px;
          font-size: 24px;
          color: #333;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 2px solid #f3f3f3;
          border-bottom: none;
          span {
            margin-top: 13px;
          }
        }
      }
    }
    .xian {
      width: 600px;
      height: 14px;
      background-color: #f6f6f6;
    }
    .text2 {
      width: 100%;
      padding: 0 20px 0 40px;
      height: 100px;
      display: flex;
      align-items: center;
      div {
        flex: 1;
        font-size: 24px;
        color: #333;
      }
      span {
        height: 26px;
        img {
          height: 100%;
        }
      }
    }
    .text3 {
      border-bottom: 4px solid #f6f6f6;
      border-top: 4px solid #f6f6f6;
    }
  }
}
</style>
