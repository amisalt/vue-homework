<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup(){
    if(!localStorage.getItem('image')) localStorage.setItem('image', '1')
    const lastImage = ref(localStorage.getItem('image'))
    return {lastImage}
  }
}
</script>

<template>
  <header>
    <a href="/">Main Page</a>
    <a :href="`/gallery/${lastImage}`">Gallery</a>
    <a href="/contacts">Contacts</a>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  min-height: 100vh;
  position: relative;
}
header{
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* box-shadow: 0px 5px 10px #797c6b; */
  background-color: #afb4aa;
  z-index: 500;
}
header a{
  font-size: 25px;
  text-decoration: none;
  color: #2f3934;
}
main{
  position: absolute;
  top: 100px;
  z-index: 0;
  width: 100%;
  min-height: calc(100vh - 100px);
  height: 100%;
}
</style>
