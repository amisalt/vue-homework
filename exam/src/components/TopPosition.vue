<script>
import { useTopBudget } from '@/composables/topBudget'
export default{
    props:{
        category:{type:String},
        type:{type:String, required:true}
    },
    setup(props){
        const {topIncome, date} = useTopBudget(props.type, props.category)
        return {topIncome, date}
    }
}
</script>

<template>
<div class="topContainer">
<p>{{ topIncome.sum }}$ - {{ topIncome.category }} ({{ date }})</p>
</div>
</template>