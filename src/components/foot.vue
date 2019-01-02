<template>
  <div class="foot">
    <div
      v-for="(item,index) in arr"
      :key="index"
    >
      <router-link :to=item.value>
        <div
          @click="allocation(item,index)"
          :class="{'color':index==current}"
        ><span class="img"><img
              :src="item.imgsrc"
              alt=""
            ></span>{{item.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  props: ['numbernav', 'indexname'],
  data () {
    return {
      current: 0,
      arr: [
        {
          id: 1,
          title: '首页',
          value: '/index',
          imgsrc: require('@/assets/images/1.png')
        },
        {
          id: 2,
          title: '充值',
          value: '/recharge',
          imgsrc: require('@/assets/images/6.png')
        },
        {
          id: 3,
          title: '交易',
          value: '/transaction',
          imgsrc: require('@/assets/images/7.png')
        },
        {
          id: 4,
          title: '我的',
          value: '/my',
          imgsrc: require('@/assets/images/8.png')
        }
      ]
    }
  },
  mounted () {},
  watch: {
    $route (to, from) {
      // console.log(this.$route.path) || '/rule' || 'guide'
      if (this.$route.path == '/index' || this.$route.path == '/rule' || this.$route.path == '/guide') {
        this.current = 0
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].id === 1) {
            this.arr[0].imgsrc = require('@/assets/images/1.png')
            this.arr[1].imgsrc = require('@/assets/images/6.png')
            this.arr[2].imgsrc = require('@/assets/images/7.png')
            this.arr[3].imgsrc = require('@/assets/images/8.png')
          }
        }
      }
      //  || '/Onlinerecharge' || 'Offlinerecharge' || '/day' || 'month' || '/experience' || 'query' || 'Additionalmargin' || '/Additionalquota' || 'Reducingquota'
      if (this.$route.path == '/recharge' || this.$route.path == '/day' || this.$route.path == '/month' || this.$route.path == '/experience' || this.$route.path == '/query' || this.$route.path == '/Additionalmargin') {
        this.current = 1
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].id === 2) {
            this.arr[0].imgsrc = require('@/assets/images/5.png')
            this.arr[1].imgsrc = require('@/assets/images/2.png')
            this.arr[2].imgsrc = require('@/assets/images/7.png')
            this.arr[3].imgsrc = require('@/assets/images/8.png')
          }
        }
      }
      //  || '/transaactionindex' || 'Purchases' || 'Sell' || 'Chedan' || 'Position' || 'Transactionquery' || 'Transactionday' || 'Entrustday' || 'Transactionhistory' || 'Entrusthistory' || 'more'
      if (this.$route.path == '/transaction'||this.$route.path == '/Transactionquery') {
        this.current = 2
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].id === 3) {
            this.arr[0].imgsrc = require('@/assets/images/5.png')
            this.arr[1].imgsrc = require('@/assets/images/6.png')
            this.arr[2].imgsrc = require('@/assets/images/3.png')
            this.arr[3].imgsrc = require('@/assets/images/8.png')
          }
        }
      }
      if (this.$route.path == '/my' || this.$route.path == '/Consultation' || this.$route.path == '/Helpcenter') {
        this.current = 3
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].id === 4) {
            this.arr[0].imgsrc = require('@/assets/images/5.png')
            this.arr[1].imgsrc = require('@/assets/images/6.png')
            this.arr[2].imgsrc = require('@/assets/images/7.png')
            this.arr[3].imgsrc = require('@/assets/images/4.png')
          }
        }
      }
      // if (from.name == 'my' && to.name == 'Commission') {
      //   let a = '奖励收入明细'
      //   this.$store.commit('Yongjin_name', a)
      //   console.log(123)
      //   console.log(this.$store.state.yongjinname)
      // }
      // if (from.name == 'Invitation' && to.name == 'Commission') {
      //   let b = '佣金收入明细'
      //   this.$store.commit('Yongjin_name', b)
      //   console.log(456)
      //   console.log(this.$store.state.yongjinname)
      // }
    }
  },
  methods: {
    // 判断当前选中哪个
    allocation (item, index) {
      let self = this
      self.current = index
      for (let i = 0; i < self.arr.length; i++) {
        if (self.arr[i].id === index + 1) {
          self.arr[0].imgsrc = require('@/assets/images/5.png')
          self.arr[1].imgsrc = require('@/assets/images/6.png')
          self.arr[2].imgsrc = require('@/assets/images/7.png')
          self.arr[3].imgsrc = require('@/assets/images/8.png')
          self.arr[i].imgsrc = require('@/assets/images/' +
            (index + 1) +
            '.png')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.foot {
  width: 100%;
  height: 98px;
  display: flex;
  position: fixed;
  bottom: 0px;
  color: #666666;
  border-top: 1px solid #666666;
  z-index: 2;
  background-color: #fff;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img {
      display: inline-block;
      width: 44px;
      height: 40px;
      // background-color: red;
      margin-bottom: 11px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .color {
    color: #a42823;
  }
}
</style>
