<template>
  <div class="Messagecenter">
    <top :msg="msg"></top>
    <div class="nav clearfix">
      <div @click="colorshow=1" :class="{'color':colorshow==1}">消息通知</div>
      <div @click="colorshow=2" :class="{'color':colorshow==2}">官方公告</div>
    </div>
    <div class="text" v-for="(item,index) in Message" :key="index" v-if="colorshow==1">
        <div>{{item.text}}</div>
        <span>{{item.time}}</span>
        <span>{{item.miao}}</span>
    </div>
    <div class="text" v-for="(item,index) in Message2" :key="index" v-if="colorshow==2">
        <div>{{item.text}}</div>
        <span>{{item.time}}</span>
        <span>{{item.miao}}</span>
    </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'Messagecenter',
  components: {
    top
  },
  data () {
    return {
      msg: '消息中心',
      colorshow: 1,
      Message: [{text: '恭喜您15112123963注册成功！', time: '2018年-11-20', miao: '15:03:32'}],
      Message2: [{text: '恭喜您15112123963注册成功！', time: '2018年-11-20', miao: '15:03:32'},
        {text: '恭喜您15112123963注册成功！', time: '2018年-11-20', miao: '15:03:32'},
        {text: '恭喜您15112123963注册成功！', time: '2018年-11-20', miao: '15:03:32'}]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Messagecenter {
    margin-bottom: 98px;
  .nav {
    width: 100%;
    display: flex;
    font-size: 30px;
    color: #333333;
    border-bottom: 2px solid #d6d6d6;
     div {
      flex: 1;
      height: 90px;
      line-height: 90px;
      text-align: center;
    }
    .color {
        color:#3170FF;
    }
  }
  .text {
      padding: 20px;
    border-bottom: 2px solid #d6d6d6;
      div {
          color: #333333;
          font-size: 30px;
          margin-bottom: 20px;
      }
      >span:nth-child(3){
          margin-left: 40px;
      }
      span {
          color: #848484;
          font-size: 26px;
          margin-bottom: 14px;
      }
  }
}
</style>
