<template>
  <div class="Position">
    <div class="table">
      <table>
        <tr>
          <th>名称代码</th>
          <th>均价</th>
          <th>数量</th>
          <th>盈利</th>
          <th>子账号</th>
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
