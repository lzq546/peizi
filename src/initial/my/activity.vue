<template>
  <div class="activity">
    <top :msg="msg"></top>
    <div class="text">暂无活动</div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'activity',
  components: {
    top
  },
  data () {
    return {
      msg: '精彩活动'
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.activity {
  width: 100%;
  margin-bottom: 198px;
  .text {
      font-size: 50px;
      color: #666666;
      text-align: center;
      margin-top: 250px;
  }
}
</style>
