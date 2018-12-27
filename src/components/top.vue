<template>
    <div class="top" :class="{'color':msg=='代理首页'}">
      <div class="left" @click="back"><img src="../assets/images/左箭头.png" alt=""></div>
      <div class="conter"><h2>{{msg}}</h2></div>
      <router-link to="Consultation"><div class="right"><span class="img"><img src="../assets/images/白耳机.png" alt=""></span>咨询</div></router-link>
    </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {}
  },
  props: ['msg'],
  methods: {
    back () {
      this.$router.go(-1)// 返回上一层
    }
  }
}
</script>

<style scoped lang="scss">
.top {
    position: absolute;
    top:0%;
    width: 100%;
    height: 78px;
    line-height: 78px;
    background-color: #c43236;
    display: flex;
    position: relative;
    z-index: 10;
    h2 {
      font-weight: normal;
    }
    .left {
      width: 56px;
      position: absolute;
      left: 0;
      // background-color: rebeccapurple;
      img {
        height: 26px;
        margin-top: 28px;
        float: right;
      }
    }
    .conter {
      flex: 1;
      text-align: center;
      font-size: 30px;
      color: #fff;
      // background-color: yellow;
    }
    .right {
      width: 140px;
      font-size: 26px;
      color: #fff;
      position: absolute;
      right: 0;
      // background-color: goldenrod;
      display: flex;
      align-items: center;
      .img{
        display: inline-block;
        width: 44px;
        height: 44px;
        margin-right: 10px;
          margin-top: -10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
}
.color {
  background-color: transparent;
}
</style>
