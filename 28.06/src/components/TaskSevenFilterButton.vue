<script>
export default{
    name:"TaskSevenFilterButton",
    data(){
        return{
            nameFilter:"",
            ageFilter:0,
            sortOption:"",
            inverted:false
        }
    },
    methods:{
        filterBy(){
            this.$emit("filterBy", {"nameFilter":this.nameFilter, "ageFilter":this.ageFilter})
        },
        sortBy(){
            this.$emit("sortBy", {"sortOption":this.sortOption, "inverted":this.inverted})
        }
    }
}
</script>

<template>
    <p>Filter List</p>
    <input type="text" v-model="nameFilter">
    <input type="number" v-model.number="ageFilter">
    <button @click="filterBy">Apply Filters</button>
    <p>Sort List</p>
    <input type="radio" value="name" v-model="sortOption" id="name">
    <label for="name">name</label>
    <input type="radio" value="age" v-model="sortOption" id="age">
    <label for="age">age</label>
    <input type="checkbox" v-model="inverted" id="inverted">
    <label for="inverted">inverted</label>
    <button @click="sortBy">Apply Sorting</button>
</template>