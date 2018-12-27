<template>
  <div class="Mybankcard">
    <top :msg="msg"></top>
    <div class="center">
    <div class="card" v-if="false"></div>
        <router-link to="Addbankcard"><div class="add">
            <div>+</div>
            <span>添加银行卡</span>
        </div>
        </router-link>
    </div>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'Mybankcard',
  components: {
    top
  },
  data () {
    return {
      msg: '我的'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Mybankcard {
  margin-bottom: 98px;
  .center {
      padding: 40px 55px;
      .card {
          width: 100%;
          height: 254px;
          color: #B5B5B5;
          border: 2px solid #C2C2C2;
          margin-bottom: 20px;
      }
      .add {
          width: 100%;
          height: 254px;
          text-align: center;
            color: #B5B5B5;
          border: 2px solid #C2C2C2;
          margin-bottom: 20px;
          div {
              font-size: 180px;
          }
          span {
              display: block;
              font-size: 32px;
          }
      }
  }
}
</style>
