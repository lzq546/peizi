<template>
  <div class="transaactionindex">
    <!-- 这是一个子路由是 -->
    <top :msg="msg"></top>
    <router-view @currentn="currentn"/>
    <div v-if="show">
    <transactionDownNav :currentnub="currentnub"></transactionDownNav>
    </div>
  </div>
</template>

<script>
import transactionDownNav from '@/components/transactionDownNav'
import top from '@/components/top'
export default {
  name: 'transaactionindex',
  components: {
    transactionDownNav,
    top
  },
  data () {
    return {
      show: false,
      currentnub: 0,
      msg: '买入'
    }
  },
  mounted () {
  },
  methods: {
    currentn (val) {
      this.currentnub = val
      // console.log(this.currentnub)
      this.show = true
      if (val == 0) {
        this.msg = '买入'
      }
      if (val == 1) {
        this.msg = '卖出'
      }
      if (val == 2) {
        this.msg = '撤单'
      }
      if (val == 3) {
        this.msg = '持仓'
      } if (val == 4) {
        this.msg = '查询'
      }
    }
  },
  destroyed: function () {}
}
</script>

<style scoped lang="scss">
.transaactionindex {
  width: 100%;
  // height: 100%;
  // margin-bottom: 108px;
  position: relative;
}
</style>
