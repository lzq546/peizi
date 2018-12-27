<template>
  <div class="more">
    <top :msg="msg"></top>
    <div class="searchbox">
      <div class="search-box">
        <div
          class="search-ico"
          @click="search"
        ></div>
        <input
          type="text"
          class="search"
          placeholder="搜索股票代码/拼音"
          v-model="searchtext"
        >
      </div>
      <div
        class="empty"
        @click="searchtext=''"
      >清空</div>
    </div>
    <div class="table">
      <table>
        <tr>
          <th>名称代码</th>
          <th>数量</th>
          <th>均价</th>
          <th>盈亏</th>
        </tr>
        <tr
          v-for="(item,index) in stock"
          :key="index"
          :class="{color:(index/2)==1||(index/2)==0}"
        >
          <td>
            <div class="name">{{item.name}}</div>
            <div class="code">{{item.code}}</div>
          </td>
          <td class="green">
            <div>{{item.available}}</div>
            <div>{{item.available}}</div>
          </td>
          <td class="green">
            <div>{{item.price}}</div>
            <div>{{item.price}}</div>
          </td>
          <td class="green">
            <div>{{item.profit}}</div>
            <div>{{item.profit}}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'more',
  components: {
    top
  },
  data () {
    return {
      msg: '更多',
      searchtext: '',
      stock: [
        {
          id: 1,
          name: '第一创业',
          code: '001797',
          available: '5.43',
          price: '0.23',
          profit: '-4.23%'
        },
        {
          id: 1,
          name: '第一创业',
          code: '001797',
          available: '5.43',
          price: '0.23',
          profit: '-4.23%'
        },
        {
          id: 1,
          name: '第一创业',
          code: '001797',
          available: '5.43',
          price: '0.23',
          profit: '-4.23%'
        }
      ]
    }
  },
  mounted () {},
  methods: {
    search () {

    }
  }
}
</script>

<style scoped lang="scss">
.more {
  width: 100%;
  height: 100%;
  margin-bottom: 198px;
  .searchbox {
    width: 100%;
    height: 80px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    .search-box {
      flex: 1;
      height: 50px;
      margin-left: 65px;
      border-radius: 25px;
      font-size: 24px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .search {
      // width: 430px;
      flex: 1;
      height: 50px;
      background-color: #fff;
      border-radius: 6px;
      border: none;
      outline: none;
      text-indent: 18px;
    }
    .search-ico {
      width: 30px;
      height: 30px;
      margin-left: 20px;
      background-color: #666666;
    }
    .empty {
      width: 125px;
      font-size: 24px;
      color: #999999;
      text-align: center;
    }
  }
  .table {
    width: 100%;
    margin-top: 40px;
    table {
      width: 100%;
      .color {
        background-color: #fff;
      }
      tr {
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
        display: flex;
        th {
          flex: 1;
          height: 50px;
          line-height: 50px;
          font-size: 26px;
          color: #333333;
          text-align: center;
        }
        td {
          flex: 1;
          height: 98px;
          font-size: 30px;
          text-align: center;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div {
            width: 100%;
          }
          .name {
            font-weight: 700;
            color: #333;
          }
          .code {
            font-size: 22px;
            margin-top: 11px;
            color: #333;
            text-indent: -40px;
          }
        }
        .green {
          color: #16c635;
          line-height: 34px;
        }
      }
    }
  }
}
</style>
