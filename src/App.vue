/*应用组件*/
<template>
  <div id="app">
    <router-view></router-view>
    <FootGuide/>
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
