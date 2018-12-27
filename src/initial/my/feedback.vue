<template>
  <div class="feedback">
    <top :msg="msg"></top>
    <div class="text">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="text"
      ></textarea>
    </div>
    <div class="img">
      <div class="Choiceimg" v-if="false"></div>
      <div class="Choiceimg">
        <div>+</div>
        <span>添加图片</span>
      </div>
    </div>
    <button>发送</button>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'feedback',
  components: {
    top
  },
  data () {
    return {
      msg: '意见反馈',
      text: ''
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.feedback {
  width: 100%;
  margin-bottom: 198px;
  .text {
    width: 100%;
    height: 50%;
    padding: 20px 20px;
  }
  textarea {
    width: 100%;
    outline: none;
    font-size: 20px;
    line-height: 40px;
    text-indent: 2em;
    letter-spacing: 4px;
  }
  .img {
    margin-left: 20px;
    .Choiceimg {
      display: inline-block;
      margin-right: 20px;
      width: 184px;
      height: 184px;
      text-align: center;
      color: #939393;
      background-color: #e5e5e5;
      vertical-align: top;
      div {
        font-size: 120px;
      }
      span {
        display: block;
        font-size: 30px;
      }
    }
  }
  button {
      display: block;
      margin-top: 50px;
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 40px;
      color: #fff;
      background-color: #C53336;
  }
}
</style>
