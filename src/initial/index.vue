<template>
  <div class="index">
    <div class="top">
      <div class="left"><router-link to="/login">登录</router-link></div>
      <div class="conter">
        <!-- <div class="search-box">
          <div class="search-ico"></div>
          <input type="text" class="search" placeholder="搜索股票/基金">
        </div> -->
      </div>
      <router-link to="Consultation"><div class="right">
        <span class="img"><img src="../assets/images/白耳机.png" alt=""></span>咨询</div></router-link>
    </div>
    <div class="swipe">
      <mt-swipe :auto="4000">
      <mt-swipe-item><div class="swipe-img1"><img src="../assets/images/nav1.jpg" alt=""></div></mt-swipe-item>
      <mt-swipe-item><div class="swipe-img2"><img src="../assets/images/nav2.jpg" alt=""></div></mt-swipe-item>
      <mt-swipe-item><div class="swipe-img3"><img src="../assets/images/nav3.jpg" alt=""></div></mt-swipe-item>
    </mt-swipe>
    </div>
    <div class="nav-one">
      <div><router-link to="/guide"><span>新手<br>指南</span><img src="@/assets/images/新手指南背景.png" alt=""></router-link></div>
      <div><router-link to="/rule"><span>点点配<br>规则</span><img src="@/assets/images/点点配规则矩形.png" alt=""></router-link></div>
      <div><router-link to="/publicaddress"><span>关注<br>公众号</span><img src="@/assets/images/免费体验矩形.png" alt=""></router-link></div>
    </div>
    <div class="allocation">
      <ul class="nav">
        <li v-for="(item,index) in nav" @click="allocation(item,index)" :key="index" :class="{'color':index==current}">{{item}}</li>
      </ul>
      <div class="content-one" v-show="content_one">
        <div class="text-one">
          <span>平台出：9000元</span>-你出：1000元
        </div>
        <div class="text-two">
          <p>急速开户，利率低至<span>1.0%</span>/月</p>
          最低一月起配，未申请请终止操盘，续费自动延期。
        </div>
      </div>
      <div class="apply" @click="gorouter">
        申请配资
      </div>
    </div>
    <div class="dividing"></div>
    <div class="consultation">
      <h3>最新咨询</h3>
      <p>✦ 小米第三季度业绩靓丽，估值偏高但扔涨0.74%</p>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
export default {
  name: 'index',
  components: {
    Swipe,
    SwipeItem
  },
  data () {
    return {
      nav: [
        '按天配资',
        '按月配资',
        '免息体验',
        '关注公众号'
      ],
      content_one: true,
      current: 0,
      go: '按天配资'
    }
  },
  methods: {
    // 判断当前选中哪个
    allocation (item, index) {
      this.current = index
      this.go = item
    },
    gorouter () {
      if (this.go == '按天配资') {
        this.$router.push({name: 'day', path: '/day'})
        this.$emit('number', 0)
      }
      if (this.go == '按月配资') {
        this.$router.push({name: 'month', path: '/month'})
        this.$emit('number', 1)
      }
      if (this.go == '免息体验') {
        this.$router.push({name: 'experience', path: '/experience'})
        this.$emit('number', 2)
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
.index {
  margin-bottom: 200px;
  .selection {
    background-color: red;
  }
  .top {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 78px;
    line-height: 78px;
    // background-color: #c43236;
    display: flex;
    z-index: 2;
    .left {
      width: 80px;
      font-size: 24px;
      color: #fff;
      text-align: right;
      // background-color: rebeccapurple;
    }
    .conter {
      flex: 1;
      // background-color: yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      .search-box {
        width: 488px;
        height: 50px;
        background-color: #e4d4e4;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
      .search {
        width: 430px;
        height: 50px;
        background-color: #e4d4e4;
        border-radius: 6px;
        border: none;
        outline: none;
        text-indent: 18px;
      }
      .search-ico {
        width: 36px;
        height: 36px;
        background-color: #666666;
      }
    }
    .right {
      width: 140px;
      font-size: 24px;
      color: #fff;
      // background-color: goldenrod;
      display: flex;
      align-items: center;
      .img {
        display: inline-block;
        width: 44px;
        height: 44px;
        margin-right: 10px;
        margin-top: -10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .swipe {
    height: 280px;
    margin-bottom: 30px;
      .swipe-img1 {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swipe-img2 {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swipe-img3 {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
  }
  .nav-one {
    width: 100%;
    height: 150px;
    display: flex;
    padding: 0 40px;
    div {
      flex: 1;
      position: relative;
      span {
        position: absolute;
        top: 9px;
        left: 9px;
        line-height: 36px;
        font-size: 30px;
        text-align: center;
        letter-spacing: 5px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    :nth-child(1){
      margin-right: 20px;
    }
    :nth-child(3){
      margin-left: 20px;
    }
  }
  .allocation {
    width: 668px;
    height: 400px;
    margin: 0 auto;
    border: 2px solid #c43236;
    margin-top: 111px;
    position: relative;
    .nav {
      width: 584px;
      height: 105px;
      line-height: 105px;
      border-radius: 6px;
      font-size: 22px;
      border: 2px solid #e60012;
      overflow: hidden;
      position: absolute;
      top: -75px;
      left: 40px;
      display: flex;
      li {
        width: 25%;
        height: 100%;
        text-align: center;
        color: #e60012;
        background-color: #fff;
        border-left: 1px solid #e60012;
      }
      :nth-child(1){
        border-left: none;
      }
      .color {
        color: #fff;
        background-color: #e60012;
      }
    }
    .content-one {
      text-align: center;
      margin-top: 70px;
      span {
        color:#e60012;
      }
      .text-one {
        width: 548px;
        height: 96px;
        line-height: 96px;
        font-size: 26px;
        color:#111111;
        background-color: #fce5e7;
        margin: auto;
      }
      .text-two {
        font-size: 26px;
        color:#666666;
        margin-top: 56px;
        p {
          margin-bottom: 20px;
        }
      }
    }
    .apply {
      width: 280px;
      height: 70px;
      line-height: 70px;
      font-size: 30px;
      background: linear-gradient(180deg,rgba(230,0,18,1),rgba(253,37,54,1));
      box-shadow:0px 5px 0px 0px rgba(255,73,73,0.77);
      border-radius: 35px;
      margin: 70px auto;
      text-align: center;
      color: #fff;
    }
  }
  .dividing {
    margin-top: 74px;
    width: 100%;
    height: 20px;
    background-color: #f5f5f5;
  }
  .consultation {
    width: 100%;
    padding: 20px;
    font-size: 24px;
    h3 {
      font-size: 30px;
      margin-bottom: 30px;
      font-weight: 700;
    }
  }
}
</style>
