<template>
  <div id="app">
    <router-view @number='number'></router-view>
    <foot :numbernav = 'numbernav'></foot>
  </div>
</template>

<script>
import foot from '@/components/foot'
export default {
  name: 'App',
  components: {
    foot
  },
  data () {
    return {
      numbernav: ''
    }
  },
  methods: {
    number (val) {
      this.numbernav = val
    }
  }
}
</script>

<style>
/* #app {
  margin-top: 78px;
  margin-bottom: 98px;
} */
</style>
