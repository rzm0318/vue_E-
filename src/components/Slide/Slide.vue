<template>
  <div class="wrap">
    <ul class="nav">
      <li v-for="(menu,index) in adlist.menus" :key="index"><a href="">{{menu.menu_name}}</a></li>
      <!--<li><a href="" class="active">首页</a></li>-->
      <!--<li><a href="##">狗狗主粮</a></li>-->
      <!--<li><a href="##">零食</a></li>-->
      <!--<li><a href="">医疗保健</a></li>-->
      <!--<li><a href="">玩具</a></li>-->
      <!--<li><a href="">外出</a></li>-->
      <!--<li><a href="">服饰城</a></li>-->
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from "vuex"
  export default {
    mounted(){
      new BScroll('.wrap', {
        click: true,
        scrollX: true,
        scrollY: false
      })
    },
    computed:{
      ...mapState(["adlist"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .nav
    white-space nowrap
    float left
    overflow hidden
    li
      display inline-block
      height 30px
      padding 0 10px
      .active
        color #459d36
</style>
