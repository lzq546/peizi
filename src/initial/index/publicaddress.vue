<template>
  <div class="publicaddress">
      <top :msg="msg"></top>
      <img src="@/assets/images/bjgzh.png" alt="">
      <div class="gzh">
        <img src="@/assets/images/gzh.jpg" alt="">
      </div>
      <div class="text">
        保存图片
      </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'publicaddress',
  components: {
    top
  },
  data () {
    return {
      msg: '关注公众号'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.publicaddress {
    width: 100%;
    height: 100%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
    }
    .gzh {
      width: 316px;
      height: 316px;
      position: absolute;
      top: 176px;
      left: 222px;
    }
    .text {
      font-size: 40px;
      position: absolute;
      top: 512px;
      left: 306px;
    }
}
</style>
