<template>
  <div class="recharge">
    <topindex :msg="msg"></topindex>
    <div class="conter">
      <assets></assets>
      <div class="on_recharge clearfix">
        <div class="left fl">
          <router-link to="Onlinerecharge"><div class="text">线上充值</div></router-link>
        </div>
        <div class="right fr">
          <router-link to="Offlinerecharge"><div class="text">线下充值</div></router-link>
        </div>
        </div>
        <h4>选择方式</h4>
        <div class="nav">
          <ul>
            <li><router-link to="day">日配</router-link></li>
            <li><router-link to="month">月配</router-link></li>
            <li><router-link to="experience">体验</router-link></li>
            <li><router-link to="query">查询</router-link></li>
          </ul>
        </div>
        <h4>保证金管理</h4>
        <div class="nav1">
          <ul>
            <router-link to="Additionalmargin"><li class="one"><div>追加保证金</div></li></router-link>
            <router-link to="Additionalquota"><li class="two"><div>追加配额</div></li></router-link>
            <router-link to="Reducingquota"><li class="three"><div>减少配额</div></li></router-link>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import topindex from '@/components/topindex'
import assets from '@/components/assets'
export default {
  name: 'recharge',
  components: {
    topindex,
    assets
  },
  data () {
    return {
      msg: '充值'
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.recharge {
  width: 100%;
  margin-bottom: 98px;
  .conter {
    width: 100%;
    padding: 0 45px;
    .on_recharge {
      width: 100%;
      margin-top: 64px;
      margin-bottom: 39px;
      div {
        width: 280px;
        height: 90px;
        border-radius:16px;
        background-color: #fff;
        color: #fff;
        border: 4px solid #333333;
        .text{
          background-color: #C43236;
          line-height: 82px;
          text-align: center;
          font-size: 36px;
          font-weight: normal;
        }
      }
      .left,.right {
        margin: 10px 0 0 10px;
      }
      .text {
        margin: -14px 0 0 -14px;
      }
    }
    h4 {
      font-size: 36px;
      font-weight: normal;
    }
    .nav {
      margin-top: 48px;
      margin-bottom: 62px;
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        li {
          width: 121px;
          height: 121px;
          line-height: 121px;
          margin-left: 48px;
          color: #C43236;
          font-size: 36px;
          text-align: center;
          background: url("../assets/images/矢量智能对象.png") no-repeat;
          background-size: 100% 100%;
        }
        :nth-child(1){
          margin-left: 0px;
        }
      }
    }
    .nav1 {
      margin-top: 40px;
      margin-bottom: 159px;
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        li {
          width: 156px;
          height: 184px;
          margin-left: 50px;
          color: #fff;
          font-size: 28px;
          text-align: center;
          div {
            padding-top: 20px;
          }
        }
        .one{
          margin-left: 0px;
          background: url("../assets/images/圆角矩形.png") no-repeat;
          background-size: 100% 100%;
        }
        .two{
          background: url("../assets/images/追加配额矩形.png") no-repeat;
          background-size: 100% 100%;
        }
        .three{
          background: url("../assets/images/减少配额矩形.png") no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
