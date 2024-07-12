<template>
  <!-- <p>{{ count }} - {{ doubleCount }}</p>
  <button @click="increment">{{ state.msg }}</button>
  <HelloWorld :msg="state.msg" @incrementCustom="handleIncrementCustom" :increment="3"/> -->
  <ToDoList/>
</template>

<script>
// import {ref, reactive, computed, onMounted} from 'vue'
// import HelloWorld from "./components/HelloWorld.vue"
import ToDoList from './components/ToDoList.vue';
export default{
  components:{ToDoList},
  setup(){
    // const count = ref(0)
    // const doubleCount = computed(()=>count.value*2)
    // const state = reactive({
    //   msg:"sdjfskljsdlgj"
    // })
    // function increment(){
    //   count.value++
    // }
    // function handleIncrementCustom(increment){
    //   count.value += increment
    // }
    // onMounted(()=>count.value+=2)
    // return {count,state,increment,doubleCount,handleIncrementCustom}
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
  margin-top: 60px;
}
</style>
