<template>
  <div class="Transactionday">
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
        <tr v-for="(item,index) in Transactiondaynav" :key="index">
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
  name: 'Transactionday',
  components: {
    top
  },
  data () {
    return {
      msg: '当日成交',
      Transactiondaynav: [
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
.Transactionday {
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
}
</style>
