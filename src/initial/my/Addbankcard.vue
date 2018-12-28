<template>
  <div class="Addbankcard">
    <top :msg="msg"></top>
    <div class="center">
      <div class="text">真实姓名</div>
      <div class="inputbox">
        <input type="text" placeholder="请输入真实姓名" v-model="name">
      </div>
      <div class="text">身份证号码</div>
      <div class="inputbox">
        <input type="text" placeholder="请输入身份证号码" v-model="IDcard">
      </div>
      <div class="text">选择银行</div>
      <div class="inputbox">
        <input type="text" placeholder="请输入银行名字" v-model="bank">
      </div>
      <div class="text">银行卡号</div>
      <div class="inputbox">
        <input type="text" placeholder="请输入银行卡号" v-model="bancard">
      </div>
      <div class="text">所属地区</div>
      <div class="inputbox">
        <input type="text" placeholder="请选择地区" v-model="region">
      </div>
      <div class="text">开户行</div>
      <div class="inputbox">
        <input type="text" placeholder="请输入开户行" v-model="openbank">
      </div>
      <div class="text">提现密码</div>
      <div class="inputbox">
        <input type="password" placeholder="提现密码" v-model="password">
      </div>
    <div class="text3 clearfix">
        <router-link to="modifyCash">
        <div class="fl">未设置提现密码</div>
        <div class="fr">前往设置»</div>
        </router-link>
    </div>
      <button>立即添加</button>
    </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'Addbankcard',
  components: {
    top
  },
  data () {
    return {
      msg: '添加银行卡',
      name: '',
      IDcard: '',
      bank: '',
      bancard: '',
      region: '',
      openbank: '',
      password: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Addbankcard {
  margin-bottom: 98px;
  .center {
    padding-left:30px;
    padding-right: 41px;
    .text {
      margin-top: 30px;
      margin-bottom: 21px;
      color: #666666;
      font-size: 30px;
    }
    .inputbox {
      width: 100%;
      height: 80px;
      border: 2px solid #C53336;
      color: #333;
      border-radius: 10px;
      padding: 25px 40px;
      input {
        font-size: 30px;
      }
    }
  .text3 {
      font-size: 24px;
      color: #C43236;
      padding-top: 23px;
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
