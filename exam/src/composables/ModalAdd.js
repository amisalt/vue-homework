import {ref, computed} from 'vue'
import { useStore } from 'vuex'

export function useModalAdd(emit, type){
    const store = useStore()
    const sum = ref(0)
    const date=ref("")
    const newCategory=ref("existing")
    const category = ref("")
    const categories = computed(()=>store.getters.budgetCategories(type))
    function addOperation(){
        if(type === 'exp') emit('addExpense', {sum:sum.value, date:date.value, category:category.value, id:Date.now()})
        else if(type === 'inc') emit('addIncome', {sum:sum.value, date:date.value, category:category.value, id:Date.now()})
    }
    function toggleModal(){
        emit('toggleModal')
    }
    const styles = computed(()=>{
        if(type === 'exp') return {'exp':true}
        else if(type === 'inc') return {'inc':true}
        return {}
    })
    const message = computed(()=>{
        if(type === 'exp') return 'Add Expense'
        else if(type === 'inc') return 'Add Income'
        return ''
    })
    return {sum,date, newCategory, category, categories, addOperation, styles, message,toggleModal}
}