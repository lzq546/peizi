<template>
  <div class="security">
    <top :msg="msg"></top>
    <div class="userimg">
        <img src="" alt="">
    </div>
    <div class="username">
        {{iphone}}
    </div>
    <div class="text">点击头像修改</div>
    <div class="xian"></div>
    <router-link to="modify">
    <div class="text1 clearfix">
        <div class="fl">登录密码</div>
        <div class="fr">修改</div>
    </div>
    </router-link>
    <router-link to="modifyCash">
    <div class="text1 clearfix">
        <div class="fl">提现密码</div>
        <div class="fr">修改</div>
    </div>
    </router-link>
    <div class="text1" @click="changeclick">
        检查新版本
    </div>
    <div class="text2" :class="{'text2color':text2color}">已是最新版本</div>
    <button>退出登录</button>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'security',
  components: {
    top
  },
  data () {
    return {
      msg: '安全设置',
      iphone: '151****3963',
      text2color: false
    }
  },
  methods: {
    changeclick () {
      let self = this
      self.text2color = true
      setTimeout(function () {
        self.text2color = false
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
.security {
  margin-bottom: 98px;
  .userimg {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      margin: 30px auto;
      overflow: hidden;
      background-color: #32B16C;
      img {
          width: 100%;
          height: 100%;
      }
  }
  .username {
      font-size: 30px;
      color: #666;
      margin-top: 25px;
      margin-bottom: 25px;
      text-align: center;
  }
  .text {
      font-size: 26px;
      color: #666;
      text-align: center;
  }
  .xian {
      width: 100%;
      height: 16px;
      background-color: #E0E0E0;
      margin-top: 34px;
  }
  .text1 {
      width: 100%;
      height: 110px;
      line-height: 110px;
      padding-left: 39px;
      padding-right: 59px;
      font-size: 32px;
      color: #333;
      border-bottom: 2px solid #E0E0E0;
  }
  .text2 {
      margin-top: 20px;
      text-align: center;
      font-size: 30px;
      opacity:0;
      transition: opacity 3s;
  }
  .text2color {
      opacity: 1;
  }
  button {
      display: block;
      width: 600px;
      height: 90px;
      line-height: 90px;
      font-size: 40px;
      margin: 110px auto;
      color: #fff;
      background-color: #C43236;
      text-align: center;
      border-radius: 14px;
  }
}
</style>
