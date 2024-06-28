<script>
import axios from 'axios';
export default{
    name:"WeatherComp",
    data(){
        return{
            lat:null,
            lon:null,
            appid:"1b6abad437b87b371b984c79b638f9ce",
            city:"London",
            error:false,
            errorMsg:"",
            weather:[]
        }
    },
    created(){
        this.getWeather()
    },
    methods:{
        async defineCityCoords(){
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${this.appid}`).then(data=>{
                if(data.data.length === 0) throw new Error("No city found")
                else{
                    this.lat=data.data[0].lat
                    this.lon=data.data[0].lon
                }
            }).catch(err => {if(err){this.error = true; this.errorMsg = err}})
            console.log(response);
        },
        async getWeather(){
            await this.defineCityCoords()
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&cnt=7&appid=${this.appid}&units=metric`).then(data=>{
                console.log(data.data);
                if(data.data.list.length===0 || data.data.length === 0) throw new Error("Unknown Error")
                else this.weather = data.data.list
            }).catch(err => {if(err){this.error = true; this.errorMsg = err}})
            console.log(response);
        }
    }
}
</script>

<template>
<div class="container">
<input type="text" v-model.lazy="city" @change="getWeather">
<div class="weather" v-if="!error">
    <div class="weatherCard" v-for="(day, index) in weather" v-bind:key="index" :class="index===0 ? 'today' : 'weatherCard'">
        <h3>{{ day.weather[0].main }}</h3>
        <p>Temperature : {{ day.main.temp }}</p>
        <p>Wind : {{ day.wind.speed }}</p>
    </div>
</div>
<div v-else><p>{{ errorMsg }}</p></div>
</div>
</template>

<style scoped>
.weather{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.weatherCard{
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 250px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 10px;
}
.today{
    background-color: lightgreen;
}
p{
    margin: 0;
}
</style>