import { defineStore } from 'pinia'

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        programme: [
            {
                title: "a",
                content: [
                    {
                        subtitle: "bb",
                        text: "ccc"
                    }
                ],
                content: [
                    {
                        subtitle: "bb",
                        text: "ccc"
                    }
                ]
            },
            {
                title: "a",
                content: [
                    {
                        subtitle: "bb",
                        text: "ccc"
                    }
                ],
                content: [
                    {
                        subtitle: "bb",
                        text: "ccc"
                    }
                ]
            }
        ]
    }),
    getters: {},
    actions: {}
})