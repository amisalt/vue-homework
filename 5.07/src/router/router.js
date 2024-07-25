import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import MainPage from "@/components/MainPage.vue"
import LibraryPage from "@/components/LibraryPage.vue"
import BookPage from "@/components/BookPage.vue"

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/", component:MainPage},
        {path:"/library", component:LibraryPage, meta:{lib:true}},
        {path:"/book", component:BookPage, meta:{book:true}}
        // {path:"/login", component:LoginPage},
        // {path:"/personal", component:PersonalPage, children:[
        //     {path:"", component:PersonalPageMain},
        //     {path:"rewards", component:PersonalPageRewards}
        // ], meta:{requiresAuth:true}},
    ]
})

router.beforeEach(async (to,from, next)=>{
    if(to.meta.lib){
        if(!localStorage.getItem('books')){
            await getBooks()
            next()
        }else{
            next()
        }
    }else if (to.meta.book){
        await setBook()
        next()
    }else{
        next()
    }
})

export default router

async function setBook(){
    const id = JSON.parse(localStorage.getItem('book'))
    if(id){
        let boook = JSON.parse(localStorage.getItem('books')).filter(bok => bok[0].id === id)
        if(boook.length === 1){
            boook = boook[0][0]
            if(!boook.authors){
                boook = await getBook(id)
            }
            localStorage.setItem('bookDetails', JSON.stringify(boook))
        }
    }
}
async function getBook(id){
    let book = null
    const response = await axios.get(`https://api.bigbookapi.com/${id}?api-key=a4e324199a174aa1a5d7798af7874967`).then(data => {
        book = data.data
    })
    console.log(response);
    return book
}
async function getBooks(){
    if(!localStorage.getItem('books')){
    const response = await axios.get('https://api.bigbookapi.com/search-books?api-key=a4e324199a174aa1a5d7798af7874967&query=just+book&number=50').then(data => {
      localStorage.setItem('books', JSON.stringify(data.data.books))
      localStorage.setItem('book', 16384516)
    })
    console.log(response);
    }
  }
// function isAuth(){
//     return true
// }