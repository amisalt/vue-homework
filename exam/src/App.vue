<template>
<header>
  <a href="/">Main</a>
  <a href="/incomes">Incomes</a>
  <a href="/expenses">Expenses</a>
</header>
<main>
  <router-view></router-view>
</main>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'App',
  setup(){
    const store = useStore()
    if(!localStorage.getItem('appData')) localStorage.setItem('appData', JSON.stringify(store.getters.budget()))
    else store.commit('setBudget', JSON.parse(localStorage.getItem('appData')))
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-color: #eaeeed;
}
#app {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  font-family: "Inter Tight", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
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
}
</style>
