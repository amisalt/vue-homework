<script>
export default{
    name:"TaskSixListItem",
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    methods:{
        deleteItem(){
            this.$emit("deleteItem", this.data.id)
        }
    }
}
</script>

<template>
<span>{{ data.content }} <button @click="deleteItem">Delete</button></span>
</template>