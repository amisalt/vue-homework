<script>
import { useStore } from 'vuex';
import { computed} from 'vue';
export default{
    setup(){
        const store = useStore()
        const expensesTotal = computed(()=>store.getters.totalExpensesByCategory())
        const incomesTotal = computed(()=>store.getters.totalIncomesByCategory())
        const budget = computed(()=>incomesTotal.value-expensesTotal.value)
        return {expensesTotal, incomesTotal, budget}
    }
}
</script>

<template>
<div class="summaryContainer">
<p>+{{ incomesTotal }}</p>
<p>-{{ expensesTotal }}</p>
<p>={{ budget }}</p>
</div>
</template>