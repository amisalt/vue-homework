<template>
  <CoinDex/>
  <WeatherComp/>
  <PostsComp/>
  <FilmsComp/>
</template>

<script>
import PostsComp from "./components/Post.vue"
import WeatherComp from "./components/Weather.vue"
import FilmsComp from "./components/Film.vue"
import CoinDex from "./components/CoinDex.vue";
export default {
  name: 'App',
  components:{PostsComp, WeatherComp, FilmsComp, CoinDex}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.container{
  border: 1px solid gray;
  padding: 10px;
  box-sizing: border-box;
}
</style>
