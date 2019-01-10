<template>
  <div class="index">
    <top :current="current"></top>
    <div class="one">
      <div class="text">iOS和Android。</div>
      <div class="text1">点点配</div>
      <div class="nav">
        <ul class="clearfix">
          <li class="fl">
            <img
              src="../assets/images/盾牌.png"
              alt=""
            >
            <div class="toptext">股票交易：</div>
            <div class="downtex">严格风险，让你自由</div>
          </li>
          <li class="fr">
            <img
              src="../assets/images/设置.png"
              alt=""
            >
            <div class="toptext">平台实力雄厚：</div>
            <div class="downtex">安全高效,追求极致资金体验</div>
          </li>
        </ul>
        <ul class="clearfix">
          <li class="fl">
            <img
              src="../assets/images/位置.png"
              alt=""
            >
            <div class="toptext">三方监管：</div>
            <div class="downtex">资金三方托管，专款专用</div>
          </li>
          <li class="fr">
            <img
              src="../assets/images/登录页面_10.png"
              alt=""
            >
            <div class="toptext">股票配资：</div>
            <div class="downtex">让您的资金放大10倍</div>
          </li>
        </ul>
      </div>
      <div class="navright">
        <div @click="open1"><img
            src="../assets/images/1.png"
            alt=""
          ></div>
        <div @click="open2"><img
            src="../assets/images/3.png"
            alt=""
          ></div>
        <div @click="open3"><img
            src="../assets/images/2.png"
            alt=""
          ></div>
        <div><a href="#top"><img src="../assets/images/上.png" alt=""></a></div>
      </div>
      <div
        class="navrightopen navrightbox"
        :class="{'open':open==1}"
      >
        <div>
          <span>股票配资服务热线：</span>
          <span>400-0068-093</span>
        </div>
      </div>
      <div
        class="navrightopen1 navrightbox"
        :class="{'open':open==2}"
      >
        <div>
          <span class="img"><img
              src="../assets/images/login二维码.jpg"
              alt=""
            ></span>
          <span>3ernglknflsvsa</span>
        </div>
      </div>
      <div
        class="navrightopen2 navrightbox"
        :class="{'open':open==3}"
      >
        <div>
          <span>帮助中心</span>
        </div>
      </div>
    </div>
    <div class="two">
      <div class="text">新手操作指南</div>
      <div class="nav">
        <div>
          <div class="img"><img
              src="../assets/images/1-1.png"
              alt=""
            ></div>
          <div class="text1">注入账户</div>
        </div>
        <div class="xian">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div class="img"><img
              src="../assets/images/2-2.png"
              alt=""
            ></div>
          <div class="text1">账户入金</div>
        </div>
        <div class="xian">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div class="img"><img
              src="../assets/images/3-3.png"
              alt=""
            ></div>
          <div class="text1">交易股票</div>
        </div>
        <div class="xian">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div class="img"><img
              src="../assets/images/4-4.png"
              alt=""
            ></div>
          <div class="text1">结算资金</div>
        </div>
      </div>
    </div>
    <div class="three clearfix">
      <div class="left fl">
        <div class="month">
          <div class="text">按月资配</div>
          <div class="text1">
            <span>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南</span>
          </div>
          <div class="btn">立马查看</div>
        </div>
        <div class="day">
          <div class="text">按天资配</div>
          <div class="text1">
            <span>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南</span>
          </div>
          <div class="btn">立马查看</div>
        </div>
      </div>
      <div class="experience fr">
        <img
          src="../assets/images/手机.png"
          alt=""
        >
        <div class="text">免费体验</div>
        <div class="text1">
          <span>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南<br>新手指南新手指南新手指南</span>
        </div>
        <div class="btn">立马查看</div>
      </div>
    </div>
    <div class="four">
      <div class="text">下载方式</div>
      <div class="text1">下载你正在寻找的,炒股更方便。</div>
      <div class="nav clearfix">
        <div class="left fl">
          <div class="img"><img
              src="../assets/images/安卓图标.png"
              alt=""
            ></div>
          <div class="text2">Android下载</div>
          <div class="text3">
            <div>支付与AerPay成千上万的网站</div>
            <div>和你的朋友和家人寄钱</div>
            <div>只需几次点击。</div>
          </div>
          <div class="text4">点击下载</div>
        </div>
        <div class="right fr">
          <div class="img"><img
              src="../assets/images/苹果图标.png"
              alt=""
            ></div>
          <div class="text2">IOS下载</div>
          <div class="text3">
            <div>有超过200万的活跃账户</div>
            <div>在全球范围内。它提供了一个简单的和安全的</div>
            <div>支付方式。</div>
          </div>
          <div class="text4">点击下载</div>
        </div>
      </div>
    </div>
    <div class="five">
      <div class="text">配资资讯</div>
      <div class="text1">下载你正在寻找的,炒股更方便。</div>
      <div class="nav">
        <ul class="clearfix">
          <li class="fl">
            <div class="text2 clearfix">
              <div class="fl">配资资讯</div>
              <div class="fr">更多》</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
          </li>
          <li class="fr">
            <div class="text2 clearfix">
              <div class="fl">股票配资</div>
              <div class="fr">更多》</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
          </li>
        </ul>
        <ul class="clearfix">
          <li class="fl">
            <div class="text2 clearfix">
              <div class="fl">配资知识</div>
              <div class="fr">更多》</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
          </li>
          <li class="fr">
            <div class="text2 clearfix">
              <div class="fl">配资内参</div>
              <div class="fr">更多》</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
            <div class="text3 clearfix">
              <div class="fl dian"></div>
              <div class="fl">海伦堡赴港上市：逆流而上或有新机</div>
              <div class="fr">2028-10-29</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="text">我们的合作伙伴。</div>
      <div class="nav1">
        <div class="img">
          <img src="../assets/images/hz1.png" alt="">
        </div>
      </div>
    </div>
    <div class="six clearfix">
      <div class="fl">
        <div class="img">
          <img src="../assets/images/login二维码.jpg" alt="">
        </div>
        <div class="text fisrtext">
          <div class="toptext">服务支持</div>
          <div class="contertext">售后服务</div>
          <div class="textdown">售后服务</div>
        </div>
        <div class="text">
          <div class="toptext">服务支持</div>
          <div class="contertext">售后服务</div>
          <div class="textdown">售后服务</div>
        </div>
        <div class="text">
          <div class="toptext">服务支持</div>
          <div class="contertext">售后服务</div>
          <div class="textdown">售后服务</div>
        </div>
      </div>
      <div class="fr">
        <div class="text">
          <div class="toptext">服务支持</div>
          <div class="contertext">
            <div class="img"><img src="../assets/images/电话.png" alt=""></div>
            公司服务热线：<br><span>400-0068-093</span>
            </div>
          <div class="textdown">
            <div class="img"><img src="../assets/images/位置白.png" alt=""></div>
            公司地址：<br><span>400-0068-093</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top from '@/components/top'
export default {
  name: 'index',
  components: {
    top
  },
  data () {
    return {
      open: 0,
      current: 0
    }
  },
  methods: {
    open1 () {
      if (this.open === 1) {
        this.open = 0
      } else {
        this.open = 1
      }
    },
    open2 () {
      if (this.open === 2) {
        this.open = 0
      } else {
        this.open = 2
      }
    },
    open3 () {
      if (this.open === 3) {
        this.open = 0
      } else {
        this.open = 3
      }
    }
  }
}
</script>

<style lang="scss">
.index {
  width: 100%;
  overflow: hidden;
  .one {
    position: relative;
    width: 100%;
    height: 41.45rem;
    .text {
      margin-top: 5.15rem;
      font-size: 1.05rem;
      color: #0062ac;
      text-align: center;
      margin-bottom: 1.2rem;
    }
    .text1 {
      font-size: 2.9rem;
      color: #000;
      text-align: center;
      margin-bottom: 3.8rem;
    }
    .nav {
      width: 54.5rem;
      margin: 0 auto;
      ul {
        width: 100%;
        margin-bottom: 2.8rem;
        li {
          width: 15rem;
          font-size: 1.2rem;
          color: #111;
          img {
            margin-bottom: 1rem;
          }
          .toptext {
            margin-bottom: 0.6rem;
          }
        }
      }
    }
    .navright {
      position: fixed;
      top: 10.1rem;
      right: 1.05rem;
      cursor: pointer;
      div {
        width: 5.2rem;
        height: 5.2rem;
        background-color: #364669;
        margin-bottom: 0.5rem;
        a {
          width: 100%;
          height: 100%;
          display: inline-block;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .navrightbox {
      position: fixed;
      top: 10.1rem;
      right: 6.25rem;
      width: 0rem;
      overflow: hidden;
      transition: width 1s;
      div {
        width: 11.4rem;
        height: 5.2rem;
        background-color: #364669;
        overflow: hidden;
      }
    }
    .navrightopen {
      div {
        padding: 1rem;
        > span:first-child {
          margin-bottom: 0.55rem;
        }
      }
      span {
        color: #fff;
        font-size: 1rem;
        display: block;
      }
    }
    .navrightopen1 {
      position: fixed;
      top: 15.8rem;
      right: 6.25rem;
      width: 0rem;
      overflow: hidden;
      transition: width 1s;
      .img {
        display: inline-block;
        width: 3.2rem;
        height: 3.2rem;
        background-color: #fff;
        margin-top: 0.95rem;
        margin-left: 0.95rem;
        vertical-align: middle;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        font-size: 0.89rem;
        color: #fff;
      }
    }
    .navrightopen2 {
      position: fixed;
      top: 21.5rem;
      right: 6.25rem;
      width: 0rem;
      overflow: hidden;
      transition: width 1s;
      div {
        line-height: 5.2rem;
      }
      span {
        display: block;
        text-align: center;
        font-size: 1.5rem;
        color: #fff;
      }
    }
    .open {
      width: 11.4rem;
    }
  }
  .two {
    width: 100%;
    height: 25rem;
    background-color: #f6f8fa;
    overflow: hidden;
    .text {
      font-size: 2.75rem;
      color: #000;
      text-align: center;
      margin-top: 3.9rem;
      margin-bottom: 4.7rem;
    }
    .nav {
      width: 60rem;
      margin: 0 auto;
      div {
        width: 7.4rem;
        display: inline-block;
        vertical-align: middle;
        .img {
          width: 7.4rem;
          height: 7.4rem;
          border-radius: 50%;
          background-color: #bcc6d4;
          margin-bottom: 0.95rem;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .text1 {
          font-size: 1.5rem;
          text-align: center;
          color: #444;
        }
      }
      .xian {
        width: 7.8rem;
        margin-bottom: 2.2rem;
        margin-left: 1rem;
        div {
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 50%;
          background-color: #bcc6d4;
          margin-right: 1rem;
        }
      }
    }
  }
  .three {
    width: 100%;
    height: 72rem;
    overflow: hidden;
    padding: 16.2rem 19rem 1rem 19rem;
    .text {
      font-size: 2.7rem;
      margin-bottom: 3.75rem;
    }
    .text1 {
      font-size: 1.35rem;
      line-height: 2rem;
      color: #6c6e70;
      margin-bottom: 3.9rem;
    }
    .btn {
      width: 11.21rem;
      height: 3.8rem;
      line-height: 3.8rem;
      text-align: center;
      color: #fff;
      background-color: #005dca;
      border-radius: 2rem;
      margin-bottom: 4.5rem;
      cursor: pointer;
    }
    .experience {
      width: 27.4rem;
      height: 54.95rem;
      overflow: hidden;
      position: relative;
      img {
        width: 100%;
      }
      .text {
        position: absolute;
        top: 13.25rem;
        left: 8.6rem;
      }
      .text1 {
        position: absolute;
        top: 21.9rem;
        left: 5.8rem;
      }
      .btn {
        position: absolute;
        top: 36.75rem;
        left: 8.35rem;
      }
    }
  }
  .four {
    width: 100%;
    height: 60rem;
    .text {
      font-size: 2.75rem;
      color: #000;
      text-align: center;
      margin-bottom: 1.7rem;
      margin-top: 10rem;
    }
    .text1 {
      font-size: 1.3rem;
      color: #6c6e70;
      text-align: center;
      margin-bottom: 4.5rem;
    }
    .nav {
      width: 100%;
      height: 42.9rem;
      color: #fff;
      text-align: center;
      .left {
        width: 49%;
        height: 100%;
        background: url("../assets/images/安卓.png") no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
      }
      .right {
        width: 49%;
        height: 100%;
        background: url("../assets/images/苹果.png") no-repeat;
        background-size: 100% 100%;
        overflow: hidden;
      }
      .img {
        width: 4.75rem;
        margin: 9.5rem auto;
        margin-bottom: 1.2rem;
        img {
          width: 100%;
        }
      }
      .text2 {
        font-size: 2.9rem;
        margin-bottom: 2.9rem;
      }
      .text3 {
        font-size: 1.3rem;
        line-height: 1.8rem;
        margin-bottom: 3.95rem;
      }
      .text4 {
        width: 11.15rem;
        height: 3.79rem;
        margin: 0 auto;
        line-height: 3.79rem;
        font-size: 1.45rem;
        border: 5px solid #fff;
        border-radius: 2rem;
        cursor: pointer;
      }
    }
  }
  .five {
    width: 100%;
    height: 90rem;
    overflow: hidden;
    .text {
      font-size: 2.75rem;
      color: #000;
      text-align: center;
      margin-bottom: 1.65rem;
    }
    .text1 {
      font-size: 1.3rem;
      text-align: center;
      color: #6c6e70;
      margin-bottom: 4.05rem;
    }
    .nav {
      width: 61rem;
      margin: 0 auto;
      margin-bottom: 10rem;
      ul {
        width: 100%;
        li {
          width: 29rem;
          height: 20rem;
          box-shadow: 0rem 0rem 1rem 0rem rgba(176, 176, 175, 0.31);
          padding-left: 2rem;
          overflow: hidden;
          .text2 {
            width: 24.65rem;
            height: 1.75rem;
            line-height: 1.75rem;
            border-left: 0.35rem solid #005dca;
            margin-top: 1.95rem;
            color: #005dca;
            margin-bottom: 2.35rem;
            .fl {
              font-size: 2rem;
              margin-left: 0.1rem;
            }
            .fr {
              font-size: 1.5rem;
            }
          }
          .text3 {
            width: 26.3rem;
            font-size: 0.95rem;
            color: #555555;
            margin-bottom: 1.75rem;
            .fl {
              width: 16rem;
              height: 0.95rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .dian {
              display: inline-block;
              width: 0.9rem;
              height: 0.9rem;
              background-color: #666666;
              border-radius: 50%;
              margin-right: 0.5rem;
            }
          }
        }
      }
      > ul:first-child {
        margin-bottom: 6.1rem;
      }
    }
    .nav1 {
      margin-top: 8.35rem;
      width: 100%;
      padding-left: 8.35rem;
      img {
        display: inline-block;
      }
    }
  }
  .six {
    width: 100%;
    height: 41.15rem;
    background: url('../assets/images/downbj.png');
    background-size: 100% 100%;
    .fl {
      width: 64rem;
      height: 19.5rem;
      margin-top: 12.85rem;
      border-right: 2px solid #fff;
    padding-left: 6.6rem;
    padding-top: 3.15rem;
      .img {
        display: inline-block;
        width: 9.2rem;
        height: 9.2rem;
        vertical-align: top;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        display: inline-block;
        color: #fff;
        font-size: 1.55rem;
        margin-left: 6.85rem;
        .toptext {
          font-size: 2rem;
          margin-bottom: 3.85rem;
        }
        .contertext {
          margin-bottom: 2.3rem;
        }
      }
    }
    .fr {
      width: 31.9rem;
      margin-top: 12.85rem;
      .text {
        display: inline-block;
        color: #fff;
        font-size: 1.55rem;
        margin-left: 6.85rem;
        .img {
          display: inline-block;
          vertical-align: top;
        }
        .toptext {
          font-size: 2rem;
          margin-bottom: 3.85rem;
        }
        .contertext {
          margin-bottom: 2.3rem;
        }
        span {
          font-size: 2rem;
          margin-left: 2.4rem;
        }
      }
    }
  }
}
</style>
