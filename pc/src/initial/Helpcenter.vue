<template>
  <div class="Helpcenter">
      <top :current="current"></top>
      <div class="box clearfix">
          <div class="left fl">
              <ul>
                  <li>帮助中心</li>
                  <li :class="{'color':currentnb==1}">新手指南</li>
                  <li :class="{'color':currentnb==2}"><router-link to="statement">法律声明</router-link></li>
                  <li :class="{'color':currentnb==3}"><router-link to="risk">风险提示</router-link></li>
                  <li :class="{'color':currentnb==4}"><router-link to="rule">规则介绍</router-link></li>
                  <li :class="{'color':currentnb==5}"><router-link to="problem">常见问题</router-link></li>
                  <li :class="{'color':currentnb==6}"><router-link to="Aboutus">关于我们</router-link></li>
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
  name: 'Helpcenter',
  components: {
    top
  },
  data () {
    return {
      current: 6,
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
.Helpcenter {
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
