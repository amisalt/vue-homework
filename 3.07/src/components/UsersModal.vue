<script>
import 'vue-final-modal/style.css'
import { VueFinalModal } from 'vue-final-modal';
export default{
    name:"UsersModal",
    props:{
        user:{type:Object,required:true}
    },
    components:{VueFinalModal},
    methods:{
        confirm(){
            this.$emit("confirm")
        }
    }
}
</script>

<template>
<VueFinalModal overlay-transition="vfm-fade" content-transition="vfm-fade" class="confirm-modal" content-class="confirm-modal-content">
    <h2>@{{user.username}} - {{ user.name }}</h2>
    <p>{{ user.phone }}</p>
    <p>{{ user.website }}</p>
    <p>{{user.email}}</p>
    <p>{{ user.company.name }}</p>
    <p>{{ user.address.city }} - {{ user.address.street }} {{ user.address.suite }}</p>
    <button @click="confirm">OK</button>
</VueFinalModal>
</template>

<style>
.confirm-modal {
    top:50%;
    left: 50%;
    bottom: 50%;
    right: 50%;
    display: flex;
    flex-direction: column;
    width: 400px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: beige;
    /* opacity: 1; */
    width: 300px;
  }
  .confirm-modal-content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background: beige;
    border: 1px solid black;
    border-radius: 0.5rem;
  }
  .confirm-modal-content > * + *{
    margin: 0.5rem 0;
  }
  .confirm-modal-content h1 {
    font-size: 1.375rem;
  }
  .confirm-modal-content button {
    margin: 0.25rem 0 0 auto;
    padding: 0 8px;
    border: 1px solid;
    border-radius: 0.5rem;
  }
  .dark .confirm-modal-content {
    background: #000;
  }
  .vfm--inset{
    
  }
</style>