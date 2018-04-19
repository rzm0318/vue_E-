<template>
  <div>
    <CartHeader/>
    <div class="bg-img">
      <div class="xuebi"></div>
      <div class="space">购物车是空的</div>
      <div class="font">
        <a class="stroll">去逛逛</a>
        <a class="collection">我的收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
  import CartHeader from "../../components/CartHeader/CartHeader.vue"
  export default {
    components:{
      CartHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .bg-img
    height 295px
    background: #eeeeee;
    .xuebi
      width 375px
      height 170px
      background url("cart-ico.png") no-repeat 50% -180px
    .space
      font-size 16px
      text-align center
      height 20px
      color #7f7f7f
    .font
      height 40px
      display flex
      justify-content space-around
      .stroll
        text-align center
        width 100px
        display block
        border 1px solid #999
        border-radius 5px
        line-height 40px
        height 40px
      .collection
        text-align center
        width 100px
        display block
        border 1px solid #999
        border-radius 5px
        line-height 40px
        height 40px
</style>
