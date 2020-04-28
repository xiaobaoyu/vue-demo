import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
import A from './moudule/A'
import products from './moudule/products'
import carts from './moudule/carts'
const store = new vuex.Store({
    // state: {
    //     name: localStorage.getItem('name')|| 'bwf',
    //     age:1
    // },
    // mutations: {
    //     changeName(state, params='wmy') {
    //         state.name = params
    //         localStorage.setItem('name',params)
    //     }
    // },
    // actions: {
    //     changNameAsync({ commit }) {
    //         setTimeout(() => {
    //             commit('changeName')
    //         }, 1000)
    //     }
    // },
    modules:{
        A,
        products,
        carts


    }
})
export default store