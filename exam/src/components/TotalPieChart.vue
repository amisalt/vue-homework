<script>
import { usePieChart } from '@/composables/pieChart'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale} from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(Title, ArcElement, Tooltip, Legend, CategoryScale, LinearScale)

export default{
    components:{Pie},
    props:{
        type:{type:String, required:true}
    },
    setup(props){
        const {options, data} = usePieChart(props.type)
        return {options, data}
    }
}
</script>

<template>
<div class="pieChartContainer">
    <Pie :data="data" :options="options"/>
</div>
</template>

<style scoped>
.pieChartContainer{
    width: 38vw;
}
</style>