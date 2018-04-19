/*应用组件*/
<template>
  <div id="app">
    <router-view></router-view>
    <FootGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FootGuide from "./components/FootGuide/FootGuide.vue"
export default {
  components:{
    FootGuide
  },

}
</script>

<style>

</style>
