<script>
import { computed, reactive, ref} from 'vue';
export default{
    setup(props, {emit}){
        props
        const colors = reactive([{color:"#020024", percentage:0},{color:"#090979", percentage:33},{color:"#079e2f",percentage:66},{color:"#00d4ff",percentage:100}])
        const type = ref("linear")
        const angle = ref(0)
        const gradient = computed(()=>{
            let string = `background:${type.value}-gradient(`
            if(type.value === 'linear') string+=`${angle.value}deg`
            else if(type.value === 'radial') string+=`circle`
            for(let color of colors) string+=`, ${color.color} ${color.percentage}%`;
            string += ");"
            return string
        })
        const linearGradForBar = computed(()=>{
            let string = `background:linear-gradient(90deg`
            for(let color of colors) string+=`, ${color.color} ${color.percentage}%`;
            string += ");"
            return string
        })
        const showResults = ref(false)
        function addColor(){
            colors.push({color:"#ffffff", percentage:0})
            sortList()
            console.log(colors, linearGradForBar.value, gradient.value);
        }
        function deleteColor(index){
            colors.splice(index,1)
        }
        function applyGradient(){
            emit('apply', gradient.value)
        }
        function toggleResults(){
            showResults.value = !showResults.value
        }
        function sortList(){
            colors.sort((a,b)=>{
                if(a.percentage > b.percentage) return 1
                else if(a.percentage < b.percentage) return -1
                else return 0
            })
        }
        return {colors, showResults, gradient, type, angle, linearGradForBar, addColor, deleteColor, applyGradient, toggleResults, sortList}
    }
}
</script>

<template>
<div class="cont">
<div class="percentage" :style="linearGradForBar">
    <div class="bar" v-for="(color, index) of colors" :key="index" :style="`background-color:${color.color};left:calc(${color.percentage}% - 7px);`"></div>
</div>
<div class="options">
    <section>
        <input type="radio" name="type" id="linear" value="linear" v-model="type">
        <label for="linear">Linear</label>
        <input type="radio" name="type" id="radial" value="radial" v-model="type">
        <label for="radial">Radial</label>
    </section>
    <section v-if="type === 'linear'">
        <input type="range" v-model.number="angle" min="0" max="360" id="angle">
        <label for="angle">Gradient Angle ({{ angle }}°)</label>
    </section>
</div>
<div class="colors">
    <section>
        <button @click="addColor">Add Color</button>
        <button @click="applyGradient">Apply Gradient</button>
        <button @click="toggleResults">Show/Hide CSS Code</button>
    </section>
    <section v-if="showResults">
        {{ gradient }}
    </section>
    <div class="color" v-for="(color, index) in colors" :key="index">
        <section>
            <input type="text" v-model="color.color">
            <input type="color" v-model="color.color">
        </section>
        <section>
            <input type="range" min="0" max="100" v-model.number="color.percentage" :id="`pos${index}`" @change="sortList">
            <label :for="`pos${index}`">Color Position ({{ color.percentage }}%)</label>
        </section>
        <button @click="deleteColor(index)">Delete Color</button>
    </div>
</div>
</div>
</template>

<style scoped>
.cont{
    width: 50%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 0 5px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}
.percentage{
    width: 100%;
    height: 25px;
    border-radius: 10px;
    position: relative;
}
.bar{
    width: 10px;
    height: 30px;
    border: 2px solid white;
    position: absolute;
    border-radius: 5px;
    top: -5px;
}
.options{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
section{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.colors, .color{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}
.colors{
    overflow-y: scroll;
    overflow-x: hidden;
    height: 87%;
}
.color{
    width: 95%;
    gap: 0px;
    box-shadow: 0 0 2px;
    padding: 5px;
    border-radius: 10px;
}
</style>