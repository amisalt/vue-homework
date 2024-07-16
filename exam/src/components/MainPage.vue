<script>
import BudgetSummary from "./BudgetSummary.vue"
import ModalAdd from "./ModalAdd.vue"
import TotalPieChart from "./TotalPieChart.vue"
import TopPosition from "./TopPosition.vue"
import { useStore } from "vuex"
import {computed, ref} from 'vue'
export default{
    components:{BudgetSummary, ModalAdd, TotalPieChart, TopPosition},
    setup(){
        const store = useStore()
        const expenseModal = ref(false)
        const incomeModal = ref(false)
        function toggleExpenseModal() {
            if(!expenseModal.value && incomeModal.value) incomeModal.value = !incomeModal.value
            expenseModal.value = !expenseModal.value
        }
        function toggleIncomeModal() {
            if(!incomeModal.value && expenseModal.value) expenseModal.value = !expenseModal.value
            incomeModal.value = !incomeModal.value
        }
        function addExpense(expense){
            store.commit('addExpense', expense)
            const response = computed(()=>store.getters.response)
            if(response.value === 0) {
                localStorage.setItem('appData', JSON.stringify(store.getters.budget()))
                toggleExpenseModal()
            }
        }
        function addIncome(income){
            store.commit('addIncome', income)
            const response = computed(()=>store.getters.response)
            if(response.value === 0){
                localStorage.setItem('appData', JSON.stringify(store.getters.budget()))
                toggleIncomeModal()
            }
        }
        return {expenseModal, incomeModal, toggleExpenseModal, toggleIncomeModal, addExpense, addIncome}
    }
}
</script>

<template>
<div class="mainPage">
    <section class="inc">
        <TotalPieChart type="inc"/>
        <div class="buttons">
            <button @click="toggleIncomeModal">+</button>
            <a href="/incomes">· · ·</a>
        </div>
    </section>
    <section class="exp">
        <TotalPieChart type="exp"/>
        <div class="buttons">
            <button @click="toggleExpenseModal">+</button>
            <a href="/expenses">· · ·</a>
        </div>
    </section>
    <section class="top">
        <TopPosition type="inc"/>
        <TopPosition type="exp"/>
    </section>
    <section class="top">
        <BudgetSummary/>
    </section>
<ModalAdd type="exp" @addExpense="addExpense" v-if="expenseModal" @toggleModal="toggleExpenseModal"/>
<ModalAdd type="inc" v-if="incomeModal" @addIncome="addIncome" @toggleModal="toggleIncomeModal"/>
</div>

</template>

<style scoped>
.mainPage{
    width: 100%;
    display: grid;
    padding: 2vh 10%;
    grid-template-rows: 40vh 20vh;
    grid-template-columns: repeat(2,50%);
    row-gap: 20px;
    column-gap: 20px;
    color: #2f3934;
    box-sizing: border-box;
}
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #c8d5d3;
    border-radius: 10px;
    gap: 15px;
    padding: 15px;
    box-sizing: border-box;
}
.exp{
    background-color: #e6adad;
}
.exp .buttons button, .exp .buttons a{
    background-color: #a65959;
}
.inc{
    background-color: #b5e6ad;
}
.inc .buttons button, .inc .buttons a{
    background-color: #63a659;
}
.buttons{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 5px;
}
section .buttons button, section .buttons a{
    display: block;
    border: 0;
    background-color: #2f3934;
    color: #c8d5d3;
    width: 50%;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
}
.top{
    gap: 0;
    background-image: linear-gradient(rgb(181, 230, 173),rgb(230, 173, 173));
}
</style>