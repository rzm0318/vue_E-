<template>
  <div class="brand-wrap" v-if=" brand.brand">
    <div class="cBrand" v-for="(one,index) in brand.brand" :key="index">
      <div class="title"> ----{{one.title}}----  </div>
      <div class="wrap">
        <ul class="brand-img">
          <li v-for="(oneChild,index) in one.list" :key="index">
            <img :src="oneChild.logo">
            <div class="name">{{oneChild.name}}</div>
            <div class="address">{{oneChild.address}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from "vuex"
  export default {
    mounted () {
      this.$store.dispatch('getBrand')
    },
    computed:{
      ...mapState(["brand"])
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand-wrap
    padding-top 40px
    height 100%
    display flex
    flex-direction column
    .cBrand
      margin-top 10px
      .title
        font-size 13px
        color #999
        line-height 40px
        height 40px
        text-align center
      .brand-img
        padding 5px 0 5px 15px
        display flex
        flex-flow row wrap
        div
          text-align center
          padding 3px
          &.name
            width 102px
            font-size 13px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
          &.address
            font-size 12px
            color #999
            margin-bottom 15px
        li
          img
            width 80px
            border 1px #dbd8db solid
            padding 10px
            margin 0 6px

</style>
