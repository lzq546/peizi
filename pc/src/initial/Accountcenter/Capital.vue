<template>
  <div class="Capital">
      <div class="Capital_text">资金明细</div>
      <div class="Capital_xian"></div>
      <div class="text">
          <span>明细时间</span>
          <span @click="all" :class="{'color':color==1}">全部</span>
          <span @click="week" :class="{'color':color==2}">一星期</span>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        prop="date"
        align="center"
        label="时间">
        </el-table-column>
        <el-table-column
        prop="type"
        align="center"
        label="类型">
        </el-table-column>
        <el-table-column
        prop="address"
        align="center"
        label="收入/支出（元）">
        </el-table-column>
        <el-table-column
        prop="balance"
        align="center"
        label="余额">
        </el-table-column>
        <el-table-column
        prop="account"
        align="center"
        label="子账号">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Capital',
  components: {
  },
  data () {
    return {
      color: 1,
      tableData: [{
        date: '2016-05-02',
        type: '微信',
        address: '2105.00',
        balance: '300.00',
        account: '日配'
      }, {
        date: '2016-05-04',
        type: '微信',
        address: '232.12',
        balance: '300.00',
        account: '日配'
      }, {
        date: '2016-05-01',
        type: '微信',
        address: '12333.00',
        balance: '300.00',
        account: '体验'
      }, {
        date: '2016-05-03',
        type: '微信',
        address: '5421.00',
        balance: '300.00',
        account: '月配'
      }]
    }
  },
  mounted () {
    let a = 4
    this.$emit('router_left', a)
  },
  methods: {
    all () {
      this.color = 1
    },
    week () {
      this.color = 2
    }
  }
}
</script>

<style lang="scss">
.Capital {
    width: 100%;
    padding:1.5rem 8.05rem 1.5rem 2.05rem;
    .Capital_text {
        font-size: 2rem;
        margin-bottom: 1.8rem;
    }
    .Capital_xian {
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
