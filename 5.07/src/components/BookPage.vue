<script>
import {computed} from 'vue';
export default{
    setup(){
        const book = computed(()=>JSON.parse(localStorage.getItem('bookDetails')))
        console.log(book.value);
        return {book}
    }
}
</script>

<template>
<div class="container">
    <div class="content" v-if="book">
        <section>
            <h1>{{ book.title }} ({{ book.publish_date }}y.)</h1>
            <h2>Author<span v-if="book.authors.length > 1">s</span>:</h2>
            <ul>
                <li v-for="author in book.authors" :key="author.name">{{ author.name }}</li>
            </ul>
            <p v-if="book.description">{{ book.description }}</p>
        </section>
        <section>
            <img :src="book.image" alt="Some cool book picture idk">
        </section>
    </div>
    <div class="content" v-else>
        <h1>Oopsie book that you are searching for don't exist o_O</h1>
    </div>
</div>
</template>

<style scoped>
.container, .content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
section{
    width: 45%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
section:nth-child(2){
    width: 30%;
}
img{
    width: 100%;
}
</style>