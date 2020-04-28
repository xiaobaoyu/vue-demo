import shop from '../../api/shop'
export default {
    namespaced: true,
    state: {
        all: []
    },
    getters: {},
    mutations: {
        setProducts(state, products) {
            state.all = products
        },
        decrementProductInventory(state, { id }) {
            const product = state.all.find(product => product.id == id)
            product.inventory--
        }

    },
    actions: {
        getAllProducts({ commit }) {
            shop.getProducts(products => {
                commit('setProducts', products)
                // console.log(products)
            })
        }
    }

}