<template>
  <div class="cList">
    <div class="left">
      <ul class="left-wrap">
        <li  @click="getIndex(index)"
          v-for="(list,index) in classify.categorys" :key="index">{{list.name}}</li>
      </ul>
    </div>
   <div class="right" v-if="classify.categorys">
     <div class="right-wrap" v-for="(content,index) in classify.categorys[leftIndext].cate_list" :key="index">
       <span>{{content.title}}</span>
       <div class="right-img">
         <ul>
           <li v-for="(img,index) in content.list" :key="index">
             <div>
                <img :src="img.photo||img.logo">
             </div>
                <div class="img-name">{{img.name}}</div>
           </li>
         </ul>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from "vuex"
  export default {
    data(){
      return{
        leftIndext:0
//没有定义，则保错 Property or method "rightList" is not defined on the instance but referenced during render. Make sure that this property is reactive,
      }
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.left', {
            click: true,
        })
      })

      this.$store.dispatch("getClassify")
    },
    computed:{
      ...mapState(["classify"])
    },
    methods:{
      getIndex(index){
        this.leftIndext=index
      }

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body
    height 100%
    body 100%
    overflow hidden
  .cList
    background: lightblue
    .left
      position absolute
      left 0
      top 40px
      width 70px
      /*border-right 2px solid lightcoral*/
      height 400px
      li
        line-height 50px
        width 70px
        height 50px
        text-align center
        font-size 13px
        &.active
          color #ff1a28
          /*background: #e16dfa*/
    .right
      display flex
      flex-direction column
      position absolute
      left 85px
      top 40px
      .right-wrap
        span
          margin-left 5px
          font-size 12px
          line-height 40px
          height 40px
          color #999
        .right-img
          ul
            display flex
            flex-flow row wrap
            li
              width 82px
              height 102px
              padding 5px
              img
                width 100%
                height 100%
              .img-name
                font-size 12px
                text-align center

</style>
