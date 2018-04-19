<template>
  <div class="wrap">
    <div class="cartHeader">
      <i class="iconfont icon-back" @click="$router.back()"></i>
      <div>购物车</div>
      <i class="iconfont icon-quanbu-copy"  @click="isShow"></i>
    </div>
    <!--<div class="whole" v-show="Show">-->
    <FootGuide class="whole" v-show="Show"/>
    <!--</div>-->
  </div>

</template>

<script>
  import FootGuide from "../FootGuide/FootGuide.vue"
  export default {
    data(){
      return {
        Show:false
      }
    },
    components:{
      FootGuide
    },
    methods:{
      isShow(){
        this.Show=!this.Show
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    position relative
    .cartHeader
      background: #eeeeee;
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

    .whole
      position fixed
      top 50px
      height 50px
      width 100%
</style>
