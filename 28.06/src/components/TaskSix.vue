<script>
import ListItem from "./TaskSixListItem.vue"
export default{
    name:"TaskSix",
    components:{ListItem},
    data(){
        return{
            list:[],
            newItem:""
        }
    },
    methods:{
        addItem(){
            if(this.newItem) this.list.push({"content":this.newItem, "id":this.list.length})
        },
        deleteItem(id){
            this.list = this.list.filter(item => item.id !== id)
        }
    }
}
</script>

<template>
<div>
<h1>Task Six</h1>
<input type="text" v-model="newItem"><button @click="addItem">Add</button>
<ul v-if="list.length > 0">
    <li v-for="item in list" v-bind:key="item.id"><ListItem @deleteItem="deleteItem" :data="item"/></li>
</ul>
<p>*I guess tasks 3 and 6 are quite similar, so task 3 will be left undone</p>
</div>
</template>

<style scoped>
p{color: red;}
</style>