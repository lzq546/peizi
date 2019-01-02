<template>
  <div class="Additionalmargin">
    <top :msg="msg"></top>
    <h3>选择订单</h3>
    <div class="box">
      <div class="box1" @click="Ordershow = !Ordershow">
        <div class="box_box">{{Order}}</div>
        <span><img src="../../assets/images/下箭头.png" alt=""></span>
        <div class="nav" v-if="Ordershow">
          <ul>
            <li v-for="(item,index) in Ordernav" @click.stop="Orderclick(item)" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3>填写追加配额保证金</h3>
    <div class="box">
      <div class="box1">
        <span class="big">￥</span>
        <input
          type="text"
          placeholder="请输入增配本金"
        >
      </div>
    </div>
    <div class="text1">每次追加配额倍数相同，利息计算方式为：增配的配<br>额*利率</div>
    <div class="text2">您本次追加配额为<span style="color:#888888">（本金*倍数）</span><span>0</span></div>
    <div
      class="btn"
      @click="btn"
    >确认提交</div>
    <div
      class="message"
      v-if="messagebox"
      @click="messagebox=!messagebox"
    >
      <div class="messagebox clearfix">
        <div>确认提交</div>
        <button
          class="fl"
          @click.stop="confirm"
        >确认</button>
        <button
          class="fr"
          @click.stop="cancel"
        >取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Additionalmargin',
  components: {
    top
  },
  data () {
    return {
      msg: '追加保证金',
      messagebox: false,
      Order: '',
      Ordershow: false,
      Ordernav: ['假装有东西', '真有东西']
    }
  },
  methods: {
    btn () {
      this.messagebox = true
    },
    cancel () {
      this.messagebox = false
    },
    confirm () {},
    Orderclick (val) {
      this.Order = val
      this.Ordershow = false
    }
  }
}
</script>

<style scoped lang="scss">
.Additionalmargin {
  h3 {
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 63px;
    font-size: 36px;
    color: #333333;
    font-weight: normal;
  }
  .box {
    width: 100%;
    padding: 0px 25px;
    .box1 {
      width: 100%;
      height: 90px;
      border-bottom: 2px solid #dbdbdb;
      display: flex;
      align-items: center;
      position: relative;
      .nav {
        width: 100%;
        position: absolute;
        font-size: 36px;
        background-color: #fff;
        border: 2px solid #dbdbdb;
        padding: 10px;
        top: 90px;
        ul {
          width: 100%;
          background-color: #fff;
          li {
            width: 100%;
            line-height: 40px;
          }
        }
      }
      .box_box {
        flex: 1;
        font-size: 36px;
        text-indent: 30px;
      }
      span {
        font-size: 36px;
        color: rgb(122, 110, 110);
      }
      .big {
        font-size: 60px;
        color: #333333;
      }
    }
  }
  .text1 {
    font-size: 28px;
    color: #888888;
    line-height: 32px;
    margin-left: 24px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .text2 {
    font-size: 28px;
    margin-left: 24px;
    margin-bottom: 73px;
    color: #333333;
    span {
      color: #f83b38;
    }
  }
  .btn {
    width: 80%;
    height: 90px;
    line-height: 90px;
    margin: 0 auto;
    text-align: center;
    font-size: 36px;
    background-color: #c43236;
    border-radius: 16px;
    color: #fff;
    margin-bottom: 148px;
  }
  .message {
    width: 100%;
    height: 100%;
    background: rgba(112, 112, 112, 0.5);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 11;
  }
  .messagebox {
    width: 534px;
    height: 534px;
    font-size: 40px;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -267px;
    margin-left: -267px;
    padding: 88px 60px;
    button {
      background-color: #c43236;
      color: #fff;
      padding: 21px 41px;
      margin-top: 107px;
    }
  }
}
</style>
