import { defineStore } from 'pinia'

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        overlay: null,
        modal: null,
        error: null
    }),
    getters: {

    },
    actions: {

    }
})