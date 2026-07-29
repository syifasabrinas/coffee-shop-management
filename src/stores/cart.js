import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {

    state: () => ({

        cart: []

    }),

    getters: {

        totalItem(state) {

            return state.cart.length

        }

    },

    actions: {

        addToCart(item) {

            this.cart.push(item)

        },

        removeFromCart(index) {

            this.cart.splice(index, 1)

        },

        clearCart() {

            this.cart = []

        }

    }

})