<template>
  <div class="Password">
      <div class="Password_text">密码设置</div>
      <div class="Password_xian"></div>
      <div class="text clearfix">
          <div class="one fl">
              <div>登录密码<span>已设置</span></div>
          </div>
          <div class="two fr">修改</div>
      </div>
      <div class="Password_xian"></div>
      <div class="text clearfix">
          <div class="one fl">
              <div>提现密码<span>未设置</span></div>
          </div>
          <div class="two fr">设置</div>
      </div>
      <div class="Password_xian"></div>
  </div>
</template>

<script>
export default {
  name: 'Password',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    let a = 5
    this.$emit('router_left', a)
  },
  methods: {
  }
}
</script>

<style lang="scss">
.Password {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .Password_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .Password_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .text{
        color:#333;
        padding: 0 2.85rem;
            line-height: 3rem;
        margin-bottom: 2rem;
        span {
            color: #6E6E6E;
            font-size: 1.2rem
        }
        .one {
            font-size: 1.6rem;
            div{
                span {
                    margin-left: 1rem;
                    color:#333;
                }
            }
        }
        .two {
            width: 8rem;
            height: 3rem;
            line-height: 3rem;
            font-size: 1.6rem;
            text-align: center;
            color: #fff;
            background-color: #C43236;
            border-radius: 1rem;
            cursor: pointer;
        }
    }
}
</style>
