<template>
  <div class="cont">
    <h1>Post List</h1>
    <PostForm @newPost="addNewPost"/>
    <button @click="prevPage" :disabled="currentPage === 1">Prev</button>
    <span>{{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage === maxPage">Next</button>
    <PostList :postList="posts.slice((currentPage-1)*postsPerPage,currentPage*postsPerPage)" @deletePost="deletePost"/>
  </div>
  
</template>
  
<script>
import PostList from "./PostList.vue"
import PostForm from "./PostForm.vue"
export default {
  name: 'PostsComp',
  components: {
    PostList, PostForm
  },
  data(){
    return{
      posts:[
        {id:1,title:"a",content:"sdkslds"},
        {id:2,title:"b",content:"sdkslds"},
        {id:3,title:"c",content:"sdkslds"},
        {id:4,title:"d",content:"sdkslds"},
        {id:5,title:"e",content:"sdkslds"},
        {id:6,title:"f",content:"sdkslds"},
        {id:7,title:"g",content:"sdkslds"},
        {id:8,title:"h",content:"sdkslds"},
        {id:9,title:"i",content:"sdkslds"},
        {id:10,title:"j",content:"sdkslds"},
      ],
      currentPage:1,
      postsPerPage:4
    }
  },
  methods:{
    addNewPost(post){
      this.posts.push({id:this.posts.length,...post})
    },
    deletePost(id){
      this.posts = this.posts.filter(post => post.id !== id)
      if(this.currentPage > this.maxPage) this.prevPage()
    },
    prevPage(){
      if(this.currentPage > 1) this.currentPage--
    },
    nextPage(){
      if(this.currentPage < this.maxPage) this.currentPage++
    }
  },
  computed:{
    maxPage(){
      if(this.posts.length == 0) return 1
      return Math.ceil(this.posts.length/this.postsPerPage)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  