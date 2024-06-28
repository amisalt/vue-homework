<script>
export default{
    name:"TaskFourRegistrationForm",
    data(){
        return{
            name:"",
            age:null
        }
    },
    methods:{
        sendData(){
            if(this.name && this.age) this.$emit("signUp", {"name":this.name, "age":this.age})
        }
    }
}
</script>

<template>
    <form border="1">
        <input type="text" v-model="name" placeholder="Enter your name" required>
        <input type="number" v-model.number="age" placeholder="Enter your age" required>
        <button @click.prevent="sendData" type="submit">Sign Up</button>
    </form>
</template>