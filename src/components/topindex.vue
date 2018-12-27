<template>
  <div
    class="top"
    :class="{red:msg=='账户'}"
  >
    <div class="conter"><span>{{msg}}</span></div>
    <router-link to="Consultation" v-if="msg!=='账户'">
      <div class="right"><span class="img"><img
            src="../assets/images/灰耳机.png"
            alt=""
          ></span>咨询</div>
    </router-link>
    <router-link to="Consultation" v-if="msg=='账户'">
      <div class="right"><span class="img"><img
            src="../assets/images/白耳机.png"
            alt=""
          ></span>咨询</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {}
  },
  props: ['msg'],
  methods: {}
}
</script>

<style scoped lang="scss">
.top {
  position: absolute;
  top: 0%;
  width: 100%;
  height: 78px;
  line-height: 78px;
  background-color: #fff;
  display: flex;
  position: relative;
  h2 {
    font-weight: normal;
  }
  .conter {
    flex: 1;
    text-align: center;
    font-size: 30px;
    color: #666666;
    // background-color: yellow;
  }
  .right {
    width: 140px;
    font-size: 26px;
    color: #666666;
    position: absolute;
    right: 0;
    // background-color: goldenrod;
    display: flex;
    align-items: center;
    .img {
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
.red {
  background-color: #c43236;
  .conter {
    color: #fff;
  }
  .right {
    color: #fff;
    .img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
