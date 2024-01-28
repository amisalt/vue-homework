<script>
import Floor from './components/Floor.vue';
export default{
    name:'app',
    components:{Floor},
    data(){
        return{
            width:0,
            height:0,
            floortypes:["https://i.pinimg.com/236x/30/0d/02/300d02df50de959d4a323008b8c0aba5--gamer-room-minecraft-room.jpg?nii=t","https://static.planetminecraft.com/files/image/minecraft/texture-pack/2021/730/14974571-dirtpack_l.jpg","https://art.pixilart.com/eaa620c2c581334.png","https://i.imgur.com/a1GAAKZ.png","https://streak.club/img/Mix1c2VyX2NvbnRlbnQvdXBsb2Fkcy9pbWFnZS8xNDcwLnBuZw==/original/foEmoj.png"],
            floorprices:[5,1,50,10,20],
            currentfloortype:0
        }
    },
    updated(){
        console.log(this.width, this.height, this.currentfloortype, this.price);
    },
    computed:{
        price(){
            return this.width*this.height*this.floorprices[this.currentfloortype]
        }
    }
}
</script>

<template>
<section>
    <input type="number" max="34" min="1" placeholder="width(in blocks)" v-model="width" value="1">
    <input type="number" max="18" min="1" placeholder="height(in blocks)" v-model="height" value="1">
    <input type="number" max="4" min="0" placeholder="type of blocks" v-model="currentfloortype">
    <span>Price: {{ price }} emeralds</span>
</section>
<Floor :width="width" :height="height" :type="floortypes[currentfloortype]"></Floor>
</template>

<style scoped>
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 5vw;
    padding: 10vh 1vw;
    gap: 10px;
}
input, span{
    width: 100%;
    display: flex;
    height: 50px;
    background-color: white;
    color: black;
    font-family: monospace;
    border: 0;
    justify-content: center;
    align-items: center;
}
</style>