<script>
import axios from "axios"
export default{
    name:"postsComp",
    data(){
        return{
            posts:null,
            number:10,
            page:1
        }
    },
    created(){
        this.getPosts(true)
    },
    methods:{
        async getPosts(select){
            if(select) this.setPageZero()
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`).then(data => this.posts=data.data.splice(this.number*(this.page-1), this.number)).catch(err => {this.posts=[{"userId":"error",title:"Sorry there is some problems","body":":("}]; console.error(err);})
            console.log(response);
        },
        setPageZero(){
            this.page = 1
        }
    },
    computed:{
        maxPage(){
            return Math.ceil(100/this.number)
        }
    }
}
</script>

<template>
<div class="container">
<select v-model.number="number" @change="getPosts(true)">
    <option selected value="10">10</option>
    <option selected value="20">20</option>
    <option selected value="30">30</option>
    <option selected value="40">40</option>
</select>
<input type="number" v-model.number="page" min=1 :max="maxPage" @change="getPosts(false)">
<div class="container11">
    <div class="post" v-for="(post, index) in posts" v-bind:key = index>
        <p>User : {{ post.userId }}</p>
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
</div>
</div>
</template>

<style scoped>
.post{
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 350px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 10px;
}
.container11{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
h3{
    margin: 0;
}
</style>