<template>
  <div class="Recharge">
      <top :current="current"></top>
      <div class="box clearfix">
          <div class="left fl">
              <ul>
                  <li>配资充值</li>
                  <li :class="{'color':currentnb==1}"><router-link to="myrecharge">我要充值</router-link></li>
                  <li :class="{'color':currentnb==2}"><router-link to="Cash">我要提现</router-link></li>
                  <li :class="{'color':currentnb==3}"><router-link to="Bond">保证金管理</router-link></li>
                  <li :class="{'color':currentnb==4}"><router-link to="bankcar">绑定银行卡</router-link></li>
                  <li :class="{'color':currentnb==5}"><router-link to="day">日配</router-link></li>
                  <li :class="{'color':currentnb==6}"><router-link to="month">月配</router-link></li>
                  <li :class="{'color':currentnb==7}"><router-link to="experience">体验</router-link></li>
                  <li :class="{'color':currentnb==8}"><router-link to="Contractenquiry">合同查询</router-link></li>
                  <li :class="{'color':currentnb==9}"><router-link to="Rechargerule">点点配规则</router-link></li>
              </ul>
          </div>
          <div class="right fr">
              <router-view @router_left="router_left"></router-view>
          </div>
      </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Recharge',
  components: {
    top
  },
  data () {
    return {
      current: 1,
      currentnb: 1
    }
  },
  methods: {
    router_left: function (val) {
      this.currentnb = val
    }
  }
}
</script>

<style lang="scss">
.Recharge {
    width: 100%;
//   overflow: hidden;
margin-bottom: 10rem;
    .box {
        width: 100%;
        .left {
            width: 14%;
            box-shadow:0rem 0rem 1rem 0rem rgba(176,176,175,1);
            ul {
                width: 100%;
                li {
                    width: 100%;
                    background-color: #fff;
                    border-bottom: 2px solid #EAEAEA;
                    font-size: 1.4rem;
                    height: 4.8rem;
                    line-height: 4.8rem;
                    text-align: center;
                    cursor: pointer;
                    a {
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                    }
                }
                >li:first-child {
                    font-size: 2rem;
                    height: 8.5rem;
                    line-height: 8.5rem;
                    color:#C43236;
                }
                .color {
                    color: #C43236;
                    background-color: #EAEAEA;
                }
            }
        }
        .right {
            width: 85.90%;
            height: 10rem;
        }
    }
}
</style>
