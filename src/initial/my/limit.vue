<template>
  <div class="limit">
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
  name: 'limit',
  components: {
    top
  },
  props: ['name'],
  data () {
    return {
      msg: '限制个股名单',
      onenav: [
        '用户ID',
        '股票代码',
        '股票名称',
        '名称首字母',
        '市场模块',
        '加入时间'
      ],
      twonav: [
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '2018/11/29 20:18:29'
          ]
        },
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '2018/11/29 20:18:29'
          ]
        },
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '2018/11/29 20:18:29'
          ]
        },
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '2018/11/29 20:18:29'
          ]
        },
        {
          all: [
            '14',
            '20181015085931',
            '17691128880',
            '600023',
            '招商银行',
            '2018/11/29 20:18:29'
          ]
        }
      ]
    }
  },
  methods: {},
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.limit {
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
        height: 360px;
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
