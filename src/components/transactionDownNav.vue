<template>
  <div class="transactionDownNav">
    <ul>
      <li v-for="(item,index) in arr" @click="allocation(item,index)" :key="index" :class="{'border':index==current}">
        <div><router-link :to=item.value>{{item.title}}</router-link></div>
      </li>
    </ul>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: 'transactionDownNav',
  components: {
  },
  props: ['currentnub'],
  data () {
    return {
      msg: '交易',
      current: 0,
      arr: [
        {title: '买入', value: '/Purchases'},
        {title: '卖出', value: '/Sell'},
        {title: '撤单', value: '/Chedan'},
        {title: '持仓', value: '/Position'},
        {title: '查询', value: '/Transactionquery'}
      ]
    }
  },
  methods: {
    // 判断当前选中哪个
    allocation (item, index) {
      this.current = index
    }
  },
  watch: {
    currentnub (val) {
      this.current = val
    }
  },
  mounted () {
    this.current = this.currentnub
  }
}
</script>

<style scoped lang="scss">
  .transactionDownNav {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 109px;
    ul {
      width: 100%;
      height: 80px;
      color: #666666;
      border-top: 1px solid #cacaca;
      background-color: #f8f8f8;
      display: flex;
      li {
        width: 20%;
        font-size: 28px;
        display: flex;
        justify-content:center;
        align-items:center;
        border-bottom: 1px solid transparent;
        div {
          // width: 100%;
          flex: 1;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-left: 1px solid #adadad;
          :nth-child(1) {
            display: inline-block
          }
        }
      }
      .border {
        border-bottom: 1px solid #d71518;
      }
      li:first-child div {
        border-left: none;
        }
    }
    .background {
      width: 100%;
      height: 50px;
      background-color: #fff;
    }
}
</style>
