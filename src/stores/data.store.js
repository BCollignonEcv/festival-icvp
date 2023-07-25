import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', {
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
        ],
        sponsors: {
            premium: [
                {
                    imgPath: "test",
                    name: "Premium sponsor 1",
                    description: "Premium sponsor description",
                    website: "https://www.google.com"
                },
                {
                    imgPath: "test",
                    name: "Premium sponsor 2",
                    description: "Premium sponsor description",
                    website: "https://www.google.com"
                },
                {
                    imgPath: "test",
                    name: "Premium sponsor 3",
                    description: "Premium sponsor description",
                    website: "https://www.google.com"
                }
            ],
            basic: [
                {
                    imgPath: "test",
                    name: "Basic sponsor 1",
                    website: "https://www.google.com"
                },
                {
                    imgPath: "test",
                    name: "Basic sponsor 2",
                    website: "https://www.google.com"
                },
                {
                    imgPath: "test",
                    name: "Basic sponsor 3",
                    website: "https://www.google.com"
                },
                {
                    imgPath: "test",
                    name: "Basic sponsor 4",
                    website: "https://www.google.com"
                },
                {
                    imgPath: "test",
                    name: "Basic sponsor 5",
                    website: "https://www.google.com"
                },
                {
                    imgPath: "test",
                    name: "Basic sponsor 6",
                    website: "https://www.google.com"
                }
            ]
        },
        facts: [
            {
                label: '180 000',
                unit: 'Salariés'
            },
            {
                label: '70 000',
                unit: 'Etudiants'
            },
            {
                label: '50 000',
                unit: 'Habitants'
            },
            {
                label: '500',
                unit: 'Entreprises'
            },
            {
                label: '131',
                unit: 'Ha végétalisés'
            },
        ]
    }),
    getters: {
        getBasicSponsors: (state) => {
            return state.sponsors.basic;
        },
        getPremiumSponsors: (state) => {
            return state.sponsors.premium;
        },
        getFacts: (state) => {
            return state.facts;
        },
    },
    actions: {}
})