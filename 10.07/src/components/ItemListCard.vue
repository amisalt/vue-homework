<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default{
    name:"ItemCard",
    props:{
        item:{type:Object, required:true}
    },
    setup(props){
        const store = useStore()
        function deleteItem(){
            store.commit('deleteItem', props.item.id)
        }
        const editMode = ref(false)
        function editModeToggle(){
            editMode.value = !editMode.value
        }
        const name = ref(props.item.name)
        const price = ref(props.item.price)
        const type = ref(props.item.type)
        const color = reactive(props.item.color)
        const size = reactive(props.item.size)
        const newColor = ref('')
        const newSize = ref('')
        function removeColor(index){
            color.splice(index, 1)
        }
        function removeSize(index){
            size.splice(index, 1)
        }
        function addColor(){
            if(!color.includes(newColor.value)) color.push(`${newColor.value}`)
            newColor.value = ''
        }
        function addSize(){
            if(!size.includes(newSize.value)) size.push(`${newSize.value}`)
            newSize.value = ''
        }
        function editItem(){
            store.commit('editItem', {
                id:props.item.id,
                name:name.value,
                price:price.value,
                type:type.value,
                color:color,
                size:size,
                rating:props.item.rating
            })
            editModeToggle()
        }
        return {deleteItem, editItem, editMode, editModeToggle, name, price, type, color, size, removeColor, removeSize, newColor, newSize, addColor, addSize}
    }
}
</script>

<template>
<div class="card">
    <div class="pic"></div>
    <div class="content" v-if="!editMode">
        <h3>{{ item.name }}</h3>
        <section>
            <p>{{ item.type }}</p>
            <p>{{ item.price }}$</p>
        </section>
        <section>
            <ul>
                <li><b>Colors</b></li>
                <li v-for="(col, index) in color" :key="index">{{ col }}</li>
            </ul>
            <ul>
                <li><b>Sizes</b></li>
                <li v-for="(s, index) in size" :key="index">{{ s }}</li>
            </ul>
        </section>
        <p>{{ item.rating }}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z"/> </g> </svg></p>
    </div>
    <div class="content" v-else>
        <input type="text" v-model="name">
        <input type="number" v-model.number="price">
        <input type="text" v-model="type">
        <h4>Colors</h4>
        <ul>
            <li v-for="(col, index) in color" :key="index">
                {{ col }}
                <button @click="removeColor(index)">X</button>
            </li>
        </ul>
        <p><input type="text" v-model="newColor"><button @click="addColor">Add</button></p>
        <h4>Sizes</h4>
        <ul>
            <li v-for="(s, index) in size" :key="index">
                {{ s }}
                <button @click="removeSize(index)">X</button>
            </li>
        </ul>
        <p><input type="text" v-model="newSize"><button @click="addSize">Add</button></p>
        <p>{{ item.rating }}</p>
    </div>
    <section>
        <button @click="deleteItem">Delete Item</button>
        <button v-if="!editMode" @click="editModeToggle">Edit Item</button>
        <button v-else @click="editItem">Submit Edit</button>
    </section>
</div>
</template>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    border: 1px solid black;
    gap: 15px;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
}
section{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
button, input{
    padding: 5px;
    border-radius: 5px;
    background-color: white;
    border: 0;
    box-shadow: 0 0 3px;
}
h3, p, h4{
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}
ul{
    list-style: none;
    width: 50%;
    margin: 0;
}
svg{
    width: 30px;
}
</style>