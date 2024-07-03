<script>
export default{
    name:"PostForm",
    data(){
        return{
            newPost:{
                title:"",
                content:""
            }
        }
    },
    methods:{
        handleSubmit(){
            if(this.newPost.title && this.newPost.content){
                this.$emit("newPost", this.newPost)
                this.newPost.title = "";
                this.newPost.content=""
            }else{
                alert("Empty fields")
            }
        }
    }
}
</script>

<template>
<div class="post-form">
    <h2>Add new post</h2>
    <form @submit.prevent="handleSubmit">
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="newPost.title" required>
        <br>
        <label for="content">Content:</label>
        <textarea id="content" v-model="newPost.content" required></textarea>
        <br>
        <button type="submit">Post</button>
    </form>
</div>
</template>