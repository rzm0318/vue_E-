<template>
  <div>
    <CartHeader :name="name"/>
    <mt-index-list class="chart">
      <mt-index-section v-for="(brand , index) in all.brand" :index="`${brand.order}`" :key="index">
      <div class="allbrands" >
        <div class="content">
          <div class="brand-item border-bottom-1px" v-for="(evebrand , index) in brand.list">
            <a href="javascript:">
              <img alt="logo" :src="evebrand.logo"/>
              <span class="desc">
                <span class="name">{{evebrand.name}}</span><br>
                <span class="address">{{evebrand.address}}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import Vue from 'vue'
  import CartHeader from "../../components/CartHeader/CartHeader.vue"
  import { IndexList, IndexSection } from 'mint-ui';
  import { Cell } from 'mint-ui';
  import {mapState} from "vuex"

  Vue.component(Cell.name, Cell);
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  export default {
    data(){
      return{
        name:"全部品牌"
      }
    },
    components:{
      CartHeader
    },
    mounted () {
      this.$store.dispatch('getAllBrand')
    },
    computed:{
      ...mapState(['all'])
    },
    methods:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./self.css"
  ::-webkit-scrollbar
    display none
  .allbrands
    width 100%
    background-color: rgba(0,0,0,.1)
    .content
      height 100%
      width 100%
      .title
        width 100%
        height 24px
        line-height 24px
        font-size 12px
      .brand-item
        width 100%
        height 70px
        background #fff
        border-bottom-1px(#eee)
        box-sizing border-box
        padding 10px 10px
        >a
          display block
          width 100%
          height 100%
          font-size 0
          >img
            height 100%
            width 88px
            border 1px solid #eeeeee
            padding 5px
            box-sizing border-box
            vertical-align top
          .desc
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            height 100%
            font-size 14px
            margin-left 20px
            .name
              color #000
            .address
              font-size 12px

</style>
