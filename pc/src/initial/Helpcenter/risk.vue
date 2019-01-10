<template>
  <div class="risk">
      <div class="text">风险提示</div>
      <div class="xian"></div>
      <div class="text1">
            <div class="strong">风险提示：</div>
            <div>
                1、建议您合理使用杠杆，收益放大同时，风险同步放大；
            </div>
            <div>
                2、投资本金：您用于投资股票的本金，1千元起即可申请；
            </div>
            <div>
                3、资金使用期限：1个月起；
            </div>
            <div>
                4、警戒线：当总操盘资金低于警戒线以下时，只能平仓不能建仓，我们将有权把您的股票进行減仓。（警戒线是保证金的60％＋借货金额）；
            </div>
            <div>
                5、平仓线：当总操盘资金低于平仓线以下时，我们将有权把您的股票进行平仓，为避免平仓发生，请时刻关注本金是否充足。（平仓线是保证金的30％＋借货金额）；
            </div>
            <div>
                6、开始交易时间：交易日当天14：50之前的申请于当日生效，交易日当天14：50之后的申请于下个交易日生效；
            </div>
            <div>
                7、股市有风险，投资需谨慎。
            </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'risk',
  components: {
    top
  },
  data () {
    return {
    }
  },
  mounted () {
    let a = 3
    this.$emit('router_left', a)
  }
}
</script>

<style lang="scss">
.risk {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
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
