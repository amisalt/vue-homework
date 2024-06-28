<script>
import axios from 'axios';

export default{
    name:"CoinDex",
    data(){
        return{
            price:null,
            loading:true,
            currency:"USD",
            currencies:['USD',"EUR","GBP"]
        }
    },
    created(){
        this.getBitcoinPrice()
    },
    methods:{
        async getBitcoinPrice(){
            try{
                const response = await axios.get(`https://api.coindesk.com/v1/bpi/currentprice/${this.currency}.json`).then(data =>{this.price = data.data.bpi[this.currency].rate}).catch(err => {this.price="error";console.error(err);})
                console.log(response);
            }catch(error){
                console.error(error);
            }finally{
                this.loading = false
            }
        }
    }
}
</script>

<template>
<div class="container">
<select v-model="currency" @change="getBitcoinPrice">
    <option v-for="(currency,index) in currencies" v-bind:key="index" :value="currency">{{ currency }}</option>
</select>
<p v-if="loading">Please wait</p>
<p v-else>{{price}} {{ currency }}</p>
</div>

</template>

<style scoped>
.pending{
    background-color: lightpink;
}
.fulfilled{
    background-color: lightgreen;
}
</style>