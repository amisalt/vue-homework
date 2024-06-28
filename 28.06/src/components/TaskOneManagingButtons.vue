<script>
export default{
    name:"TaskOneManagingButtons",
    methods:{
        increment(){
            this.$emit("increment")
        },
        reset(){
            this.$emit("reset")
        }
    }
}
</script>

<template>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
</template>