<template>
  <div class="Myusers">
    <top :msg="msg"></top>
    <div class="text" v-for="(item,index) in nav" :key="index">
        <div><i></i>{{item.name}}</div>
        <span>{{item.time}}</span>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Myusers',
  components: {
    top
  },
  data () {
    return {
      msg: '我的用户',
      nav: [
        {name: '2353245234', time: '18-11-20  23:22'},
        {name: '2353245234', time: '18-11-20  23:22'}
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Myusers {
  width: 100%;
  padding-bottom: 198px;
  .text {
      width: 100%;
      height: 100px;
      font-size: 20px;
      padding: 0 40px;
      border-bottom: 2px solid #C2C2C2;
      color: #333;
      display: flex;
      align-items: center;
      div {
          flex: 1;
          i {
              display: inline-block;
              width: 54px;
              height: 54px;
              background-color: #A0A0A0;
              border-radius: 50%;
              margin-right: 20px;
              vertical-align: middle;
          }
      }
      span {
          text-align: right;
      }
  }
}
</style>
