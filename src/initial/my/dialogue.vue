<template>
  <div class="dialogue">
    <top :msg="msg"></top>
    <div class="center">
        <div class="text">{{time}}</div>
        <div class="text1">您好，欢迎来到点点配平台，我们现在有免息 操盘15天的活动，我可以详细为您介绍么？</div>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'dialogue',
  components: {
    top
  },
  data () {
    return {
      msg: '对话窗口',
      time: '15:27:19'
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.dialogue {
  width: 100%;
  height: 100%;
  padding-bottom: 98px;
  .center {
      width: 100%;
      height: 100%;
      padding: 15px 30px;
      background-color: #F6F6F6;
      .text {
          font-size: 28px;
          text-align: center;
          color: #888888;
      }
      .text1 {
          padding: 23px;
          font-size: 30px;
          line-height: 38px;
          color:#666666;
          background-color: #E0E0E0;
          border-radius: 10px;
          letter-spacing:2px;
          margin-top: 44px;
      }
  }
}
</style>
