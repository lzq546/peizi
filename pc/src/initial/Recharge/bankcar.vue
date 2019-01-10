<template>
  <div class="bankcar">
      <div class="bankcar_text">绑定银行卡</div>
      <div class="bankcar_xian"></div>
      <div class="text">
          <div class="one">开户银行：</div>
          <div class="two"><input type="text"></div>
      </div>
      <div class="text">
          <div class="one">开户行地区：</div>
          <div class="two"><input type="text"></div>
      </div>
      <div class="text">
          <div class="one">开户支行：</div>
          <div class="two"><input type="text"></div>
      </div>
      <div class="text">
          <div class="one">银行卡号：</div>
          <div class="two"><input type="text"></div>
      </div>
      <div class="text">
          <div class="one">银行卡号确认：</div>
          <div class="two"><input type="text"></div>
      </div>
      <div class="text">
          <div class="one">开户人姓名：</div>
          <div class="two"><input type="text"></div>
      </div>
      <div class="text">
          <div class="one">提现密码：</div>
          <div class="two"><input type="text"></div>
      </div>
      <div class="text">
          <div class="one">身份证号：</div>
          <div class="two"><input type="text"></div>
      </div>
      <div class="text">
          <div class="one">手机：</div>
          <div class="two"><input type="text"></div>
      </div>

      <div class="text">
          <div class="one">手机验证码：</div>
          <div class="two"><input type="text"></div>
          <div class="Verification">获取验证码</div>
      </div>
      <div class="btn">
          保存
      </div>
      <div class="text2">
          温馨提示：<span>为了您的账户安全，请输入真实信息。</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'bankcar',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    let a = 4
    this.$emit('router_left', a)
  },
  methods: {
  }
}
</script>

<style lang="scss">
.bankcar {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .bankcar_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .bankcar_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .text {
        width: 42rem;
        font-size: 1.4rem;
        line-height: 3rem;
        padding-left: 2rem;
        margin: 1rem auto;
        div {
            display: inline-block;
        }
        .one {
            width: 10rem;
            text-align: right;
        }
        .two {
            color: #C43236;
            width: 20rem;
            border: 1px solid #B5B5B5;
            padding-left: 1rem;
            input {
                font-size: 1.4rem;
            }
        }
            .Verification {
                background-color: #448ACA;
                color: #fff;
                padding: 0 1rem;
                font-size: 1.2rem;
                border-radius: 16px;
                cursor: pointer;
            }
    }
    .btn {
                    width: 16rem;
                    height: 3.8rem;
                    line-height: 3.8rem;
                    text-align: center;
                    font-size: 1.4rem;
                    background-color: #C43236;
                    color: #fff;
                    border-radius: 1.6rem;
                    margin: 5rem auto;
                    cursor: pointer;
                }
                .text2 {
                    width: 42rem;
                    font-size: 1.4rem;
                    color: #888;
                    margin: 0 auto;
                    text-align: center;
                    span {
                        color: #C43236;
                    }
                }
}
</style>
