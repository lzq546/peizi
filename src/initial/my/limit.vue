<template>
  <div class="limit">
    <top :msg="msg"></top>
      <div class="searchbox">
        <div class="search-box">
          <div class="search-ico" @click="search"><img src="../../assets/images/放大镜.png" alt=""></div>
          <input type="text" class="search" placeholder="搜索股票代码/名称" v-model="searchtext">
        </div>
          <div class="empty" @click="searchtext=''">清空</div>
      </div>
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
      searchtext: '',
      onenav: [
        '用户ID',
        '股票代码',
        '股票名称',
        '名称首字母',
        '市场板块',
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
  methods: {
    
    search () {
      let self = this
      let a = self.searchtext.trim()
      if (a.length > 0) {
        self.searchhistory.push(a)
      }
      let b = JSON.stringify(self.searchhistory)
      localStorage.setItem('searchhistory', b)
    },
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.limit {
  margin-bottom: 128px;
  font-size: 26px;
  color: #333333;
  
    .searchbox{
      width: 100%;
      height: 80px;
      background-color: #F5F5F5;
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
        img {
          width: 100%;
          height: 100%;
        }
      }
      .empty {
        width: 125px;
        font-size: 24px;
        color: #999999;
        text-align: center;
      }
    }
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
