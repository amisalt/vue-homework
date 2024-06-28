<template>
  <TaskSeven/>
  <TaskSix/>
  <TaskFive/>
  <TaskFour/>
  <TaskTwo/>
  <TaskOne/>
</template>

<script>
import TaskSeven from "./components/TaskSeven.vue"
import TaskFive from "./components/TaskFive.vue"
import TaskFour from "./components/TaskFour.vue"
import TaskSix from "./components/TaskSix.vue"
import TaskTwo from "./components/TaskTwo.vue"
import TaskOne from "./components/TaskOne.vue"
export default {
  name: 'App',
  components:{TaskSeven, TaskFive, TaskFour, TaskSix, TaskTwo, TaskOne}
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
div{
  border: 1px solid black;
}
</style>
