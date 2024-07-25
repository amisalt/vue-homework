<script>
import { reactive } from 'vue';
function unusedVariable(variable){
    return variable
}
export default{
    setup(props, {emit}){
        unusedVariable(props)
        const book = reactive({
            id:Date.now(),
            title:"",
            authors:[
                {name:""}
            ],
            publish_date:null,
            image:"",
            description:""
        })
        function addAuthor(){
            book.authors.push({name:''})
        }
        function addBook(){
            if(book.title.trim() !== '' && book.publish_date > 0 && book.authors.filter(author => author.name !== '').length === book.authors.length) emit('addBook', [book])
        }
        function deleteAuthor(index){
            book.authors.splice(index, 1)
        }
        return {book, addAuthor, addBook, deleteAuthor}
    }
}
</script>

<template>
<div class="form">
    <h2>Add new book</h2>
    <input type="text" v-model="book.title" placeholder="Title">
    <button @click="addAuthor">Add author</button>
    <div v-for="(author,index) of book.authors" :key="index">
        <input type="text" v-model="author.name" placeholder="Author name">
        <button v-if="index > 0" @click="deleteAuthor(index)">X</button>
    </div>
    <input type="number" v-model.number="book.publish_date" placeholder="Publish year">
    <input type="text" v-model="book.image" placeholder="Book image URL">
    <textarea v-model="book.description" placeholder="What is book about?"></textarea>
    <button @click="addBook">Add book</button>
</div>
</template>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #2f3934;
    margin-top: 20px;
}
</style>