<template>
  <div>
    <div class="tab">
      <div class="tab-item1">
        <router-link to="/classify/list" replace>
          分类
        </router-link>
      </div>
      <div class="tab-item2">
        <router-link to="/classify/brand" replace>
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
    background: lightcoral
    line-height 40px
    height 40px
    position fixed
    left 0
    right 0
    top 0
    z-index 111
    .tab-item1
      width 40%
      float left
      text-align right
      .router-link
        color black
    .tab-item2
      float right
      width 40%
    .search
      position absolute
      top 5px
      right 10px
      width 20px
      height 20px
      img
        width 100%




</style>
