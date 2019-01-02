<template>
  <div class="Transactionhistory">
    <top :msg="msg"></top>
    <div class="table">
      <table>
        <tr>
          <th>成交时间</th>
          <th>名称代码</th>
          <th>成交价</th>
          <th>成交量</th>
          <th>成交额</th>
        </tr>
        <div class="searchbox">
        <div class="search-box">
          <input type="text" class="search" placeholder="历史查询/股票代码/时间(仅三个月）" v-model="searchtext">
        </div>
          <div class="empty" @click="searchtext=''">清空</div>
      </div>
        <tr v-for="(item,index) in Transactionhistorynav" :key="index">
          <td>{{item.time}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.amount}}</td>
          <td>{{item.forehead}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Transactionhistory',
  components: {
    top
  },
  data () {
    return {
      msg: '当日成交',
      searchtext: '',
      Transactionhistorynav: [
        {name: '002797', time: '2018-12-7', price: '0.28', amount: '20000', forehead: '20000'},
        {name: '002797', time: '2018-12-7', price: '0.28', amount: '20000', forehead: '20000'}
      ]
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Transactionhistory {
  width: 100%;
  height: 100%;
    margin-bottom: 198px;
  .table {
    width: 100%;
    table {
      width: 100%;
      >tr:first-child{
        background-color: #F8F8F8;
      }
      tr {
        width: 100%;
        padding:10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        th {
          flex: 1;
          height: 50px;
          line-height: 50px;
          font-size: 30px;
          color: #666666;
        }
        >td:nth-child(1){
            font-size: 22px;
        }
        td {
          flex: 1;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 30px;
          color: #666666;
          // border-bottom: 2px solid #d6d6d6;
        }
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
      .empty {
        width: 125px;
        font-size: 24px;
        color: #999999;
        text-align: center;
      }
    }
}
</style>
