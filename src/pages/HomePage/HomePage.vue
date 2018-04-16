<template>
  <div class="container">
    <!--关闭广告-->

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

    <div class="warp">
      <ul class="nav">
        <li class="active"><a href="">首页</a></li>
        <li><a href="">狗狗主粮</a></li>
        <li><a href="">零食</a></li>
        <li><a href="">医疗保健</a></li>
        <li><a href="">玩具</a></li>
        <li><a href="">外出</a></li>
        <li><a href="">服饰城</a></li>
      </ul>
      <div class="smallblock"></div>
    </div>

    <!--轮播-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/shouye_10.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_9.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_21.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_39.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_19.jpg" alt=""></div>
        <div class="swiper-slide"><img src="./images/shouye_11.jpg" alt=""></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--分类图标-->
    <div class="icon-wrapper">
      <div class="icon-slide">
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_16.jpg">
          </div>
        </a>
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_40.jpg">
          </div>
        </a>
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_31.jpg">
          </div>
        </a>
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_22.jpg">
          </div>
        </a>
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_25.jpg">
          </div>
        </a>
      </div>
      <div class="icon-slide">
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_16.jpg">
          </div>
        </a>
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_40.jpg">
          </div>
        </a>
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_31.jpg">
          </div>
        </a>
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_22.jpg">
          </div>
        </a>
        <a href="javascript:" class="icon-small">
          <div class="food_container">
            <img src="./images/shouye_25.jpg">
          </div>
        </a>
      </div>
    </div>
    <!--新人专享-->
    <div class="advertisement">
      <a href="#"><img src="./images/new.gif"></a>
    </div>
    <!--每人疯抢-->
    <div class="surprise">
      <div class="word_wrap">
        <img src="./images/msite_9.jpg" alt="">
        <div class="goRight">
          <div>
            <span>下一场开始</span>
          </div>
          <div class="time">
            <span>14</span>
            <span>:</span>
            <span>00</span>
          </div>
          <a href="">
            <img src="./images/shouye_37.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="img_wrap">
        <div class="wrapO">
          <a href="">
            <img src="https://img1.epetbar.com/2016-07/12/10/a1ce567b8ebbc6e586164682462def69.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
          </a>
          <span>4.00</span>
          <span>省16.00</span>
        </div>
        <div class="wrapS">
         <a href="">
           <img src="https://img1.epetbar.com/2015-10/09/14/2931b017ec968db6a916eb05b59bdb81.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
         </a>
         <span>4.00</span>
         <span>省16.00</span>
       </div>
        <div class="wrapT">
          <a href="">
            <img src="https://img1.epetbar.com/2018-04/08/10/bd60b51fbddf54a008b20ac82231e3bb.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
          </a>
          <span>4.00</span>
          <span>省16.00</span>
        </div>
        <div class="wrapF">
          <a href="">
            <img src="https://img1.epetbar.com/2018-03/14/10/bdf831eef8fa8844612891f89580e347.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
          </a>
          <span>4.00</span>
          <span>省16.00</span>
        </div>

      </div>
    </div>
    <!--E宠国际-->
    <div class="abroad">
      <div class="abroadL">
        <a href="">
          <img src="./images/shouye_32.jpg" alt="">
        </a>
      </div>
     <div class="abroadR">
       <a href="">
         <img src="./images/shouye_33.jpg" alt="">
       </a>
       <a href="">
         <img src="./images/shouye_18.jpg" alt="">
       </a>
     </div>
    </div>
    <!--E秒团-->
    <div class="rob">
      <img src="./images/shouye_20.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"
//  import { Navbar} from 'mint-ui';
  export default {
    mounted(){
      new Swiper(".swiper-container",{
        autoplay:true,
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    methods:{

    },
    component:{

    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    width 100%
    height:100%
    .headSearch
      width 100%
      display flex
      justify-content space-around
      margin-top 12px
      margin-bottom 12px
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
    .nav
      white-space nowrap
      float left
      li
        display inline-block
        height 30px
        padding 0 10px
    .active
      a
        color #459d36
    .smallblock
      width 34px
      height 2px
      background: green

    .swiper-container
      width 100%
      height: 160px
      img
        width:100%
        height:100%
    .swiper-pagination
      > span.swiper-pagination-bullet-active
        background #70a738
    .icon-wrapper
      width 100%
      height 100%
      .icon-slide
        display flex
        .icon-small
          width 20%
          img
            display inline-block
            height 90px
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color #666


    .advertisement
      width:100%
      height:120px
      img
        width:100%
        height:100%
    .surprise
      width 85px
      padding 10px
      .goRight
        height 40px
      .word_wrap
        img
          line-height 40px
      .img_wrap
        width 150%
        display flex
        img
          width 84px

    .abroad
      height 250px
      float left
      display flex
      .abroadL
        width 50%
        img
          width 100%
      .abroadR
        width 50%
        img
          width 100%

    .rob
      width 100%
      height 160px
      img
        width 100%
        height 100%

</style>
