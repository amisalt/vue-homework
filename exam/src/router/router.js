import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/components/MainPage.vue";
import IncomePage from "@/components/IncomePage.vue"
import ExpensePage from "@/components/ExpensePage.vue"

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', component:MainPage},
        {path:'/incomes', component:IncomePage},
        {path:'/expenses', component:ExpensePage}
    ]
})

export default router