<script>
import axios from 'axios';
export default{
    name:"FilmComp",
    data(){
        return{
            apikey:"562049ea",
            filmSearch:"",
            page:1,
            movies:[],
            moviesShow:[],
            totalResults:0,
            error:false,
            errorMsg:"",
            genres:["N/A"],
            genreSelected:"N/A",
            inverted:false
        }
    },
    computed:{
        totalPages(){
            if(this.totalResults === 0) return 0
            return Math.ceil(this.totalResults/10)
        }
    },
    methods:{
        async getMovies(newRequest){
            if(newRequest) this.page = 1
            this.movies = []
            let result = []
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${this.apikey}&type=movie&r=json&s=${this.filmSearch}&page=${this.page}`).then(data =>{
                if(data.data.Response === "False") throw new Error("No Film found")
                else{
                    result = data.data.Search
                    this.totalResults = data.data.totalResults
                }
            }).catch(err => {if(err){this.error = true; this.errorMsg = err}})
            for(let movie of result){
                this.movies.push(await this.getMovieInfo(movie.imdbID))
            }
            this.moviesShow = this.movies
            console.log(response);
        },
        prevPage(){
            this.page--
            this.getMovies()
        },
        nextPage(){
            this.page++
            this.getMovies()
        },
        async getMovieInfo(id){
            let movieObj = {}
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${this.apikey}&i=${id}`).then(data => {
                if(data.data.Response === "False") throw new Error("Unexpexted error")
                else{
                    movieObj["title"] = data.data.Title
                    movieObj["year"] = data.data.Year
                    movieObj["genres"] = data.data.Genre.split(", ")
                    for(let genre of movieObj.genres){
                        console.log(`'${genre}'`);
                        if(this.genres.includes(genre)) continue
                        else this.genres.push(genre)
                    }
                    if(data.data.Ratings.length === 0) movieObj["rating"] = 0.0
                    else{
                        if(data.data.Ratings[0].Source === "Internet Movie Database") movieObj["rating"] = Number(data.data.Ratings[0].Value.split("/")[0])
                        else movieObj["rating"] = 0.0
                    }
                }
            }).catch(err => {if(err){this.error = true; this.errorMsg = err}})
            console.log(response);
            return movieObj
        },
        filterByGenre(){
            if(this.genreSelected !== "N/A") this.moviesShow = this.movies.filter(movie => movie.genres.includes(this.genreSelected))
            else this.moviesShow = this.movies
        },
        sortByRating(){
            this.moviesShow = this.movies.sort((a,b)=>{
                if(a.rating > b.rating){
                    if(this.inverted) return 1
                    return -1
                }
                if(a.rating < b.rating){
                    if(this.inverted) return -1
                    return 1
                }
                return 0
            })
        }
    }
}
</script>

<template>
<div class="container">
<h1>Film Search</h1>
<input type="text" v-model.lazy="filmSearch" placeholder="Search for film..." @change="getMovies(true)">
<br>
<button @click="prevPage" :disabled="page===1">Prev</button>
<span>{{ page }}</span>
<button @click="nextPage" :disabled="page===totalPages">Next</button>
<br>
<span>filter by genre</span>
<select v-model="genreSelected" @change="filterByGenre">
    <option v-for="(genre,index) in genres" v-bind:key="index" :value="genre">{{ genre }}</option>
</select>
<br>
<span>sort by rating</span>
<input type="checkbox" v-model="inverted" id="inverted">
<label for="inverted">inverted</label>
<button @click="sortByRating">Sort</button>
<div class="film-list" v-if="!error">
    <ul>
        <li v-for="(movie,index) in moviesShow" v-bind:key="index">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.genre }}</p>
            <ul>
                <li v-for="(genre,index) in movie.genres" v-bind:key="index">{{ genre }}</li>
            </ul>
            <p>{{ movie.rating }}</p>
        </li>
    </ul>
</div>
<div v-else>{{ errorMsg }}</div>
</div>
</template>

<style scoped>
.film-list > ul > li{
    display: flex;
    flex-direction: column;
    gap:3px;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    padding: 10px;
    box-sizing: border-box;
}
h3, p{
    margin: 0;
}
</style>