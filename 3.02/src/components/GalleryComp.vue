<script>
import { computed } from 'vue';

export default{
    props:{
        image:{type:String, required:true}
    },
    setup(props){
        const prev = computed(()=>{
            if(Number(props.image) !== 1) return Number(props.image)-1
            else return 3
        })
        const next = computed(()=>{
            if(Number(props.image) !== 3) return Number(props.image)+1
            else return 1
        })
        return {prev,next}
    }
}
</script>

<template>
    <!-- <div :style="`background-image:url(${path})`"></div> -->
<div class="container">
<!-- <button @click="prevImg">⟸</button> -->
<a :href="`${prev}`">⟸</a>
<img :src="require(`../assets/${image}.png`)">
<!-- <button @click="nextImg">⟹</button> -->
<a :href="`${next}`">⟹</a>
</div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    width: 98%;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
}
a{
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: #2f3934;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    box-shadow: 0 0 5px;
}
</style>