(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/siteData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Returns the locale-specific dataset. siteData (en) and siteDataFr must keep
 * the same shape and ids — only text differs.
 */ __turbopack_context__.s([
    "getSiteData",
    ()=>getSiteData,
    "siteData",
    ()=>siteData,
    "siteDataFr",
    ()=>siteDataFr
]);
const getSiteData = (locale)=>locale === 'fr' ? siteDataFr : siteData;
const siteData = {
    currency: "EUR",
    location: "Marrakech",
    tours: [
        {
            id: "marrakech-full-day",
            name: "1 Day Visit to Marrakech City",
            desc: "Discover the best of Marrakech in one day with a licensed local guide: the Koutoubia Mosque, the Bahia Palace, the Saadian Tombs, the vibrant souks of the Medina and the legendary Jemaa el-Fna square as it comes alive at sunset.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport",
                "Licensed local guide"
            ],
            excluded: [
                "Lunch",
                "Monument entrance fees",
                "Personal expenses & tips"
            ],
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
            desc: "Short on time? This half-day tour covers the essentials of the Red City: the Koutoubia Mosque, the Bahia Palace, the historic Medina alleys and the colourful souks, finishing at Jemaa el-Fna square.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport",
                "Licensed local guide"
            ],
            excluded: [
                "Lunch",
                "Monument entrance fees",
                "Personal expenses & tips"
            ],
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
            desc: "Escape the city heat to the Ourika Valley in the foothills of the Atlas Mountains. Walk to the Setti Fatma waterfalls, visit a traditional Berber house and enjoy lunch by the river surrounded by terraced gardens.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport",
                "Local mountain guide"
            ],
            excluded: [
                "Lunch",
                "Mule or camel rides",
                "Personal expenses & tips"
            ],
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
            desc: "Head to the Atlantic coast and the laid-back port town of Essaouira. Stroll the UNESCO-listed medina and its ramparts, watch the fishing boats come in and stop at a women's argan oil cooperative on the way.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport",
                "Free time in the medina"
            ],
            excluded: [
                "Lunch",
                "Guided city tour",
                "Personal expenses & tips"
            ],
            duration: "1_day",
            maxPeople: 7,
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
            desc: "Visit the spectacular Ouzoud Waterfalls, the highest in North Africa, tumbling 110 metres into a lush canyon. Spot wild Barbary macaques, take an optional boat ride at the base of the falls and lunch with a panoramic view.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport",
                "Local guide at the falls"
            ],
            excluded: [
                "Lunch",
                "Boat ride",
                "Personal expenses & tips"
            ],
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
            desc: "Travel into the High Atlas to the mountain village of Imlil, at the foot of Mount Toubkal. Hike scenic mule trails between Berber hamlets, share mint tea with a local family and breathe the fresh mountain air.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport",
                "Local mountain guide"
            ],
            excluded: [
                "Lunch",
                "Mule hire",
                "Personal expenses & tips"
            ],
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
            desc: "Discover Fes, Morocco's spiritual capital and home to the world's oldest university. Explore the maze-like Fes el-Bali medina, the famous tanneries, ornate medersas and artisan quarters on this full-day trip.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport"
            ],
            excluded: [
                "Lunch",
                "Local guide in Fes",
                "Monument entrance fees"
            ],
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
            desc: "Explore Morocco's economic capital: the breathtaking Hassan II Mosque on the ocean, the Art Deco city centre, Mohammed V Square and the seaside Corniche, with free time for shopping and cafés.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport"
            ],
            excluded: [
                "Lunch",
                "Mosque entrance fee",
                "Personal expenses & tips"
            ],
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
            desc: "Cross the dramatic Tizi n'Tichka pass to Ouarzazate, the gateway to the Sahara. Visit the UNESCO-listed kasbah of Aït Ben Haddou, famous from countless films, and the Taourirt Kasbah in the 'Hollywood of Morocco'.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport"
            ],
            excluded: [
                "Lunch",
                "Entrance fees",
                "Personal expenses & tips"
            ],
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
            desc: "Spend a day in Morocco's elegant capital. Visit the Hassan Tower, the Mausoleum of Mohammed V, the picturesque blue-and-white Kasbah of the Udayas and the ancient Chellah necropolis.",
            included: [
                "Hotel pickup & drop-off",
                "Air-conditioned transport"
            ],
            excluded: [
                "Lunch",
                "Entrance fees",
                "Personal expenses & tips"
            ],
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
                desc: "Ride a quad bike across the lunar landscapes of the Agafay stone desert, through dry hills and Berber villages, with a tea break and panoramic Atlas views.",
                included: [
                    "Professional guide",
                    "Helmet & safety equipment",
                    "Tea break"
                ],
                excluded: [
                    "Hotel pickup",
                    "Tips",
                    "Personal expenses"
                ],
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
                desc: "An adrenaline ride through the Palmeraie's palm groves and dusty trails on the edge of Marrakech — perfect for a quick adventure fix.",
                included: [
                    "Professional guide",
                    "Helmet & safety equipment",
                    "Tea break"
                ],
                excluded: [
                    "Hotel pickup",
                    "Tips",
                    "Personal expenses"
                ],
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
                desc: "A peaceful camel ride through the rocky Agafay desert at sunset, dressed in traditional Tuareg style, with mint tea in a desert camp.",
                included: [
                    "Camel guide",
                    "Traditional dress & mint tea",
                    "Photo stops"
                ],
                excluded: [
                    "Hotel pickup",
                    "Tips",
                    "Personal expenses"
                ],
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
                desc: "Sway through Marrakech's famous palm grove on a friendly dromedary — a classic, family-friendly Moroccan experience.",
                included: [
                    "Camel guide",
                    "Traditional dress & mint tea",
                    "Photo stops"
                ],
                excluded: [
                    "Hotel pickup",
                    "Tips",
                    "Personal expenses"
                ],
                price: 15,
                duration: "1_hour",
                image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/camel-riding/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
                ]
            },
            {
                id: "cooking-class",
                type: "cooking",
                location: "Marrakech",
                desc: "Learn the secrets of Moroccan cuisine with a local chef: shop for spices in the souk, then cook (and eat) your own tagine, couscous and Moroccan salads.",
                included: [
                    "Local chef",
                    "All ingredients",
                    "Lunch — your own creations"
                ],
                excluded: [
                    "Drinks",
                    "Tips"
                ],
                price: 60,
                duration: "4_hours",
                image: "/images/cooking-class/aziz-acharki-UBEcFUvkrcc-unsplash.jpg",
                gallery: []
            },
            {
                id: "food-tour",
                type: "food",
                location: "Marrakech",
                desc: "Taste your way through the Medina: street-food stalls, hidden bakeries, olive and spice stands, and the smoky grills of Jemaa el-Fna.",
                included: [
                    "Local foodie guide",
                    "All tastings"
                ],
                excluded: [
                    "Extra drinks",
                    "Tips"
                ],
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
            included: [
                "Professional driver",
                "Air-conditioned vehicle",
                "Fuel",
                "Insurance"
            ],
            excluded: [
                "Tips",
                "Extra stops"
            ],
            price: 50
        },
        {
            id: "airport",
            name: "Airport Transport",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
            description: "Reliable airport transfers, meet & greet service",
            included: [
                "Professional driver",
                "Air-conditioned vehicle",
                "Meet & greet",
                "Flight tracking"
            ],
            excluded: [
                "Tips",
                "Extra stops"
            ],
            price: 30
        },
        {
            id: "on-demand",
            name: "On-demand Transport",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            description: "Flexible transportation for your custom itinerary",
            included: [
                "Professional driver",
                "Air-conditioned vehicle",
                "Fuel",
                "Insurance"
            ],
            excluded: [
                "Tips",
                "Waiting time beyond schedule"
            ],
            price: 20
        }
    ],
    packages: [
        {
            id: "agafay-full-experience",
            name: "Quad + Camel + Dinner",
            location: "Agafay",
            desc: "The complete Agafay evening: a quad ride through the stone desert, a sunset camel trek, then a traditional dinner under the stars in a desert camp.",
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
            desc: "Combine a camel ride and a quad session in the Palmeraie for a half-day of contrasts — serenity first, adrenaline after.",
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
            desc: "An overnight Sahara escape to Merzouga: a camel trek over the Erg Chebbi dunes, sunset and sunrise in the sand, dinner, drums and a night in a desert camp.",
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
            desc: "Découvrez le meilleur de Marrakech en une journée avec un guide local agréé : la mosquée Koutoubia, le palais de la Bahia, les tombeaux saadiens, les souks animés de la médina et la légendaire place Jemaa el-Fna au coucher du soleil.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé",
                "Guide local agréé"
            ],
            excluded: [
                "Déjeuner",
                "Entrées des monuments",
                "Dépenses personnelles & pourboires"
            ],
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
            desc: "Peu de temps ? Cette visite d'une demi-journée couvre l'essentiel de la ville rouge : la mosquée Koutoubia, le palais de la Bahia, les ruelles historiques de la médina et les souks colorés, pour finir sur la place Jemaa el-Fna.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé",
                "Guide local agréé"
            ],
            excluded: [
                "Déjeuner",
                "Entrées des monuments",
                "Dépenses personnelles & pourboires"
            ],
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
            desc: "Échappez à la chaleur de la ville vers la vallée de l'Ourika, au pied de l'Atlas. Marchez jusqu'aux cascades de Setti Fatma, visitez une maison berbère traditionnelle et déjeunez au bord de la rivière, entouré de jardins en terrasses.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé",
                "Guide de montagne local"
            ],
            excluded: [
                "Déjeuner",
                "Balade à dos de mule ou de dromadaire",
                "Dépenses personnelles & pourboires"
            ],
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
            desc: "Cap sur la côte atlantique et la paisible ville portuaire d'Essaouira. Flânez dans la médina classée à l'UNESCO et ses remparts, observez le retour des bateaux de pêche et visitez une coopérative féminine d'huile d'argan en chemin.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé",
                "Temps libre dans la médina"
            ],
            excluded: [
                "Déjeuner",
                "Visite guidée de la ville",
                "Dépenses personnelles & pourboires"
            ],
            duration: "1_day",
            maxPeople: 7,
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
            desc: "Visitez les spectaculaires cascades d'Ouzoud, les plus hautes d'Afrique du Nord, qui plongent de 110 mètres dans un canyon verdoyant. Observez les macaques de Barbarie, embarquez pour un tour en barque en option et déjeunez avec vue panoramique.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé",
                "Guide local aux cascades"
            ],
            excluded: [
                "Déjeuner",
                "Tour en barque",
                "Dépenses personnelles & pourboires"
            ],
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
            desc: "Partez dans le Haut Atlas jusqu'au village de montagne d'Imlil, au pied du mont Toubkal. Randonnez sur des sentiers muletiers entre les hameaux berbères, partagez un thé à la menthe chez l'habitant et respirez l'air pur de la montagne.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé",
                "Guide de montagne local"
            ],
            excluded: [
                "Déjeuner",
                "Location de mule",
                "Dépenses personnelles & pourboires"
            ],
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
            desc: "Découvrez Fès, capitale spirituelle du Maroc et siège de la plus ancienne université au monde. Explorez la médina labyrinthique de Fès el-Bali, les célèbres tanneries, les médersas ornées et les quartiers d'artisans.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé"
            ],
            excluded: [
                "Déjeuner",
                "Guide local à Fès",
                "Entrées des monuments"
            ],
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
            desc: "Explorez la capitale économique du Maroc : l'impressionnante mosquée Hassan II face à l'océan, le centre-ville Art déco, la place Mohammed V et la Corniche, avec du temps libre pour le shopping et les cafés.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé"
            ],
            excluded: [
                "Déjeuner",
                "Entrée de la mosquée",
                "Dépenses personnelles & pourboires"
            ],
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
            desc: "Franchissez le spectaculaire col du Tizi n'Tichka jusqu'à Ouarzazate, porte du Sahara. Visitez la kasbah d'Aït Ben Haddou, classée à l'UNESCO et célèbre pour ses décors de films, ainsi que la kasbah de Taourirt dans le « Hollywood marocain ».",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé"
            ],
            excluded: [
                "Déjeuner",
                "Entrées",
                "Dépenses personnelles & pourboires"
            ],
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
            desc: "Passez une journée dans l'élégante capitale du Maroc. Visitez la tour Hassan, le mausolée Mohammed V, la pittoresque kasbah des Oudayas en bleu et blanc et l'ancienne nécropole du Chellah.",
            included: [
                "Prise en charge à l'hôtel",
                "Transport climatisé"
            ],
            excluded: [
                "Déjeuner",
                "Entrées",
                "Dépenses personnelles & pourboires"
            ],
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
                desc: "Pilotez un quad à travers les paysages lunaires du désert de pierre d'Agafay, entre collines arides et villages berbères, avec pause thé et vue panoramique sur l'Atlas.",
                included: [
                    "Guide professionnel",
                    "Casque & équipement de sécurité",
                    "Pause thé"
                ],
                excluded: [
                    "Prise en charge à l'hôtel",
                    "Pourboires",
                    "Dépenses personnelles"
                ],
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
                desc: "Une virée pleine d'adrénaline dans la palmeraie de Marrakech et ses pistes poussiéreuses — parfait pour une dose d'aventure express.",
                included: [
                    "Guide professionnel",
                    "Casque & équipement de sécurité",
                    "Pause thé"
                ],
                excluded: [
                    "Prise en charge à l'hôtel",
                    "Pourboires",
                    "Dépenses personnelles"
                ],
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
                desc: "Une balade paisible à dos de dromadaire dans le désert rocailleux d'Agafay au coucher du soleil, en tenue touareg traditionnelle, avec thé à la menthe dans un campement.",
                included: [
                    "Chamelier",
                    "Tenue traditionnelle & thé à la menthe",
                    "Pauses photo"
                ],
                excluded: [
                    "Prise en charge à l'hôtel",
                    "Pourboires",
                    "Dépenses personnelles"
                ],
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
                desc: "Laissez-vous porter à travers la célèbre palmeraie de Marrakech à dos de dromadaire — une expérience marocaine classique et familiale.",
                included: [
                    "Chamelier",
                    "Tenue traditionnelle & thé à la menthe",
                    "Pauses photo"
                ],
                excluded: [
                    "Prise en charge à l'hôtel",
                    "Pourboires",
                    "Dépenses personnelles"
                ],
                price: 15,
                duration: "1_hour",
                image: "/images/camel-riding/dan-calderwood-7CPopIsaCkc-unsplash.jpg",
                gallery: [
                    "/images/camel-riding/dave-meckler-ZzVc3uZXnr8-unsplash.jpg",
                    "/images/camel-riding/peter-thomas-nF8-ekoE0qw-unsplash.jpg"
                ]
            },
            {
                id: "cooking-class",
                type: "cooking",
                location: "Marrakech",
                desc: "Apprenez les secrets de la cuisine marocaine avec un chef local : achat d'épices au souk, puis préparation (et dégustation) de votre tajine, couscous et salades marocaines.",
                included: [
                    "Chef local",
                    "Tous les ingrédients",
                    "Déjeuner — vos propres créations"
                ],
                excluded: [
                    "Boissons",
                    "Pourboires"
                ],
                price: 60,
                duration: "4_hours",
                image: "/images/cooking-class/aziz-acharki-UBEcFUvkrcc-unsplash.jpg",
                gallery: []
            },
            {
                id: "food-tour",
                type: "food",
                location: "Marrakech",
                desc: "Régalez-vous à travers la médina : stands de street-food, boulangeries cachées, étals d'olives et d'épices, et les grillades fumantes de Jemaa el-Fna.",
                included: [
                    "Guide gastronomique local",
                    "Toutes les dégustations"
                ],
                excluded: [
                    "Boissons supplémentaires",
                    "Pourboires"
                ],
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
            included: [
                "Chauffeur professionnel",
                "Véhicule climatisé",
                "Carburant",
                "Assurance"
            ],
            excluded: [
                "Pourboires",
                "Arrêts supplémentaires"
            ],
            price: 50
        },
        {
            id: "airport",
            name: "Transfert aéroport",
            image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
            description: "Transferts aéroport fiables, service d'accueil",
            included: [
                "Chauffeur professionnel",
                "Véhicule climatisé",
                "Accueil personnalisé",
                "Suivi des vols"
            ],
            excluded: [
                "Pourboires",
                "Arrêts supplémentaires"
            ],
            price: 30
        },
        {
            id: "on-demand",
            name: "Transport sur demande",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
            description: "Transport flexible pour votre itinéraire personnalisé",
            included: [
                "Chauffeur professionnel",
                "Véhicule climatisé",
                "Carburant",
                "Assurance"
            ],
            excluded: [
                "Pourboires",
                "Temps d'attente hors planning"
            ],
            price: 20
        }
    ],
    packages: [
        {
            id: "agafay-full-experience",
            name: "Quad + Dromadaire + Dîner",
            location: "Agafay",
            desc: "La soirée complète à Agafay : sortie en quad dans le désert de pierre, balade à dos de dromadaire au coucher du soleil, puis dîner traditionnel sous les étoiles dans un campement.",
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
            desc: "Combinez balade à dos de dromadaire et session de quad dans la Palmeraie pour une demi-journée de contrastes — sérénité d'abord, adrénaline ensuite.",
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
            desc: "Une escapade saharienne d'une nuit à Merzouga : trek à dos de dromadaire sur les dunes de l'Erg Chebbi, coucher et lever du soleil dans le sable, dîner, tambours et nuit en campement.",
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
"[project]/src/app/[locale]/activities/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivitiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ActivitiesPage({ params }) {
    _s();
    const { locale } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(params);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])('ListingPage');
    // Group activities by type — name is localized, desc comes from the first experience
    const experiences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSiteData"])(locale).activities.experiences || [];
    const grouped = experiences.reduce((acc, curr)=>{
        const type = curr.type;
        if (!acc[type]) {
            acc[type] = {
                ...curr,
                id: curr.type,
                name: t('activityGroupTitle', {
                    type: curr.type
                }),
                isGrouped: true
            };
        }
        if (curr.price < acc[type].price) {
            acc[type].price = curr.price;
        }
        return acc;
    }, {});
    const groupedActivities = Object.values(grouped);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FDFBF7] font-poppins text-neutral-dark",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/hero-marrakech.jpg",
                            alt: "",
                            fill: true,
                            sizes: "100vw",
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/activities/page.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
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
                                    fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-5xl md:text-7xl font-bold font-poppins text-white mb-6 leading-tight",
                                    children: t('activitiesTitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                    lineNumber: 64,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed mb-8",
                                    children: t('activitiesSubtitle')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${locale}/services`,
                                    className: "px-8 py-3 rounded-full border border-white/30 hover:bg-white hover:text-neutral-dark text-white transition-all flex items-center gap-2 font-medium backdrop-blur-sm inline-flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        t('viewAllCollections')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/activities/page.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: groupedActivities.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: idx * 0.1
                            },
                            className: "group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-auto md:h-[350px] border border-neutral-100 group cursor-pointer hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:w-2/5 relative h-64 md:h-full overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: item.image || '/images/hero-marrakech.jpg',
                                                alt: item.name || item.type || '',
                                                fill: true,
                                                sizes: "(max-width: 768px) 100vw, 40vw",
                                                className: "object-cover transition-transform duration-700 group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-neutral-dark shadow-sm",
                                                children: t('activitiesLabel')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:w-3/5 p-6 md:p-8 flex flex-col justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-gray-500 text-xs font-semibold uppercase tracking-wider",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-3 h-3 text-primary"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: t('duration_2_hours')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-2xl font-bold font-poppins text-neutral-dark mb-3 leading-tight group-hover:text-primary transition-colors uppercase",
                                                        children: item.name || item.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-500 text-sm leading-relaxed line-clamp-2 md:line-clamp-3",
                                                        children: item.desc || t('activitiesDescDefault')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 font-medium mb-0.5",
                                                                children: t('startingFrom')
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-2xl font-bold text-primary",
                                                                children: [
                                                                    item.price,
                                                                    "€"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/${locale}/activities/${item.id}`,
                                                        className: "px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-dark font-medium text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-2",
                                                        children: [
                                                            t('details'),
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                                lineNumber: 137,
                                                                columnNumber: 60
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                                lineNumber: 91,
                                columnNumber: 29
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/src/app/[locale]/activities/page.tsx",
                            lineNumber: 84,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/activities/page.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/activities/page.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/activities/page.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_s(ActivitiesPage, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = ActivitiesPage;
var _c;
__turbopack_context__.k.register(_c, "ActivitiesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>ArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
];
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-left", __iconNode);
;
 //# sourceMappingURL=arrow-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
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
]);

//# sourceMappingURL=_ad3183cd._.js.map