import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {

    state: () => ({

        user: null

    }),

    actions: {

        login(data) {

            this.user = data

        },

        logout() {

            this.user = null

        }

    }

})