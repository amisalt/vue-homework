<template>
<h1 @click="incrementCustom">{{ msg }} - {{ increment }}</h1>
</template>

<script>
import { Idk } from '@/composables/skgjklgls';
export default{
  props:{
    msg:{type:String, required:true},
    increment:{type:Number, required:false}
  },
  emits:['incrementCustom'],
  setup(props,{emit}){
    function incrementCustom(){
      emit('incrementCustom', props.increment)
      Idk(props.msg)
    }
    return {incrementCustom}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>@/composables/skgjklgls
