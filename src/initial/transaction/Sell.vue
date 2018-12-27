<template>
  <div class="Sell">
    <!-- 这是一个子路由是 -->
    <div class="conter clearfix">
      <div class="left fl">
        <input
          class="one"
          type="text"
          placeholder="股票代码"
        >
        <div class="Buying_price"><span class="fl">-</span><input
            type="text"
            placeholder="买入价"
          ><span class="fr">+</span></div>
        <div>
          <div class="text clearfix">
            <div class="left_left fl">跌停</div>
            <div class="left_right fr">涨停</div>
          </div>
          <div class="nav">
            <ul>
              <li>全部</li>
              <li>1/2</li>
              <li>1/3</li>
              <li>1/4</li>
            </ul>
          </div>
          <div class="two">
            <input
              type="text"
              placeholder="买入量"
            >
          </div>
          <div class="Purchasesbtn">卖出</div>
        </div>
      </div>
      <div class="right fr">
        <table>
          <tr
            v-for="(item,index) in td"
            :key="index"
          >
            <td>卖5</td>
            <td>{{item.Limitdown}}</td>
            <td>{{item.Limitup}}</td>
          </tr>
        </table>
        <div class="xian"></div>
        <table>
          <tr
            v-for="(item,index) in td"
            :key="index"
          >
            <td>卖5</td>
            <td>{{item.Limitdown}}</td>
            <td>{{item.Limitup}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="table">
      <table>
          <tr>
            <th style="border:none">市值</th>
            <th>盈亏</th>
            <th>持仓/可用</th>
            <th>成本/现价</th>
          </tr>
          <tr v-for="(item,index) in stock" :key="index" :class="{color:(index/2)==1||(index/2)==0}">
            <td><div class="name">{{item.name}}</div><div class="code">{{item.code}}</div></td>
            <td class="green"><div>{{item.available}}</div><div>{{item.available}}</div></td>
            <td class="green"><div>{{item.price}}</div><div>{{item.price}}</div></td>
            <td class="greenbox"><div class="box">{{item.profit}}</div><div class="box">{{item.profit}}</div></td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sell',
  components: {
  },
  data () {
    return {
      msg: '卖出',
      td: [
        { Limitdown: '--', Limitup: '--' },
        { Limitdown: '--', Limitup: '--' },
        { Limitdown: '--', Limitup: '--' },
        { Limitdown: '--', Limitup: '--' },
        { Limitdown: '--', Limitup: '--' }
      ],
      stock: [
        {id: 1, name: '第一创业', code: '001797', available: '5.43', price: '0.23', profit: '-4.23%'},
        {id: 1, name: '第一创业', code: '001797', available: '5.43', price: '0.23', profit: '-4.23%'},
        {id: 1, name: '第一创业', code: '001797', available: '5.43', price: '0.23', profit: '-4.23%'}
      ]
    }
  },
  mounted () {
    let currentn = 1
    this.$emit('currentn', currentn)
  },
  methods: {},
  destroyed: function () {}
}
</script>

<style scoped lang="scss">
.Sell {
  width: 100%;
  padding-bottom: 208px;
  .conter {
    padding: 52px 0 0px 29px;
    font-size: 30px;
    .left {
      .one {
        width: 426px;
        height: 70px;
        margin-bottom: 20px;
        text-align: center;
        border: 2px solid #9FC3F5;
      }
      .Buying_price {
        position: relative;
        width: 426px;
        height: 70px;
        display: flex;
        overflow: hidden;
        input {
        width: 426px;
          text-align: center;
          border: 2px solid #9FC3F5;
        }
        span {
          display: inline-block;
          width: 80px;
          height: 70px;
          line-height: 70px;
          text-align: center;
          color: #fff;
          background-color: #9FC3F5;
        }
      }
      .text {
        width: 426px;
        color: #333333;
        margin: 20px 0;
      }
      .nav {
        width: 426px;
        ul {
          width: 100%;
          display: flex;
          border: 2px solid #999999;
          border-left: none;
          li {
            flex: 1;
            color: #999999;
            height: 60px;
            line-height: 60px;
            text-align: center;
            border-left: 2px solid #999999;
          }
        }
      }
      .two {
        width: 426px;
        margin: 10px 0px;
        input {
          width: 100%;
          height: 70px;
          border: 2px solid #9FC3F5;
        }
      }
      .Purchasesbtn {
        width: 426px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        color: #fff;
        background-color: #9FC3F5;
      }
    }
    .right {
      color: #999999;
      table {
      margin-right: 88px;
        tr {
          width: 187px;
          display: flex;
          margin-bottom: 15px;
          td {
            flex: 1;
            height: 28px;
          }
        }
      }
      .xian {
        width: 280px;
        height: 2px;
        margin-right: 8px;
        margin-top: 20px;
        margin-bottom: 10px;
        background: rgba(160, 160, 160, 1);
      }
    }
  }
  .table {
      width: 100%;
      margin-top: 40px;
      position: relative;
      table {
        width: 100%;
        margin-top: 50px;
          .color {
            background-color: #fff;
          }
        tr {
          width: 100%;
          background-color: #f3f3f3;
          display: flex;
          th {
            flex: 1;
            height: 50px;
            line-height: 50px;
            font-size: 30px;
            background-color: #F5F5F5;
            color: #666666;
            text-align: center;
            margin: 15px 0px;
            border-left: 1px solid #ADADAD;
          }
          td {
            flex: 1;
            height: 98px;
            font-size: 30px;
            text-align: center;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            div {
              width: 100%;
            }
            .name {
              font-weight: 700;
              color:#666666;
            }
            .code {
              font-size: 22px;
              margin-top: 11px;
              color:#666666;
              text-indent: -40px;
            }
          }
          .green {
            color: #16C635;
            line-height: 34px;
          }
          .greenbox {
            .box {
              display: inline-block;
              padding: 6px 18px;
              width: 136px;
              background-color: #15C635;
              color: #fff;
              border-radius: 8px;
            }
            :nth-child(2){
              margin-top: 10px;
            }
          }
        }
      }
    }
}
</style>
