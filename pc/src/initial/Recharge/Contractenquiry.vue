<template>
  <div class="Contractenquiry">
      <div class="Contractenquiry_text">合同查询</div>
      <div class="Contractenquiry_xian"></div>
      <div class="center">
          <el-table
    :data="tableData"
    border>
    <el-table-column
      prop="number"
      label="合同编号"
    align="center"
      width="166">
    </el-table-column>
    <el-table-column
      prop="type"
      label="子账号"
    align="center"
      width="100">
    </el-table-column>
    <el-table-column
      prop="letternumber"
      label="信数"
    align="center"
      width="110">
    </el-table-column>
    <el-table-column
      prop="time"
      label="签约日期"
    align="center"
      width="110">
    </el-table-column>
    <el-table-column
      prop="bond"
      label="保证金"
    align="center"
      width="110">
    </el-table-column>
    <el-table-column
      prop="market"
      label="市值"
    align="center"
      width="110">
    </el-table-column>
    <el-table-column
      prop="total"
      label="总额"
    align="center"
      width="110">
    </el-table-column>
    <el-table-column
      prop="profit"
      label="盈利"
    align="center"
      width="110">
    </el-table-column>
    <el-table-column
      label="查看"
    align="center"
      width="90">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
      </div>
  </div>
</template>

<script>
export default {
  type: 'Contractenquiry',
  components: {
  },
  data () {
    return {
      tableData: [{
        number: 'GP1811151132178836',
        type: '日配',
        letternumber: '23',
        time: '2018-11-31',
        bond: '1089',
        market: '200333',
        total: '551152',
        profit: '231'
      }, {
        number: 'GP1811151132178836',
        type: '日配',
        letternumber: '23',
        time: '2018-11-31',
        bond: '1089',
        market: '200333',
        total: '551152',
        profit: '231'
      }, {
        number: 'GP1811151132178836',
        type: '日配',
        letternumber: '23',
        time: '2018-11-31',
        bond: '1089',
        market: '200333',
        total: '551152',
        profit: '231'
      }, {
        number: 'GP1811151132178836',
        type: '日配',
        letternumber: '23',
        time: '2018-11-31',
        bond: '1089',
        market: '200333',
        total: '551152',
        profit: '231'
      }]
    }
  },
  mounted () {
    let a = 8
    this.$emit('router_left', a)
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>

<style lang="scss">
.Contractenquiry {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .Contractenquiry_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .Contractenquiry_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
}
</style>
