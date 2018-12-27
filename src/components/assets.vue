<template>
    <div class="assets">
        <ul>
            <li v-for="(item,index) in nav" @click="allocation(item,index)" :key="index">
                <div :class="{'color':index!==current}">{{item}}</div>
            </li>
        </ul>
        <div class="top">
            <div>总资产</div>
            <span>252000.00</span>
        </div>
        <div class="down">
            <div class="left text">
                <div class="text-one">浮动盈亏</div>
                <div class="text-two">-134</div>
            </div>
            <div class="cneter text">
                <div class="text-one">保证金</div>
                <div class="text-two">26200.00</div>
            </div>
            <div class="right text">
                <div class="text-one">可用资金</div>
                <div class="text-two">225800.00</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'assets',
  data () {
    return {
      current: 0,
      nav: ['日配', '月配', '体验']
    }
  },
  methods: {
    // 判断当前选中哪个
    allocation (item, index) {
      this.current = index
    }
  }
}
</script>

<style scoped lang="scss">
.assets {
  width: 100%;
  height: 320px;
  margin: 0 auto;
  color: #fff;
  background-color: #c43236;
  border-radius: 16px;
  overflow: hidden;
  ul {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-weight: 700;
    font-size: 27px;
    display: flex;
    :nth-child(2) {
        border-left: 1px solid #c43236;
        border-right: 1px solid #c43236;
    }
    li {
        flex: 1;
        text-align: center;
        background-color: #C43236;
        .color {
            background-color: rgba(255,255,255,0.2)
        }
    }
  }
  .top {
    width: 100%;
    height: 130px;
    font-size: 38px;
    padding-left: 40px;
    div {
      padding-top: 26px;
    }
    span {
      display: block;
      margin-top: 18px;
      font-size: 24px;
    }
  }
  .down {
    width: 100%;
    height: 130px;
    display: flex;
    .text {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .text-one {
        font-size: 28px;
      }
      .text-two {
        font-size: 20px;
        margin-top: 20px;
      }
    }
  }
}
</style>
