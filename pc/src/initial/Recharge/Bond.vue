<template>
  <div class="Bond">
      <div class="Bond_text">保证金管理</div>
      <div class="Bond_xian"></div>
        <div class="Bond_box">
            <div class="Bond_nav clearfix">
                <div @click="color =1" :class="{'color':color ==1}">追加保证金</div>
                <div @click="color =2" :class="{'color':color ==2}">追加配额</div>
                <div @click="color =3" :class="{'color':color ==3}">减少配额</div>
            </div>
            <div class="center" v-if="color==1">
                <div class="text2">选择追加配额</div>
                <div class="box">
                    <div class="inputbox" @click="bondnavshow=!bondnavshow">
                        <div>{{bondtext}}</div>
                        <span><img src="../../assets/images/下箭头.png" alt=""></span>
                        <ul v-if="bondnavshow">
                            <li v-for="(item,index) in bondnav" :key="index" @click.stop="bond(item)">{{item}}</li>
                        </ul>
                    </div>
                    <div class="text3">追加保证金金额</div>
                    <div class="inputbox">
                        <span class="zi">￥</span>
                        <input type="text" placeholder="请输入追加保证金">
                    </div>
                    <div class="text4">
                        <div>每次追加保证金100元起，且须为100的整数倍，</div>
                        <div>每天最多追加5次（包含取消次数）</div>
                    </div>
                    <div class="text5">您本次追加配额为<span>（本金*倍数）</span><span>0</span></div>
                    <div class="btn">确认提交</div>
                </div>
            </div>
            <div class="center" v-if="color==2">
                <div class="text2">选择增配订单</div>
                <div class="box">
                    <div class="inputbox" @click="bondnavshow=!bondnavshow">
                        <div>{{bondtext}}</div>
                        <span><img src="../../assets/images/下箭头.png" alt=""></span>
                        <ul v-if="bondnavshow">
                            <li v-for="(item,index) in bondnav" :key="index" @click.stop="bond(item)">{{item}}</li>
                        </ul>
                    </div>
                    <div class="text3">填写追加配额保证金</div>
                    <div class="inputbox">
                        <span class="zi">￥</span>
                        <input type="text" placeholder="请输入增配本金">
                    </div>
                    <div class="text4">
                        <div>每次追加配额倍数相同，利息计算方式为：增配的配额*利率</div>
                    </div>
                    <div class="text5">您本次追加配额为<span>（本金*倍数）</span><span>0</span></div>
                    <div class="btn">确认提交</div>
                </div>
            </div>
            <div class="center" v-if="color==3">
                <div class="text2">选择减少配额订单</div>
                <div class="box">
                    <div class="inputbox" @click="bondnavshow=!bondnavshow">
                        <div>{{bondtext}}</div>
                        <span><img src="../../assets/images/下箭头.png" alt=""></span>
                        <ul v-if="bondnavshow">
                            <li v-for="(item,index) in bondnav" :key="index" @click.stop="bond(item)">{{item}}</li>
                        </ul>
                    </div>
                    <div class="text3">填写减少配额保证金</div>
                    <div class="inputbox">
                        <span class="zi">￥</span>
                        <input type="text" placeholder="请输入减配本金">
                    </div>
                    <div class="text4">
                        <div>减配的退款金额为减配金额，不包含利息，下次计算利息已减配后的资金计算。</div>
                    </div>
                    <div class="text5">您本次追加配额为<span>（本金*倍数）</span><span>0</span></div>
                    <div class="btn">确认提交</div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Bond',
  components: {
  },
  data () {
    return {
      color: 1,
      bondtext: '',
      bondnavshow: false,
      bondnav: ['日配', '月配', '体验']
    }
  },
  mounted () {
    let a = 3
    this.$emit('router_left', a)
  },
  methods: {
    bond (val) {
      this.bondnavshow = false
      this.bondtext = val
    }
  }
}
</script>

<style lang="scss">
.Bond {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .Bond_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .Bond_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .Bond_box {
        background-color: #F4F4F4;
        border-radius: 2.5rem;
        overflow: hidden;
        .Bond_nav {
                display: inline-block;
            height: 4.4rem;
            line-height: 4.4rem;
            border: 2px solid #B5B5B5;
            border-top-left-radius: 2.5rem;
            overflow: hidden;
            div {
                display: inline-block;
                width: 13rem;
                font-size: 1.4rem;
                text-align: center;
                border-right: 2px solid #B5B5B5;
                float: left;
                cursor: pointer;
            }
            .color {
                background-color: #C43236;
                color: #fff;
            }
            >div:nth-last-child(1) {
                border-right: none;
            }
        }
        .center {
            padding: 5.6rem 6.85rem;
            .text2 {
                font-size: 1.6rem;
            }
            .box {
                width: 35rem;
                margin:  2rem auto;
                .inputbox {
                    width: 100%;
                    height: 3.3rem;
                    border-bottom: 2px solid #B5B5B5;
                    position: relative;
                    div {
                        width: 32rem;
                        height: 3.3rem;
                        line-height: 3.3rem;
                        font-size: 1.2rem;
                        display: inline-block;
                    }
                    span {
                        width: 2rem;
                        height: 3.3rem;
                        position: relative;
                        img {
                            position: absolute;
                            left: 1rem;
                            top: -1rem;
                        }
                    }
                    ul {
                        width: 100%;
                        border: 1px solid #B5B5B5;
                        background-color: #f4f4f4;
                        position: absolute;
                        z-index: 10;
                        li {
                            width: 100%;
                            line-height: 3.3rem;
                            font-size: 1.2rem;
                            text-indent: 1rem;
                            border-bottom: 1px solid #B5B5B5;
                        }
                    }
                    .zi {
                        font-size: 2rem;
                    }
                    input {
                        font-size: 1.4rem;
                        background-color: #F4F4F4;
                    }
                }
                .text3 {
                    margin-top: 1rem;
                    font-size: 1.4rem;
                    margin-bottom: 1rem;
                }
                .text4 {
                    margin-top: 1rem;
                    font-size: 1rem;
                    line-height: 1.4rem;
                    color: #888888;
                    margin-bottom: 1rem;
                }
                .text5 {
                    font-size: 1.2rem;
                    span:nth-child(1) {
                    color: #888888;
                    }
                    span:nth-child(2) {
                        color: #C43236;
                    }
                }
                .btn {
                    width: 10rem;
                    height: 3.8rem;
                    line-height: 3.8rem;
                    text-align: center;
                    background-color: #C43236;
                    color: #fff;
                    font-size: 1.2rem;
                    border-radius: 16px;
                    margin: 5rem auto;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
