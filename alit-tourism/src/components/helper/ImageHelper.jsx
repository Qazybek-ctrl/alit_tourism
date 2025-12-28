// Images from public folder
const AssyPlateau1 = "/images/places/AssyPlateau1.png";
const Koktobe1 = "/images/places/Koktobe.png";
const AltynEmell = "/images/places/AltynEmel.png";
const Tamgaly = "/images/places/Tamgaly.webp";
const AlmaArasann = "/images/places/AlmaArasann.webp";
const Kolsay1 = "/images/places/Kolsay lakes.webp";
const Mountain = "/images/places/mountain.webp";
const Charyn = "/images/places/charyn.webp";
const noPng = "/icons/no.png";
const yesPng = "/icons/yes.png";
const smilePng = "/icons/smile.png";
const circlePng = "/icons/circle.png";
const cloudPng = "/icons/cloud.png";
const lightningPng = "/icons/lightning.png";
const pinPng = "/icons/pin.png";
const flagPng = "/icons/flag.png";
const clockPng = "/icons/clock.png";
const timerPng = "/icons/timer.png";
const bagPng = "/icons/bag1.png";
const Assy = "/images/places/Assy.webp";
const AssyPlateu = "/images/places/AssyPlateu.webp";
const AssyPlateau = "/images/places/AssyPlateau.png";
const Assy2 = "/images/places/Assy2.webp";
const AlmatyCanad = "/images/places/AlmatyCanad.webp";
const Medeu1 = "/images/places/Medeu.png";
const AlmatyStreet = "/images/places/AlmatyStreet.webp";
const KokTobe = "/images/places/Kok Tobe.jpg";
const Issyk = "/images/places/Issyk.png";
const IssykHourse = "/images/places/IssykHourse.png";
const Turgen = "/images/places/Turgen.png";
const Turgen2 = "/images/places/Turgen2.jpg";
const BigAlmatyLake = "/images/places/Big Almaty Lake.jpg";
const BigAlmatyLake2 = "/images/places/Big-Almaty-Lake-1.jpg";
const Baomotor = "/images/places/Baomotor.png";
const Baoo = "/images/places/baoo.webp";
const AltynEmel2 = "/images/places/AltynEmel2.png";
const AltynEmelNationalPark2 = "/images/places/Altyn Emel National Park 2.webp";
const AltynEmelMoun = "/images/places/AltynEmelMoun.png";
const AltynEmelNationalPark = "/images/places/Altyn Emel National Park.jpg";
const Charyn2 = "/images/places/Charyn Canyon.jpg";
const Tamgaly3 = "/images/places/Tamgaly3.png";
const Tamgaly4 = "/images/places/Tamgaly4.png";
const TamgalyTass = "/images/places/TamgalyTass.png";
const AlmaArasan = "/images/places/AlmaArasan.webp";
const Almaarasans = "/images/places/Almaarasans.png";
const Almaarasanile = "/images/places/Almaarasanile.webp";
const AlmaArasnc = "/images/places/AlmaArasnc.png";
const KokZhailau = "/images/places/Kok Zhailau Almaty.webp";
const BizdinAuyl = "/images/places/BizdinAuyl.png";
const BizdinAuyl2 = "/images/places/BizdinAuyl2.png";
const BizdinAuyl3 = "/images/places/BizdinAuyl3.jpg";
const BizdinAuyl4 = "/images/places/BizdinAuyl4.png";
const KaiyndyLake = "/images/places/Kaiyndy lake.jpeg";
import { tourType } from "./type";

export const Tours = [
    {
        id: 1,
        type: tourType.kolsayKaindyCharyn,
        src: KaiyndyLake,
        title: "Kolsai & Kaindy Lakes With Canyons Day Tour",
        duration: "Day Tour",
        photos: [Kolsay1, KaiyndyLake, Charyn, Mountain],
        price: "$440",
        highlightsTitle: "Highlights",
        bestOfTitle: "Best of Almaty in 1 Day – Lakes & Canyons Tour",
        bestOfDescription: "If you have only one day to explore, this tour is the perfect way to see the region’s top natural wonders. In just a day, you’ll visit Charyn Canyon, Black Canyon, Kolsay Lake and Kaiyndy Lake.\n" +
            "Travel in a small group for a friendly atmosphere, enjoy the comfort, and be guided by an English- speaking expert who knows the best photo spots.Along the way, taste traditional Kazakh cuisine in a remote mountain village.\n\n" +
            "<strong>You will visit:</strong>\n" +
            "Kolsay and Kaiyndy Lakes with Charyn Canyon – Day Tour.Discover the breathtaking beauty of Kazakhstan in one unforgettable day! Kolsay Lakes – Known as the “Pearls of the Tien Shan,” these crystal - clear mountain lakes are surrounded by pine forests and snow - capped peaks.Kaindy Lake, famous for the submerged forest – tree trunks rising straight from the water’s surface.Charyn Canyon – Often called the “Grand Canyon’s little brother,” with dramatic red cliffs and unique rock formations.\n\n" +
            "<strong>Highlights:</strong>\n" + "• 4 top natural attractions in 1 day\n" +
            "• Small, friendly international group\n" +
            "• Comfortable travel & plenty of photo stops\n" +
            "• Local food & hospitality experience",
        youWillVisitTitle: "Discover the breathtaking beauty of Kazakhstan in one unforgettable day!",
        itinerary: [
            {
                steps: [
                    {
                        title: "07:00",
                        description: "Depart from Almaty towards Charyn Canyon (optional stop to taste fresh local samsa baked in a traditional tandyr oven).",
                    },
                    {
                        title: "",
                        description: "Charyn Canyon – Valley of the Castles.",
                    },
                    {
                        title: "",
                        description: "Walk along the canyon rim to the upper viewing point for breathtaking panoramas",
                    },
                    {
                        title: "",
                        description: "Black Canyon – Quick stop to admire its dramatic dark cliffs",
                    },
                    {
                        title: "",
                        description: "Lunch in the mountain village of Saty",
                    },
                    {
                        title: "",
                        description: "Kolsay Lake – Short hike down to the lakeshore, enjoy the view, then return to the starting point",
                    },
                    {
                        title: "",
                        description: "Kiyndy Lake - Short hike down to the lakeshore, enjoy the view, then return to the starting point",
                    },
                    {
                        title: "",
                        description: "Evening Return – Short stop on the way back",
                    },
                    {
                        title: "22:00",
                        description: "Arrival in Almaty",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
        slides: [
            {
                image: Kolsay1,
                description:
                    "Kolsai Lakes – Known as the “Pearls of the Tien Shan,” these crystal-clear mountain lakes are surrounded by pine forests and snow-capped peaks.",
            },
            {
                image: Charyn,
                description:
                    "Charyn Canyon – Often called the ‘Grand Canyon of Central Asia,’ with dramatic red rock formations and breathtaking views.",
            },
            {
                image: KaiyndyLake,
                description:
                    "Almaty City – Kazakhstan’s cultural hub with cozy coffee shops, mountain views, and lively streets full of art and music.",
            },
        ],
        highlights: [
            "3 top natural attractions in 1 day",
            "Small, friendly international group",
            "Comfortable travel & plenty of photo stops",
            "Local food & hospitality experience",
        ],
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "English-speaking guide",
                    "Comfortable transportation",
                    "All entry fees",
                ]
            }, {
                icon: noPng,
                title: "Not Included",
                texts: ["Boating", "Horse riding", "Lunch"]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: flagPng,
                title: "Total Distance",
                texts: [
                    "~660 km round trip"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "~18 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "07:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "Year-round"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "National Cuisine Tasting",
                    "Boating",
                    "Hiking",
                    "Horse Riding (optional)",
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$465" },
            { peopleCount: 3, price: "$470" },
            { peopleCount: 4, price: "$485" },
            { peopleCount: 5, price: "$610" },
            { peopleCount: 6, price: "$625" },
            { peopleCount: 7, price: "$640" }
        ]
    },
    {
        id: 2,
        type: tourType.kolsayCharyn,
        src: Kolsay1,
        title: "Kolsay Lake with Canyons day tour",
        duration: "Day Tour",
        photos: [Kolsay1, Charyn, Mountain],
        price: "$440",
        highlightsTitle: "Highlights",
        bestOfTitle: "Best of Almaty in 1 Day – Lakes & Canyons Tour",
        bestOfDescription: "If you have only one day to explore, this tour is the perfect way to see the region’s top natural wonders. In just a day, you’ll visit Charyn Canyon, Black Canyon, Kolsay Lake and Kaiyndy Lake.\n" +
            "Travel in a small group for a friendly atmosphere, enjoy the comfort, and be guided by an English- speaking expert who knows the best photo spots.Along the way, taste traditional Kazakh cuisine in a remote mountain village.\n\n" +
            "<strong>You will visit:</strong>\n" +
            "Kolsay and Kaiyndy Lakes with Charyn Canyon – Day Tour.Discover the breathtaking beauty of Kazakhstan in one unforgettable day! Kolsay Lakes – Known as the “Pearls of the Tien Shan,” these crystal - clear mountain lakes are surrounded by pine forests and snow - capped peaks.Kaindy Lake, famous for the submerged forest – tree trunks rising straight from the water’s surface.Charyn Canyon – Often called the “Grand Canyon’s little brother,” with dramatic red cliffs and unique rock formations.\n\n" +
            "<strong>Highlights:</strong>\n" + "• 4 top natural attractions in 1 day\n" +
            "• Small, friendly international group\n" +
            "• Comfortable travel & plenty of photo stops\n" +
            "• Local food & hospitality experience",
        youWillVisitTitle: "Discover the breathtaking beauty of Kazakhstan in one unforgettable day!",
        itinerary: [
            {
                steps: [
                    {
                        title: "07:00",
                        description: "Depart from Almaty towards Charyn Canyon (optional stop to taste fresh local samsa baked in a traditional tandyr oven).",
                    },
                    {
                        title: "",
                        description: "Charyn Canyon – Valley of the Castles.",
                    },
                    {
                        title: "",
                        description: "Walk along the canyon rim to the upper viewing point for breathtaking panoramas",
                    },
                    {
                        title: "",
                        description: "Black Canyon – Quick stop to admire its dramatic dark cliffs",
                    },
                    {
                        title: "",
                        description: "Lunch in the mountain village of Saty",
                    },
                    {
                        title: "",
                        description: "Kolsay Lake – Short hike down to the lakeshore, enjoy the view, then return to the starting point",
                    },
                    {
                        title: "",
                        description: "Evening Return – Short stop on the way back",
                    },
                    {
                        title: "21:00",
                        description: "Arrival in Almaty",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
        slides: [
            {
                image: Kolsay1,
                description:
                    "Kolsai Lakes – Known as the “Pearls of the Tien Shan,” these crystal-clear mountain lakes are surrounded by pine forests and snow-capped peaks.",
            },
            {
                image: Charyn,
                description:
                    "Charyn Canyon – Often called the ‘Grand Canyon of Central Asia,’ with dramatic red rock formations and breathtaking views.",
            }
        ],
        highlights: [
            "3 top natural attractions in 1 day",
            "Small, friendly international group",
            "Comfortable travel & plenty of photo stops",
            "Local food & hospitality experience",
        ],
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "English-speaking guide",
                    "Comfortable transportation",
                    "All entry fees",
                ]
            }, {
                icon: noPng,
                title: "Not Included",
                texts: ["Boating", "Horse riding", "Lunch"]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: flagPng,
                title: "Total Distance",
                texts: [
                    "~660 km round trip"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "~17 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "07:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "Year-round"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "National Cuisine Tasting",
                    "Boating",
                    "Hiking",
                    "Horse Riding (optional)",
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$430" },
            { peopleCount: 3, price: "$445" },
            { peopleCount: 4, price: "$460" },
            { peopleCount: 5, price: "$595" },
            { peopleCount: 6, price: "$610" },
            { peopleCount: 7, price: "$625" }
        ]
    },
    {
        id: 3,
        type: tourType.assy,
        src: AssyPlateau1, title: "Assy Plateau", duration: "Day Tour",
        photos: [Assy, AssyPlateu, Assy2, AssyPlateau],
        bestOfDescription: "Just 3 hours from Almaty, Assy Plateau rises over 2,500 meters, offering endless meadows, wildflowers, and sweeping mountain views. In summer, nomads bring their herds here, yurts dot the landscape, and rivers sparkle under the sun. Home to the Assy-Turgen Observatory, it’s perfect for hiking, horseback riding, and soaking in the pure mountain air.",
        price: "$340",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "Professional English-speaking guide",
                    "Transportation",
                    "Lunch in a local village",
                    "All entry fees"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: flagPng,
                title: "Total Distance",
                texts: [
                    "~240 km round trip"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "~11 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "09:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "May-October"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking"
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$300" },
            { peopleCount: 3, price: "$310" },
            { peopleCount: 4, price: "$330" },
            { peopleCount: 5, price: "$490" },
            { peopleCount: 6, price: "$510" },
            { peopleCount: 7, price: "$530" }
        ],
        youWillVisitTitle: "Discover the breathtaking beauty of Kazakhstan in one unforgettable day!",
        slides: [
            {
                image: Assy,
                description: "Turgen Gorge– lush valleys, waterfalls, and fresh mountain air",
            },
            {
                image: AssyPlateau,
                description: "Assy Plateau– vast highland landscapes and nomadic traditions",
            },
            {
                image: AssyPlateu,
                description:
                    "Assy-Turgen Observatory– one of the largest high-altitude observatories in the world",
            },
        ],
        itinerary: [
            {
                steps: [
                    {
                        title: "09:00",
                        description: "Depart from Almaty towards the scenic Turgen Gorge.",
                    },
                    {
                        title: "10:30",
                        description: "Begin an off-road adventure to Assy Plateau, with several photo stops along the way.",
                    },
                    {
                        title: "12:30",
                        description: "Visit the Assy-Turgen Observatory, enjoy panoramic views, and capture stunning photographs.",
                    },
                    {
                        title: "14:00",
                        description: "Lunch in a picturesque mountain setting.",
                    },
                    {
                        title: "16:30",
                        description: "Start the journey back to Almaty.",
                    },
                    {
                        title: "19:00",
                        description: "Arrival and drop-off in the city.",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
    {
        id: 4,
        type: tourType.almaty,
        src: KokTobe,
        title: "Almaty City Day Tour",
        duration: "Day Tour",
        photos: [KokTobe],
        price: "$200",
        bestOfDescription: "Discover Almaty — the cultural capital of Kazakhstan!\n" +
            "Almaty is the country’s largest and most vibrant city, famous for its museums, theatres, green parks, cozy cafés, and endless opportunities for adventure — from mountain hiking and skiing to rafting and karting.\n" +
            "On this tour, you will explore the city’s must- see attractions:\n" +
            "- Green Bazaar — dive into local culture, taste traditional delicacies, and find unique souvenirs.\n" +
            "- Panfilov Park & Zenkov Cathedral — walk among WWII memorials and admire the city’s most beautiful wooden church.\n" +
            "- National Museum & Palace of the Republic — discover history and take great photos.\n" +
            "- Kok - Tobe Mountain — enjoy breathtaking panoramic views of Almaty.\n" +
            "- Dinner at a Kazakh restaurant — end the day with delicious traditional cuisine.\n" +
            "An unforgettable mix of culture, history, and nature awaits you in Almaty!.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "Professional English-speaking guide",
                    "Transportation",
                    "All entry fees"
                ]
            },
            {
                icon: noPng,
                title: "Not Included",
                texts: [
                    "Lunch",
                    "Dinner"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "~10 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "08:30 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "Year-Round"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "National cuisine tasting"
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$220" },
            { peopleCount: 3, price: "$250" },
            { peopleCount: 4, price: "$280" },
            { peopleCount: 5, price: "$340" },
            { peopleCount: 6, price: "$370" },
            { peopleCount: 7, price: "$400" }
        ],
        itinerary: [
            {
                title: "Almaty City Tour Itinerary",
                steps: [
                    {
                        title: "09:00",
                        description: "Pick-up from your hotel/meeting point and departure.",
                    },
                    {
                        title: "09:30",
                        description: "Explore the lively Green Bazaar, a perfect place to experience local culture and shop for souvenirs.",
                    },
                    {
                        title: "10:45",
                        description: "Stroll through Panfilov Park and visit the stunning wooden Zenkov Cathedral",
                    },
                    {
                        title: "12:20",
                        description: "Stop at Republic Square, the historical and cultural heart of Almaty",
                    },
                    {
                        title: "13:00",
                        description: "Enjoy a delicious lunch at a local restaurant",
                    },
                    {
                        title: "14:15",
                        description: "Discover Kazakhstan’s rich heritage at the Statel Museum",
                    },
                    {
                        title: "16:00",
                        description: "Take memorable photos at the Palace of the Republic",
                    },
                    {
                        title: "16:30",
                        description: "Ride up to Kok-Tobe Mountain and admire breathtaking panoramic views of the city",
                    },
                    {
                        title: "18:00",
                        description: "Conclude the day with a traditional Kazakh dinner, tasting authentic national dishes",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
        highlightsTitle: "On this tour, you will explore the city’s must-see attractions:",
        highlights: [
            "Green Bazaar — dive into local culture, taste traditional delicacies, and find unique souvenirs.",
            "Panfilov Park & Zenkov Cathedral — walk among WWII memorials and admire the city’s most beautiful wooden church.",
            "National Museum & Palace of the Republic — discover history and take great photos.",
            "Kok-Tobe Mountain — enjoy breathtaking panoramic views of Almaty.",
            "Dinner at a Kazakh restaurant — end the day with delicious traditional cuisine.",
        ],
    },
    {
        id: 5,
        type: tourType.almatyTwoDay,
        src: Koktobe1,
        title: "Almaty City 2 Day Tour",
        duration: "2 Days",
        photos: [Koktobe1, AlmatyCanad, Medeu1, AlmatyStreet],
        price: "$400",
        bestOfDescription: "One of Almaty’s most striking features is its unique location at the foot of majestic mountains soaring up to 4700 meters above sea level. Here, you can admire breathtaking alpine scenery without even leaving the city.\n" +
            "On this tour, you’ll visit one of Almaty’s most iconic landmarks — Shymbulak Ski Resort — and take a scenic cable car ride up to 3, 200 meters above sea level.At this height, you’ll find yourself surrounded by snowy peaks all year round, enjoying a spectacular panorama of the mountains.\n\n" +
            "Your journey will also include:\n" +
            "Tasting traditional Kazakh dishes;\n" +
            "Sampling mountain honey and fresh horse milk at the famous Green Bazaar;\n" +
            "Strolling along the lively pedestrian street and soaking in the city’s vibrant atmosphere;\n" +
            "Learning fascinating facts and stories about Almaty from our knowledgeable tour guide.\n" +
            "Welcome to Almaty — let’s make your visit unforgettable!",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "Professional English-speaking guide",
                    "Transportation",
                    "All entry fees (including cable cars)"
                ]
            },
            {
                icon: noPng,
                title: "Not Included",
                texts: [
                    "Lunch"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "~10 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "08:30 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "Year-Round"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "National cuisine tasting"
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$490" },
            { peopleCount: 3, price: "$540" },
            { peopleCount: 4, price: "$590" },
            { peopleCount: 5, price: "$660" },
            { peopleCount: 6, price: "$710" },
            { peopleCount: 7, price: "$760" }
        ],
        itinerary: [
            {
                title: "Day 1",
                steps: [
                    {
                        title: "08:30 – 09:30",
                        description: "Pick-up from your hotel/meeting point and departure.",
                    },
                    {
                        title: "09:30 - 10:00",
                        description: "Transfer to the Shymbulak Cable Car station.",
                    },
                    {
                        title: "10:00 - 13:00",
                        description: "Scenic cable car ride to Shymbulak Ski Resort and further up to the highest point — 3,200 meters above sea level. Enjoy breathtaking mountain views, take stunning photos, and experience snow-capped peaks all year round",
                    },
                    {
                        title: "13:00 - 14:30",
                        description: "Return to the city center. Lunch at Kok Tobe, en route back, or in the city center",
                    },
                    {
                        title: "15:00 - 17:30",
                        description: "Sightseeing drive through the old city center: Opera and Ballet Theater, Republic Square Leisurely walk along Arbat pedestrian street",
                    },
                    {
                        title: "",
                        description: "Visit the Almaty Chocolate Factory brand shop for sweet souvenirs",
                    },
                    {
                        title: "18:30",
                        description: "Drop-off at your hotel or meeting point",
                    }
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
            {
                title: "Day 2",
                steps: [
                    {
                        title: "08:30 – 09:30",
                        description: "Pick-up from your hotel/meeting point and departure.",
                    },
                    {
                        title: "09:30 - 10:30",
                        description: "Transfer to Alma-Arasan for a short hike.",
                    },
                    {
                        title: "10:30 - 12:30",
                        description: "Enjoy breathtaking mountain landscapes, take stunning photos, and admire the beauty of snow-capped peaks visible year-round",
                    },
                    {
                        title: "12:30 - 14:30",
                        description: "Transfer to Ayu-Say Gorge and lunch in a scenic setting, or on the way back to the city",
                    },
                    {
                        title: "14:30 - 18:00",
                        description: "Visit Sayran Lake in the city center, a peaceful spot perfect for photos and relaxation or Explore the Green Bazaar, tasting and purchasing local delicacies such as mountain honey and horse milk",
                    },
                    {
                        title: "19:00",
                        description: "Drop-off at your hotel or meeting point",
                    }
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
        highlightsTitle: "Your journey will also include:",
        highlights: [
            "Tasting traditional Kazakh dishes;",
            "Sampling mountain honey and fresh horse milk at the famous Green Bazaar;",
            "Strolling along the lively pedestrian street and soaking in the city’s vibrant atmosphere;",
            "Learning fascinating facts and stories about Almaty from our knowledgeable tour guide.",
        ],
    },
    {
        id: 6,
        type: tourType.issykTurgen,
        src: Turgen,
        title: "Issyk Lake and Turgen Waterfall Tour",
        duration: "Half-Day Tour",
        photos: [Issyk, IssykHourse, Turgen, Turgen2], price: "$200",
        bestOfDescription: "Issyk Lake, nestled among majestic mountains, is famous for its stunning turquoise waters that can change shades several times a day — a natural phenomenon that adds to its mystery and charm. Visitors can enjoy a relaxing picnic by the lake or stop at a nearby trout farm, where you can try fishing and taste the freshly caught fish.\n\n" +
            "The Bear Waterfall, located in Turgen Gorge just 70 km from Almaty within Ile-Alatau National Park, is one of the area’s highlights. Turgen Gorge is home to seven waterfalls, but the Bear Waterfall is the most popular due to its easy 30-minute walking access. Along the way, you’ll encounter a lively mountain river, quaint wooden bridges, scenic picnic spots, and breathtaking mountain views. In summer, the gorge transforms into a lush paradise, carpeted with vibrant greenery, wildflowers, and fragrant herbs.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "English-speaking guide",
                    "Transportation",
                    "All entry fees"
                ]
            },
            {
                icon: noPng,
                title: "Not Included",
                texts: [
                    "Lunch"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: flagPng,
                title: "Total Distance",
                texts: [
                    "150 km from Almaty and back"
                ]
            }, {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "9-10 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "09:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "April-November"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "Hiking"
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$230" },
            { peopleCount: 3, price: "$250" },
            { peopleCount: 4, price: "$270" },
            { peopleCount: 5, price: "$300" },
            { peopleCount: 6, price: "$320" },
            { peopleCount: 7, price: "$350" }
        ],
        itinerary: [
            {
                steps: [
                    {
                        title: "09:00",
                        description: "Pick-up from Almaty and drive to Turgen Gorge.",
                    },
                    {
                        title: "11:00",
                        description: "Short hike to the Bear Waterfall, with time to enjoy the views and take photos.",
                    },
                    {
                        title: "12:45",
                        description: "Departure from the gorge and transfer to Issyk Lake (Lunch)",
                    },
                    {
                        title: "14:15",
                        description: "Visit Issyk Lake: enjoy the scenery, take a leisurely walk, and capture beautiful photographs",
                    },
                    {
                        title: "16:00",
                        description: "Departure from the lake and return to Almaty",
                    },
                    {
                        title: "18:00",
                        description: "Drop-off in the city",
                    }
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
    {
        id: 7,
        type: tourType.bigAlmatyLake,
        src: BigAlmatyLake,
        title: "Big Almaty Lake",
        duration: "Day Tour",
        photos: [BigAlmatyLake, BigAlmatyLake2, Baomotor, Baoo],
        price: "$200",
        bestOfDescription: "Since March 2020, access to the Big Almaty Lake by private vehicles has been closed indefinitely. Currently, tourists can only reach the lake on foot. But If you’re planning to visit between May and October, it’s possible to rent motorcycles and quad bikes.\n" +
            "Perched at an altitude of 2, 500 meters in the heart of the majestic Trans- Ili Alatau mountains, the Big Almaty Lake dazzles with its turquoise waters.Born from the forces of an ancient earthquake, this breathtaking natural wonder has become one of Almaty’s most cherished symbols, leaving an unforgettable impression on all who visit.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "Professional English-speaking guide",
                    "Comfortable transportation",
                    "All entry fees"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "Approximately 7 hours by car and on foot, and 5 hours by motorcycle or quad bike"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "08:30 AM (Almaty)"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English | Russian"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "Extreme Adventure"
                ]
            }
        ],
        priceList: [
            {
                accommodation: "The price applies if you would like to reach the lake on foot",
                prices: [
                    {
                        peopleCount: "2",
                        price: "$240"
                    },
                    {
                        peopleCount: "3",
                        price: "$250"
                    },
                    {
                        peopleCount: "4",
                        price: "$260"
                    },
                    {
                        peopleCount: "5",
                        price: "$340"
                    },
                    {
                        peopleCount: "6",
                        price: "$350"
                    },
                    {
                        peopleCount: "7",
                        price: "$360"
                    }
                ]
            },
            {
                accommodation: "The price applies if you’d like to reach the lake by motorcycle or quad bike",
                priceTitle: "Motorcycle",
                prices: [
                    {
                        peopleCount: "1",
                        price: "$280"
                    },
                    {
                        peopleCount: "2",
                        price: "$350"
                    },
                    {
                        peopleCount: "3",
                        price: "$420"
                    },
                    {
                        peopleCount: "4",
                        price: "$490"
                    },
                    {
                        peopleCount: "5",
                        price: "$590"
                    },
                    {
                        peopleCount: "6",
                        price: "$660"
                    }
                ],
                secondPriceTitle: "Quad Bike",
                secondPrices: [
                    {
                        peopleCount: "1",
                        price: "$350"
                    },
                    {
                        peopleCount: "2",
                        price: "$440"
                    },
                    {
                        peopleCount: "3",
                        price: "$530"
                    },
                    {
                        peopleCount: "4",
                        price: "$620"
                    },
                    {
                        peopleCount: "5",
                        price: "$710"
                    },
                    {
                        peopleCount: "6",
                        price: "$800"
                    }
                ]
            }
        ],
        itinerary: [
            {
                steps: [
                    {
                        title: "08:30",
                        description: "Pick-up from your location in Almaty.",
                    },
                    {
                        title: "",
                        description: "Scenic drive to the entrance of the National Park.",
                    },
                    {
                        title: "",
                        description: "Explore the Big Almaty Lake – enjoy a leisurely walk, breathtaking views, and several picturesque photo stops",
                    },
                    {
                        title: "",
                        description: "Departure from the lake",
                    },
                    {
                        title: "",
                        description: "Stop at the Ayusai Visitor Center – learn about the area, enjoy a cup of coffee, and browse for souvenirs",
                    },
                    {
                        title: "",
                        description: "Return journey to Almaty",
                    },
                    {
                        title: "18:00",
                        description: "Drop-off at your location",
                    }
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
    {
        id: 8,
        type: tourType.altynEmelTwoDayJeepTour,
        src: AltynEmell,
        title: "Altyn Emel National Park 2 Days Jeep Tour",
        duration: "2 Days",
        price: "$440",
        photos: [AltynEmel2, AltynEmelNationalPark2, AltynEmelMoun, AltynEmelNationalPark],
        bestOfDescription: "This tour is perfect for travelers eager to discover the most iconic sights of Altyn Emel National Nature Park. You’ll visit natural wonders such as the Singing Dune, the colorful Aktau Mountains, the rugged Katutau Mountains, and the legendary 700-year-old “Tree” Here, surreal and otherworldly landscapes will make you feel as if you’ve stepped onto another planet, with every view looking almost unreal.\n\n" +
            "Your journey will take you into one of Kazakhstan’s largest national parks, covering 3,076 sq.km.Its name, Altyn Emel, translates as “Golden Saddle.” The park’s territory is a unique mix of mountain ranges, sand dunes, gravel plains, and clay deserts.In 2017, Altyn Emel was granted UNESCO Biosphere Reserve status, recognizing its outstanding natural value and biodiversity.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "Professional English-speaking guide",
                    "Comfortable transportation",
                    "All entry fees",
                    "Home-cooked food: Breakfast x 1, Lunch x 2, Dinner x 1",
                    "Guesthouse accommodation in a private room"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or phone charger/power bank",
                    "Medicine if necessary: allergies, personal demand, etc.",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: flagPng,
                title: "Total Distance",
                texts: [
                    "800 km from round trip"
                ]
            }, {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "2 Days / 1 Night"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "08:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "April-November"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "Hiking"
                ]
            },
            {
                icon: lightningPng,
                title: "Difficulty",
                texts: [
                    "Mig-High"
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$710" },
            { peopleCount: 3, price: "$760" },
            { peopleCount: 4, price: "$810" },
        ],
        itinerary: [
            {
                title: "Tour Itinerary. Day 1",
                steps: [
                    {
                        title: "08:00",
                        description: "Pick-up from Almaty and departure.",
                    },
                    {
                        title: "",
                        description: "Arrive in Basshy village and enjoy lunch.",
                    },
                    {
                        title: "",
                        description: "Visit the Altyn Emel National Park Museum",
                    },
                    {
                        title: "",
                        description: "Drive to the Katutau and Aktau Mountains",
                    },
                    {
                        title: "",
                        description: "Stop to see the ancient 700-year-old willow tree",
                    },
                    {
                        title: "",
                        description: "Explore the Aktau Mountains with a circular hike to the most scenic viewpoints",
                    },
                    {
                        title: "",
                        description: "Walk through the rugged landscapes of the Katutau Mountains",
                    },
                    {
                        title: "19:00",
                        description: "Return to Basshy village, check in to your accommodation, and have dinner",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
            {
                title: "Tour Itinerary. Day 2",
                steps: [
                    {
                        title: "08:00",
                        description: "Breakfast",
                    },
                    {
                        title: "",
                        description: "Drive to the famous Singing Dune.",
                    },
                    {
                        title: "",
                        description: "Climb to the top of the dune, take in the panoramic views, and listen to its unique “singing” sound",
                    },
                    {
                        title: "",
                        description: "Stop at the historic Oshaktas Stone Steles",
                    },
                    {
                        title: "13:00",
                        description: "Lunch",
                    },
                    {
                        title: "",
                        description: "Begin the return trip to Almaty",
                    },
                    {
                        title: "18:00",
                        description: "Arrival in Almaty and drop-off",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
    {
        id: 9,
        type: tourType.altynEmelCharynKolsayKaiyndyFourDayJeepTour,
        src: Charyn2,
        title:
            "4-day Jeep Adventure: Altyn Emel, Charyn Canyon, Kolsai & Kaindy Lakes",
        duration: "4 Days",
        price: "$1190",
        photos: [Charyn2, Kolsay1, KaiyndyLake, AltynEmelNationalPark],
        bestOfDescription:
            "<strong>4-Day Tour Around Almaty Region</strong>\n" +
            "This 4-day journey is the best way to discover the most stunning natural landmarks of the Almaty region during the warm season.The tour includes more time in the mountains, with plenty of hiking opportunities and unique landscapes.\n\n" +
            "<strong>Day 1 – Altyn Emel</strong>\n" +
            "National Park We start our adventure with a trip to Altyn Emel National Park, one of the largest in Kazakhstan.Here, we visit the incredible Aktau Mountains, often called the “Geological Museum under the open sky.” From a distance, the hills look white, but up close you’ll see layers of red, yellow, and white clay, along with sparkling crystals of calcite and selenite.The whole landscape feels otherworldly and surreal.\n\n" +
            "<strong>Day 2 – Singing Dune & Charyn Canyon</strong>\n" +
            "After driving along a gravel road, we reach the famous Singing Dune, a natural wonder that produces a humming sound – from a soft squeak to the deep notes of an organ – when the sand is dry.\n" +
            "Next, we continue to one of the most iconic places in Kazakhstan – Charyn Canyon, known as the Valley of the Castles.Over millions of years, wind and water shaped red rocks into giant “palaces,” “towers,” and “minarets.” The canyon is about 1.5 km long and 150 m deep, offering breathtaking views and an unforgettable walk.\n" +
            "In the evening, we arrive at Saty village, where a warm dinner of traditional Kazakh cuisine awaits us, prepared by hospitable locals.\n\n" +
            "<strong>Day 3 – Kolsay Lakes</strong>\n" +
            "After breakfast, we head to the beautiful Lower Kolsay Lake, located at an altitude of 1, 818 m.Surrounded by dense forests and mountains, it’s the perfect place for walking, boating, or simply enjoying nature.\n" +
            "From here, we begin a longer hike(or optional horseback ride) to the Middle Kolsay Lake, sitting at 2, 252 m above sea level.The 8 km route takes around 3–4 hours each way, rewarding you with unforgettable mountain views and crystal - clear water.\n\n" +
            "<strong>Day 4 – Kaindy Lake</strong>\n" +
            "Our final day takes us to the mystical Kaindy Lake, famous for the submerged forest – tree trunks rising straight from the water’s surface.The atmosphere here is both beautiful and mysterious, making it a favorite for travelers from around the world.\n" +
            "This tour leaves a lasting impression – the peace, beauty, and powerful energy of these natural wonders are something you will never forget.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "English-speaking guide",
                    "Transportation",
                    "All entry fees",
                    "Home-cooked food: Breakfast x 3, Lunch x 4, Dinner x 3",
                    "Guesthouse or yurt accommodation in a private room"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary: allergies, personal demand, etc.",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: flagPng,
                title: "Total Distance",
                texts: [
                    "1200 km from round trip"
                ]
            }, {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "4 Days / 3 Night"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "08:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "May-October"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English | Russian"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "Hiking",
                    "Horse Riding",
                    "Boating"
                ]
            },
            {
                icon: lightningPng,
                title: "Difficulty",
                texts: [
                    "Mig-High"
                ]
            }
        ],
        priceList: [
            {
                type: "Economy",
                accommodation: "Meals: Breakfast x 3, Lunch x 4, Dinner x 3\n\n" +
                    "Accommodation: 1st night - guesthouse in the village, 2nd and 3rd nights - guesthouse or yurt(extra charge may apply)",
                prices: [
                    {
                        peopleCount: "1",
                        price: "$1190"
                    },
                    {
                        peopleCount: "2",
                        price: "$1340"
                    },
                    {
                        peopleCount: "3",
                        price: "$1490"
                    },
                    {
                        peopleCount: "4",
                        price: "$1640"
                    }
                ]
            },
            {
                type: "Comfort",
                accommodation: "Meals: Breakfast x 3, Lunch x 4, Dinner x 1\n\n" +
                    "❌ Dinner on the 2nd / 3rd days is not included and available in the hotel's cafe\n\n" +
                    "✅ Accommodation: 1st night - guesthouse in the village, 2nd / 3rd nights - hotel with the Lake view",
                prices: [
                    {
                        peopleCount: "1",
                        price: "$1660"
                    },
                    {
                        peopleCount: "2",
                        price: "$1700"
                    },
                    {
                        peopleCount: "3",
                        price: "$1840"
                    },
                    {
                        peopleCount: "4",
                        price: "$2040"
                    }
                ]
            }
        ],
        itinerary: [
            {
                title: "Tour Itinerary. Day 1",
                description: "Almaty – Altyn Emel National Park",
                steps: [
                    {
                        title: "08:00",
                        description: "Pick-up and departure from Almaty.",
                    },
                    {
                        title: "",
                        description: "Arrival at Basshy village, lunch",
                    },
                    {
                        title: "",
                        description: "Visit to the Altyn Emel National Park Museum",
                    },
                    {
                        title: "",
                        description: "Excursion to the Aktau Mountains – colorful hills, hiking/walking",
                    },
                    {
                        title: "",
                        description: "Visit to the Katutau Mountains – unique volcanic landscapes, walking tour",
                    },
                    {
                        title: "20:00",
                        description: "Return to Basshy village, accommodation, dinner",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
            {
                title: "Tour Itinerary. Day 2",
                description: "Singing Dune – Charyn Canyon – Saty village",
                steps: [
                    {
                        title: "08:00",
                        description: "Breakfast, check-out.",
                    },
                    {
                        title: "",
                        description: "Trip to the Singing Dune, climbing to the top",
                    },
                    {
                        title: "",
                        description: "Stop at the 700-year-old willow tree",
                    },
                    {
                        title: "",
                        description: "Exit from Altyn Emel National Park",
                    },
                    {
                        title: "",
                        description: "Lunch at a local café in Chundzha village",
                    },
                    {
                        title: "",
                        description: "Excursion to Charyn Canyon, Valley of the Castles – walking 1.5 km along the canyon floor, visiting panoramic spots",
                    },
                    {
                        title: "19:00",
                        description: "Arrival in Saty village, accommodation, dinner",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
            {
                title: "Tour Itinerary. Day 3",
                description: "Kolsay Lakes",
                steps: [
                    {
                        title: "08:00",
                        description: "Breakfast.",
                    },
                    {
                        title: "",
                        description: "Trip to the Kolsay Lakes National Park",
                    },
                    {
                        title: "",
                        description: "Visit to the Lower (First) Kolsay Lake – walking, optional boating",
                    },
                    {
                        title: "",
                        description: "Optional 3-hour / 8 km hike or horseback ride to the Middle (Second) Kolsay Lake",
                    },
                    {
                        title: "",
                        description: "Rest and enjoy the views at the Middle Lake",
                    },
                    {
                        title: "",
                        description: "Return to the Lower Lake",
                    },
                    {
                        title: "18:00",
                        description: "Arrival in Saty village, accommodation, dinner",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
            {
                title: "Tour Itinerary. Day 4",
                description: "Kaiyndy Lake – Return to Almaty",
                steps: [
                    {
                        title: "08:00",
                        description: "Breakfast, check-out.",
                    },
                    {
                        title: "",
                        description: "Trip to Kaiyndy Lake – walking or horseback riding (optional), visiting scenic spots",
                    },
                    {
                        title: "",
                        description: "Lunch at a guesthouse in Saty village",
                    },
                    {
                        title: "",
                        description: "Departure from Kolsay Lakes National Park",
                    },
                    {
                        title: "",
                        description: "Stop at the Black Canyon viewpoint",
                    },
                    {
                        title: "",
                        description: "Return to Almaty",
                    },
                    {
                        title: "18:00",
                        description: "Drop-off",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
    {
        id: 10,
        type: tourType.tamgaly,
        src: Tamgaly,
        title: "Tamgaly Tas Petroglyphs & Nomad City",
        duration: "Day Tour",
        price: "$440",
        photos: [Tamgaly, Tamgaly3, Tamgaly4, TamgalyTass],
        bestOfDescription: "Tamgaly Tas is a unique open-air site where you can see ancient petroglyphs and Buddhist rock paintings dating back to the 17th century. Recognized as a UNESCO World Heritage Site since 2004, it lies on the picturesque banks of the Ili River, combining rich history with stunning natural scenery. The mysterious civilization disappeared, not having survived till our days, but left more than 4,000 drawings in which displayed their life and worldview." + "\n"
            + "Just across the river, you will find Nomad City – a film set built in 2005 for the movie Nomad. Today it stands as an open-air museum, where visitors can step into the atmosphere of the medieval Kazakh steppes and experience the feeling of traveling back in time.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "Professional English-speaking guide",
                    "Transportation",
                    "All entry fees",
                    "Lunch"
                ]
            },
            {
                icon: noPng,
                title: "Not Included",
                texts: [
                    "Lunch"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate outerwear",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or phone charger/power bank",
                    "Medicine if necessary: allergies, personal demand, etc.",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: flagPng,
                title: "Total Distance",
                texts: [
                    "360 km from round trip"
                ]
            }, {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "9 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "09:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "March-October"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English | Russian"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking"
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$260" },
            { peopleCount: 3, price: "$280" },
            { peopleCount: 4, price: "$300" },
            { peopleCount: 5, price: "$330" },
            { peopleCount: 6, price: "$350" },
            { peopleCount: 7, price: "$370" }
        ],
        itinerary: [
            {
                steps: [
                    {
                        title: "09:00",
                        description: "Pick-up from your hotel in Almaty.",
                    },
                    {
                        title: "",
                        description: "Drive to Tanbaly natural boundary.",
                    },
                    {
                        title: "",
                        description: "Guided tour of the Tanbaly Petroglyphs (UNESCO World Heritage Site) and visit to the museum",
                    },
                    {
                        title: "",
                        description: "Lunch break",
                    },
                    {
                        title: "",
                        description: "Transfer to Nomad City film set, exploring the medieval-style scenery"
                    },
                    {
                        title: "",
                        description: "Return journey to Almaty",
                    },
                    {
                        title: "18:00",
                        description: "Drop-off at your hotel",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
    {
        id: 11,
        type: tourType.almaArasanAyusai,
        src: AlmaArasann,
        title: "Alma-Arasan & Ayusai Mountain Gorges Day Tour",
        duration: "Day Tour",
        price: "$440",
        photos: [AlmaArasan, Almaarasans, Almaarasanile, AlmaArasnc],
        bestOfDescription: "This tour is perfect for travelers who want to experience the beauty of the mountains without leaving the city far behind. In just one day, you’ll explore two stunning mountain gorges, enjoy the fresh scent of local plants, and listen to the soothing sound of mountain rivers that flow all year round—even in winter. And for an unforgettable highlight, you can relax in a steaming hot tub filled with water from natural underground springs, surrounded by snow and crisp mountain air.\n\n" +
            "Alma- Arasan Gorge – A charming mountain valley in the southwest of Almaty, located 1, 780 meters above sea level on the slopes of the Trans - Ili Alatau.Its name comes from the Kazakh words alma(apple) and arasan(hot spring), as this area has long been known for its warm springs and wild apple trees.\n\n" +
            "Ayusai Gorge – Another beautiful mountain gorge, whose name means “Bear’s Gorge” in Kazakh, offering peaceful scenery and pure mountain air.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "Professional English-speaking guide",
                    "Transportation",
                    "All entry fees"
                ]
            },
            {
                icon: noPng,
                title: "Not Included",
                texts: [
                    "Lunch",
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate outerwear",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or phone charger/power bank",
                    "Medicine if necessary: allergies, personal demand, etc.",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "7-8 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "09:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "Year-Round"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English | Russian"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "Hiking"
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$170" },
            { peopleCount: 3, price: "$180" },
            { peopleCount: 4, price: "$190" },
            { peopleCount: 5, price: "$240" },
            { peopleCount: 6, price: "$250" },
            { peopleCount: 7, price: "$260" }
        ],
        itinerary: [
            {
                steps: [
                    {
                        title: "09:00",
                        description: "Pick-up from your hotel and departure.",
                    },
                    {
                        title: "",
                        description: "Arrive at Alma-Arasan Gorge and start the walking trail.",
                    },
                    {
                        title: "",
                        description: "Enjoy a short hike followed by a relaxing soak in the natural hot springs",
                    },
                    {
                        title: "",
                        description: "Return to the car and continue the journey",
                    },
                    {
                        title: "13:00 – 14:00",
                        description: "Arrive at Ayusai Gorge, visit the Visitor Center, and have lunch at a local café",
                    },
                    {
                        title: "",
                        description: "Take a short hike to the picturesque Ayusai Waterfall",
                    },
                    {
                        title: "16:00 - 17:00",
                        description: "Depart for Almaty and drop-off at your hotel",
                    }
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
    {
        id: 12,
        type: tourType.kokZhailau,
        src: KokZhailau,
        title: "Kok Zhailau",
        duration: "Half-Day Tour",
        photos: [KokZhailau],
        price: "$200",
        bestOfDescription: "Rent a motorcycle or quad bike (between May and October) for a 3-hour adventure to Kok Zhailau, one of Almaty’s most stunning mountain plateaus. The trip includes one hour riding up through scenic forest trails, one hour to relax and enjoy breathtaking views of the city and the Trans-Ili Alatau mountains, and one hour to return.\n" +
            "It’s also possible to reach Kok Zhailau partly by car and partly on foot(year- round) — a great option for those who enjoy hiking and want to experience the mountain’s beauty at a slower pace.Whether you choose an adrenaline - filled ride or a peaceful walk through nature, Kok Zhailau offers unforgettable views, fresh air, and true mountain tranquility.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "Professional English-speaking guide",
                    "Comfortable transportation",
                    "All entry fees",
                    "Motorcycle or quad bike"
                ]
            },
            {
                icon: noPng,
                title: "Not Included",
                texts: [
                    "Lunch"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary: allergies, personal demand, etc.",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "Approximately 7 hours on foot and 5 hours by motorcycle or quad bike"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "09:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "May-October"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English | Russian"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "Extreme Adventure"
                ]
            }
        ],
        priceList: [
            {
                accommodation: "The price applies if you would like to reach Kok Zhailau on foot",
                prices: [
                    {
                        peopleCount: "2",
                        price: "$240"
                    },
                    {
                        peopleCount: "3",
                        price: "$250"
                    },
                    {
                        peopleCount: "4",
                        price: "$260"
                    },
                    {
                        peopleCount: "5",
                        price: "$340"
                    },
                    {
                        peopleCount: "6",
                        price: "$350"
                    },
                    {
                        peopleCount: "7",
                        price: "$360"
                    }
                ]
            },
            {
                accommodation: "The price applies if you’d like to reach Kok Zhailau by motorcycle or quad bike",
                priceTitle: "Motorcycle",
                prices: [
                    {
                        peopleCount: "1",
                        price: "$280"
                    },
                    {
                        peopleCount: "2",
                        price: "$350"
                    },
                    {
                        peopleCount: "3",
                        price: "$420"
                    },
                    {
                        peopleCount: "4",
                        price: "$490"
                    },
                    {
                        peopleCount: "5",
                        price: "$590"
                    },
                    {
                        peopleCount: "6",
                        price: "$660"
                    }
                ],
                secondPriceTitle: "Quad Bike",
                secondPrices: [
                    {
                        peopleCount: "1",
                        price: "$350"
                    },
                    {
                        peopleCount: "2",
                        price: "$440"
                    },
                    {
                        peopleCount: "3",
                        price: "$530"
                    },
                    {
                        peopleCount: "4",
                        price: "$620"
                    },
                    {
                        peopleCount: "5",
                        price: "$710"
                    },
                    {
                        peopleCount: "6",
                        price: "$800"
                    }
                ]
            }
        ],
        itinerary: [
            {
                steps: [
                    {
                        title: "09:00",
                        description: "Pick-up from your location in Almaty.",
                    },
                    {
                        title: "",
                        description: "Scenic drive to the entrance of the National Park.",
                    },
                    {
                        title: "",
                        description: "Explore the Kok Zhailau – enjoy a leisurely walk, breathtaking views, and several picturesque photo stops",
                    },
                    {
                        title: "",
                        description: "Departure from Kok Zhailau",
                    },
                    {
                        title: "",
                        description: "Return journey to Almaty",
                    },
                    {
                        title: "16:00",
                        description: "Drop-off at your location",
                    }
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
    {
        id: 13,
        type: tourType.auylEtno,
        src: BizdinAuyl,
        title: "Bizdin Auyl Etno Camp",
        duration: "Day Tour",
        price: "$440",
        photos: [BizdinAuyl, BizdinAuyl2, BizdinAuyl3, BizdinAuyl4],
        bestOfDescription: "At “Bizdin Aul”, you can enjoy walking in the fresh mountain air, horseback riding, archery, picking strawberries and raspberries, relaxing while admiring the mountain views, experiencing the authentic atmosphere of a Kazakh village, and exploring a traditional yurt.",
        touristInfo: [
            {
                icon: yesPng,
                title: "Included",
                texts: [
                    "English-speaking guide",
                    "Transportation",
                    "All entry fees",
                    "Horseback Riding (15 minutes free)",
                    "Archery",
                    "Raspberry picking, Strawberry picking (an extra fee applies for takeaway)",
                ]
            },
            {
                icon: noPng,
                title: "Not Included",
                texts: [
                    "Lunch"
                ]
            },
            {
                icon: bagPng,
                title: "What to Bring",
                texts: [
                    "Comfortable walking shoes",
                    "Weather/Season-appropriate",
                    "Hat & Sunglasses",
                    "Drinking water & snacks",
                    "Camera or power bank",
                    "Medicine if necessary: allergies, personal demand, etc.",
                    "Positive energy & good mood!",
                ]
            },
        ],
        tourInfo: [
            {
                icon: pinPng,
                title: "Starting / Ending Point",
                texts: [
                    "Almaty City"
                ]
            },
            {
                icon: clockPng,
                title: "Duration",
                texts: [
                    "Approximately 8 hours"
                ]
            },
            {
                icon: timerPng,
                title: "Start Time",
                texts: [
                    "09:00 AM (Almaty)"
                ]
            },
            {
                icon: cloudPng,
                title: "Season",
                texts: [
                    "April-October"
                ]
            },
            {
                icon: circlePng,
                title: "Language",
                texts: [
                    "English"
                ]
            },
            {
                icon: smilePng,
                title: "Activities",
                texts: [
                    "Sightseeing",
                    "Walking",
                    "Horseback Riding",
                    "Archery",
                    "Raspberry Picking",
                    "Strawberry Picking",
                    "Relaxation"
                ]
            }
        ],
        prices: [
            { peopleCount: 2, price: "$250" },
            { peopleCount: 3, price: "$275" },
            { peopleCount: 4, price: "$290" },
            { peopleCount: 5, price: "$330" },
            { peopleCount: 6, price: "$355" },
            { peopleCount: 7, price: "$380" }
        ],
        itinerary: [
            {
                steps: [
                    {
                        title: "09:00",
                        description: "Pick-up from your location in Almaty",
                    },
                    {
                        title: "11:00",
                        description: "Bizdin auyl",
                    },
                    {
                        title: "13:00",
                        description: "Lunch at Bizdin Auyl",
                    },
                    {
                        title: "15:00",
                        description: "Return journey to Almaty",
                    },
                    {
                        title: "17:30",
                        description: "Drop-off at your location",
                    },
                ],
                underText: "The order of visits may be adjusted, or certain sites skipped, depending on seasonal changes, weather conditions, or other factors beyond our control. The route can be adjusted or expanded to suit your preferences. If there’s an attraction you’d like to visit that isn’t included in the program, simply let us know — we’ll do our best to make it happen and provide you with all the available options."
            },
        ],
    },
];