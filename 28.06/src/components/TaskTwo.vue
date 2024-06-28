<script>
import TextItem from "./TaskTwoTextItem.vue"
export default{
    name:"TaskTwo",
    components:{TextItem},
    data(){
        return{
            text:"",
            textPass:""
        }
    },
    methods:{
        passData(){
            this.textPass = this.text
        }
    }
}
</script>

<template>
<div>
<h1>Task Two</h1>
<input type="text" v-model="text"><button @click="passData">Change</button>
<TextItem :text="textPass"/>
</div>
</template>