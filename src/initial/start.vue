<template>
  <div class="start">
      <img src="@/assets/images/启动页.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'start',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.go()
  },
  methods: {
    go () {
      let self = this
      setTimeout(function () {
        self.$router.push({
          path: '/index',
          name: 'index'
        })
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.start {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 3;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>
