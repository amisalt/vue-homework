import {ref, reactive, computed} from "vue"

export function useToDoList(){
    let tasks = reactive([])
    const newTask = ref("")
    const newTaskCategory = ref('Groceries')
    const remainingTodos = computed(()=>tasks.filter(task => !task.done).length)
    function sortList(){
        tasks = tasks.sort((a,b)=>{
            if(a.done && !b.done) return 1
            else if (!a.done && b.done) return -1
            return 0
        })
    }
    function addNewTask(){
        if(newTask.value.trim()) tasks.push({id:tasks.length, title:newTask.value, done:false, category:newTaskCategory.value})
        newTask.value = ""
        sortList()
    }
    function deleteTask(id){
        let index = tasks.findIndex(el => el.id === id)
        tasks.splice(index,1)
        sortList()
    }
    function toggleDoneState(id){
        let index = tasks.findIndex(el => el.id === id)
        tasks[index].done = !tasks[index].done 
        sortList()
    }
    return {remainingTodos, addNewTask, deleteTask, toggleDoneState, newTask, tasks, newTaskCategory}
}