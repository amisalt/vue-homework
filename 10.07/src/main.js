// import Vue from 'vue'
// import App from './App.vue'
// import Vuex from "vuex"

// Vue.use(Vuex)

// const store = Vuex.Store({
//     state:{
//         itemList:[{'id': 0, 'name': 'Item 1', 'price': 63.39, 'type': 'Sweatshirt', 'color': ['Green', 'Blue', 'Red', 'Pink'], 'size': ['all-fit', 'XL', 'XXS'], 'rating': 2.55}, {'id': 1, 'name': 'Item 2', 'price': 79.18, 'type': 'Pants', 'color': ['Purple', 'Black', 'Yellow', 'Blue'], 'size': ['all-fit', 'XXS', 'S'], 'rating': 5}, {'id': 2, 'name': 'Item 3', 'price': 89.97, 'type': 'Dress', 'color': ['Green', 'Pink', 'Purple', 'White'], 'size': ['L', 'XXL', 'XL', 'all-fit'], 'rating': 3.95}, {'id': 3, 'name': 'Item 4', 'price': 67.41, 'type': 'Pants', 'color': ['Orange', 'Gray', 'Red'], 'size': ['XXL', 'M', 'L'], 'rating': 4.36}, {'id': 4, 'name': 'Item 5', 'price': 70.68, 'type': 'Sweatshirt', 'color': ['White', 'Purple', 'Black', 'Green'], 'size': ['XXXL', 'all-fit', 'XS', 'XXS'], 'rating': 5}, {'id': 5, 'name': 'Item 6', 'price': 32.18, 'type': 'Shirt', 'color': ['Purple', 'Red', 'White', 'Pink'], 'size': ['all-fit', 'L', 'XXXL'], 'rating': 5}, {'id': 6, 'name': 'Item 7', 'price': 49.92, 'type': 'Jacket', 'color': ['White', 'Orange', 'Black'], 'size': ['XXS', 'XXXL', 'M', 'XXL'], 'rating': 5}, {'id': 7, 'name': 'Item 8', 'price': 89.62, 'type': 'Sweatshirt', 'color': ['Purple', 'White', 'Green', 'Yellow'], 'size': ['XXXL', 'M', 'XXS'], 'rating': 3.45}, {'id': 8, 'name': 'Item 9', 'price': 51.0, 'type': 'Sweatshirt', 'color': ['Green', 'Orange', 'Blue', 'Yellow'], 'size': ['XXL', 'all-fit', 'XXXL'], 'rating': 1.3}, {'id': 9, 'name': 'Item 10', 'price': 50.08, 'type': 'Dress', 'color': ['Orange', 'Pink', 'Yellow', 'White'], 'size': ['XS', 'M', 'XXXL', 'S'], 'rating': 4.28}, {'id': 10, 'name': 'Item 11', 'price': 34.03, 'type': 'Pants', 'color': ['Purple', 'Green', 'Black', 'Yellow'], 'size': ['XXXL', 'all-fit', 'L', 'XXL'], 'rating': 1.59}, {'id': 11, 'name': 'Item 12', 'price': 47.81, 'type': 'Sweatshirt', 'color': ['Orange', 'Pink', 'Blue', 'Yellow'], 'size': ['all-fit', 'S', 'XL', 'XXXL'], 'rating': 4.89}, {'id': 12, 'name': 'Item 13', 'price': 33.9, 'type': 'Jacket', 'color': ['White', 'Gray', 'Blue', 'Green'], 'size': ['M', 'XXXL', 'S'], 'rating': 4.11}, {'id': 13, 'name': 'Item 14', 'price': 30.04, 'type': 'Sweatshirt', 'color': ['Pink', 'Red', 'Gray', 'Green'], 'size': ['XXL', 'all-fit', 'S', 'L'], 'rating': 4.7}, {'id': 14, 'name': 'Item 15', 'price': 61.3, 'type': 'Dress', 'color': ['Gray', 'Black', 'Blue'], 'size': ['XL', 'XXL', 'all-fit', 'M'], 'rating': 4.49}, {'id': 15, 'name': 'Item 16', 'price': 51.6, 'type': 'Pants', 'color': ['Black', 'Blue', 'Orange'], 'size': ['all-fit', 'S'], 'rating': 1.01}, {'id': 16, 'name': 'Item 17', 'price': 65.9, 'type': 'Shirt', 'color': ['Blue', 'Orange', 'Yellow'], 'size': ['S', 'M'], 'rating': 2.15}, {'id': 17, 'name': 'Item 18', 'price': 32.87, 'type': 'Jacket', 'color': ['Black', 'White', 'Red'], 'size': ['XXS', 'XL', 'all-fit', 'L'], 'rating': 4.8}, {'id': 18, 'name': 'Item 19', 'price': 70.62, 'type': 'Jacket', 'color': ['Blue', 'Orange', 'Purple', 'White'], 'size': ['XL', 'XS', 'XXXL', 'M'], 'rating': 5}, {'id': 19, 'name': 'Item 20', 'price': 75.78, 'type': 'Pants', 'color': ['Purple', 'Gray', 'Red', 'Pink'], 'size': ['XL', 'XXL', 'all-fit'], 'rating': 3.28}, {'id': 20, 'name': 'Item 21', 'price': 72.94, 'type': 'Dress', 'color': ['Red', 'Purple', 'Yellow'], 'size': ['M', 'L', 'XXL'], 'rating': 3.76}, {'id': 21, 'name': 'Item 22', 'price': 99.4, 'type': 'Sweatshirt', 'color': ['Pink', 'Yellow', 'Purple', 'Gray'], 'size': ['XXXL', 'XL', 'XS'], 'rating': 3.39}, {'id': 22, 'name': 'Item 23', 'price': 68.61, 'type': 'Shirt', 'color': ['Blue', 'Purple', 'White', 'Green'], 'size': ['M', 'S', 'L', 'XXXL'], 'rating': 2.91}, {'id': 23, 'name': 'Item 24', 'price': 49.3, 'type': 'Sweatshirt', 'color': ['Blue', 'White', 'Pink'], 'size': ['S', 'XS', 'XL'], 'rating': 2.13}, {'id': 24, 'name': 'Item 25', 'price': 89.91, 'type': 'Sweatshirt', 'color': ['Orange', 'Pink', 'Purple'], 'size': ['XXL', 'XXXL', 'XS', 'M'], 'rating': 3.84}, {'id': 25, 'name': 'Item 26', 'price': 56.76, 'type': 'Pants', 'color': ['Pink', 'Orange', 'Yellow'], 'size': ['M', 'XS', 'all-fit'], 'rating': 5}, {'id': 26, 'name': 'Item 27', 'price': 74.08, 'type': 'Shirt', 'color': ['Yellow', 'Purple', 'Pink', 'Black'], 'size': ['S', 'XXXL', 'L'], 'rating': 1.76}, {'id': 27, 'name': 'Item 28', 'price': 72.41, 'type': 'Shirt', 'color': ['Black', 'Green', 'White', 'Purple'], 'size': ['L', 'XXXL', 'XS', 'M'], 'rating': 2.71}, {'id': 28, 'name': 'Item 29', 'price': 95.79, 'type': 'Jacket', 'color': ['Gray', 'Blue', 'Orange', 'Red'], 'size': ['all-fit', 'M', 'XL', 'S'], 'rating': 4.82}, {'id': 29, 'name': 'Item 30', 'price': 93.29, 'type': 'Dress', 'color': ['White', 'Purple', 'Yellow', 'Black'], 'size': ['S', 'XS', 'L'], 'rating': 3.93}, {'id': 30, 'name': 'Item 31', 'price': 27.26, 'type': 'Sweatshirt', 'color': ['Blue', 'Yellow', 'Orange', 'Pink'], 'size': ['S', 'all-fit', 'XS'], 'rating': 4.02}, {'id': 31, 'name': 'Item 32', 'price': 37.8, 'type': 'Dress', 'color': ['Gray', 'Yellow', 'Pink', 'Red'], 'size': ['L', 'M', 'all-fit', 'XXXL'], 'rating': 1.37}, {'id': 32, 'name': 'Item 33', 'price': 93.95, 'type': 'Jacket', 'color': ['White', 'Black', 'Orange', 'Purple'], 'size': ['XS', 'XXL', 'S', 'all-fit'], 'rating': 3.04}, {'id': 33, 'name': 'Item 34', 'price': 76.13, 'type': 'Jacket', 'color': ['Black', 'Purple', 'Red'], 'size': ['S', 'XL', 'M', 'L'], 'rating': 4.05}, {'id': 34, 'name': 'Item 35', 'price': 26.01, 'type': 'Dress', 'color': ['Black', 'Orange', 'Red', 'Blue'], 'size': ['XL', 'M', 'XXL'], 'rating': 1.24}, {'id': 35, 'name': 'Item 36', 'price': 82.76, 'type': 'Pants', 'color': ['Purple', 'Blue', 'Black'], 'size': ['XXL', 'M', 'XL', 'L'], 'rating': 4.07}, {'id': 36, 'name': 'Item 37', 'price': 47.35, 'type': 'Pants', 'color': ['White', 'Red'], 'size': ['XXS', 'XL', 'all-fit', 'L'], 'rating': 1.34}, {'id': 37, 'name': 'Item 38', 'price': 26.77, 'type': 'Jacket', 'color': ['Yellow', 'Pink', 'Blue', 'Green'], 'size': ['all-fit', 'XS', 'S', 'XXL'], 'rating': 2.01}, {'id': 38, 'name': 'Item 39', 'price': 70.86, 'type': 'Dress', 'color': ['Red', 'Yellow', 'Purple'], 'size': ['all-fit', 'L', 'S'], 'rating': 4.24}, {'id': 39, 'name': 'Item 40', 'price': 84.45, 'type': 'Sweatshirt', 'color': ['Purple', 'Blue', 'Yellow'], 'size': ['XXS', 'XXL', 'M'], 'rating': 4.5}, {'id': 40, 'name': 'Item 41', 'price': 60.79, 'type': 'Pants', 'color': ['Blue', 'Black', 'Red', 'Purple'], 'size': ['L', 'S', 'XXS'], 'rating': 1.95}, {'id': 41, 'name': 'Item 42', 'price': 40.12, 'type': 'Dress', 'color': ['White', 'Orange', 'Green'], 'size': ['L', 'XL', 'XXS'], 'rating': 1.46}, {'id': 42, 'name': 'Item 43', 'price': 88.01, 'type': 'Pants', 'color': ['Black', 'Gray', 'Red'], 'size': ['M', 'all-fit', 'XXL', 'XL'], 'rating': 1.75}, {'id': 43, 'name': 'Item 44', 'price': 24.49, 'type': 'Dress', 'color': ['Blue', 'White', 'Purple', 'Pink'], 'size': ['M', 'XS', 'XXS', 'XL'], 'rating': 5}, {'id': 44, 'name': 'Item 45', 'price': 68.41, 'type': 'Sweatshirt', 'color': ['Red', 'Green', 'Yellow'], 'size': ['XXXL', 'XS', 'XL'], 'rating': 4.3}, {'id': 45, 'name': 'Item 46', 'price': 33.05, 'type': 'Pants', 'color': ['Blue', 'Black', 'Purple'], 'size': ['all-fit', 'XL', 'XS', 'XXS'], 'rating': 4.41}, {'id': 46, 'name': 'Item 47', 'price': 66.99, 'type': 'Dress', 'color': ['Green', 'Red', 'Orange'], 'size': ['S', 'L', 'all-fit'], 'rating': 3.55}, {'id': 47, 'name': 'Item 48', 'price': 76.94, 'type': 'Jacket', 'color': ['White', 'Red'], 'size': ['XXS', 'L', 'XXXL', 'all-fit'], 'rating': 4.7}, {'id': 48, 'name': 'Item 49', 'price': 66.67, 'type': 'Dress', 'color': ['Orange', 'Green', 'Purple', 'Blue'], 'size': ['XL', 'XXL', 'XXXL', 'XXS'], 'rating': 1.55}, {'id': 49, 'name': 'Item 50', 'price': 73.85, 'type': 'Dress', 'color': ['Green', 'Black', 'White'], 'size': ['L', 'XXS', 'M', 'XL'], 'rating': 4.41}]
//     },
//     mutations:{
//         deleteItem(state, id){
//             state.itemList = state.itemList.filter(item => item.id !== id)
//         }
//     }
// })

// new Vue({
//     el: '#app',
//     store
// })

import { createApp } from 'vue'
import store from "@/store/index"
import App from './App.vue'

createApp(App).use(store).mount('#app')
