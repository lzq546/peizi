<template>
  <div class="Administration">
    <top :msg="msg"></top>
    <div class="table">
      <table>
        <tr>
          <th>创建时间</th>
          <th @click="accountshow=!accountshow">{{account}}<i></i>
          <div
          class="two"
          v-if="accountshow"
        >
          <ul>
            <li
              v-for="(item,index) in accountnav"
              @click="account=item"
              :key="index"
            >{{item}}</li>
          </ul>
        </div>
          </th>
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
      ],
      account: '子账号',
      accountshow: false,
      accountnav: ['账号1', '账号2', '账号3']
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
          position: relative;
          i {
            display: inline-block;
            border: 9px solid #1b1b1b;
            border-top-width: 18px;
            border-color: #1b1b1b transparent transparent transparent;
            position: absolute;
            right: 20px;
            top: 10px;
          }
          .two {
            width: 100%;
            background-color: #fff;
            position: absolute;
            top: 48px;
            border: 2px solid #e2e2e2;
            z-index: 10;
            li {
              width: 100%;
              height: 50px;
              line-height: 50px;
            }
          }
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
