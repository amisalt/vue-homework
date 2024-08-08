import {createRouter, createWebHistory} from 'vue-router'
import MainComp from "@/components/MainComp.vue"
import ContactComp from "@/components/ContactsComp.vue"
import GalleryComp from "@/components/GalleryComp.vue"

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/", component:MainComp},
        {path:"/gallery/:image", props:true, component:GalleryComp},
        {path:"/contacts", component:ContactComp}
    ]
})

export default router