<template>
  <div class="Chedan">
    <div class="table">
      <table>
        <tr>
          <th>名称代码</th>
          <th>委托数量</th>
          <th>委托金额</th>
          <th>备注</th>
          <th>撤单</th>
        </tr>
        <tr
          v-for="(item,index) in chedannav"
          :key="index"
        >
          <td>
            <span>{{item.name}}</span>
            <span>{{item.number}}</span>
          </td>
          <td>{{item.authorizedquantity}}</td>
          <td>{{item.authorizedmoney}}</td>
          <td>{{item.beizhu}}</td>
          <td @click="messagebox=true"><span>撤单</span></td>
        </tr>
      </table>
    </div>
    <div class="message" v-if="messagebox" @click="messagebox=!messagebox">
    <div class="messagebox clearfix">
      <div>委托撤单确认 </div>
      <button
        class="fl"
        @click.stop="confirm"
      >确认</button>
      <button
        class="fr"
        @click.stop="cancel"
      >取消</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chedan',
  components: {},
  data () {
    return {
      chedannav: [
        {
          name: '第一创业',
          number: '002797',
          authorizedquantity: '0.23',
          authorizedmoney: '25343',
          beizhu: ''
        }
      ],
      messagebox: false
    }
  },
  mounted () {
    let currentn = 2
    this.$emit('currentn', currentn)
  },
  methods: {
    cancel () {
      this.messagebox = false
    },
    confirm () {}
  }
}
</script>

<style scoped lang="scss">
.Chedan {
  width: 100%;
  height: 100%;
  margin-bottom: 198px;
  .table {
    width: 100%;
    table {
      width: 100%;
      > tr:first-child {
        background-color: #f8f8f8;
      }
      tr {
        width: 100%;
        padding: 20px 0;
        border-bottom: 2px solid #cecece;
        display: flex;
        justify-content: center;
        align-items: center;
        > th:first-child {
          border-left: none;
        }
        th {
          flex: 1;
          height: 50px;
          line-height: 50px;
          font-size: 30px;
          color: #666666;
          border-left: 1px solid #adadad;
          // border-bottom: 2px solid #d6d6d6;
        }
        td {
          flex: 1;
          height: 50px;
          line-height: 50px;
          text-align: center;
          border-right: 2px solid #b0b0b0;
          font-size: 30px;
          color: #666666;
          // border-bottom: 2px solid #d6d6d6;
        }
        > td:first-child {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        > td:nth-last-child(1) {
          border-right: none;
          span {
            font-size: 24px;
            color: #fff;
            padding: 10px 18px;
            background-color: #c43236;
            border-radius: 11px;
          }
        }
      }
    }
  }
  .message {
    width: 100%;
    height: 100%;
    background: rgba(112, 112, 112, 0.5);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 11;
  }
    .messagebox {
    width: 534px;
    height: 534px;
    font-size: 40px;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -267px;
    margin-left: -267px;
    padding: 88px 60px;
    button {
      background-color: #c43236;
      color: #fff;
      padding: 21px 41px;
      margin-top: 107px;
    }
  }
}
</style>
