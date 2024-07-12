<script>
import { useToDoList } from '@/composables/useToDoList';
export default{
    setup(){
        const {remainingTodos, addNewTask, deleteTask, toggleDoneState, newTask, tasks,newTaskCategory} = useToDoList()
        return {remainingTodos, addNewTask, deleteTask, toggleDoneState, newTask, tasks,newTaskCategory}
    }
}
</script>

<template>
<div class="cont">
<h1>Shopping list</h1>
<section>
    <select v-model="newTaskCategory">
        <option value="Groceries">Groceries</option>
        <option value="Household Supplies">Household Supplies</option>
        <option value="Personal Care">Personal Care</option>
        <option value="Health & Wellness">Health & Wellness</option>
        <option value="Pet Supplies">Pet Supplies</option>
        <option value="Electronics">Electronics</option>
        <option value="Baby & Childcare">Baby & Childcare</option>
        <option value="Clothing & Accessories">Clothing & Accessories</option>
        <option value="Travel & Leisure">Travel & Leisure</option>
    </select>
    <input type="text" v-model="newTask">
    <button @click="addNewTask">Add position</button>
</section>
<p>Left to buy: {{ remainingTodos }}</p>
<ul>
    <li v-for="task in tasks" v-bind:key="task.id" :class="task.done ? 'done' : 'undone'">
        <span>({{ task.category }})</span>
        <span>{{ task.title }}</span>
        <div class="buttons">
            <button @click="toggleDoneState(task.id)">
                <span v-if="task.done">I forgot to buy!</span>
                <span v-else>Buy</span>
            </button>
            <button @click = deleteTask(task.id)>Delete</button>
        </div>
    </li>
</ul>
</div>
</template>

<style scoped>
.done{
    opacity: .5;
}
.undone{
    opacity: 1;
}
.cont{
    border: 1px solid rgb(63, 63, 49);
    width: 500px;
    padding: 15px;
    color:rgb(63, 63, 49);
    background-color: rgb(248, 248, 239);
    border-radius: 5px;
}
section{
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 0;
    justify-content: center;
    align-items: center;
}
.buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3px;
}
p{
    margin: 5px;
    color: rgb(139, 139, 115)
}
ul{
    list-style: none;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
li{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: center;
    justify-content: space-between;
    padding: 10px 5px;
    background-color: beige;
    border-radius: 5px;
    border: 1px solid rgb(206, 206, 181);
}
button, input, select{
    border: 1px solid rgb(139, 139, 115);
    background-color: rgb(206, 206, 181);
    padding: 5px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    border-radius: 5px;
}
.cont > section > button{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
select{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 4px;
}
input{
    background-color: white;
    border-radius: 0;
}
</style>