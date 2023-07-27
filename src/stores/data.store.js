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
                    imgPath: "logo-sponsor.png",
                    name: "Place à prendre",
                    description: "Envie de faire parti du club des 3 ? Nous sommes à la recherche de partenaire privilégiés",
                    // website: "https://www.google.com"
                }
            ],
            basic: [
                {
                    imgPath: "logo-sponsor.png",
                    name: "Pourquoi pas vous ?",
                    // website: "https://www.google.com"
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
        ],
        members: [
            {
                imgPath: "laurence-baulieu.png",
                name: "Laurence Baulieu",
                description: [
                    "Directrice de la société de production POINT TV depuis 2007",
                    "DirCom",
                    "PLASTIC OMNIUM"
                ],
                linkedin: "https://fr.linkedin.com/in/laurence-beaulieu"
            },
            {
                imgPath: "roger-tessa-gambasi.png",
                name: "Roger TESSA-GAMBASI",
                description: [
                    "Champion du monde de cerf- volant",
                    "Dirigeant R-SKY depuis 1996",
                    "Organisateur des 7 des principaux festivals de cerfs-volants en France"
                ],
                linkedin: "https://fr.linkedin.com/in/laurence-beaulieu"
            },
            {
                imgPath: "sophie-chevallon.png",
                name: "Sophie CHEVALLON",
                description: [
                    "Consultante en stratégie de Com et RP",
                    "DirCom Saint-Gobain",
                    "Conseillère Com cabinets ministériels"
                ],
                linkedin: "https://fr.linkedin.com/in/laurence-beaulieu"
            },
            {
                imgPath: "nicolas-tharreau.png",
                name: "Nicolas THARREAU",
                description: [
                    "Directeur Général XDS",
                    "Consultant Drouot",
                    "Créateur Alfred"
                ],
                linkedin: "https://fr.linkedin.com/in/laurence-beaulieu"
            },
            {
                imgPath: "tiphaine-piriou.png",
                name: "Tiphaine PIRIOU",
                description: [
                    "Directrice de l’agence TIPI&CO",
                    "SOPEXA organisation des Pavillons France secteur agroalimentaire"
                ],
                linkedin: "https://fr.linkedin.com/in/laurence-beaulieu"
            },
            {
                imgPath: "marie-michele-vassiliou.jpg",
                name: "Marie-Michèle VASSILIOU",
                description: [
                    "Experte Stratégie & Innovation",
                    "Conférencière"
                ],
                linkedin: "https://fr.linkedin.com/in/laurence-beaulieu"
            },
        ],
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
        getMembers: (state) => {
            return state.members;
        },
    },
    actions: {}
})