<script>
import { ref } from 'vue'
export default{
    setup(){
        if(!localStorage.getItem('image')) localStorage.setItem('image', '1')
        const lastImage = ref(localStorage.getItem('image'))
        return {lastImage}
    }
}
</script>

<template>
<div>
    <section>
        <h1>Idk some cool main page greeting</h1>
        <h2>(* ^ ω ^)	(´ ∀ ` *)	٩(◕‿◕｡)۶	☆*:.｡.o(≧▽≦)o.｡.:*☆</h2>
    </section>
    <section>
        <h3>here links if you dont't see huge header(it may be display error :P)</h3>
        <h3>gallery:<a :href="`/gallery/${lastImage}`">gallery fr fr no cap</a></h3>
        <h3>contacts: <a href="/contacts">contacts fr fr no cap</a></h3>
    </section>
</div>

</template>

<style scoped>
div, section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 4px;
}
div{
    width: 100%;
    height: 100%;
    gap: 50px;
}
h3, h1, h2{
    margin: 0;
}
h1{
    font-size: 35px;
}
</style>