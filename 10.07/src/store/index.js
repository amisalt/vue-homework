import { createStore } from "vuex";

const store = createStore({
    state:{
        types:["Shirt", "Pants", "Dress", "Jacket", "Sweatshirt"],
        colors:["Red", "Blue", "Green", "Yellow", "Black", "White", "Gray", "Purple", "Orange", "Pink"],
        sizes:["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXS", "all-fit"],
        itemList:[
            {
                'id': 0, 
                'name': 'Item 1', 
                'price': 63.39, 
                'type': 'Sweatshirt', 
                'color': ['Green', 'Blue', 'Red', 'Pink'], 
                'size': ['all-fit', 'XL', 'XXS'], 
                'rating': 2.55
            }, 

            {'id': 1, 'name': 'Item 2', 'price': 79.18, 'type': 'Pants', 'color': ['Purple', 'Black', 'Yellow', 'Blue'], 'size': ['all-fit', 'XXS', 'S'], 'rating': 5}, {'id': 2, 'name': 'Item 3', 'price': 89.97, 'type': 'Dress', 'color': ['Green', 'Pink', 'Purple', 'White'], 'size': ['L', 'XXL', 'XL', 'all-fit'], 'rating': 3.95}, {'id': 3, 'name': 'Item 4', 'price': 67.41, 'type': 'Pants', 'color': ['Orange', 'Gray', 'Red'], 'size': ['XXL', 'M', 'L'], 'rating': 4.36}, {'id': 4, 'name': 'Item 5', 'price': 70.68, 'type': 'Sweatshirt', 'color': ['White', 'Purple', 'Black', 'Green'], 'size': ['XXXL', 'all-fit', 'XS', 'XXS'], 'rating': 5}, {'id': 5, 'name': 'Item 6', 'price': 32.18, 'type': 'Shirt', 'color': ['Purple', 'Red', 'White', 'Pink'], 'size': ['all-fit', 'L', 'XXXL'], 'rating': 5}, 
            {'id': 6, 'name': 'Item 7', 'price': 49.92, 'type': 'Jacket', 'color': ['White', 'Orange', 'Black'], 'size': ['XXS', 'XXXL', 'M', 'XXL'], 'rating': 5}, {'id': 7, 'name': 'Item 8', 'price': 89.62, 'type': 'Sweatshirt', 'color': ['Purple', 'White', 'Green', 'Yellow'], 'size': ['XXXL', 'M', 'XXS'], 'rating': 3.45}, {'id': 8, 'name': 'Item 9', 'price': 51.0, 'type': 'Sweatshirt', 'color': ['Green', 'Orange', 'Blue', 'Yellow'], 'size': ['XXL', 'all-fit', 'XXXL'], 'rating': 1.3}, {'id': 9, 'name': 'Item 10', 'price': 50.08, 'type': 'Dress', 'color': ['Orange', 'Pink', 'Yellow', 'White'], 'size': ['XS', 'M', 'XXXL', 'S'], 'rating': 4.28}, {'id': 10, 'name': 'Item 11', 'price': 34.03, 'type': 'Pants', 'color': ['Purple', 'Green', 'Black', 'Yellow'], 'size': ['XXXL', 'all-fit', 'L', 'XXL'], 'rating': 1.59}, {'id': 11, 'name': 'Item 12', 'price': 47.81, 'type': 'Sweatshirt', 'color': ['Orange', 'Pink', 'Blue', 'Yellow'], 'size': ['all-fit', 'S', 'XL', 'XXXL'], 'rating': 4.89}, {'id': 12, 'name': 'Item 13', 'price': 33.9, 'type': 'Jacket', 'color': ['White', 'Gray', 'Blue', 'Green'], 'size': ['M', 'XXXL', 'S'], 'rating': 4.11}, {'id': 13, 'name': 'Item 14', 'price': 30.04, 'type': 'Sweatshirt', 'color': ['Pink', 'Red', 'Gray', 'Green'], 'size': ['XXL', 'all-fit', 'S', 'L'], 'rating': 4.7}, {'id': 14, 'name': 'Item 15', 'price': 61.3, 'type': 'Dress', 'color': ['Gray', 'Black', 'Blue'], 'size': ['XL', 'XXL', 'all-fit', 'M'], 'rating': 4.49}, {'id': 15, 'name': 'Item 16', 'price': 51.6, 'type': 'Pants', 'color': ['Black', 'Blue', 'Orange'], 'size': ['all-fit', 'S'], 'rating': 1.01}, {'id': 16, 'name': 'Item 17', 'price': 65.9, 'type': 'Shirt', 'color': ['Blue', 'Orange', 'Yellow'], 'size': ['S', 'M'], 'rating': 2.15}, {'id': 17, 'name': 'Item 18', 'price': 32.87, 'type': 'Jacket', 'color': ['Black', 'White', 'Red'], 'size': ['XXS', 'XL', 'all-fit', 'L'], 'rating': 4.8}, {'id': 18, 'name': 'Item 19', 'price': 70.62, 'type': 'Jacket', 'color': ['Blue', 'Orange', 'Purple', 'White'], 'size': ['XL', 'XS', 'XXXL', 'M'], 'rating': 5}, {'id': 19, 'name': 'Item 20', 'price': 75.78, 'type': 'Pants', 'color': ['Purple', 'Gray', 'Red', 'Pink'], 'size': ['XL', 'XXL', 'all-fit'], 'rating': 3.28}, {'id': 20, 'name': 'Item 21', 'price': 72.94, 'type': 'Dress', 'color': ['Red', 'Purple', 'Yellow'], 'size': ['M', 'L', 'XXL'], 'rating': 3.76}
        ]
    },
    getters:{
        itemListWhole(state){
            return state.itemList
        },
        types(state){
            return state.types
        },
        colors(state){
            return state.colors
        },
        sizes(state){
            return state.sizes
        },
        itemListSorted: (state)=>(sort, filter)=>{
            let list = state.itemList
            if(sort){
                list.sort((a,b)=>{
                    if(sort.criteria === 'rating'){
                        if(a.rating > b.rating){
                            if(sort.inverted) return 1
                            else return -1
                        }
                        else if(a.rating < b.rating){
                            if(sort.inverted) return -1
                            else return 1
                        }
                        else return 0
                    }
                    else if(sort.criteria === 'price'){
                        if(a.price > b.price){
                            if(sort.inverted) return -1
                            else return 1
                        }
                        else if(a.price < b.price){
                            if(sort.inverted) return 1
                            else return -1
                        }
                        else return 0
                    }
                })
            }
            if(filter){
                list = list.filter(item => {
                    let flag = false
                    if(filter.type.length > 0){
                        if(filter.type.includes(item.type)) flag = true
                        else return false
                    }
                    else flag = true
                    if(filter.color.length > 0){
                        if(item.color.includes(...filter.color)) flag= true
                        else return false
                    }
                    else flag = true
                    if(filter.size.length > 0){
                        if(item.size.includes(...filter.size)) flag=true
                        else return false
                    }
                    else flag = true
                    if(flag) return flag
                })
            }
            return list
        },
        itemListLength(state){
            return state.itemList.length
        },
        itemListSortedLength: (state, getters)=>(sort,filter)=>{
            state
            return getters.itemListSorted(sort,filter).length
        }
    },
    mutations:{
        deleteItem(state, id){
            state.itemList = state.itemList.filter(item => item.id !== id)
            searchNew()
        },
        addItem(state, item){
            state.itemList.push(item)
            searchNew()
        },
        editItem(state, item){
            console.log(item, item.id);
            state.itemList[state.itemList.findIndex(i => i.id === item.id)] = item
            searchNew()
        }
    }
})

export default store

function newType(){
    for(let item of store.state.itemList){
        if(!store.state.types.includes(item.type)) store.state.types.push(item.type)
    }
}
function newColor(){
    for(let item of store.state.itemList){
        for(let color of item.color){
            if(!store.state.colors.includes(color)) store.state.colors.push(color)
        }
    }
}
function newSize(){
    for(let item of store.state.itemList){
        for(let size of item.size){
            if(!store.state.sizes.includes(size)) store.state.sizes.push(size)
        }
    }
}
function searchNew(){
    newType()
    newColor()
    newSize()
}