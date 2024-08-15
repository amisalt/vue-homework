<template>
<HeaderComp/>
<ItemList/>
</template>

<script>
import ItemList from "./components/ItemList.vue"
import HeaderComp from "./components/HeaderComp.vue"
export default {
  name: 'App',
  components:{ItemList, HeaderComp}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}
body{
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
