<template>
  <div class="problem">
    <top :msg="msg"></top>
    <div class="center">
      <div class="text">
        <div>止损平仓？</div>
        <span>股票触及或跌破到当前预留保证金的60%并且盘中自动补交保证金时，若可用资金不够补1%的保证金，则系统将自动平仓股票，结算价格按实际平仓价结算。
          如果当天买入的股票触及止损，系统强制自动补交履约保证金。</span>
      </div>
      <div class="text">
        <div>
          管理总费用不足平仓？
        </div>
        <span>
          用户在买入第二天后未选择延期的或者管理总费用(补交保证金+管理费)不够股票由系统自动平仓，以实际成交价计算；如果未能顺利卖出，系统下一交易日将自动判断是否触及止损追加保证金或者止损平仓；如果股票当天跌停未能成交，系统将自动延期，第二天开盘将市价卖出，结算价格按实际平仓价结算；
        </span>
      </div>
      <div class="text">
        <div>我的延期能不能过？</div>
        <span>
          当日管理总费用显示 √ 且为负数（-）：表示非当日买入的持仓股票总市值高于上一交易日持仓股票结算市值，当日结算后多余保证金将会退回至可用资金；
        </span>
        <span>
          当日管理总费用显示 √ 且为正数（+）：表示非当日买入的持仓股票总市值低于上一交易日持仓股票结算市值，但当前可用资金大于当日结算所需管理总费用，因此当日结算所需管理总费用将自动从当前可用资金中扣取。
        </span>
        <span>
          当日管理总费用显示×且提示需充值：非当日买入的持仓股票总市值低于上一交易日持仓股票结算市值，且当前可用资金小于当日结算所需管理总费用，因此用户需在结算前进行充值以保证当前可用资金大于当日结算所需管理总费用。
        </span>
      </div>
      <div class="text">
        <div>
          自动延期"？
        </div>
        <span>
          平台默认所有持仓股票"自动延期"，请确保可用资金充足；
        </span>
      </div>
      <div class="tex">
        <div>
          管理总费用是什么？
        </div>
        <span>
          管理总费用=管理费-结算金额
        </span>
        <span>
          补交保证金是指在15：00分之前补足履约保证金至当支股票当前市值的1%。
        </span>
      </div>
      <div class="text">
        <div>
          股票停牌怎么办？
        </div>
        <span>
          如果用户持有的股票遇到停牌，客服第一时间与客户联系让其补足同等停牌市值的20%（同时会设置禁止买入及出金操作）。如保证金足以弥补停牌市值的20%，甚至多出保证金，多余保证金还可继续操作（同时按停牌市值0.0012收取管理费）。如客户未追加停牌市值的20%系统默认继续持有，自动延期（按原标准收取管理费，用户应确保账户资金余额充足，以便扣取管理费）。如果停牌期间账户资金不足以扣取管理费，平台视为用户自动放弃股票及收益权，系统将全额扣除保证金，回收的停牌股复盘后，盈亏与此客户无关。
        </span>
      </div>
      <div class="text">
        <div>被回收停牌股索回规则？</div>
        <span>
          停牌股被回收的用户须在当天17:00前向客服申请索回停牌股并补足管理总费用；
          索回停牌股将建立黑名单制度，申请索回后却未充值索回的用户，此后将不再享有停牌股索回宽限期。
        </span>
      </div>
      <div class="text">
        <div>
          盈利何时能提现？
        </div>
        <span>
          股票实时卖出，实时结算，收益随时提取。
        </span>
      </div>
      <div class="text">
        <div>
          履约保证金有什么作用？
        </div>
        <span>
          用户买入股票提供10%的履约保证金，用于承担操作亏损赔付（用户仅对冻结资金承担有限赔付）
        </span>
      </div>
      <div class="text">
        <div>
          提现到账快吗？
        </div>
        <span>
          工作日8:30-下午5:00提现，资金量不超过10万，当天到，否则第二个工作日到！
        </span>
      </div>

    </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'problem',
  components: {
    top
  },
  data () {
    return {
      msg: '常见问题'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.problem {
  margin-bottom: 98px;
  font-size: 32px;
  line-height: 38px;
  color: #333;
  .center {
    width: 100%;
    padding: 30px;
    .text {
      margin-bottom: 30px;
      div {
          color: #60AE20;
      }
      span {
          display: block;
      }
    }
  }
}
</style>
