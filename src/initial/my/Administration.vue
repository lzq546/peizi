<template>
  <div class="Administration">
    <top :msg="msg"></top>
    <div class="table">
      <table>
        <tr>
          <th>创建时间</th>
          <th>子账号</th>
          <th>总资产</th>
          <th>市值</th>
          <th>盈利</th>
          <th>倍数</th>
        </tr>
        <tr v-for="(item,index) in Administrationnav" :key="index">
          <td>{{item.time}}</td>
          <td>{{item.account}}</td>
          <td>{{item.assets}}</td>
          <td>{{item.market}}</td>
          <td>{{item.profit}}</td>
          <td>{{item.recite}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Administration',
  components: {
    top
  },
  data () {
    return {
      msg: '账号管理',
      Administrationnav: [
        {time: '2018-12-7', account: '1226', assets: '0.28', market: '20000', profit: '12', recite: '1'},
        {time: '2018-12-7', account: '1226', assets: '0.28', market: '20000', profit: '12', recite: '2'}
      ]
    }
  },
  mounted () {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Administration {
  width: 100%;
  height: 100%;
    margin-bottom: 198px;
  .table {
    width: 100%;
    table {
      width: 100%;
      tr {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 10px 40px;
        // align-items: center;
            border-bottom: 2px solid #D6D6D6;
        th {
            width: 20%;
          font-size: 30px;
          color: #333333;
          text-align: left;
        }
        >td:nth-child(1) {
            font-size: 22px
        }
        td {
            width: 20%;
        //   text-align: center;
          font-size: 28px;
          color: #333333;
        }
      }
    }
  }
}
</style>
