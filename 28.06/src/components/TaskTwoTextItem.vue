<script>
export default{
    name:"TaskTwoTextItem",
    props:{
        text:{
            type:String,
            required:true
        }
    }
}
</script>

<template>
    <p>{{ text }}</p>
</template>