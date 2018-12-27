<template>
  <div class="Transactionquery">
    <div class="nav">
      <ul>
        <li>
          <div>0</div>
          <div>总资产</div>
        </li>
        <li>
          <div>0</div>
          <div>总盈亏</div>
        </li>
        <li>
          <div>0</div>
          <div>总市值</div>
        </li>
        <li>
          <div>0</div>
          <div>可用金额</div>
        </li>
        <li>
          <div>0</div>
          <div>冻结金额</div>
        </li>
        <li>
          <div>1000.00</div>
          <div>当前保证金</div>
        </li>
      </ul>
    </div>
    <router-link to="Transactionday">
      <div class="text clearfix">
        <div class="fl">当日成交</div>
        <div class="fr">右</div>
      </div>
    </router-link>
    <router-link to="Entrustday">
      <div class="text clearfix">
        <div class="fl">当日委托</div>
        <div class="fr">右</div>
      </div>
    </router-link>
    <div class="xian"></div>
    <router-link to="Transactionhistory">
      <div class="text clearfix">
        <div class="fl">历史成交</div>
        <div class="fr">右</div>
      </div>
    </router-link>
    <router-link to="Entrusthistory">
      <div class="text clearfix">
        <div class="fl">历史委托</div>
        <div class="fr">右</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Transactionquery',
  components: {
    top
  },
  data () {
    return {}
  },
  mounted () {
    let currentn = 4
    this.$emit('currentn', currentn)
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Transactionquery {
  width: 100%;
  height: 100%;
  margin-bottom: 198px;
  .nav {
    width: 100%;
    margin-top: 50px;
    ul {
      width: 100%;
      border: 1px solid #b2b2b2;
      display: flex;
      flex-wrap: wrap;
      > li:nth-child(3) {
        border-right: none;
      }
      > li:nth-child(6) {
        border-right: none;
      }
      li {
        width: 33.3%;
        height: 108px;
        font-size: 30px;
        color: #666666;
        border: 1px solid #cdcdcd;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > div:first-child {
          margin-bottom: 15px;
        }
      }
    }
  }
  .text {
    width: 100%;
    height: 69px;
    line-height: 69px;
    padding: 0 20px;
    font-size: 30px;
    color: #666;
    border-bottom: 2px solid #cacaca;
  }
  .xian {
    width: 100%;
    height: 40px;
    background-color: #f3f3f3;
  }
}
</style>
