<script>
import RegistrationForm from "./TaskFourRegistrationForm.vue"
export default{
    name:"TaskFour",
    components:{RegistrationForm},
    data(){
        return{
            valid:false,
            person:{}
        }
    },
    methods:{
        signUp(person){
            this.person = {...person}
            if(person.age > 18) this.valid = true
            else this.valid = false
            console.log(this.person, this.valid);
        }
    }
}
</script>

<template>
    <div>
        <h1>Task Four</h1>
        <RegistrationForm @signUp="signUp"/>
        <div v-if="person.name && person.age">
            <p v-if="valid">{{ person.name }}! You successfully signed up to our amazing site</p>
            <p v-else>{{ person.name }}! You are underage for our site</p>
        </div>
    </div>
</template>