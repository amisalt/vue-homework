<script>
import NewBookForm from "./NewBookForm.vue"
import { computed, ref } from 'vue';
export default{
    components:{NewBookForm},
    setup(){
        const libExists = computed(()=>{
            if(localStorage.getItem('books')) return true
            else return false
        })
        const books = computed(()=>{
            if(libExists.value) return JSON.parse(localStorage.getItem('books'))
            else return []
        })
        const formshow = ref(false)
        function toggleForm(){
            formshow.value = !formshow.value
        }
        function addBook(book){
            books.value.push(book)
            localStorage.setItem('books', JSON.stringify(books.value))
            toggleForm()
        }
        function setId(id){
            localStorage.setItem('book', id)
        }
        return {libExists, books, formshow, toggleForm, addBook, setId}
    }
}
</script>

<template>
<div class="container">
<button @click="toggleForm">Add Book</button>
<NewBookForm v-if="formshow" @addBook="addBook"/>
<div class="content not-real" v-if="!libExists">
    <h1>Ooopsie library is empty</h1>
</div>
<div class="content" v-else>
    <a href="/book" class="book" v-for="book in books" :key="book.id" @click="setId(book[0].id)">
        <img :src="book[0].image" alt="Some cool book picture idk">
        <p>{{ book[0].title }}</p>
    </a>
</div>
</div>
</template>

<style scoped>
.container, .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
}
.content{
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.not-real{
    justify-content: center;
    text-align: center;
}
a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    min-height: 400px;
    padding: 10px;
    box-sizing: border-box;
    text-decoration: none;
    font-size: 20px;
    color: #2f3934;
    border: 1px solid #2f3934;
    border-radius: 10px;
}
img{
    width: 100%;
    min-height: 400px;
}
</style>