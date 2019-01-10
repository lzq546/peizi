<template>
  <div class="Aboutus">
      <div class="text">点点配</div>
      <div class="xian"></div>
  </div>
</template>

<script>
export default {
  name: 'Aboutus',
  components: {
    top
  },
  data () {
    return {
    }
  },
  mounted () {
    let a = 6
    this.$emit('router_left', a)
  }
}
</script>

<style lang="scss">
.Aboutus {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
        text-align: center;
    }
    .xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .text1 {
        width: 100%;
        padding: 1.8rem 5.6rem 1rem 1.8rem;
        div {
            font-size: 1.4rem;
            line-height: 2rem;
            margin-bottom: 2rem;
        }
        .strong {
            font-size: 2.2rem;
        }
    }
}
</style>
