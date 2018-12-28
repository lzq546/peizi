<template>
  <div class="transaction">
    <topindex :msg="msg"></topindex>
    <div class="conter">
      <assets></assets>
      <div class="nav">
        <ul>
          <li class="first"><router-link to="/Purchases"><div class="img"><img src="@/assets/images/买入图标.png" alt=""></div><div class="text">买入</div></router-link></li>
          <li><router-link to="/Sell"><div class="img"><img src="@/assets/images/卖出图标.png" alt=""></div><div class="text">卖出</div></router-link></li>
          <li><router-link to="/Chedan"><div class="img"><img src="@/assets/images/撤单图标.png" alt=""></div><div class="text">撤单</div></router-link></li>
          <li><router-link to="/Position"><div class="img"><img src="@/assets/images/持仓图标.png" alt=""></div><div class="text">持仓</div></router-link></li>
        </ul>
      </div>
    </div>
      <div class="nav1">
        <ul>
          <li v-for="(item,index) in nav1" :key="index" :class="{'bordercolor':index==current}" @click="allocation(item,index)" >{{item}}</li>
        </ul>
      </div>
      <div class="searchbox">
        <div class="search-box">
          <div class="search-ico" @click="search"><img src="../assets/images/放大镜.png" alt=""></div>
          <input type="text" class="search" placeholder="搜索股票代码/拼音" v-model="searchtext">
        </div>
          <div class="empty" @click="searchtext=''">清空</div>
      </div>
      <div class="table">
        <table>
          <tr>
            <th>名称代码</th>
            <th>数量/可用</th>
            <th>成本/现价</th>
            <th>市值/盈亏</th>
          </tr>
          <tr v-for="(item,index) in stock" :key="index" :class="{color:(index/2)==1||(index/2)==0}">
            <td><div class="name">{{item.name}}</div><div class="code">{{item.code}}</div></td>
            <td class="green"><div>{{item.available}}</div><div>{{item.available}}</div></td>
            <td class="green"><div>{{item.price}}</div><div>{{item.price}}</div></td>
            <td class="greenbox"><div class="box">{{item.profit}}</div><div class="box">{{item.profit}}</div></td>
          </tr>
        </table>
      </div>
      <div v-if="show">
      <div class="searchhistory clearfix">
        <div class="fl">历史搜索</div>
        <div class="fr">+添加自选股</div>
      </div>
      <div class="searchhistorybox">
        <span v-for="(item,index) in searchhistory" @click="searchtext=item" :key="index">{{item}}<i @click.stop="delsearch(item)">x</i></span>
      </div>
      </div>
      <div class="more" v-if="show1">
        <router-link to="more"><span class="fr">更多»</span></router-link>
      </div>
  </div>
</template>

<script>
import topindex from '@/components/topindex'
import assets from '@/components/assets'
export default {
  name: 'transaction',
  components: {
    topindex,
    assets
  },
  data () {
    return {
      current: 0,
      msg: '交易',
      nav1: ['持仓 0', '搜索及自选股', '记录'],
      searchtext: '',
      searchhistory: [],
      show: false,
      show1: true,
      stock: [
        {id: 1, name: '第一创业', code: '001797', available: '5.43', price: '0.23', profit: '-4.23%'},
        {id: 1, name: '第一创业', code: '001797', available: '5.43', price: '0.23', profit: '-4.23%'},
        {id: 1, name: '第一创业', code: '001797', available: '5.43', price: '0.23', profit: '-4.23%'}
      ]
    }
  },
  methods: {
    // 判断当前选中哪个
    allocation (item, index) {
      this.current = index
      if (index == 1) {
        this.show = true
        this.show1 = false
      } else {
        this.show = false
        this.show1 = true
      }
    },
    search () {
      let self = this
      let a = self.searchtext.trim()
      if (a.length > 0) {
        self.searchhistory.push(a)
      }
      let b = JSON.stringify(self.searchhistory)
      localStorage.setItem('searchhistory', b)
    },
    delsearch (val) {
      let self = this
      for (let i = 0; i < self.searchhistory.length; i++) {
        if (self.searchhistory[i] == val) {
          self.searchhistory.splice(i, 1)
        }
      }
      let b = JSON.stringify(self.searchhistory)
      localStorage.setItem('searchhistory', b)
    },
    getsearch () {
      let a = JSON.parse(localStorage.getItem('searchhistory'))
      if (a) {
        this.searchhistory = a
      }
    }
  },
  mounted () {
    this.getsearch()
  }
}
</script>

<style scoped lang="scss">
.transaction {
  margin-bottom: 98px;
  .conter {
    width: 100%;
    padding: 0 45px;
    .nav {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 48px;
      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        .first {
          margin-left: 0px;
        }
        li {
          width: 100px;
          height: 141px;
          margin-left: 86px;
          .img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #F1F1F1;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .text{
            margin-top: 18px;
            font-size: 24px;
            text-align: center;
          }
        }
      }
    }
  }
    .nav1 {
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        li {
          flex: 1;
          font-size: 30px;
          line-height: 54px;
          text-align: center;
          border-bottom: 4px solid transparent;
        }
        .bordercolor {
          border-bottom: 4px solid #C43236;
        }
      }
    }
    .searchbox{
      width: 100%;
      height: 80px;
      background-color: #F5F5F5;
      display: flex;
      align-items: center;
    .search-box {
        flex: 1;
        height: 50px;
        margin-left: 65px;
        border-radius: 25px;
        font-size: 24px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
      .search {
        // width: 430px;
        flex: 1;
        height: 50px;
        background-color: #fff;
        border-radius: 6px;
        border: none;
        outline: none;
        text-indent: 18px;
      }
      .search-ico {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .empty {
        width: 125px;
        font-size: 24px;
        color: #999999;
        text-align: center;
      }
    }
    .table {
      width: 100%;
      margin-top: 40px;
      table {
        width: 100%;
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
            background-color: #F5F5F5;
            color: #999999;
            text-align: center;
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
    .searchhistory {
      font-size: 26px;
      color: #999;
      padding: 24px 19px 19px 40px;
    }
    .searchhistorybox {
      padding: 0 2px 19px 40px;
      span {
        display: inline-block;
        padding: 5px 40px 5px 20px;
        font-size: 20px;
        margin-right: 17px;
        margin-bottom: 19px;
        color: #fff;
        background-color: #D05B5E;
        border-radius: 4px;
        position: relative;
        i {
          position: absolute;
          display: inline-block;
          width: 40px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          top:0px;
        }
      }
    }
    .more {
      width: 100%;
      height: 68px;
      border-top: 1px solid #EBEBEB;
      .fr {
        font-size: 26px;
        color: #999999;
        margin-right: 39px;
        margin-top: 22px;
      }
    }
}
</style>
