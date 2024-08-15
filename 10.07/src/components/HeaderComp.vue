<script>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: "HeaderComp",
  setup() {
    const store = useStore()
    const modal = ref(false)
    function toggleModal(){
      modal.value = !modal.value
    }
    const name = ref("")
    const price = ref(null)
    const type = ref("")
    const color = reactive([])
    const size = reactive([])
    const newColor = ref("")
    const newSize = ref("")
    function addColor(){
      if(!color.includes(newColor.value)) color.push(newColor.value)
      newColor.value = ""
    }
    function addSize(){
      if(!size.includes(newSize.value)) size.push(newSize.value)
      newSize.value = ""
    }
    function removeColor(index){
      color.splice(index, 1)
    }
    function removeSize(index){
      size.splice(index, 1)
    }
    function addItem(){
      console.log(color);
      console.log(size);
      
      
      if(name.value.trim()!=='' && price.value > 0 && type.value.trim()!=='' && color.length > 0 && size.length > 0){
        store.commit('addItem', {
          id:store.getters.itemListLength,
          name:name.value,
          price:price.value,
          type:type.value,
          color:[...color],
          size:[...size],
          rating:0
        })
        name.value = ""
        price.value = null
        type.value = ""
        color.length = 0
        size.length = 0
        toggleModal()
      }
    }
    return {modal, toggleModal, name, price, type, color, size, newColor, newSize, addColor, addSize, removeColor, removeSize, addItem}
  }
}
</script>

<template>
  <header>
    <button @click="toggleModal">Add Item</button>
  </header>
  <div class="modal" v-if="modal">
    <input type="text" v-model="name" placeholder="Name of Clothes Item">
    <input type="number" v-model.number="price" placeholder="Price">
    <input type="text" v-model="type" placeholder="Clothes Piece ex:Shirt">
    <span>Colors</span>
    <ul>
      <li v-for="(col, index) in color" :key="index">
        {{ col }}
        <button @click="removeColor(index)">X</button>
      </li>
    </ul>
    <span><input type="text" v-model="newColor" @keydown.enter="addColor"><button @click="addColor">Add</button></span>
    <span>Sizes</span>
    <ul>
      <li v-for="(s, index) in size" :key="index">
        {{ s }}
        <button @click="removeColor(index)">X</button>
      </li>
    </ul>
    <span><input type="text" v-model="newSize" @keydown.enter="addSize"><button @click="addSize">Add</button></span>
    <button @click="addItem">Add Item</button>
  </div>
</template>

<style scoped>
header {
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 0px 5px #797c6b;
  background-color: #afb4aa;
  z-index: 500;
}

header button {
  font-size: 20px;
  text-decoration: none;
  color: #2f3934;
  border: none;
  box-shadow: 0 0 5px;
  padding: 7px;
  border-radius: 7px;
  background-color: white;
}
.modal{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 300px;
  top: 150px;
  left: calc(50vw - 150px);
  border: 1px solid black;
  background-color: #dcdfd9;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  gap: 5px;
}
.modal input, .modal button{
  width: 100%;
  padding: 7px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid black;
  background-color: white;
}
.modal span input{
  width: 70%;
}
.modal span button, .modal ul button{
  width: 30%;
}
.modal span{
  display: flex;
  flex-direction: row;
  gap: 3px;
  font-size: 18px;
}
.modal ul{
  width: 80%;
  list-style: none;
}
.modal li{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
</style>