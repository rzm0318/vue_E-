<template>
  <div class="container">
    <div class="header">
        <!--关闭广告-->
      <div class="ad">
        <div class="close" @click="handleClose">
          <img src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
        </div>
        <div class="ad-img"  v-if="isShow">
          <a href="">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water                              ">
          </a>
        </div>
      </div>
        <!--顶部-->
      <div class="headSearch">
        <div class="animal">
          <span class="dog">狗狗</span>
          <span class="middle">|</span>
          <span class="add">重庆</span>
          <span class="icon">
            <i class="iconfont icon-xiaosanjiao"></i>
        </span>
        </div>
        <div class="search">
          <input type="text" placeholder="搜索商品和品牌" >
          <span class="icon">
            <i class="iconfont icon-sousuo"></i>
        </span>
        </div>
        <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
      </div>
        <!--导航-->
      <Slide/>
      </div>
    <div class="content">
      <!--轮播-->
      <Carousel/>
      <!--分类图标-->
      <div class="icon-wrapper">
          <ul class="icon-child" v-if="adlist.datas">
            <li v-for="(images,index) in adlist.datas[1].menus" :key="index">
              <img :src="images.image">
            </li>

          </ul>
      </div>
      <!--新人专享-->
      <div class="advertisement" v-if="carousel.data">
        <a href="#"><img :src="carousel.data[2438].value[0].image"></a>
      </div>
      <!--每人疯抢-->
      <div class="content_m">
        <div class="content_m_t">
          <div class="content_m_t_l">
            <img src="./images/msite_9.jpg" alt="">
          </div>
          <div class="content_m_t_r">
            <span>下一场开始</span>
            <span class="bor">20</span>
            <span>:</span>
            <span class="bor">00</span>
            <img src="https://img2.epetbar.com/nowater/2018-02/02/12/80acfffe2d91b341fd2c8de903b3eace.png">
          </div>
        </div>
        <div class="content_m_b" v-if="carousel.data">
          <ul>
            <li v-for="(one,index) in carousel.data[3].goods">
              <a href="#">
                <img :src="one.image.image">
                <span>￥{{one.sale_price}}</span>
                <p>{{one.little_price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Small/>
      <!--E宠国际-->
      <div class="abroad">
        <div class="abroadL" v-if="adlist.datas">
          <a href="">
            <img :src="adlist.datas[5].content_images[0][0].image">
          </a>
        </div>
        <div class="abroadR" v-if="adlist.datas">
          <a href="">
            <img :src="adlist.datas[5].content_images[1][0].image">
          </a>
          <a href="">
            <img :src="adlist.datas[5].content_images[1][1].image">>
          </a>
        </div>
      </div>
      <Small/>
      <!--E秒团-->
      <div class="rob" v-if="adlist.datas">
        <img :src="adlist.datas[7].value[0].image">
      </div>
      <Small/>
      <!--潮品视频-->
      <Top/>
      <Video/>
      <Small/>
      <!--爱宠+转盘+服务+体验-->
      <div class="happy" >
        <div class="happy-top">
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water">
          </a>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/6e3a2cb186e1028d481940c42fb54732.jpg@!water">
          </a>
        </div>
        <div class="happy-bottom">
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water">
          </a>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-02/05/14/6e3a2cb186e1028d481940c42fb54732.jpg@!water">
          </a>
        </div>
      </div>
      <Small/>
      <!--品牌特卖-->
      <Top/>
      <ul class="brand">
        <li>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-04/16/10/34f6b8bc182992fc023ad668722d45f6.jpg@!water">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-04/08/17/f8ca8574f04ec0fa7edc2ebe9e081404.jpg@!water">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-04/04/10/6afbf23c23988b13756a03aa85e14577.jpg@!water">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://img2.epetbar.com/nowater/2018-04/13/18/36eb67688bfa43de21c492e2c7444d62.jpg@!water">
          </a>
        </li>

      </ul>
      <Small/>
      <!--萌爪联盟-->
      <Top/>
      <Carousel/>
      <Small/>
      <!--萌宠说-->
      <Top/>
      <Video/>
      <Small/>
      <!--小剧场-->
      <Top/>
      <Video/>
      <div class="content-over">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water">
      </div>
    </div>
    <div class="footer">
      <div class="first">
        <span>触屏版</span>
        <a>手机客户端</a>
        <a>关于我们</a>
        <a>联系我们</a>
      </div>
      <div class="second">
        © wap.epet.com 版权：重庆易宠科技有限公司
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Video from "../../components/Video/Video.vue"
  import Top from "../../components/Top/Top.vue"
  import Carousel from "../../components/Carousel/Carousel.vue"
  import Small from "../../components/Small/Small.vue"
  import Slide from "../../components/Slide/Slide.vue"
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from "vuex"
  export default {
    data(){
      return {
        isShow:true
      }
    },
    mounted(){
//      new Swiper('.one-kill', {
//        slidesPerView: 'auto',
//        spaceBetween: 0,
//        observer:true,//修改swiper自己或子元素时，自动初始化swiper
//        observeParents:true//修改swiper的父元素时，自动初始化swiper
//      });
//      new BScroll('.content_m_b', {
//        click: true,
//        scrollX: true,
//        scrollY: false
//      });
      this.$store.dispatch("getAdlist")
      this.$store.dispatch("getCarousel")
    },
    components:{
      Carousel,Video,Top,Small,Slide
    },
    computed:{
      ...mapState(["adlist"]),
      ...mapState(["carousel"])
    },
    methods:{
      handleClose(){
        this.isShow= !this.isShow
      }
    }



  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .container
      display flex
      flex-direction column
      .header
        width 100%
        position fixed
        top 0
        z-index 300
        background: white
        .ad
          .close
            position absolute
            top 10px
            left 10px
            z-index 100
            height 18px
            img
              height 100%
          .ad-img
            position absolute
            top 0
            height 55px
            img
              height 100%

        .headSearch
          width 100%
          display flex
          justify-content space-around
          margin-top 70px
          margin-bottom 14px
          .animal
            margin-left 5px
            .icon
              width 8px
              height 8px
            span
              color #898989
              font-size 14px
              line-height 25px
              vertical-align middle
          .search
            background #e9e9e9
            border-radius 4px
            text-indent 10px
            font-size 13px
            line-height 25px
            input
              width 220px
              background #e9e9e9
            .icon
              width 11px
              height 11px
          img
            width 25px
            height 25px


      .content
        margin-top 140px
        .icon-wrapper
          .icon-child
            display flex
            flex-flow row wrap
            width 100%
            img
              width 75px
              height 90px
        .advertisement
          width:100%
          height:120px
          img
            width:100%
            height:100%
        .content_m
          margin-bottom 12px
          .content_m_t
            width 100%
            padding-top 9px
            padding-bottom 9px
            .content_m_t_l
              width 45%
              img
                width 85px
                height 19px
                margin-left 10px
            .content_m_t_r
              float right
              width 55%
              height 39px
              line-height 39px
              margin-top -30px
              vertical-align middle
              text-align center
              span
                font-size 13px
                font-weight 500
                &.bor
                  display inline-block
                  width 20px
                  height 20px
                  border 1px solid #7e8c8d
                  line-height 22px
              img
                width 68px
                height 34px
                float right

          .content_m_b
            overflow hidden
            ul
              display flex
              justify-content space-between
              li
                width 84px
                margin-right 15px
                margin-left 8px
                text-align center
                a
                  img
                    width 84px
                    height 84px
                    margin-bottom 9px
                  span
                    color red
                  p
                    margin-top 8px
                    font-size 13px
                    text-align center
        .abroad
          height 250px
          display flex
          .abroadL
            img
              width 100%
          .abroadR
            display flex
            flex-direction column
            img
              width 100%
        .rob
          width 100%
          height 160px
          img
            height 100%
        .happy
          .happy-top
            display flex
            width 100%
            height 99.5px
            img
              width 100%
              height 100%
          .happy-bottom
            display flex
            width 100%
            height 99px
            img
              width 100%
              height 100%
        .brand
          width 100%
          img
            width 100%
            height 100%
        .content-over
          width 100%
          height 50px
          img
            width 100%
            height 70%
      .footer
        height 80px
        line-height 80x
        margin-bottom 60px
        background: #FFF
        .first
          padding 15px 0 5px
          font-size 16px
          text-align center
          span
            padding-right 10px
            color red
          a
            color #333
        .second
          text-align center
          margin 0 10px 0 10px
          padding-top 10px;
          padding-bottom 25px
          font-size 12px
</style>
