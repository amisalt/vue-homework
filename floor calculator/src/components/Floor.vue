<script>
export default{
    name:'floor',
    props:["width","height","type"],
    directives:{
        grid:{
            updated(el, binding){
                console.log(binding);
                el.style.grid
                el.style.gridTemplateRows = `repeat(${binding.value[1]},50px)`
                el.style.gridTemplateColumns = `repeat(${binding.value[0]},50px)`
            }
        }
    }
}
</script>

<template>
<div id="floor" v-grid="[width,height]">
    <img v-for="index in (width*height)" :src="`${type}`">src\assets\wood.png
</div>
</template>

<style scoped>
#floor{
    display: grid;
    border: 1px solid white;
}
img{
    width: 50px;
    height: 50px;
}
</style>