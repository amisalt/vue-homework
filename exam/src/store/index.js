import { createStore } from "vuex";

const store = createStore({
    state:{
        expenses:[{sum:500, date:"2017-06-01", category:"Groceries", id:Date.now()}],
        incomes:[{sum:100, date:"2018-06-12", category:"Dad", id:Date.now()}],
        response:0
    },
    getters:{
        response(state){
            return state.response
        },
        expenses(state){
            return state.expenses.sort((a,b)=>{
                if(Date.parse(a.date) < Date.parse(b.date)) return 1
                else if(Date.parse(a.date) > Date.parse(b.date)) return -1
                else return 0
            })
        },
        expensesCategories(state){
            let categories = []
            for(let expense of state.expenses){
                if(!categories.includes(expense.category)) categories.push(expense.category)
            }
            return categories
        },
        expensesByCategory:(state)=>(category)=>{
            return state.expenses.filter(expense => expense.category === category)
        },
        totalExpensesByCategory : (state, getters)=>(category)=>{
            unusedVariableUUUUUHHHH(state)
            let sum = 0
            if(category){
                for(let expense of getters.expensesByCategory(category)) sum += expense.sum
            }else{
                for(let expense of getters.expenses) sum += expense.sum
            }
            return sum
        },
        expensesTop:(state,getters)=>(category)=>{
            let sorted = []
            if(category){
                sorted = getters.expensesByCategory(category).sort((a,b)=>{
                    if(a.sum < b.sum) return 1
                    else if (a.sum > b.sum) return -1
                    return 0
                })
            }else{
                sorted = state.expenses.sort((a,b)=>{
                    if(a.sum < b.sum) return 1
                    else if (a.sum > b.sum) return -1
                    return 0
                })
            }
            return sorted[0]
        },
        incomes(state){
            return state.incomes.sort((a,b)=>{
                if(Date.parse(a.date) < Date.parse(b.date)) return 1
                else if(Date.parse(a.date) > Date.parse(b.date)) return -1
                else return 0
            })
        },
        incomesCategories(state){
            let categories = []
            for(let income of state.incomes){
                if(!categories.includes(income.category)) categories.push(income.category)
            }
            return categories
        },
        incomesByCategory:(state)=> (category)=>{
            return state.incomes.filter(income => income.category === category)
        },
        totalIncomesByCategory : (state, getters)=>(category)=>{
            unusedVariableUUUUUHHHH(state)
            let sum = 0
            if(category){
                for(let income of getters.incomesByCategory(category)) sum += income.sum
            }else{
                for(let income of getters.incomes) sum += income.sum
            }
            return sum
        },
        incomesTop:(state,getters)=>(category)=>{
            let sorted = []
            if(category){
                sorted = getters.incomesByCategory(category).sort((a,b)=>{
                    if(a.sum < b.sum) return 1
                    else if (a.sum > b.sum) return -1
                    return 0
                })
            }else{
                sorted = state.incomes.sort((a,b)=>{
                    if(a.sum < b.sum) return 1
                    else if (a.sum > b.sum) return -1
                    return 0
                })
            }
            return sorted[0]
        },
        budget:(state, getters)=>(type)=>{
            if(type === 'exp') return getters.expenses
            else if(type === 'inc') return getters.incomes
            else{
                unusedVariableUUUUUHHHH(state)
                return [getters.expenses,getters.incomes]
            }
        },
        budgetCategories:(state,getters)=>(type)=>{
            if(type === 'exp') return getters.expensesCategories
            else if (type === 'inc') return getters.incomesCategories
            else{
                unusedVariableUUUUUHHHH(state)
                return [getters.expensesCategories, getters.incomesCategories]
            }
        },
        budgetTotalByCategory:(state,getters)=>(type, category)=>{
            if(type ==='exp') return getters.totalExpensesByCategory(category)
            else if(type==='inc') return getters.totalIncomesByCategory(category)
            else{
                unusedVariableUUUUUHHHH(state)
                return [getters.totalExpensesByCategory(category),getters.totalIncomesByCategory(category)]
            }
        },
        budgetTop:(state,getters)=>(type,category)=>{
            if(type==='exp') return getters.expensesTop(category)
            else if(type==='inc') return getters.incomesTop(category)
            else{
                unusedVariableUUUUUHHHH(state)
                return [getters.expensesTop(category),getters.incomesTop(category)] 
            }
        }
    },
    mutations:{
        addExpense(state, expense){
            if(expense.sum > 0 && expense.date.trim() != "" && expense.category.trim() != ''){
                state.expenses.push(expense)
                state.response = 0
            }
            else state.response = 1
        },
        addIncome(state, income){
            if(income.sum > 0 && income.date.trim() != "" && income.category.trim() != ''){
                state.incomes.push(income)
                state.response = 0
            }
            else state.response = 1
        },
        deleteExpense(state, id){
            state.expenses = state.expenses.filter(expense => expense.id !== id)
        },
        deleteIncome(state, id){
            state.incomes = state.incomes.filter(income => income.id !== id)
        },
        setBudget(state, budget){
            state.expenses = budget[0]
            state.incomes = budget[1]
        }
    }
})

export default store

function unusedVariableUUUUUHHHH(variable){
    return variable
}