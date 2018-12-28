<template>
  <div class="risk">
      <top :msg="msg"></top>
      <div class="center">
        <div class="text">
            为保护投资顾问的合法权益，本公司敬告各位投资顾问，应充分详细阅读本公司发布的与投资操盘相关的协议和规则，根据自身的经济实力和心理承受能力，理性选择操盘方案，谨慎进行股票交易。
        </div>
        <div class="text">
          一、MOM操盘是指私募基金委托投资顾问对本协议涉及的委托资产提供投资顾问服务。投资顾问承诺在遵守中国相关法律、法规的前提下，对私募基金提供的委托资金额度，在私募基金账户中进行投资顾问服务。私募基金向投资顾问提供本协议涉及委托资产的授权，授权投资顾问对这些资产在授权范围内进行操作，投资顾问按照一定比例提供相应的保证金，并向私募基金缴纳约定的最终控制权。
        </div>
        <div class="text">
          二、投资顾问应当知晓，利用分成制或缴费制等合作方式进行股票交易可能会获得投资收益，但同时也存在着保证金损失的风险。除了会放大你的收益外，也会放大您的交易风险。
        </div>
        <div class="text">
          三、投资顾问操盘过程包括网上注册、网上签约、网上交易等互联网操作行为，可能会导致投资顾问发生损失，这些损失都是由投资顾问自己承担的。
        </div>
        <div class="tex">
          点点配是一个互联网金融产品，提供的产品服务与网路密切相关，牛米网不断完善产品功能并加强产品的稳定性，竭尽全力为用户提供更好的用户体验。但难免因通讯网络、券商、第三方支付平台、银行等相关方面发生不可抗力的网络堵塞及滞后，造成用户交易、充值、提现等操作的延迟，并可能因此导致用户的投资损失，牛米网无需承担此部分的损失赔偿。请广大用户提前补足保证金并控制好账户仓位，避免投资风险；充值应预估延迟时间，避免踩点充值造成损失。
        </div>
      </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'risk',
  components: {
    top
  },
  data () {
    return {
      msg: '风险提示'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.risk {
  margin-bottom: 98px;
  font-size: 28px;
  line-height: 38px;
  color: #333;
  .center {
    width: 100%;
    padding: 30px;
    .text {
      margin-bottom: 30px;
    }
  }
}
</style>
