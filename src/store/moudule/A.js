export default {
    namespaced:true,
    state: {
        name: localStorage.getItem('name')|| 'bwf',
        age:1
    },
    mutations: {
        changeName(state, params='wmy') {
            state.name = params
            localStorage.setItem('name',params)
        }
    },
    actions: {
        changNameAsync({ commit }) {
            setTimeout(() => {
                commit('changeName')
            }, 1000)
        }
    }
}
