module.exports = [
"[project]/src/data/siteData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/components/BookingForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingForm",
    ()=>BookingForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/site.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$BookingContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/BookingContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
'use client';
;
;
;
;
;
;
const BookingForm = ({ serviceName, serviceType, basePrice = 0, variants = [], pricingRules = [], maxGuests = 20 })=>{
    // Date and travelers live in the shared booking context (hero search bar,
    // detail pages and this form all read/write the same state)
    const { date, travelers, setDate, setTravelers } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$BookingContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBooking"])();
    const guests = Math.min(travelers, maxGuests);
    const [selectedVariantId, setSelectedVariantId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(variants.length > 0 ? variants[0].id : null);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('Common');
    // A larger group may have been picked elsewhere — clamp the shared state
    // to this service's capacity
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (travelers > maxGuests) {
            setTravelers(maxGuests);
        }
    }, [
        travelers,
        maxGuests,
        setTravelers
    ]);
    const [showPriceBreakdown, setShowPriceBreakdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pricing, setPricing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        basePrice: 0,
        guestsTotal: 0,
        total: 0,
        hasDiscount: false
    });
    // Calculate pricing whenever form data changes
    // Calculate pricing whenever form data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let price = 0;
        let guestsTotal = 0;
        // Logic for variants
        if (variants.length > 0 && selectedVariantId) {
            const variant = variants.find((v)=>v.id === selectedVariantId);
            price = variant?.price || 0;
            guestsTotal = price * guests;
        } else if (pricingRules && pricingRules.length > 0) {
            // Find applicable rule for current guest count
            const rule = pricingRules.find((r)=>guests >= (r.minPeople || 0) && guests <= (r.maxPeople || Infinity));
            if (rule) {
                if (rule.totalPrice) {
                    // Fixed price for the group size range
                    guestsTotal = rule.totalPrice;
                    price = Math.round(rule.totalPrice / guests); // Average per person for display
                } else if (rule.pricePerPerson) {
                    // Per person price for the group size range
                    price = rule.pricePerPerson;
                    guestsTotal = price * guests;
                }
            } else {
                // Fallback if no rule matches (e.g. exceeding max people defined in rules)
                const lastRule = pricingRules[pricingRules.length - 1];
                if (lastRule.totalPrice) {
                    guestsTotal = lastRule.totalPrice;
                    price = Math.round(lastRule.totalPrice / guests);
                } else if (lastRule.pricePerPerson) {
                    price = lastRule.pricePerPerson;
                    guestsTotal = price * guests;
                } else {
                    price = typeof basePrice === 'number' ? basePrice : parseInt(basePrice) || 0;
                    guestsTotal = price * guests;
                }
            }
        } else {
            price = typeof basePrice === 'number' ? basePrice : parseInt(basePrice) || 0;
            guestsTotal = price * guests;
        }
        // Determine if a group discount is active
        let originalPerPerson = price;
        if (pricingRules && pricingRules.length > 0) {
            const ruleForOne = pricingRules[0];
            if (ruleForOne) {
                if (ruleForOne.totalPrice) {
                    originalPerPerson = Math.round(ruleForOne.totalPrice / (ruleForOne.minPeople || 1));
                } else if (ruleForOne.pricePerPerson) {
                    originalPerPerson = ruleForOne.pricePerPerson;
                }
            }
        }
        const hasDiscount = price < originalPerPerson;
        setPricing({
            basePrice: price,
            guestsTotal: guestsTotal,
            total: guestsTotal,
            hasDiscount: hasDiscount
        });
    }, [
        guests,
        selectedVariantId,
        basePrice,
        variants,
        pricingRules
    ]);
    const handleGuestsChange = (increment)=>{
        setTravelers(Math.max(1, Math.min(maxGuests, guests + increment)));
    };
    const handleVariantChange = (variantId)=>{
        setSelectedVariantId(variantId);
    };
    const handleWhatsAppSubmit = (e)=>{
        e.preventDefault();
        const selectedVariant = variants.find((v)=>v.id === selectedVariantId);
        const variantInfo = selectedVariant ? `\n🎯 Option: ${selectedVariant.name} (${selectedVariant.location})` : '';
        const text = `Hello! I would like to book "${serviceName}".

📋 Booking Details:
📅 Date: ${date}
👥 Guests: ${guests}${variantInfo}

💰 Total Price: ${pricing.total}€

Please confirm availability. Thank you!`;
        const encodedText = encodeURIComponent(text);
        const phoneNumber = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteConfig"].contact.whatsapp.replace('+', '');
        window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
    };
    const selectedVariant = variants.find((v)=>v.id === selectedVariantId);
    const isTransport = serviceType === 'transport';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-xl border border-neutral-100 sticky top-24 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary p-6 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 180,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold",
                                        children: t('bookNow')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 181,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 179,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isTransport && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowPriceBreakdown(!showPriceBreakdown),
                                className: "text-white/80 hover:text-white transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: `w-5 h-5 transition-transform ${showPriceBreakdown ? 'rotate-180' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.tsx",
                                    lineNumber: 189,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 184,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline gap-2",
                        children: isTransport ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-bold block",
                                    children: t('contactForPrice')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.tsx",
                                    lineNumber: 196,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/70 text-sm",
                                    children: t('customQuote')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.tsx",
                                    lineNumber: 197,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BookingForm.tsx",
                            lineNumber: 195,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-4xl font-bold",
                                    children: [
                                        pricing.total,
                                        "€"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BookingForm.tsx",
                                    lineNumber: 201,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/70 text-sm",
                                    children: t('total')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BookingForm.tsx",
                                    lineNumber: 202,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 193,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isTransport && pricing.hasDiscount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 inline-flex items-center gap-1.5 bg-[#25D366]/20 text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#25D366]/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex w-2 h-2 rounded-full bg-[#25D366] animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 208,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            t('groupDiscount')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 207,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 177,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            !isTransport && showPriceBreakdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 bg-primary/5 border-b border-neutral-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('pricePerPerson')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 218,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: [
                                            pricing.basePrice,
                                            "€"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 219,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 217,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('numberOfTravelers')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 222,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: [
                                            "× ",
                                            guests
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 223,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 221,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 border-t border-neutral-200 flex justify-between font-bold text-neutral-dark",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: t('subtotal')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 226,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: [
                                            pricing.guestsTotal,
                                            "€"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 227,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 225,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 216,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedVariant?.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 pt-3 border-t border-neutral-200 flex items-center gap-2 text-gray-500 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 232,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: selectedVariant.location
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 233,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 231,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 215,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleWhatsAppSubmit,
                className: "p-6 space-y-5",
                children: [
                    variants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-bold uppercase text-neutral-dark tracking-wide flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-4 h-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    t('chooseExperience')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 244,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                role: "radiogroup",
                                "aria-label": t('chooseExperience'),
                                children: variants.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "radio",
                                        "aria-checked": selectedVariantId === variant.id,
                                        onClick: ()=>handleVariantChange(variant.id),
                                        className: `relative w-full text-left p-3 rounded-lg border-2 cursor-pointer transition-all focus-visible:ring-2 focus-visible:ring-primary/40 outline-none ${selectedVariantId === variant.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-neutral-200 hover:border-primary/30 hover:bg-neutral-50'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-sm text-neutral-dark capitalize",
                                                            children: variant.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingForm.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mt-0.5",
                                                            children: variant.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingForm.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookingForm.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-lg font-bold text-primary",
                                                                children: [
                                                                    variant.price,
                                                                    "€"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/BookingForm.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingForm.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        selectedVariantId === variant.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-3 h-3 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/BookingForm.tsx",
                                                                lineNumber: 271,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BookingForm.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BookingForm.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BookingForm.tsx",
                                            lineNumber: 260,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, variant.id, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 249,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 247,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 243,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-bold uppercase text-neutral-dark tracking-wide flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-4 h-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 285,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    t('travelDate')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 284,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "date",
                                name: "date",
                                required: true,
                                min: new Date().toISOString().split('T')[0],
                                value: date,
                                onChange: (e)=>setDate(e.target.value),
                                className: "w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-neutral-dark text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 287,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 283,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-xs font-bold uppercase text-neutral-dark tracking-wide flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        className: "w-4 h-4 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 301,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    t('travelers')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between bg-neutral-50 border border-neutral-200 rounded-lg p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleGuestsChange(-1),
                                        "aria-label": `${t('decrease')} — ${t('numberOfTravelers')}`,
                                        className: "w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-neutral-dark hover:bg-neutral-200 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                        disabled: guests <= 1,
                                        children: "−"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 304,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-xl text-neutral-dark block",
                                                children: guests
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingForm.tsx",
                                                lineNumber: 314,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500",
                                                children: t('personCount', {
                                                    count: guests
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BookingForm.tsx",
                                                lineNumber: 315,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 313,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleGuestsChange(1),
                                        "aria-label": `${t('increase')} — ${t('numberOfTravelers')}`,
                                        className: "w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary hover:bg-primary/10 transition-colors font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed",
                                        disabled: guests >= maxGuests,
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BookingForm.tsx",
                                        lineNumber: 317,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 303,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-neutral-200 my-6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 330,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "w-5 h-5 fill-current"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 337,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: t('confirmWhatsApp')
                            }, void 0, false, {
                                fileName: "[project]/src/components/BookingForm.tsx",
                                lineNumber: 338,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 333,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-center text-gray-400",
                        children: t('noPaymentNow')
                    }, void 0, false, {
                        fileName: "[project]/src/components/BookingForm.tsx",
                        lineNumber: 341,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookingForm.tsx",
        lineNumber: 175,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/ServiceDetailContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceDetailContent",
    ()=>ServiceDetailContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookingForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const ServiceDetailContent = ({ type, title, description, image, price, duration, location, included = [], excluded = [], subItems = [], locale, gallery = [], pricing = [], maxPeople })=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('Common');
    const renderDuration = (d)=>d?.replace('_', ' ') || t('flexible');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FDFBF7] font-poppins text-neutral-dark pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[60vh] min-h-[500px] w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: image,
                        alt: title,
                        fill: true,
                        priority: true,
                        sizes: "100vw",
                        className: "object-cover fixed-bg"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full pb-10 md:pb-16 pt-20 text-white z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${locale}/services`,
                                            className: "flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full w-fit text-sm border border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                t('backToServices')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 82,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                        lineNumber: 81,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block px-3 py-1 rounded-md bg-[#FDC82F] text-[#1A1A1A] text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4 shadow-sm",
                                        children: type
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                        lineNumber: 86,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl sm:text-4xl lg:text-6xl font-black mb-4 leading-tight text-white uppercase tracking-tight",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                        lineNumber: 89,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-6 text-sm font-medium opacity-90",
                                        children: [
                                            location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-4 h-4 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: location
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                lineNumber: 92,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-4 h-4 text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: renderDuration(duration)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                lineNumber: 98,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                            lineNumber: 79,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-12 -mt-10 relative z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2 space-y-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-sm p-8 border border-neutral-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-6",
                                            children: t('overview')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 118,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 leading-relaxed text-lg whitespace-pre-line",
                                            children: description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                gallery && gallery.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-sm p-8 border border-neutral-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-6",
                                            children: t('gallery')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 127,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                            children: gallery.map((imgSrc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        scale: 0.9
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        scale: 1
                                                    },
                                                    transition: {
                                                        delay: idx * 0.1
                                                    },
                                                    className: "relative aspect-square overflow-hidden rounded-xl group cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: imgSrc,
                                                            alt: `${title} — photo ${idx + 1}`,
                                                            fill: true,
                                                            sizes: "(max-width: 768px) 50vw, 33vw",
                                                            className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                    lineNumber: 126,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                subItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-sm p-8 border border-neutral-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold mb-6",
                                            children: t('availableOptions')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 154,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: subItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-neutral-200 rounded-xl p-4 hover:border-primary transition-colors cursor-pointer bg-neutral-50 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-lg capitalize",
                                                                    children: item.location || item.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-primary/10 text-primary font-bold px-2 py-1 rounded text-sm",
                                                                    children: [
                                                                        item.price,
                                                                        "€"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mb-2",
                                                            children: [
                                                                "Experience the thrill in ",
                                                                item.location,
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, item.id, true, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 155,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                    lineNumber: 153,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl shadow-sm p-8 border border-neutral-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        t('included')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3",
                                                    children: included.length > 0 ? included.map((inc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-3 text-gray-600 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    className: "w-4 h-4 text-green-500 mt-0.5 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: inc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-3 text-gray-600 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-4 h-4 text-green-500 mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 106
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Hotel Pickup & Drop-off"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-3 text-gray-600 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-4 h-4 text-green-500 mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                        lineNumber: 189,
                                                                        columnNumber: 106
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Professional Guide"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-3 text-gray-600 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "w-4 h-4 text-green-500 mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 106
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Transport A/C"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white rounded-2xl shadow-sm p-8 border border-neutral-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-xl mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-5 h-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 41
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        t('notIncluded')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3",
                                                    children: excluded.length > 0 ? excluded.map((exc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-3 text-gray-600 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "w-4 h-4 text-red-400 mt-0.5 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: exc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 45
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-3 text-gray-600 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "w-4 h-4 text-red-400 mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 106
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Personal Expenses"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "flex items-start gap-3 text-gray-600 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                        className: "w-4 h-4 text-red-400 mt-0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 106
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    "Tips"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                    lineNumber: 172,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl shadow-sm p-8 border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold text-xl mb-2 text-neutral-dark",
                                                    children: t('needCustomPlan')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-sm max-w-md",
                                                    children: t('customPlanText')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 221,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/${locale}/contact`,
                                            className: "px-6 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-colors whitespace-nowrap",
                                            children: t('contactSupport')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                            lineNumber: 225,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                    lineNumber: 220,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BookingForm"], {
                                serviceName: title,
                                serviceType: type,
                                basePrice: price,
                                pricingRules: pricing,
                                maxGuests: maxPeople,
                                variants: subItems.map((item)=>({
                                        id: item.id,
                                        name: item.type,
                                        location: item.location,
                                        price: item.price,
                                        duration: item.duration
                                    }))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                                lineNumber: 237,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ServiceDetailContent.tsx",
                            lineNumber: 236,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ServiceDetailContent.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceDetailContent.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServiceDetailContent.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/[locale]/transport/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TransportDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceDetailContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ServiceDetailContent.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function TransportDetailPage({ params }) {
    const { id, locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const item = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSiteData"])(locale).transport.find((t)=>t.id === id);
    if (!item) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const description = item.description;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ServiceDetailContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceDetailContent"], {
        id: id,
        locale: locale,
        type: "transport",
        title: item.name,
        description: description,
        image: item.image || "/images/hero-marrakech.jpg",
        price: item.price || 0,
        duration: "Flexible",
        location: "Marrakech",
        included: item.included,
        excluded: item.excluded,
        subItems: [],
        gallery: []
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/transport/[id]/page.tsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_dc5f7561._.js.map