<script>
import FilterButton from "./TaskSevenFilterButton.vue"
export default{
    name:"TaskSeven",
    components:{FilterButton},
    data(){
        return{
            people:[
                {name:"Bmira", age:26},
                {name:"Amira", age:66},
                {name:"Fmira", age:6},
                {name:"Qmira", age:16},
                {name:"Rmira", age:96}
            ],
            peopleShow:[]
        }
    },
    mounted(){
        this.peopleShow = this.people
    },
    methods:{
        filterBy(filters){
            this.peopleShow = this.people.filter(person => person.name.includes(filters.nameFilter) && person.age >= filters.ageFilter)
        },
        sortBy(sorting){
            console.log(sorting);
            this.peopleShow = this.people.sort((a,b) => {
                if(sorting.sortOption === "name"){
                    if(a.name > b.name){
                        if(sorting.inverted) return -1
                        return 1
                    }
                    if(a.name < b.name){
                        if(sorting.inverted) return 1
                        return -1
                    }
                    return 0
                }
                if(sorting.sortOption === "age"){
                    if(a.age > b.age){
                        if(sorting.inverted) return -1
                        return 1
                    }
                    if(a.age < b.age){
                        if(sorting.inverted) return 1
                        return -1
                    }
                    return 0
                }
            })
        }
    }
}
</script>

<template>
    <div>
        <h1>Task Seven</h1>
        <FilterButton @filterBy="filterBy" @sortBy="sortBy"/>
        <ul>
            <li v-for="(person, index) in peopleShow" v-bind:key="index">{{ person.name }} - {{ person.age }}</li>
        </ul>
    </div>
</template>