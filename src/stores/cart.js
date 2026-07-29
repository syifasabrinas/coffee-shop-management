import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {

    state: () => ({

        cart: []

    }),

    getters: {

        totalItem(state){

            return state.cart.length;

        },

        totalPrice(state){

            return state.cart.reduce((total,item)=>{

                return total + item.price;

            },0);

        }

    },

    actions:{

        addToCart(item){

            this.cart.push(item);

        },

        removeFromCart(index){

            this.cart.splice(index,1);

        },

        clearCart(){

            this.cart=[];

        }

    }

});