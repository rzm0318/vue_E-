<template>
  <div class="myEpet">
    <div class="header">
      <div class="bgImg">
        <img src="./1.jpg" alt="">
      </div>
      <div class="header-title">
        <div class="left"><a href="">普通登录</a></div>
        <div class="right"><a href="">手机动态密码登录</a></div>
      </div>
      <i class="iconfont icon-xiaosanjiaoup left"></i>
      <i class="iconfont icon-xiaosanjiaoup right"></i>
      <div class="normal"></div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    .left
      font-size 28px
      color lightcoral
    .right
      font-size 28px
      color lightcoral
    .bgImg
      width 375px
      height 174px
      position relative
      img
        width 100%
        height 100%
    .header-title
      display flex
      position absolute
      top 134px
      width 100%
      background-color: rgba(255,255,255,0.3)

      .left
        width 50%
        line-height 40px
        height 40px
        text-align center
        a
          font-size 15px
          color white
      .right
        line-height 40px
        height 40px
        text-align center
        a
          color white
          font-size 15px

</style>
