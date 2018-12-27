<template>
  <div class="query">
    <top :msg="msg"></top>
    <div class="table">
      <table>
        <tr>
          <th>提交时间</th>
          <th>
              <span @click="typeshow = !typeshow">{{type}}<i></i></span>
              <ul v-if="typeshow">
                  <li v-for="(item,index) in typenav" @click="typeclick(item)" :key="index">{{item}}</li>
              </ul>
          </th>
          <th>倍数及子账户</th>
          <th>本金</th>
        </tr>
        <tr>
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
import top from '@/components/top'
export default {
  name: 'query',
  components: {
    top
  },
  data () {
    return {
      msg: '配资订单',
      typeshow: false,
      type: '类型',
      typenav: ['日配', '月配', '体验']
    }
  },
  methods: {
    typeclick (val) {
      this.type = val
      this.typeshow = false
    }
  }
}
</script>

<style scoped lang="scss">
.query {
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
          font-size: 30px;
          color: #333333;
          border-bottom: 2px solid #d6d6d6;
          span {
            display: inline-block;
            height: 90px;
            padding: 0 10px;
            padding-left: 20px;
            i {
                display: inline-block;
              border-top: 6.5px solid #000;
              border-left: 4.5px solid transparent;
              border-bottom: 6.5px solid transparent;
              border-right: 4.5px solid transparent;
              margin-top: 40px;
              margin-left: 5px;
            }
          }
          ul {
              width: 74px;
                  margin-top: -30px;
                  >li:nth-child(2){
                      opacity: 0.8;
                  }>li:nth-child(3){
                    opacity: 0.5;
                  }
              li {
                  width: 100%;
                  height: 30px;
                  line-height: 30px;
                  font-size: 20px;
                  text-align: center;
                  background-color: #C43236;
                  color: #fff;
                  margin-left: 60px;
                  position: relative;
                  z-index: 10;
              }
          }
        }
        td {
          flex: 1;
          height: 90px;
          line-height: 90px;
          font-size: 30px;
          color: 30px;
          border-bottom: 2px solid #d6d6d6;
        }
      }
    }
  }
}
</style>
