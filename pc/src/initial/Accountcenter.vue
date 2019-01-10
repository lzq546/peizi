<template>
  <div class="Accountcenter">
      <top :current="current"></top>
      <div class="box clearfix">
          <div class="left fl">
              <ul>
                  <li>账户中心</li>
                  <li :class="{'color':currentnb==1}"><router-link to="myrecharge">我的资料</router-link></li>
                  <li :class="{'color':currentnb==2}"><router-link to="Accountrecharge">充值</router-link></li>
                  <li :class="{'color':currentnb==3}"><router-link to="Accountcash">提现</router-link></li>
                  <li :class="{'color':currentnb==4}"><router-link to="Capital">资金明细</router-link></li>
                  <li :class="{'color':currentnb==5}"><router-link to="Password">密码设置</router-link></li>
                  <li :class="{'color':currentnb==6}"><router-link to="month">邀请及代理</router-link></li>
                  <li :class="{'color':currentnb==7}"><router-link to="Administration">账户管理</router-link></li>
                  <li :class="{'color':currentnb==8}"><router-link to="surplus">提盈结算</router-link></li>
                  <li :class="{'color':currentnb==9}"><router-link to="Helpcenter">帮助中心</router-link></li>
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
  name: 'Accountcenter',
  components: {
    top
  },
  data () {
    return {
      current: 5,
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
.Accountcenter {
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
