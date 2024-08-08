<template>
  <GradientOption @apply=handleApply />
  <div class="result" :style="gradient"></div>
</template>

<script>
import GradientOption from "@/components/GradientOption.vue"
import { ref } from "vue";
export default {
  name: 'App',
  components:{GradientOption},
  setup(){
    const gradient = ref('')
    function handleApply(grad){
      gradient.value = grad
    }
    return {gradient, handleApply}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
}
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100vw;
  height: 100vh;
}
.result{
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 5px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}
</style>
