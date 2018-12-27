<template>
  <div class="Capital">
    <top :msg="msg"></top>
    <div class="table">
      <table>
        <tr>
          <th>时间</th>
          <th>类型</th>
          <th>交易金额</th>
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
        </tr>
        <tr
          v-for="(item,index) in Capitalnav"
          :key="index"
        >
          <td>{{item.time}}</td>
          <td>{{item.type}}</td>
          <td>{{item.money}}</td>
          <td>{{item.account}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Capital',
  components: {
    top
  },
  data () {
    return {
      msg: '资金明细',
      account: '子账号',
      accountshow: false,
      Capitalnav: [
        { time: '2018-12-7', type: '00297', money: '0.28', account: '20000' },
        { time: '2018-12-7', type: '00297', money: '0.28', account: '20000' }
      ],
      accountnav: ['账户1', '账户2', '账户3']
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Capital {
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
        justify-content: center;
        align-items: center;
        th {
          flex: 1;
          height: 90px;
          line-height: 90px;
          font-size: 32px;
          color: #333333;
          border-bottom: 2px solid #d6d6d6;
          position: relative;
          i {
            display: inline-block;
            border: 9px solid #1b1b1b;
            border-top-width: 18px;
            border-color: #1b1b1b transparent transparent transparent;
            position: absolute;
            right: 20px;
            top: 40px;
          }
          .two {
            width: 100%;
            background-color: #fff;
            position: absolute;
            top: 78px;
            border: 2px solid #e2e2e2;
            z-index: 10;
            li {
              width: 100%;
              height: 50px;
              line-height: 50px;
            }
          }
        }
        > td:first-child {
          font-size: 22px;
        }
        td {
          flex: 1;
          height: 90px;
          line-height: 90px;
          text-align: center;
          font-size: 30px;
          color: #333333;
          border-bottom: 2px solid #d6d6d6;
          // border-bottom: 2px solid #d6d6d6;
        }
      }
    }
  }
}
</style>
