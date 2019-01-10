<template>
  <div class="Administration">
      <div class="Administration_text">账户管理</div>
      <div class="Administration_xian"></div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        prop="date"
        align="center"
        label="创建时间">
        </el-table-column>
        <el-table-column
        prop="type"
        align="center"
        label="倍数">
        </el-table-column>
        <el-table-column
        prop="account"
        align="center"
        label="子账号">
        </el-table-column>
        <el-table-column
        prop="assets"
        align="center"
        label="总资产">
        </el-table-column>
        <el-table-column
        prop="market"
        align="center"
        label="市值">
        </el-table-column>
        <el-table-column
        prop="profit"
        align="center"
        label="盈利">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Administration',
  components: {
  },
  data () {
    return {
      color: 1,
      tableData: [{
        date: '2016-05-02',
        type: '2倍',
        account: '日配',
        assets: '300.00',
        market: '1300.00',
        profit: '200.00'
      }, {
        date: '2016-05-04',
        type: '2倍',
        account: '日配',
        assets: '300.00',
        market: '1300.00',
        profit: '50.00'
      }, {
        date: '2016-05-01',
        type: '2倍',
        account: '日配',
        assets: '300.00',
        market: '1300.00',
        profit: '10.00'
      }, {
        date: '2016-05-03',
        type: '2倍',
        account: '日配',
        assets: '300.00',
        market: '1300.00',
        profit: '150.00'
      }]
    }
  },
  mounted () {
    let a = 7
    this.$emit('router_left', a)
  },
  methods: {
  }
}
</script>

<style lang="scss">
.Administration {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .Administration_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .Administration_xian {
        width: 100%;
        height: 2px;
        background-color: #B5B5B5;
        margin-bottom: 1.6rem;
    }
    .text {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        span {
            margin-right: 4rem;
        }
        >span:nth-child(2){
            cursor: pointer;
        }
        >span:nth-child(3){
            cursor: pointer;
        }
        .color {
            color: #C43236;
        }
    }
}
</style>
