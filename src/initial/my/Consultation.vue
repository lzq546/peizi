<template>
  <div class="Consultation">
    <top :msg="msg"></top>
    <div class="xian"></div>
    <div class="text clearfix">
      <div class="fl">联系电话</div>
      <div class="fr">400-0068-093</div>
    </div>
    <div class="text clearfix">
      <div class="fl">微信号</div>
      <div class="fr">400-0068-093</div>
    </div>
    <router-link to="Helpcenter">
    <div class="text clearfix">
      <div class="fl">帮助中心</div>
      <div class="fr"></div>
    </div>
    </router-link>
  </div>
</template>

<script>
import top from '@/components/top.vue'
export default {
  name: 'Consultation',
  components: {
    top
  },
  data () {
    return {
      msg: '我要咨询'
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.Consultation {
  margin-bottom: 98px;
  .xian {
    width: 100%;
    height: 62px;
    border-bottom: 2px solid #BEBEBE;
  }
  .text {
    width: 100%;
    height: 69px;
    line-height: 69px;
    padding: 0 20px 0 40px;
    border-bottom: 2px solid #D6D6D6;
    color: #333333;
    font-size: 30px;
  }
}
</style>
