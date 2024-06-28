<script>
import ManagingButtons from "./TaskOneManagingButtons.vue"
export default{
    name:"TaskOne",
    components:{ManagingButtons},
    data(){
        return{
            counter:0
        }
    },
    methods:{
        increment(){
            this.counter++
        },
        reset(){
            this.counter = 0
        }
    }
}
</script>

<template>
<div>
<h1>Task One</h1>
<h3>{{ counter }}</h3>
<ManagingButtons @increment="increment" @reset="reset"/>
</div>
</template>