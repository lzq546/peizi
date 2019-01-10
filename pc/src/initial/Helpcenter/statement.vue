<template>
  <div class="statement">
      <div class="text">法律声明</div>
      <div class="xian"></div>
      <div class="text">法律保障</div>
      <div class="text1">
          <div>法律保障</div>
          <div>居间服务的合法性</div>
          <div>
                根据《合同法》第23章关于---居间合同＂的规定，特别是第424条规定的＂居间合同是居间人向委托人报告订立合同的机会或者提供订立合同的媒介服务，委托人支付报酬的合同＂，前程策略为操盘人和理财人提供撮合的居间服务有着明确的法律基础。
          </div>
          <div>电子合同的合法性</div>
          <div>
                根据《电子签名法》的规定，民事活动中的合同或者其他文件，单证等文书，当事人可以约定使用电子签名、数据电文、不能因为合同采用电子签名、数据电文就否定其法律效力、同时，《电子签名法》中还规定，可靠的电子签名与手写签名或者盖章具有同等的法律效力．明确肯定了符合条件的电子签名与手写签名或盖章具有同等的效力。
          </div>
          <div class="strong">操盘须知</div>
            <div>
                1、投资本金：您投资股票本金，最少1千元，最高100万，必须是干元的倍数；
            </div>
            <div>
                2、使用期限：按自然月计算，如使用1个月，1月8日起至2月7日结束，含节假日；
            </div>
            <div>
                3、利息支付：每月月初支付，如1月8日申请配资，1月8日支付第一期，2月8日支付第二期，以此类推；
            </div>
            <div>
                4、警戒线：当总操盘资金低于平仓线以下时，只能卖出不能买入，我们将有权把您的股票部分卖出滅仓，使账户资金达到警戒线以上
            </div>
            <div>
                5、平仓线：当总操盘资金低于平仓线以下时，我们将有权把您的股票进行卖出平仓，为避免平仓发生，请时刻关注本金是否充足；
            </div>
            <div>
                6、交易时间：一般选择下个交易日，如看中行情急需交易，可直接选择当日交易（当日开始计算利息）；
            </div>
            <div>
                7、其他费用：交易印花税、过户费和佣金，直接由券商和证券交易所收取，实际费用以交易所和券商规定为准；
            </div>
            <div>
                8、当账户资金余额充足时，系统默认自动延期，如要停止继续操盘，请选择结算操作。
            </div>
            <div class="strong">风险提示</div>
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
  name: 'statement',
  components: {
    top
  },
  data () {
    return {
    }
  },
  mounted () {
    let a = 2
    this.$emit('router_left', a)
  }
}
</script>

<style lang="scss">
.statement {
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
            font-size: 2rem;
        }
    }
}
</style>
