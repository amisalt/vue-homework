<script>
export default{
    name:"PostList",
    props:{
        postList:{
            type:Array,
            required:true
        }
    },
    methods:{
        deletePost(id){
            this.$emit("deletePost", id)
        }
    }
}
</script>

<template>
<div class="container">
    <TransitionGroup name="fade">
        <div class="post" v-for="post in postList" v-bind:key="post.id">
            <h3>{{post.title}}</h3>
            <p>{{post.content}}</p>
            <button @click="deletePost(post.id)">Delete post</button>
        </div>
    </TransitionGroup>
</div>
</template>

<style scoped>
.container{
    gap: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.post{
    width: 250px;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    gap: 5px;
}
h3,p{
    margin: 0;
    word-break: break-all;
}
.fade-enter-active, .fade-leave-active{
    transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to{
    opacity: 0;
}
</style>