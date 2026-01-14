(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/siteData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteData",
    ()=>siteData,
    "siteDataFr",
    ()=>siteDataFr
]);
const siteData = {
    currency: "EUR",
    location: "Marrakech",
    tours: [
        {
            id: "marrakech-full-day",
            name: "1 Day Visit to Marrakech City",
            duration: "1_day",
            image: "/images/marrakech/marrakech1.jpg",
            gallery: [
                "/images/marrakech/marrakech2.jpg",
                "/images/marrakech/marrakech3.jpg",
                "/images/marrakech/marrakech4.jpg",
                "/images/marrakech/marrakech5.jpg"
            ],
            pricing: [
                {
                    maxPeople: 3,
                    pricePerPerson: 30
                },
                {
                    minPeople: 4,
                    pricePerPerson: 22
                }
            ]
        },
        {
            id: "marrakech-half-day",
            name: "Half Day Visit to Marrakech City",
            duration: "half_day",
            image: "/images/marrakech/marrakech6.jpg",
            gallery: [
                "/images/marrakech/marrakech7.jpg",
                "/images/marrakech/marrakech8.jpg",
                "/images/marrakech/marrakech9.jpg"
            ],
            pricing: [
                {
                    maxPeople: 3,
                    pricePerPerson: 30
                },
                {
                    minPeople: 4,
                    pricePerPerson: 22
                }
            ]
        },
        {
            id: "ourika-day-trip",
            name: "1 Day Trip to Ourika",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    minPeople: 1,
                    maxPeople: 3,
                    totalPrice: 40
                },
                {
                    minPeople: 4,
                    maxPeople: 8,
                    totalPrice: 30
                }
            ]
        },
        {
            id: "essaouira-day-trip",
            name: "1 Day Trip to Essaouira",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 150
                }
            ]
        },
        {
            id: "ouzoud-day-trip",
            name: "1 Day Trip to Ouzoud",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ouzoud/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 150
                }
            ]
        },
        {
            id: "imlil-day-trip",
            name: "1 Day Trip to Imlil",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/hero-marrakech.jpg",
            gallery: [],
            pricing: [
                {
                    minPeople: 1,
                    maxPeople: 3,
                    totalPrice: 40
                },
                {
                    minPeople: 4,
                    maxPeople: 8,
                    totalPrice: 30
                }
            ]
        },
        {
            id: "fes-day-trip",
            name: "1 Day Trip to Fes",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/fes/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 200
                }
            ]
        },
        {
            id: "casablanca-day-trip",
            name: "1 Day Trip to Casablanca",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/casablanca/eka-maitri-viryani-qL3_NSPo9o8-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 180
                }
            ]
        },
        {
            id: "ouarzazate-day-trip",
            name: "1 Day Trip to Ouarzazate",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ouarzazate/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 160
                }
            ]
        },
        {
            id: "rabat-day-trip",
            name: "1 Day Trip to Rabat",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/rabat/framopia-EZqHkkyc0wg-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 170
                }
            ]
        }
    ],
    activities: {
        timeSlots: [
            {
                id: "morning",
                from: "09:00",
                to: "12:30"
            },
            {
                id: "afternoon",
                from: "14:00",
                to: "18:00"
            }
        ],
        experiences: [
            {
                id: "quad-agafay",
                type: "quad",
                location: "Agafay",
                price: 50,
                duration: "2_hours",
                image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/mayar-zidan-LVNcykwlDEg-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "quad-palmeraie",
                type: "quad",
                location: "Palmeraie",
                price: 30,
                duration: "2_hours",
                image: "/images/quad-biking/adrien-delforge-VH2HRylVsiM-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "camel-agafay",
                type: "camel",
                location: "Agafay",
                price: 25,
                duration: "1_hour",
                image: "/images/camel-riding/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                    "/images/camel-riding/sheila-c-KuXu8rx_1-8-unsplash.jpg",
                    "/images/camel-riding/tamar-dCMvzMV1jfc-unsplash.jpg"
                ]
            },
            {
                id: "camel-palmeraie",
                type: "camel",
                location: "Palmeraie",
                price: 15,
                duration: "1_hour",
                image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/camel-riding/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
                ]
            },
            {
                id: "hot-air-balloon",
                type: "balloon",
                location: "Marrakech",
                price: 180,
                duration: "3_hours",
                image: "/images/airballon/manoa-angelo-w7jeZ5NFSvQ-unsplash.jpg",
                gallery: []
            },
            {
                id: "cooking-class",
                type: "cooking",
                location: "Marrakech",
                price: 60,
                duration: "4_hours",
                image: "/images/cooking-class/aziz-acharki-UBEcFUvkrcc-unsplash.jpg",
                gallery: []
            },
            {
                id: "food-tour",
                type: "food",
                location: "Marrakech",
                price: 45,
                duration: "3_hours",
                image: "/images/food-tour/annie-spratt-_V4v7BbG338-unsplash.jpg",
                gallery: []
            }
        ],
        addons: [
            {
                id: "dinner",
                name: "Dinner",
                pricePerPerson: 25,
                availableFrom: "15:00",
                availableTo: "21:00"
            }
        ]
    },
    transport: [
        {
            id: "private",
            name: "Private Transport",
            image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070",
            description: "Comfortable private vehicle with professional driver",
            price: 50
        },
        {
            id: "airport",
            name: "Airport Transport",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
            description: "Reliable airport transfers, meet & greet service",
            price: 30
        },
        {
            id: "on-demand",
            name: "On-demand Transport",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            description: "Flexible transportation for your custom itinerary",
            price: 20
        }
    ],
    packages: [
        {
            id: "agafay-full-experience",
            name: "Quad + Camel + Dinner",
            location: "Agafay",
            included: [
                "quad",
                "camel",
                "dinner"
            ],
            price: 60,
            image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
            gallery: [
                "/images/camel-riding/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg"
            ]
        },
        {
            id: "palmeraie-adventure",
            name: "Camel + Quad",
            location: "Palmeraie",
            included: [
                "camel",
                "quad"
            ],
            price: 50,
            image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
            gallery: [
                "/images/quad-biking/adrien-delforge-VH2HRylVsiM-unsplash.jpg"
            ]
        },
        {
            id: "desert-experience",
            name: "Desert Full Experience",
            location: "Merzouga",
            included: [
                "camel",
                "dinner",
                "overnight"
            ],
            price: 120,
            image: "/images/merzouga/merzouga1.jpg",
            gallery: []
        }
    ],
    reviews: {
        scale: 5,
        items: [
            {
                id: "rev-001",
                targetType: "tour",
                targetId: "marrakech-full-day",
                author: "Sarah M.",
                rating: 5,
                comment: "Perfect introduction to Marrakech. Guide was knowledgeable and friendly.",
                date: "2024-11-12"
            },
            {
                id: "rev-002",
                targetType: "tour",
                targetId: "ourika-day-trip",
                author: "James L.",
                rating: 4,
                comment: "Beautiful landscapes. Transport was comfortable. Worth the day.",
                date: "2024-10-03"
            },
            {
                id: "rev-003",
                targetType: "activity",
                targetId: "quad-agafay",
                author: "Nina K.",
                rating: 5,
                comment: "Amazing quad experience in the desert. Adrenaline and views.",
                date: "2024-09-18"
            },
            {
                id: "rev-004",
                targetType: "package",
                targetId: "agafay-full-experience",
                author: "Omar R.",
                rating: 5,
                comment: "Everything was well organized. Dinner under the stars was unforgettable.",
                date: "2024-08-27"
            },
            {
                id: "rev-005",
                targetType: "activity",
                targetId: "camel-palmeraie",
                author: "Laura D.",
                rating: 4,
                comment: "Relaxing ride and great photos. Short but enjoyable.",
                date: "2024-07-14"
            }
        ]
    }
};
const siteDataFr = {
    currency: "EUR",
    location: "Marrakech",
    tours: [
        {
            id: "marrakech-full-day",
            name: "Visite d'une journée de la ville de Marrakech",
            duration: "1_day",
            image: "/images/marrakech/marrakech1.jpg",
            gallery: [
                "/images/marrakech/marrakech2.jpg",
                "/images/marrakech/marrakech3.jpg",
                "/images/marrakech/marrakech4.jpg",
                "/images/marrakech/marrakech5.jpg"
            ],
            pricing: [
                {
                    maxPeople: 3,
                    pricePerPerson: 30
                },
                {
                    minPeople: 4,
                    pricePerPerson: 22
                }
            ]
        },
        {
            id: "marrakech-half-day",
            name: "Visite d'une demi-journée de la ville de Marrakech",
            duration: "half_day",
            image: "/images/marrakech/marrakech6.jpg",
            gallery: [
                "/images/marrakech/marrakech7.jpg",
                "/images/marrakech/marrakech8.jpg",
                "/images/marrakech/marrakech9.jpg"
            ],
            pricing: [
                {
                    maxPeople: 3,
                    pricePerPerson: 30
                },
                {
                    minPeople: 4,
                    pricePerPerson: 22
                }
            ]
        },
        {
            id: "ourika-day-trip",
            name: "Excursion d'une journée à la vallée de l'Ourika",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ourika/abdelhamid-azoui-BGU0uaY0tJs-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    minPeople: 1,
                    maxPeople: 3,
                    totalPrice: 40
                },
                {
                    minPeople: 4,
                    maxPeople: 8,
                    totalPrice: 30
                }
            ]
        },
        {
            id: "essaouira-day-trip",
            name: "Excursion d'une journée à Essaouira",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/essaouira/hamza-omlacho-M9GO4Gsd2SM-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 150
                }
            ]
        },
        {
            id: "ouzoud-day-trip",
            name: "Excursion d'une journée aux cascades d'Ouzoud",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ouzoud/danai-tsoutreli-tqLc6On9KIA-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 150
                }
            ]
        },
        {
            id: "imlil-day-trip",
            name: "Excursion d'une journée à Imlil",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/hero-marrakech.jpg",
            gallery: [],
            pricing: [
                {
                    minPeople: 1,
                    maxPeople: 3,
                    totalPrice: 40
                },
                {
                    minPeople: 4,
                    maxPeople: 8,
                    totalPrice: 30
                }
            ]
        },
        {
            id: "fes-day-trip",
            name: "Excursion d'une journée à Fès",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/fes/ben-ostrower-bjNv5Bg6h4U-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 200
                }
            ]
        },
        {
            id: "casablanca-day-trip",
            name: "Excursion d'une journée à Casablanca",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/casablanca/eka-maitri-viryani-qL3_NSPo9o8-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 180
                }
            ]
        },
        {
            id: "ouarzazate-day-trip",
            name: "Excursion d'une journée à Ouarzazate",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/ouarzazate/abdou-faiz-lA-P8-vagrI-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 160
                }
            ]
        },
        {
            id: "rabat-day-trip",
            name: "Excursion d'une journée à Rabat",
            duration: "1_day",
            maxPeople: 8,
            image: "/images/rabat/framopia-EZqHkkyc0wg-unsplash.jpg",
            gallery: [],
            pricing: [
                {
                    totalPrice: 170
                }
            ]
        }
    ],
    activities: {
        timeSlots: [
            {
                id: "morning",
                from: "09:00",
                to: "12:30"
            },
            {
                id: "afternoon",
                from: "14:00",
                to: "18:00"
            }
        ],
        experiences: [
            {
                id: "quad-agafay",
                type: "quad",
                location: "Agafay",
                price: 50,
                duration: "2_hours",
                image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/mayar-zidan-LVNcykwlDEg-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "quad-palmeraie",
                type: "quad",
                location: "Palmeraie",
                price: 30,
                duration: "2_hours",
                image: "/images/quad-biking/adrien-delforge-VH2HRylVsiM-unsplash.jpg",
                gallery: [
                    "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg",
                    "/images/quad-biking/nils-5RfEgsnxeHo-unsplash.jpg"
                ]
            },
            {
                id: "camel-agafay",
                type: "camel",
                location: "Agafay",
                price: 25,
                duration: "1_hour",
                image: "/images/camel-riding/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/peter-thomas-PotqZeNaUZ4-unsplash.jpg",
                    "/images/camel-riding/sheila-c-KuXu8rx_1-8-unsplash.jpg",
                    "/images/camel-riding/tamar-dCMvzMV1jfc-unsplash.jpg"
                ]
            },
            {
                id: "camel-palmeraie",
                type: "camel",
                location: "Palmeraie",
                price: 15,
                duration: "1_hour",
                image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/camel-riding/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
                ]
            },
            {
                id: "hot-air-balloon",
                type: "balloon",
                location: "Marrakech",
                price: 180,
                duration: "3_hours",
                image: "/images/airballon/manoa-angelo-w7jeZ5NFSvQ-unsplash.jpg",
                gallery: []
            },
            {
                id: "cooking-class",
                type: "cooking",
                location: "Marrakech",
                price: 60,
                duration: "4_hours",
                image: "/images/cooking-class/aziz-acharki-UBEcFUvkrcc-unsplash.jpg",
                gallery: []
            },
            {
                id: "food-tour",
                type: "food",
                location: "Marrakech",
                price: 45,
                duration: "3_hours",
                image: "/images/food-tour/annie-spratt-_V4v7BbG338-unsplash.jpg",
                gallery: []
            }
        ],
        addons: [
            {
                id: "dinner",
                name: "Dîner",
                pricePerPerson: 25,
                availableFrom: "15:00",
                availableTo: "21:00"
            }
        ]
    },
    transport: [
        {
            id: "private",
            name: "Transport privé",
            image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070",
            description: "Véhicule privé confortable avec chauffeur professionnel",
            price: 50
        },
        {
            id: "airport",
            name: "Transfert aéroport",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
            description: "Transferts aéroport fiables, service d'accueil",
            price: 30
        },
        {
            id: "on-demand",
            name: "Transport sur demande",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            description: "Transport flexible pour votre itinéraire personnalisé",
            price: 20
        }
    ],
    packages: [
        {
            id: "agafay-full-experience",
            name: "Quad + Dromadaire + Dîner",
            location: "Agafay",
            included: [
                "quad",
                "camel",
                "dinner"
            ],
            price: 60,
            image: "/images/quad-biking/haris-khan-v40H7tLOZII-unsplash.jpg",
            gallery: [
                "/images/camel-riding/oussama-rahib-f7F8URbIx08-unsplash.jpg",
                "/images/quad-biking/devon-janse-van-rensburg-08HCHS7EULI-unsplash.jpg"
            ]
        },
        {
            id: "palmeraie-adventure",
            name: "Dromadaire + Quad",
            location: "Palmeraie",
            included: [
                "camel",
                "quad"
            ],
            price: 50,
            image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
            gallery: [
                "/images/quad-biking/adrien-delforge-VH2HRylVsiM-unsplash.jpg"
            ]
        },
        {
            id: "desert-experience",
            name: "Expérience Complète du Désert",
            location: "Merzouga",
            included: [
                "camel",
                "dinner",
                "overnight"
            ],
            price: 120,
            image: "/images/merzouga/merzouga1.jpg",
            gallery: []
        }
    ],
    reviews: {
        scale: 5,
        items: [
            {
                id: "rev-001",
                targetType: "tour",
                targetId: "marrakech-full-day",
                author: "Sarah M.",
                rating: 5,
                comment: "Parfaite introduction à Marrakech. Le guide était très compétent et sympathique.",
                date: "2024-11-12"
            },
            {
                id: "rev-002",
                targetType: "tour",
                targetId: "ourika-day-trip",
                author: "James L.",
                rating: 4,
                comment: "Paysages magnifiques. Transport confortable. Une journée qui vaut le coup.",
                date: "2024-10-03"
            },
            {
                id: "rev-003",
                targetType: "activity",
                targetId: "quad-agafay",
                author: "Nina K.",
                rating: 5,
                comment: "Expérience quad incroyable dans le désert. Sensations fortes et vues superbes.",
                date: "2024-09-18"
            },
            {
                id: "rev-004",
                targetType: "package",
                targetId: "agafay-full-experience",
                author: "Omar R.",
                rating: 5,
                comment: "Tout était parfaitement organisé. Le dîner sous les étoiles était inoubliable.",
                date: "2024-08-27"
            },
            {
                id: "rev-005",
                targetType: "activity",
                targetId: "camel-palmeraie",
                author: "Laura D.",
                rating: 4,
                comment: "Balade relaxante avec de très belles photos. Un peu courte mais agréable.",
                date: "2024-07-14"
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServicesListing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesListing",
    ()=>ServicesListing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$palm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palmtree$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tree-palm.js [app-client] (ecmascript) <export default as Palmtree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const categories = [
    {
        id: 'tours',
        label: 'Cultural Tours',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"],
        route: 'tours',
        data: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].tours
    },
    {
        id: 'activities',
        label: 'Adventures',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        route: 'activities',
        data: ()=>{
            const experiences = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].activities.experiences || [];
            const grouped = experiences.reduce((acc, curr)=>{
                const type = curr.type;
                if (!acc[type]) {
                    acc[type] = {
                        ...curr,
                        id: curr.type,
                        name: `${curr.type} Adventures`,
                        desc: `Experience our exclusive ${curr.type} activities.`
                    };
                }
                if (curr.price < acc[type].price) {
                    acc[type].price = curr.price;
                }
                return acc;
            }, {});
            return Object.values(grouped);
        }
    },
    {
        id: 'packages',
        label: 'Curated Packs',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$palm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palmtree$3e$__["Palmtree"],
        route: 'packages',
        data: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].packages
    },
    {
        id: 'transport',
        label: 'Transport',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
        route: 'transport',
        data: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].transport
    }
];
const ServicesListing = ({ locale })=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])('ServicesPage');
    const renderPrice = (item, categoryId)=>{
        if (categoryId === 'tours' && item.pricing && item.pricing[0]) {
            const p = item.pricing[0];
            return p.totalPrice ? `${p.totalPrice}€` : `${p.pricePerPerson}€/p`;
        }
        if (categoryId === 'packages' || categoryId === 'activities') {
            return item.price ? `${item.price}€` : t('onRequest');
        }
        return t('onRequest');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FDFBF7] font-poppins text-neutral-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center",
                        style: {
                            backgroundImage: 'url(/images/hero-marrakech.jpg)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesListing.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesListing.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 container mx-auto px-4 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block font-poppins font-semibold text-primary text-xl italic mb-4",
                                    children: t('tag')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight",
                                    children: [
                                        t('titlePart1'),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary-light",
                                            children: t('titlePart2')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                            lineNumber: 95,
                                            columnNumber: 47
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed",
                                    children: t('subtitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServicesListing.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServicesListing.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServicesListing.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-16",
                children: categories.map((category, catIdx)=>{
                    const items = category.data();
                    if (!items || items.length === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(category.icon, {
                                                    className: "w-6 h-6 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServicesListing.tsx",
                                                lineNumber: 115,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-3xl font-bold font-poppins text-neutral-dark",
                                                        children: t(category.id === 'tours' ? 'culturalTours' : category.id === 'activities' ? 'adventures' : category.id === 'packages' ? 'curatedPacks' : 'transport')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServicesListing.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm",
                                                        children: [
                                                            items.length,
                                                            " ",
                                                            items.length === 1 ? t('option') : t('options'),
                                                            " ",
                                                            t('available')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ServicesListing.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServicesListing.tsx",
                                                lineNumber: 118,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServicesListing.tsx",
                                        lineNumber: 114,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/${category.route}`,
                                        className: "text-primary font-medium hover:underline flex items-center gap-2",
                                        children: [
                                            t('viewAll'),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ServicesListing.tsx",
                                                lineNumber: 131,
                                                columnNumber: 52
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServicesListing.tsx",
                                        lineNumber: 127,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServicesListing.tsx",
                                lineNumber: 113,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                                children: items.slice(0, 4).map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: catIdx * 0.1 + idx * 0.05
                                        },
                                        className: "group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-auto md:h-[280px] border border-neutral-100 cursor-pointer hover:-translate-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:w-2/5 relative h-48 md:h-full overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110",
                                                            style: {
                                                                backgroundImage: `url(${item.image || '/images/hero-marrakech.jpg'})`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-neutral-dark shadow-sm",
                                                            children: t(category.id === 'tours' ? 'culturalTours' : category.id === 'activities' ? 'adventures' : category.id === 'packages' ? 'curatedPacks' : 'transport')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "md:w-3/5 p-6 flex flex-col justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                    className: "w-3 h-3 text-primary"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                                    lineNumber: 163,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: category.id === 'tours' && item.duration ? t(`duration_${item.duration}`) : category.id === 'activities' ? t('duration_2_hours') : category.id === 'packages' ? t('duration_4_hours') : t('flexible')
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                                    lineNumber: 164,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                                            lineNumber: 162,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 text-yellow-500 text-sm font-bold bg-yellow-50 px-2 py-1 rounded-md",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                    className: "w-3 h-3 fill-current"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                                    lineNumber: 171,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "4.9"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                                    lineNumber: 172,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                                            lineNumber: 170,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-xl font-bold font-poppins text-neutral-dark mb-2 leading-tight group-hover:text-primary transition-colors uppercase",
                                                                    children: item.name || item.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                    lineNumber: 176,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-gray-500 text-sm leading-relaxed line-clamp-2",
                                                                    children: item.desc || `Experience the best of Morocco with our ${item.name || item.type}.`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-400 font-medium mb-0.5",
                                                                            children: category.id === 'transport' ? t('price') : t('startingFrom')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                                            lineNumber: 187,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xl font-bold text-primary",
                                                                            children: renderPrice(item, category.id)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/${locale}/${category.route}/${item.id}`,
                                                                    className: "px-4 py-2 rounded-full bg-neutral-100 text-neutral-dark font-medium text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2",
                                                                    children: [
                                                                        t('details'),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                                            lineNumber: 197,
                                                                            columnNumber: 72
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServicesListing.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServicesListing.tsx",
                                            lineNumber: 145,
                                            columnNumber: 41
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, item.id, false, {
                                        fileName: "[project]/src/components/ServicesListing.tsx",
                                        lineNumber: 138,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServicesListing.tsx",
                                lineNumber: 136,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, category.id, true, {
                        fileName: "[project]/src/components/ServicesListing.tsx",
                        lineNumber: 111,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ServicesListing.tsx",
                lineNumber: 105,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServicesListing.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ServicesListing, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = ServicesListing;
var _c;
__turbopack_context__.k.register(_c, "ServicesListing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowUpRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
];
const ArrowUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-up-right", __iconNode);
;
 //# sourceMappingURL=arrow-up-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
            key: "169xi5"
        }
    ],
    [
        "path",
        {
            d: "M15 5.764v15",
            key: "1pn4in"
        }
    ],
    [
        "path",
        {
            d: "M9 3.236v15",
            key: "1uimfh"
        }
    ]
];
const Map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("map", __iconNode);
;
 //# sourceMappingURL=map.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Compass
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
            key: "9ktpf1"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Compass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("compass", __iconNode);
;
 //# sourceMappingURL=compass.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Compass",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/tree-palm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>TreePalm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",
            key: "foxbe7"
        }
    ],
    [
        "path",
        {
            d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",
            key: "18arnh"
        }
    ],
    [
        "path",
        {
            d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",
            key: "ywahnh"
        }
    ],
    [
        "path",
        {
            d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",
            key: "ft0feo"
        }
    ]
];
const TreePalm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("tree-palm", __iconNode);
;
 //# sourceMappingURL=tree-palm.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/tree-palm.js [app-client] (ecmascript) <export default as Palmtree>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Palmtree",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$palm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tree$2d$palm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tree-palm.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Car
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
            key: "5owen"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "17",
            r: "2",
            key: "u2ysq9"
        }
    ],
    [
        "path",
        {
            d: "M9 17h6",
            key: "r8uit2"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "2",
            key: "axvx0g"
        }
    ]
];
const Car = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("car", __iconNode);
;
 //# sourceMappingURL=car.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Car",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_ec2c8f7c._.js.map