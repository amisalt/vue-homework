import { useStore } from 'vuex';
import { computed} from 'vue';

export function usePieChart(type){
    const store = useStore()
    let palette = []
    let label = ''
    if(type === 'exp') {
        palette = ['#ff6b6b','#ff8052','#ff8a92','#ff3269','#ffced4']
        label = 'Spent money'
    }
    else if(type ==='inc') {
        palette = ['#316855','#4f9c68','#7db06d','#9fc55e','#c4d350']
        label = 'Earned money'
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false
    }
    const categories = computed(()=>store.getters.budgetCategories(type))
    const dataSums = computed(()=>{
        let array = []
        for(let category of categories.value){
            array.push(store.getters.budgetTotalByCategory(type,category))
        }
        return array
    })
    const data = computed(()=>{return {
        labels: categories.value,
        datasets: [
            {
                label,
                backgroundColor: palette.slice(0, categories.value.length),
                data: dataSums.value
            }
        ]
    }})
    return {options, data}
}
