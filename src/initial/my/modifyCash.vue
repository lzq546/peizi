<template>
  <div class="modifyCash">
    <top :msg="msg"></top>
    <div class="center">
      <div class="inputbox">
        <input type="text" placeholder="请输入提现密码" v-model="oldpwd">
      </div>
      <div class="inputbox">
        <input type="text" placeholder="请输入提现密码" v-model="newpwd">
      </div>
      <button @click="go">确认</button>
    </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'modifyCash',
  components: {
    top
  },
  data () {
    return {
      msg: '忘记密码',
      oldpwd: '',
      newpwd: ''
    }
  },
  methods: {
    go () {
      this.$router.go(-1)// 返回上一层
    }
  }
}
</script>

<style scoped lang="scss">
.modifyCash {
  margin-bottom: 98px;
  .center {
    padding-left:30px;
    padding-right: 41px;
    .inputbox {
      width: 100%;
      height: 80px;
      border: 2px solid #C53336;
      color: #333;
      border-radius: 10px;
      padding: 25px 40px;
      margin-top: 50px;
      input {
        font-size: 30px;
      }
    }
    button {
      display: block;
      width: 600px;
      height: 88px;
      line-height: 88px;
      text-align: center;
      font-size: 36px;
      margin: 80px auto;
      color: #fff;
      background-color: #C53336;
      border-radius: 10px;
      margin-bottom: 178px;
    }
  }
}
</style>
