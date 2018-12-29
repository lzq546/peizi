<template>
  <div class="Position">
    <div class="table">
      <table>
        <tr>
          <th>名称代码</th>
          <th>均价</th>
          <th>数量</th>
          <th>盈利</th>
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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Position',
  components: {
  },
  data () {
    return {
      account: '子账号',
      accountshow: false,
      accountnav: ['账号1', '账号2', '账号3']
    }
  },
  mounted () {
    let currentn = 3
    this.$emit('currentn', currentn)
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Position {
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
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        >th:first-child{
          border-left: none;
        }
        th {
          flex: 1;
          height: 50px;
          line-height: 50px;
          font-size: 30px;
          color: #666666;
          border-left: 1px solid #ADADAD;
          // border-bottom: 2px solid #d6d6d6;
          position: relative;
          i {
            display: inline-block;
            border: 9px solid #1b1b1b;
            border-top-width: 18px;
            border-color: #1b1b1b transparent transparent transparent;
            position: absolute;
            right: 10px;
            top: 20px;
          }
          .two {
            width: 100%;
            background-color: #fff;
            position: absolute;
            top: 58px;
            border: 2px solid #e2e2e2;
            z-index: 10;
            li {
              width: 100%;
              height: 50px;
              line-height: 50px;
            }
          }
        }
        td {
          flex: 1;
          height: 50px;
          line-height: 50px;
          font-size: 30px;
          color: #666666;
          // border-bottom: 2px solid #d6d6d6;
        }
      }
    }
  }
}
</style>
