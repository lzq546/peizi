<template>
  <div class="Rechargedetails">
    <top :msg="msg"></top>
    <div class="text" v-for="(item,index) in nav" :key="index">
        <div class="one">
            <div>{{item.name}}</div>
            <div>{{item.time}}</div>
        </div>
        <span>+{{item.money}}</span>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Rechargedetails',
  components: {
    top
  },
  data () {
    return {
      msg: '用户充值明细',
      nav: [
        {name: '支付宝转账给啦啦啦', time: '18-11-20  23:22', money: '60.0'},
        {name: '支付宝转账给啦啦啦', time: '18-11-20  23:22', money: '30.0'}
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Rechargedetails {
  width: 100%;
  padding-bottom: 198px;
  .text {
      width: 100%;
      height: 100px;
      font-size: 20px;
      padding: 0 40px;
      border-bottom: 2px solid #C2C2C2;
      color: #333;
      display: flex;
      align-items: center;
      .one {
          flex: 1;
          display: flex;
          flex-direction: column;
          >div:first-child{
              margin-bottom: 13px;
          }
      }
      span {
          font-size: 30px;
          text-align: right;
      }
  }
}
</style>
