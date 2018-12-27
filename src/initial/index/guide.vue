<template>
  <div class="guide">
    <top :msg="msg"></top>
    <h3><span>1</span></h3>
    <div class="box">
      <div class="img">
        <div class="text">打开APP点击注册页面</div>
        <img
          src="../../assets/images/11.png"
          alt=""
        >
      </div>
      <div class="img">
        <div class="text">根据提示完成注册信息</div>
        <img
          src="../../assets/images/12.png"
          alt=""
        >
      </div>
    </div>
    <h3><span>2</span>绑定银行卡</h3>
    <div class="box">
      <div class="img">
        <div class="text">点击银行卡管理</div>
        <img
          src="../../assets/images/13.png"
          alt=""
        >
      </div>
      <div class="img">
        <div class="text">添加完成后完成实名认证</div>
        <img
          src="../../assets/images/14.png"
          alt=""
        >
      </div>
    </div>
    <h3><span>3</span>充值保证金</h3>
    <div class="box">
      <div class="img">
        <div class="text">点击我要充值，进行保证金充值</div>
        <img
          src="../../assets/images/15.png"
          alt=""
        >
      </div>
      <div class="img">
        <div class="text">选择一种方式充值</div>
        <img
          src="../../assets/images/16.png"
          alt=""
        >
      </div>
    </div>
    <h3><span>4</span>选择配资策略</h3>
    <div class="box">
      <div class="img">
        <div class="text">首页点击按月/按天/免息操盘进行申请配资策略</div>
        <img
          src="../../assets/images/17.png"
          alt=""
        >
      </div>
      <div class="img">
        <div class="text">选择配资策略账户资金保持充足</div>
        <img
          src="../../assets/images/18.png"
          alt=""
        >
      </div>
    </div>
    <h3><span>5</span>获取交易账号</h3>
    <div class="box">
      <div class="img">
        <div class="text">点击消息中心</div>
        <img
          src="../../assets/images/19.png"
          alt=""
        >
      </div>
      <div class="img">
        <div class="text">查看消息中心</div>
        <img
          src="../../assets/images/20.png"
          alt=""
        >
      </div>
    </div>
    <h3><span>6</span>操作股票</h3>
    <div class="box">
      <div class="img">
        <div class="text">所有的无效挂单，将于16：00后自动撤单，冻结资金</div>
        <img
          src="../../assets/images/21.png"
          alt=""
        >
      </div>
      <div class="img">
        <div class="text">操作股票</div>
        <img
          src="../../assets/images/22.png"
          alt=""
        >
      </div>
    </div>
    <h3><span>7</span>结算盈利</h3>
    <div class="box">
      <div class="img">
        <div class="text">盈利提取</div>
        <img src="../../assets/images/23.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'guide',
  components: {
    top
  },
  data () {
    return {
      msg: '新手指南'
    }
  },
  mounted () {
  },
  methods: {},
  destroyed: function () {}
}
</script>

<style scoped lang="scss">
.guide {
    margin-bottom: 148px;
  h3 {
    font-size: 30px;
    color: #333333;
    span {
      font-size: 50px;
      color: #e60012;
      margin-left: 75px;
      margin-right: 32px;
    }
  }
  .box {
    width: 100%;
    font-size: 15px;
    color: #333333;
    margin-bottom: 100px;
    display: flex;
    .img {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .text {
          margin: 40px 0;
      }
      img {
        width: 241px;
        height: 445px;
      }
    }
  }
}
</style>
