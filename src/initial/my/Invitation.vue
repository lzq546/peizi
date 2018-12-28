<template>
  <div class="Invitation">
    <top :msg="msg"></top>
    <div class="nav">
      <ul>
        <li
          @click="color=1"
          :class="{'color':color==1}"
        >我的邀请</li>
        <li>
          <router-link to="/Commission">返佣记录</router-link>
        </li>
        <li
          @click="color=2"
          :class="{'color':color==2}"
        >邀请记录</li>
      </ul>
    </div>
    <div
      class="one"
      v-if="color == 1"
    >
      <div class="text">方法一：发送下面邀请链接给好友或者朋友，通过此链接，注册成功可成为你的推广客户。</div>
      <div class="text1"><span>邀请链接：</span><input
          readonly='readonly'
          type="text"
          v-model="lianjie"
        ></div>
      <button>复制</button>
      <div class="text2">方法一：右键复制你的专属二维码，并分享给你的好友</div>
      <div class="img"><img
          src=""
          alt=""
        ></div>
      <button>保存图片</button>
    </div>
    <div class="table"
      v-if="color == 2">
      <table>
        <tr>
          <th>邀请时间</th>
          <th>被邀请人</th>
          <th>手机号码</th>
          <th>奖励记录</th>
        </tr>
        <tr
          v-for="(item,index) in Invitationnav"
          :key="index"
        >
          <td>{{item.time}}</td>
          <td>{{item.name}}</td>
          <td>{{item.iphone}}</td>
          <td>{{item.market}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Invitation',
  components: {
    top
  },
  data () {
    return {
      msg: '我的邀请',
      color: 1,
      lianjie: 'http://www.jsz559.com',
      Invitationnav: [
        { time: '2018-12-7', name: '1226', iphone: '0.28', market: '20000' },
        { time: '2018-12-7', name: '1226', iphone: '0.28', market: '20000' }
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Invitation {
  width: 100%;
  margin-bottom: 198px;
  .nav {
    width: 100%;
    ul {
      padding: 10px 0 20px 0;
      width: 100%;
      border-bottom: 10px solid #f7f7f7;
      display: flex;
      > li:first-child {
        border-left: none;
      }
      li {
        flex: 1;
        text-align: center;
        height: 70px;
        line-height: 70px;
        font-size: 30px;
        color: #333;
        border-left: 4px solid #c43236;
      }
      .color {
        color: #c43236;
      }
    }
  }
  .one {
    width: 100%;
    padding: 0 40px;
    .text {
      font-size: 28px;
      line-height: 32px;
      color: #333;
      margin: 29px 0;
    }
    .text1 {
      font-size: 28px;
      color: #333;
      input {
        width: 400px;
        height: 80px;
        text-indent: 40px;
        font-size: 28px;
        color: #333;
        border: 2px solid #313131;
        border-radius: 13px;
        vertical-align: top;
      }
      span {
        margin-top: 12px;
      }
    }
    button {
      display: block;
      width: 296px;
      height: 90px;
      line-height: 90px;
      text-align: center;
      font-size: 38px;
      color: #fff;
      background: #c43236;
      border-radius: 16px;
      margin: 40px auto;
    }
    .text2 {
      font-size: 28px;
      line-height: 32px;
      color: #333;
      margin-top: 58px;
      margin-bottom: 100px;
    }
    .img {
      width: 298px;
      height: 298px;
      margin: 0 auto;
      background-color: #c43236;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .table {
    width: 100%;
    table {
      width: 100%;
      tr {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 2px solid #d6d6d6;
        th {
          flex: 1;
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: 26px;
          color: #333333;
        }
        > td:nth-child(1) {
          font-size: 22px;
        }
        td {
          flex: 1;
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: 26px;
          color: #333333;
        }
      }
    }
  }
}
</style>
