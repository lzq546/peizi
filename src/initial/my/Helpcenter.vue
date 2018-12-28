<template>
  <div class="Helpcenter">
    <top :msg="msg"></top>
    <router-link to="guide">
    <div class="text">
      <div>新手帮助</div>
      <span><img
          src="../../assets/images/右箭头.png"
          alt=""
        ></span>
    </div>
        </router-link>
    <div class="text1">常见问题解答</div>
    <router-link to="dialogue"><div class="text2">在线问题</div></router-link>
    <router-link to="problem"><div class="text2">常见问题解答</div></router-link>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'Helpcenter',
  components: {
    top
  },
  data () {
    return {
      msg: '帮助中心',
      name: '',
      iphone: ''
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.Helpcenter {
  width: 100%;
  margin-bottom: 198px;
  font-size: 30px;
  font-weight: 500;
  .text {
    width: 100%;
    height: 89px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    div {
      flex: 1;
      color: #333;
    }
    span {
      height: 35px;
      img {
        height: 100%;
      }
    }
  }
  .text1 {
    width: 100%;
    padding: 0 40px;
    height: 64px;
    line-height: 60px;
    background-color: #f3f3f3;
    border-bottom: 4px solid #EDEDED;
  }
   .text2 {
    width: 100%;
    padding: 0 40px;
    height: 100px;
    line-height: 100px;
    border-bottom: 4px solid #EDEDED;
  }
}
</style>
