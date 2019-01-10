<template>
  <div class="Mydata">
      <div class="Mydata_text">我的资料</div>
      <div class="Mydata_xian"></div>
      <div class="text">
          <div class="one">
              <div>账户余额</div>
              <div>{{balance}}</div>
          </div>
          <div class="two">
              <span style="background-color:#C89B55">充值</span>
              <span style="background-color:#FFB800">提现</span>
              <span style="background-color:#FF5722">明细</span>
          </div>
      </div>
          <div class="text1">
              <div class="text2">你出策略</div>
              <div class="text3">平台</div>
              <div class="text4">我出资金</div>
              <div class="text5">盈利归您</div>
              <div class="btn"><router-link to="day">我要配资</router-link></div>
          </div>
  </div>
</template>

<script>
export default {
  name: 'Mydata',
  components: {
  },
  data () {
    return {
      balance: '0.00'// 账户余额
    }
  },
  mounted () {
    let a = 1
    this.$emit('router_left', a)
  },
  methods: {
  }
}
</script>

<style lang="scss">
.Mydata {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .Mydata_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .Mydata_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .text {
        width: 100%;
        height: 13rem;
        border: 2px solid #989898;
        overflow: hidden;
        .one {
            display: inline-block;
            width: 16.7rem;
            height: 13rem;
            border-right: 2px solid #989898;
            padding-top: 3.4rem;
            vertical-align: top;
            div {
                font-size: 2.4rem;
                line-height: 3rem;
                text-align: center;
            }
        }
        .two {
            display: inline-block;
            padding: 4.85rem;
            padding-right: 0;
            span {
                display: inline-block;
                width: 8rem;
                height: 3.3rem;
                line-height: 3.3rem;
                text-align: center;
                color: #fff;
                border-radius: 1rem;
                font-size: 1.6rem;
                cursor: pointer;
                // margin-right: 4rem;
            }
            >span:nth-child(2) {
                margin: 0 4rem;
            }
        }
    }
        .text1 {
        width: 100%;
        height: 53rem;
        margin-top: 2rem;
        border: 2px solid #989898;
        background: url('../../assets/images/流程.png') no-repeat center;
        background-size: 60% 50%;
        overflow: hidden;
        color: #666666;
        font-size: 1.8rem;
        position: relative;
            .text2 {
                position: absolute;
                top:24rem;
                left: 26%;
                margin-left: -2rem;
            }
            .text3 {
                position: absolute;
                top:24rem;
                left: 50%;
                margin-left: -2rem;
            }
            .text4 {
                position: absolute;
                top:24rem;
                right: 26%;
                margin-right: -2rem;
            }
            .text5 {
                position: absolute;
                top:38rem;
                left: 50%;
                margin-left: -4rem;
            }
            .btn {
                width:14rem;
                height:4rem;
                line-height: 4rem;
                color: #fff;
                text-align: center;
                font-size: 1.6rem;
                background:rgba(200,155,85,1);
                border-radius:1rem;
                position: absolute;
                left: 50%;
                bottom: 2rem;
                margin-left: -7rem;
                cursor: pointer;
                a {
                    width: 100%;
                    height: 100%;
                }
            }
        }
}
</style>
