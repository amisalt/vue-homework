<script>
import { computed, reactive, ref } from "vue";
import ItemCard from "./ItemListCard.vue"
import { useStore } from "vuex"
export default{
    name:"ItemList",
    components:{ItemCard},
    setup(){
        const store = useStore();
        const itemsPerPage = ref(10)
        const page = ref(1)
        const sort = reactive({
            criteria:'rating',
            inverted:false
        })
        const filter = reactive({
            type:[],
            color:[],
            size:[]
        })
        const types = computed(()=>store.getters.types)
        const colors = computed(()=>store.getters.colors)
        const sizes = computed(()=>store.getters.sizes)
        const filterOptions = reactive({
            types:types.value,
            colors:colors.value,
            sizes:sizes.value
        })
        const sliceIndex = computed(()=>{
            let start = itemsPerPage.value*(page.value-1)
            return [start, start+itemsPerPage.value]
        })
        const itemList = computed(()=>store.getters.itemListSorted(sort, filter))
        const itemListShow = computed(()=>itemList.value.slice(...sliceIndex.value))
        const maxPages = computed(()=>Math.ceil(store.getters.itemListSortedLength(sort,filter)/itemsPerPage.value),{
            onTrigger(e){
                e
                page.value = 1
            }
        })
        function nextPage(){
            if(page.value < maxPages.value) page.value++
        }
        function prevPage(){
            if(page.value > 1) page.value--
        }
        return {page, sort, filter, filterOptions, itemListShow, nextPage, prevPage, maxPages}
    }
}
</script>

<template>
<div class="container">
    <section class="filter-section content-section">
        <div class="filter">
            <p>Sort By</p>
            <span><input type="radio" v-model="sort.criteria" value="rating" id="rating"><label for="rating">Rating</label></span>
            <span><input type="radio" v-model="sort.criteria" value="price" id="price"><label for="price">Price</label></span>
            <span>
                <input type="checkbox" v-model="sort.inverted" id="inverted">
                <label for="inverted" v-if="sort.criteria==='rating'">Unpopular first</label>
                <label for="inverted" v-if="sort.criteria==='price'">Expensive first</label>
            </span>
        </div>
        <div class="filter">
            <p>Clothes Piece</p>
            <span v-for="type_ in filterOptions.types" v-bind:key="type_"><input type="checkbox" :value="type_" :index="type_" v-model="filter.type"><label :for="type_">{{ type_ }}</label></span>
        </div>
        <div class="filter">
            <p>Size</p>
            <span v-for="size in filterOptions.sizes" v-bind:key="size"><input type="checkbox" :value="size" :index="size" v-model="filter.size"><label :for="size">{{ size }}</label></span>
        </div>
        <div class="filter">
            <p>Color</p>
            <span v-for="color in filterOptions.colors" v-bind:key="color"><input type="checkbox" :value="color" :index="color" v-model="filter.color"><label :for="color">{{ color }}</label></span>
        </div>
        <!-- <button @click="filterBy">Apply Filters</button> -->
    </section>
    <section class="items-section content-section">
        <div class="pagination-control">
            <button @click = prevPage :disabled="page===1">←</button>
            <p>{{ page }}</p>
            <button @click = nextPage :disabled="page===maxPages">→</button>
        </div>
        <div class="item-list">
            <ItemCard v-for="item in itemListShow" v-bind:key="item.id" :item="item"/>
        </div>
    </section>
</div>
</template>

<style scoped>
.container{
    display: flex;
    padding: 0 20px;
    padding-top: 120px;
    box-sizing: border-box;
    height: 100vh;
    font-size: 18px;
    gap: 5px;
}
.content-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
}
.filter-section{
    max-width: 20%;
    overflow-y: scroll;
}
.filter{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.pagination-control{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height: 50px;
}
.pagination-control p{
    font-size: 25px;
}
.pagination-control button{
    border: 0;
    box-shadow: 0 0 5px;
    height: 100%;
    width: 50px;
    padding: 0 15px;
    padding-bottom: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    box-sizing: border-box;
    background-color: white;
}
.item-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
    height: calc(100vh - 180px);
    overflow-y: scroll;
}
.items-section{
    gap: 10px;
}
</style>