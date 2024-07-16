import { useStore } from 'vuex';
import { computed } from 'vue';

export function useTopBudget(type, category){
    const store = useStore()
    const topIncome = computed(()=>store.getters.budgetTop(type,category))
    let date = computed(()=>topIncome.value.date.split("-").join("."))
    return {topIncome, date}
}
