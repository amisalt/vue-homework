<script>
export default{
    name:"TaskFoveTableRow",
    props:{
        line:{
            type:Object,
            required:true,
            validator(value){
                return value.length === 5
            }
        },
        lineIndex:{
            type:Number,
            required:true,
            validator(value){
                return value >= 0
            }
        }
    },
    data(){
        return{
            editUnits:[true, false, false, false, false],
            lineEdit: this.line
        }
    },
    methods:{
        changeLine(index){
            this.editUnits[index] = false
            this.$emit("changeLine", {"line":this.lineEdit, "lineIndex":this.lineIndex})
        }
    }
}
</script>

<template>
    <tr>
        <td v-for="(unit, index) in lineEdit" v-bind:key="index">
            <input type="checkbox" v-model="editUnits[index]" :id="`${index}-${lineIndex}`">
            <label :for="`${index}-${lineIndex}`">change</label>
            <section v-if="editUnits[index]"><textarea v-model="lineEdit[index]" @keydown.enter="changeLine(index)"></textarea></section>
            <section v-else>{{ unit }}</section>
        </td>
    </tr>
</template>