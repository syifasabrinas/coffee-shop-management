import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {

    state: () => ({

        menu: []

    }),

    actions: {

        setMenu(data) {

            this.menu = data

        }

    }

})