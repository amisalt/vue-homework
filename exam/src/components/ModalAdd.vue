<script>
import { useModalAdd } from '@/composables/ModalAdd'
export default{
    props:{
        type:{type:String, required:true}
    },
    setup(props, {emit}){
        const {sum,date, newCategory, category, categories, addOperation, styles, message, toggleModal} = useModalAdd(emit, props.type)
        return {sum,date, newCategory, category, categories, addOperation, styles, message, toggleModal}
    }
}
</script>

<template>
<div class="modal" :class="styles">
<input type="number" v-model.number="sum">
<span>
    <input type="radio" v-model="newCategory" value="existing" id="existing">
    <label for="existing">Existing category</label>
</span>
<span>
    <input type="radio" v-model="newCategory" value="new" id="new">
    <label for="new">New category</label>
</span>
<div v-if="newCategory==='existing'">
    <select v-model="category">
        <option v-for="cat of categories" v-bind:key="cat" :value="cat">{{ cat }}</option>
    </select>
</div>
<div v-else-if="newCategory==='new'">
    <input type="text" v-model="category">
</div>
<input type="date" v-model="date">
<button @click="addOperation">{{message}}</button>
<button @click="toggleModal">Close</button>
</div>
</template>

<style scoped>
.modal{
    position: fixed;
    top: 120px;
    left: calc(50vw - 140px);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    gap: 10px;
}
input[type=text],input[type=number],input[type=date], select{
    width: 100%;
    border: inherit;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 5px;
}
button{
    display: block;
    border: 0;
    color: #c8d5d3;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
}
.exp{
    background-color: #e6adad;
    border: 1px solid #a65959;
}
.exp button{
    background-color: #a65959;
}
.inc{
    background-color: #b5e6ad;
    border: 1px solid #63a659;
}
.inc button{
    background-color: #63a659;
}
</style>