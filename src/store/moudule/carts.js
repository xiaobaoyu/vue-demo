import shop from '../../api/shop'
export default {
    namespaced: true,
    state: {
        items: [],
        checkoutStatus: null
    },
    getters: {
        cartProducts(state, getters, rootState) {
            return state.items.map(({ id, quantity }) => {
                const product = rootState.products.all.find(product => product.id == id)
                return {
                    title: product.title,
                    price: product.price,
                    quantity
                }
            })

        },
        cartTotalPrice(state, getters) {
            return getters.cartProducts.reduce((total, product) => {
                return total + product.price * product.quantity
            }, 0)
        }
    },
    mutations: {
        pushProductToCart(state, product) {
            state.items.push(
                product
            )
        },
        incrementItemQuantity(state, { id }) {
            const cartItem = state.items.find(item => item.id == id)
            cartItem.quantity++
        },
        setCartItems(state, { items }) {
            state.items = items
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        }


    },
    actions: {
        checkout({ state, commit }, products) {
            const savedCartItems = [...state.items]
            commit('setCheckoutStatus', null)
            commit('setCartItems', { items: [] })
            shop.buyProducts(
                products,
                () => commit('setCheckoutStatus', 'successful'), 
                () => commit('setCheckoutStatus', 'failed'),               
            )
            commit('setCartItems', { items: savedCartItems })
        },
        addProductToCart({ state, commit }, product) {
            commit('setCheckoutStatus', null)
            if (product.inventory > 0) {
                const cartItem = state.items.find(v => v.id == product.id)
                // console.log('items', state.items, 'cartItem', cartItem)
                if (!cartItem) {
                    commit('pushProductToCart', { ...product, quantity: 1 })
                    console.log('pushProductToCart', state.items)
                } else {
                    commit('incrementItemQuantity', cartItem)
                    console.log('incrementItemQuantity', state.items)
                }
            }
            commit('products/decrementProductInventory', product, { root: true })
            // console.log('items', state.items)
        }

    }

}