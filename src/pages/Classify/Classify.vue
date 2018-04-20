<template>
  <div>
    <div class="tab">
      <div class="tab-item1">
        <router-link to="/classify/list" class="title" replace >
          分类
        </router-link>
      </div>
      <div class="tab-item2">
        <router-link to="/classify/brand" class="title"  replace>
          品牌
        </router-link>
      </div>
      <div class="search">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png">
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    mounted () {
//      this.$store.dispatch('getBrand')
      //this.$store.dispatch('getClassify')
    },
    components:{
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    background: white
    line-height 40px
    height 40px
    position fixed
    left 0
    right 0
    top 0
    z-index 111
    border-bottom #dbd8db 1px solid
    .tab-item1
      width 40%
      float left
      text-align right
      .title
        color #0d0e0e
        font-size bold
    .tab-item2
      float right
      width 40%
      .title
        color #0d0e0e
        font-size bold
    .search
      position absolute
      top 5px
      right 10px
      width 20px
      height 20px
      img
        width 100%




</style>
