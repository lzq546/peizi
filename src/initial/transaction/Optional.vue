<template>
    <div class="Optional">
        <top :msg="msg"></top>
        <div class="searchbox">
        <div class="search-box">
          <div class="search-ico"><img src="../../assets/images/放大镜.png" alt=""></div>
          <input type="text" class="search" placeholder="搜索股票代码/名称" v-model="searchtext">
        </div>
          <div class="empty" @click="search">添加</div>
      </div>
      <div class="table">
        <table>
          <tr>
            <th>名称代码</th>
            <th>最新价</th>
            <th>涨跌</th>
            <th>涨幅</th>
            <th>删除</th>
          </tr>
          <tr v-for="(item,index) in stocknav" :key="index" :class="{color:(index/2)==1||(index/2)==0}">
            <td><div class="name">{{item.name}}</div><div class="code">{{item.code}}</div></td>
            <td class="green"><div>{{item.available}}</div></td>
            <td class="green"><div>{{item.price}}</div></td>
            <td class="greenbox"><div class="box">{{item.profit}}</div></td>
            <td class="greenbox" @click="delid=item.id,messagebox=true"><div class="boxfsz">删除</div></td>
          </tr>
        </table>
      </div>
    <div
      class="message"
      v-if="messagebox"
      @click="messagebox=!messagebox"
    >
      <div class="messagebox clearfix">
        <div>确认删除</div>
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
  name: 'Optional',
  components: {
    top
  },
  data () {
    return {
      msg: '添加自选股',
      searchtext: '',
      messagebox: false,
      delid: '',
      stock: [
        {id: 0, name: '第一创业', code: '001797', available: '5.43', price: '0.23', profit: '-4.23%'},
        {id: 1, name: '第二创业', code: '001847', available: '5.43', price: '0.23', profit: '-4.23%'},
        {id: 2, name: '第三创业', code: '002597', available: '5.43', price: '0.23', profit: '-4.23%'}
      ],
      stocknav: []
    }
  },
  methods: {
    search () {
      console.log(this.searchtext)
    },
    confirm () {
      let self = this
      for (let i = 0; i < self.stock.length; i++) {
        if (self.delid == self.stock[i].id) {
          self.stock.splice(i, 1)
        }
      }
      self.stocknav = self.stock
      this.messagebox = false
    },
    cancel () {
      this.messagebox = false
    }
  },
  mounted () {
    this.stocknav = this.stock
  }
}
</script>
<style scoped lang="scss">
.Optional {
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
            .fsz {
              font-size: 18px;
            }
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
            .boxfsz {
              display: inline-block;
              padding: 10px 10px !important;
              width: 80px !important;
              background-color: #15C635;
              color: #fff;
              border-radius: 8px;
              font-size: 26px;
            }
          }
        }
      }
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
    z-index: 10;
    button {
      background-color: #c43236;
      color: #fff;
      padding: 21px 41px;
      margin-top: 107px;
    }
  }
}
</style>
