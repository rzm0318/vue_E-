<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" v-if="carousel.data">
      <!-- carousel data 1 value  =》 carousel.data[1].value  -->
      <div class="swiper-slide" v-for="(images,index) in carousel.data[1].value" :key="index">
        <img :src="images.image">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"
  import {mapState} from "vuex"
  export default {
    mounted(){
      //Swiper本来在此，轮播前提：必须在数据获到后才可以自动轮播，需要监听watch
    },
    computed:{
      ...mapState(["carousel"])
    },
    watch:{
      carousel(value){
        this.$nextTick(() =>{
          new Swiper(".swiper-container",{
            autoplay:true,
            loop:true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">


  .swiper-container
    width 100%
    height: 160px
    img
      width:100%
      height:100%
  .swiper-pagination
    > span.swiper-pagination-bullet-active
      background #70a738
</style>
