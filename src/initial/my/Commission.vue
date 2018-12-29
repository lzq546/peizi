<template>
  <div class="Commission">
    <top :msg="msg"></top>
    <div class="box">
      <div class="left">
        <div
          v-for="(item,index) in onenav"
          :key="index"
        >{{item}}</div>
      </div>
      <div class="right">
        <div class="right_box">
          <div>
            <ul
              v-for="(item,index) in twonav"
              :key="index"
            >
              <li
                v-for="(val,index) in item.all"
                :key="index"
              >{{val}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'Commission',
  components: {
    top
  },
  props: ['name'],
  data () {
    return {
      msg: '佣金收入明细',
      onenav: [
        '用户ID',
        '合约编号',
        '发生时间',
        '股票代码',
        '股票名称',
        '买卖方向',
        '成交数量',
        '成交金额',
        '佣金',
        '成本',
        '利润',
        '所属代理',
        '代理名称',
        '印花税',
        '过户费',
        '5元',
        '备注'
      ],
      twonav: [
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '买入',
            '2,300.00',
            '200.00',
            '0.47',
            '5.00',
            '0.00',
            'A0001',
            '001',
            '001',
            '001',
            '5.00',
            '提交金额=（32=0.000）+0.500'
          ]
        },
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '买入',
            '2,300.00',
            '200.00',
            '0.47',
            '5.00',
            '0.00',
            'A0001',
            '001',
            '001',
            '001',
            '5.00',
            '提交金额=（32=0.000）+0.500'
          ]
        },
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '买入',
            '2,300.00',
            '200.00',
            '0.47',
            '5.00',
            '0.00',
            'A0001',
            '001',
            '001',
            '001',
            '5.00',
            '提交金额=（32=0.000）+0.500'
          ]
        },
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '买入',
            '2,300.00',
            '200.00',
            '0.47',
            '5.00',
            '0.00',
            'A0001',
            '001',
            '001',
            '001',
            '5.00',
            '提交金额=（32=0.000）+0.500'
          ]
        },
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '买入',
            '2,300.00',
            '200.00',
            '0.47',
            '5.00',
            '0.00',
            'A0001',
            '001',
            '001',
            '001',
            '5.00',
            '提交金额=（32=0.000）+0.500'
          ]
        }
      ]
    }
  },
  methods: {
  },
  mounted () {
    this.msg = this.$store.state.yongjinname
  }
}
</script>

<style scoped lang="scss">
.Commission {
  margin-bottom: 128px;
  font-size: 26px;
  color: #333333;
  .box {
    width: 100%;
    display: flex;
    .left {
      width: 184px;
      border-right: 2px solid #c2c2c2;
      div {
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-bottom: 2px solid #c2c2c2;
      }
    }
    .right {
      flex: 1;
      overflow: hidden;
      color: #272536;
      .right_box {
        width: 100%;
        height: 1020px;
        overflow: scroll;
        div {
          display: flex;
        }
        ul {
          display: inline-block;
          width: 340px;
          li {
            width: 340px;
            height: 60px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid #c2c2c2;
            border-right: 2px solid #c2c2c2;
          }
          > li:nth-last-child(1) {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
