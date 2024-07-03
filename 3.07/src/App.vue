<template>
  <PostsComp/>
  <UsersComp/>
  <FilmComp/>
</template>

<script>
import PostsComp from "./components/Posts.vue"
import FilmComp from "./components/Film.vue"
import UsersComp from "./components/Users.vue"
export default {
  name: 'App',
  components: {
    FilmComp,PostsComp, UsersComp
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
