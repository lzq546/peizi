<template>
  <div class="Apply">
    <top :msg="msg"></top>
    <div class="name text">
        <div>姓名：</div>
        <input type="text" placeholder="请填写真实姓名" v-model="name">
    </div>
    <div class="iphone text">
        <div>手机号码：</div>
        <input type="text" placeholder="请输入手机号码" v-model="iphone">
    </div>
    <div class="btn">
        <button>申请</button>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Apply',
  components: {
    top
  },
  data () {
    return {
      msg: '申请代理',
      name: '',
      iphone: ''
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Apply {
  width: 100%;
  margin-bottom: 198px;
  .text {
      width: 100%;
      height: 106px;
      line-height: 106px;
      font-size: 28px;
      border-bottom: 2px solid #D9D9D9;
      display: flex;
      div {
          flex: 1;
          margin-left: 40px;
      }
      input {
          flex: 3
      }
  }
  .btn {
      width: 100%;
      padding: 60px 50px;
      button {
          display: block;
          width: 100%;
          height: 90px;
          font-size: 34px;
          line-height: 90px;
          text-align: center;
          border-radius: 12px;
          color: #fff;
          background-color: #C43236;
      }
  }
}
</style>
