<script>
export default{
    setup(){

    }
}
</script>

<template>
<div>
    <section>
        <h1>ayooo what's up my dear book nerd!</h1>
        <h2>go check out the most skibidiest GOAT library</h2>
    </section>
    <section>
        <h3>here links if you dont't see huge header(it may be display error :P)</h3>
        <h3>library:<a href="/library">library fr fr no cap</a></h3>
        <h3>and details on certain book(it is harry potter be default lol): <a href="/book">book fr fr no cap</a></h3>
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