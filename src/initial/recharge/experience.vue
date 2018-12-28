<template>
  <div class="experience">
    <top :msg="msg"></top>
    <div class="text clearfix">
      <div class="left">请选择您的免息资金</div>
      <router-link to="limit"><div class="right fr">限制个股名单</div></router-link>
    </div>
    <div class="nav1">
      <ul>
        <li>
          <div>5000</div>
        </li>
        <li>
          <div>操盘本金</div>
          <div>1000</div>
        </li>
        <li>
          <div>超盘倍数</div>
          <div>5</div>
        </li>
        <li>
          <div>您的配资</div>
          <div>
            5000
          </div>
        </li>
        <li>
          <div>总超盘资金</div>
          <div>6000</div>
        </li>
        <li>
          <div>使用天数</div>
          <div>15</div>
        </li>
        <li>
          <div>配资利息</div>
          <div>0.00元</div>
        </li>
      </ul>
    </div>
    <h3>特别提醒</h3>
    <div class="text1">1、第个交易日14:55前必须卖出股份。</div>
    <div class="text1">2、免费体验“股票交易账户”会在下个交易日9:30前 开出。</div>
    <div class="text1">3、到期后如需继续交易，可以返回首页选择按月<br>配资或者按天配资。</div>
    <div class="text1">4、每个新注册的用户可以免息体验一次。</div>
    <div class="btn" @click="btn">立即申请</div>
    <div class="message" v-if="messagebox" @click="messagebox=!messagebox">
    <div class="messagebox clearfix">
        <div>申请确认</div>
        <button class="fl" @click.stop="confirm">确认</button>
        <button class="fr" @click.stop="cancel">取消</button>
    </div>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'experience',
  components: {
    top
  },
  data () {
    return {
      msg: '免息体验',
      messagebox: false
    }
  },
  methods: {
    btn () {
      this.messagebox = true
    },
    cancel () {
      this.messagebox = false
    },
    confirm () {

    }
  }
}
</script>

<style scoped lang="scss">
.experience {
    margin-bottom: 198px;
  .text {
    margin: 20px 50px 39px 46px;
    font-size: 28px;
    .left {
      display: inline-block;
    }
    .right {
      display: inline-block;
      color: #1c89cf;
    }
  }
  .nav1 {
    width: 100%;
    ul {
      width: 100%;
      padding: 0 25px;
      > li:first-child {
        border-top: 2px solid #e0e0e0;
      }
      li {
        width: 100%;
        height: 80px;
        padding-left: 14px;
        font-size: 28px;
        color: #555555;
        border-bottom: 2px solid #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          span {
            color: #e60012;
          }
        }
      }
    }
  }
  h3 {
      font-size: 32px;
      color: #E60012;
      margin: 30px 0 22px 40px;
  }
  .text1 {
      padding: 0 76px 0 40px;
      font-size: 28px;
      line-height: 32px;
      color: #999999;
      margin-bottom: 19px;
  }
  .btn {
    width: 80%;
    height: 90px;
    line-height: 90px;
    margin: 0 auto;
    text-align: center;
    font-size: 36px;
    background-color: #c43236;
    border-radius: 16px;
    color: #fff;
  }
  .message {
    width: 100%;
    height: 100%;
    background: rgba(112, 112, 112, 0.5);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 11;
  }
  .messagebox {
    width: 534px;
    height: 534px;
    font-size: 40px;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -267px;
    margin-left: -267px;
    padding: 88px 60px;
    button {
      background-color: #C43236;
      color: #fff;
      padding: 21px 41px;
      margin-top: 107px;
    }
  }
}
</style>
