<script>
import TableRow from "./TaskFiveTableRow.vue"
export default{
    name:"TaskFive",
    components:{TableRow},
    data(){
        return{
            lines:[
                ["a",'a','d','df','fd'],
                ["a",'a','d','df','fd'],
                ["a",'a','d','df','fd'],
                ["a",'a','d','df','fd']
            ]
        }
    },
    methods:{
        changeLine(lineData){
            this.lines[lineData.lineIndex] = lineData.line
        }
    }
}
</script>

<template>
    <div>
        <h1>Task Five</h1>
        <table border="1">
            <tbody>
                <TableRow v-for="(line, index) in lines" v-bind:key="index" :line="line" :lineIndex="index" @changeLine="changeLine"/>
            </tbody>
        </table>
    </div>
</template>
