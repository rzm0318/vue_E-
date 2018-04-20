<template>
  <div class="wrap">
    <div class="cartHeader">
      <i class="iconfont icon-back" @click="$router.back()"></i>
      <div>{{name}}</div>
      <i class="iconfont icon-quanbu-copy"  @click="isShow = !isShow"></i>
    </div>
    <!--<div class="whole" v-show="Show" 组件外包裹样式没效果>-->
    <transition name="fade">
      <ul class="nav-bar border-bottom-1px" v-show="isShow">
        <li class="nav-item" @click="$router.push('/main')">
          <i class="iconfont icon-shouye"></i>
          <span class="desc-text">首页</span>
        </li>
        <li class="nav-item" @click="$router.push('/category')">
          <i class="iconfont icon-caidan"></i>
          <span class="desc-text">商品分类</span>
        </li>
        <li class="nav-item" @click="$router.push('/cart')">
          <i class="iconfont icon-unie62d"></i>
          <span class="desc-text">购物车</span>
        </li>
        <li class="nav-item" @click="$router.push('/user')">
          <i class="iconfont icon-gerenzhongxin"></i>
          <span class="desc-text">我的E宠</span>
        </li>
      </ul>
    </transition>
    <!--</div>-->
  </div>

</template>

<script>
  import FootGuide from "../FootGuide/FootGuide.vue"
  export default {
    data(){
      return {
        isShow:false
      }
    },
    props: {
      name: String
    },
    components:{
      FootGuide
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .wrap
      position relative
      .cartHeader
        background: white;
        display flex
        height 50px
        line-height 50px
        border-bottom 1px white solid
        .icon-back
          position absolute
          left 5px
          font-size 22px
        div
          margin 0 auto
          font-size 17px
        .icon-quanbu-copy
          position absolute
          right 5px
          font-size 25px

      .nav-bar
         width 100%
         height 70px
         display flex
         border-bottom 1px #eee solid
         justify-content space-around
         background #fff
         overflow hidden
         &.fade-enter, &.fade-leave-to
           height 0
         &.fade-enter-active, &.fade-leave-active
           transition height .5s
         .nav-item
           display flex
           flex-direction column
           text-align center
           justify-content center
           color #666
           .iconfont
             font-size 22px
           .desc-text
             font-size 14px
             margin 3px 0

</style>
