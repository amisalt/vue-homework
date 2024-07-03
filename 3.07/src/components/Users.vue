<script>
import { ModalsContainer, useModal } from 'vue-final-modal';
import UsersModal from "./UsersModal.vue"
import axios from 'axios';
export default{
    name:"UsersComp",
    components:{ModalsContainer},
    data(){
        return{
            users:[],
            modalFunctions:{open, close}
        }
    },
    created(){
        const response = axios.get("https://jsonplaceholder.typicode.com/users").then(data => this.users = data.data).catch(err => console.error(err))
        console.log(response);
    },
    methods:{
        createAndOpenModal(user){
            const {open, close} = useModal({
                component:UsersModal,
                attrs:{
                    user,
                    onConfirm(){
                        close()
                    }
                }
            })
            this.modalFunctions = {open, close}
            open()
        }
    }
}
</script>

<template>
    <h1>Users</h1>
    <div class="users">
        <div class="user" v-for="user in users" v-bind:key="user.id" @click="createAndOpenModal(user)">
            <h3>@{{user.username}} - {{ user.name }}</h3>
        </div>
    </div>
    <ModalsContainer/>
</template>

<style scoped>
.users{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
}
.user{
    width: 250px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 3px;
}
</style>