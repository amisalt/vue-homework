<script>
import TotalPieChart from './TotalPieChart.vue';
import TopPosition from './TopPosition.vue';
import ModalAdd from './ModalAdd.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
export default{
    components:{TotalPieChart,TopPosition,ModalAdd},
    setup(){
        const store = useStore()
        const categories = computed(()=>store.getters.incomesCategories)
        const incomes = computed(()=>store.getters.incomes)
        function deleteIncome(id){
            store.commit('deleteIncome', id)
        }
        const incomeModal = ref(false)
        function toggleIncomeModal() {
            incomeModal.value = !incomeModal.value
        }
        function addIncome(income){
            store.commit('addIncome', income)
            const response = computed(()=>store.getters.response)
            if(response.value === 0){
                localStorage.setItem('appData', JSON.stringify(store.getters.budget()))
                toggleIncomeModal()
            }
        }
        return {categories, incomes, deleteIncome, incomeModal, toggleIncomeModal, addIncome}
    }
}
</script>

<template>
<div class="incomePage">
<section class="summary">
    <TotalPieChart type="inc"/>
    <button @click="toggleIncomeModal">+</button>
    <h2>Categories Top Positions</h2>
    <div class="top" v-for="category in categories" :key="category">
        <h3>{{ category }}</h3>
        <TopPosition type="inc" :category="category"/>
    </div>
</section>
<section class="each">
    <div class="position" v-for="income in incomes" :key="income.id">
        <p>{{ income.sum }}$ - {{ income.category }} ({{ income.date.split("-").join(".") }})</p>
        <button @click="deleteIncome(income.id)">-</button>
    </div>
</section>
<ModalAdd type="inc" v-if="incomeModal" @addIncome="addIncome" @toggleModal="toggleIncomeModal"/>
</div>
</template>

<style scoped>
.incomePage{
    width: 100%;
    padding: 2vh 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 15px;
    color: #2f3934;
}
.summary{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    max-width: 340px;
}
button{
    display: block;
    border: 0;
    background-color: #63a659;
    color: #c8d5d3;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 25px;
}
.summary button{
    width: 100%;
}
.summary .top{
    width: 100%;
    text-align: left;
}
.summary h2{
    margin-bottom: 0;
    margin-top: 48px;
}
.each{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
}
.position{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #b5e6ad;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
}
.position button{
    width: 30px;
}
.position p{
    word-wrap: break-word;
    word-break: break-all;
}
</style>