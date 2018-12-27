<template>
  <div class="Entrustday">
    <top :msg="msg"></top>
    <div class="table">
      <table>
        <tr>
          <th>名称代码</th>
          <th>委托时间</th>
          <th>委托价</th>
          <th>数量</th>
          <th>状态</th>
        </tr>
        <tr v-for="(item,index) in Entrustdaynav" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.time}}</td>
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
  name: 'Entrustday',
  components: {
    top
  },
  data () {
    return {
      msg: '当日委托',
      Entrustdaynav: [
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
.Entrustday {
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
        >td:nth-child(2){
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
