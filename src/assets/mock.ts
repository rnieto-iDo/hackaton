import {
  ITravel,
  ITravelLite,
} from "../features/travels/Utils/travelInterfaces";

export const tagList = [
  {
    name: "Wifi",
    icon: "wifi",
  },
  {
    name: "Kitchen",
    icon: "kitchen",
  },
  {
    name: "Valet parking",
    icon: "car",
  },
  {
    name: "Shampoo",
    icon: "shower",
  },
  {
    name: "Working area",
    icon: "working area",
  },
  {
    name: "Wifi",
    icon: "wifi",
  },
  {
    name: "Kitchen",
    icon: "kitchen",
  },
  {
    name: "Valet parking",
    icon: "car",
  },
  {
    name: "Shampoo",
    icon: "shower",
  },
  {
    name: "Working area",
    icon: "working area",
  },
  {
    name: "Wifi",
    icon: "wifi",
  },
  {
    name: "Kitchen",
    icon: "kitchen",
  },
  {
    name: "Valet parking",
    icon: "car",
  },
  {
    name: "Shampoo",
    icon: "shower",
  },
  {
    name: "Working area",
    icon: "working area",
  },
];

export const TRAVEL_LIST: ITravelLite[] = [
  {
    id: 3,
    status: "pending",
    origin: "Managua",
    adults: 1,
    children: 0,
    pets: 0,
    meta: [
      {
        destination: "San Jose, San Jose, Costa Rica",
        arrival_date: "2024-06-13",
        departure_date: "2024-06-19",
      },
      {
        destination: "Heredia, Heredia, Costa Rica",
        arrival_date: "2024-06-19",
        departure_date: "2024-06-24",
      },
    ],
  },
  {
    id: 4,
    status: "pending",
    origin: "Managua",
    adults: 1,
    children: 0,
    pets: 0,
    meta: [
      {
        destination: "San Jose, San Jose, Costa Rica",
        arrival_date: "2024-06-13",
        departure_date: "2024-06-19",
      },
      {
        destination: "Heredia, Heredia, Costa Rica",
        arrival_date: "2024-06-19",
        departure_date: "2024-06-24",
      },
    ],
  },
  {
    id: 5,
    status: "pending",
    origin: "Managua",
    adults: 1,
    children: 0,
    pets: 0,
    meta: [
      {
        destination: "San Jose, San Jose, Costa Rica",
        arrival_date: "2024-06-13",
        departure_date: "2024-06-19",
      },
      {
        destination: "Heredia, Heredia, Costa Rica",
        arrival_date: "2024-06-19",
        departure_date: "2024-06-24",
      },
    ],
  },
];

export const TRAVEL: ITravel = {
  id: 4,
  status: "pending",
  origin: "Managua",
  adults: 1,
  children: 0,
  pets: 0,
  destinations: [
    {
      id: 3,
      destination: "San Jose, San Jose, Costa Rica",
      arrival_date: "2024-06-13",
      departure_date: "2024-06-19",
      destinations: {
        hotel: [
          {
            id: 2,
            agency_id: 1,
            agency_name: "Qui",
            name: "Nihil voluptas veritatis distinctio voluptatum qui.",
            description:
              "Voluptatum eius dolorem quae vero quo. Rerum eos itaque numquam blanditiis aliquam omnis. Blanditiis voluptatem enim velit maiores suscipit.",
            location: "-44.179077,49.66766",
            address: "559 Clarabelle Rapids Suite 622\nGoyetteview, UT 84897",
            phone_number: "+1-720-237-3088",
            cover: "https://via.placeholder.com/640x480.png/000099?text=ex",
            logo: "https://via.placeholder.com/640x480.png/00ff88?text=quam",
            city: "San José Province",
            country: "Costa Rica",
            state: "San José",
            type: "hotel",
            category: "cultural",
            status: "open",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 7,
                name: "est",
              },
              {
                id: 8,
                name: "quo",
              },
              {
                id: 10,
                name: "ad",
              },
            ],
          },
        ],
        restaurant: [
          {
            id: 1,
            agency_id: 1,
            agency_name: "Qui",
            name: "Error voluptatem inventore eveniet recusandae necessitatibus vel fugiat.",
            description:
              "Ducimus ea eum inventore voluptates sunt. Doloremque itaque molestiae temporibus soluta accusantium. Inventore magnam dignissimos et veritatis optio aperiam veniam.",
            location: "-35.280654,-19.734007",
            address: "91981 Kilback Knolls\nLake Darryl, CO 78674-0588",
            phone_number: "+16577870590",
            cover: "https://via.placeholder.com/640x480.png/00ffcc?text=saepe",
            logo: "https://via.placeholder.com/640x480.png/00dd00?text=ea",
            city: "San José Province",
            country: "Costa Rica",
            state: "San José",
            type: "restaurant",
            category: "gastronomic",
            status: "open",
            age_restriction: 18,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 3,
                name: "architecto",
              },
              {
                id: 6,
                name: "accusamus",
              },
            ],
          },
          {
            id: 13,
            agency_id: 2,
            agency_name: "Qui",
            name: "Dolor et maxime omnis autem hic.",
            description:
              "Est earum perspiciatis rerum. Molestiae nemo ut reiciendis voluptates ratione. Omnis velit consequatur consequatur error sapiente.",
            location: "64.88884,168.853905",
            address: "976 Runte Islands Suite 686\nHarberfurt, AR 28570",
            phone_number: "+1 (509) 986-7971",
            cover: "https://via.placeholder.com/640x480.png/00ffcc?text=a",
            logo: "https://via.placeholder.com/640x480.png/00ff44?text=qui",
            city: "San José Province",
            country: "Costa Rica",
            state: "San José",
            type: "restaurant",
            category: "cultural",
            status: "open",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 6,
                name: "accusamus",
              },
            ],
          },
        ],
        tour: [
          {
            id: 4,
            agency_id: 1,
            agency_name: "Qui",
            name: "Praesentium quam ab molestias et ipsa magnam molestiae at.",
            description:
              "Tempora quos tenetur voluptates unde amet aperiam ex. Vel consectetur consequuntur at.",
            location: "88.272974,67.787598",
            address: "84694 Laila Station\nSheridanshire, ME 30482-1993",
            phone_number: "818.803.1267",
            cover: "https://via.placeholder.com/640x480.png/005588?text=sed",
            logo: "https://via.placeholder.com/640x480.png/00ffaa?text=error",
            city: "San José Province",
            country: "Costa Rica",
            state: "San José",
            type: "tour",
            category: "cultural",
            status: "open",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 1,
                name: "natus",
              },
              {
                id: 3,
                name: "architecto",
              },
              {
                id: 4,
                name: "voluptatem",
              },
              {
                id: 5,
                name: "blanditiis",
              },
              {
                id: 9,
                name: "aperiam",
              },
            ],
          },
          {
            id: 19,
            agency_id: 1,
            agency_name: "Qui",
            name: "Non debitis a iusto ut.",
            description:
              "Error labore illo alias. Aliquid tempore et et aliquid nihil laboriosam sunt. Et voluptatem et vitae. Dolores recusandae possimus quisquam nostrum perferendis voluptate. Id nam ratione vel.",
            location: "81.43044,-141.14197",
            address: "43800 Graham Forges Apt. 443\nEast Marysehaven, MS 39315",
            phone_number: "678-816-4804",
            cover:
              "https://via.placeholder.com/640x480.png/0088ff?text=nesciunt",
            logo: "https://via.placeholder.com/640x480.png/0066bb?text=est",
            city: "San José Province",
            country: "Costa Rica",
            state: "San José",
            type: "tour",
            category: "cultural",
            status: "closed",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 3,
                name: "architecto",
              },
              {
                id: 5,
                name: "blanditiis",
              },
              {
                id: 6,
                name: "accusamus",
              },
              {
                id: 8,
                name: "quo",
              },
              {
                id: 9,
                name: "aperiam",
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      destination: "Heredia, Heredia, Costa Rica",
      arrival_date: "2024-06-19",
      departure_date: "2024-06-24",
      destinations: {
        hotel: [
          {
            id: 14,
            agency_id: 1,
            agency_name: "Qui",
            name: "Ratione autem esse autem reprehenderit minus aliquid ex.",
            description:
              "Nam tempora officiis voluptas quos sunt minima. Labore explicabo consequatur eligendi reprehenderit. Aut et voluptatem architecto adipisci.",
            location: "-36.925399,80.922108",
            address: "65069 Lind Cove\nMaggieland, MA 68722",
            phone_number: "678-246-3837",
            cover: "https://via.placeholder.com/640x480.png/002277?text=et",
            logo: "https://via.placeholder.com/640x480.png/00aabb?text=quo",
            city: "Heredia Province",
            country: "Costa Rica",
            state: "Heredia",
            type: "hotel",
            category: "gastronomic",
            status: "open",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 9,
                name: "aperiam",
              },
            ],
          },
        ],
        restaurant: [
          {
            id: 6,
            agency_id: 1,
            agency_name: "Qui",
            name: "Deleniti fuga quia sunt laborum esse amet.",
            description:
              "Nisi recusandae eligendi ut sapiente voluptatem qui. Harum quibusdam qui quia voluptas eos aut. Et debitis id voluptas illum.",
            location: "-6.889101,-87.048325",
            address: "434 Kaylee Haven\nErinberg, IN 25893-4087",
            phone_number: "+1-860-799-5374",
            cover: "https://via.placeholder.com/640x480.png/005577?text=nobis",
            logo: "https://via.placeholder.com/640x480.png/004466?text=sit",
            city: "Heredia Province",
            country: "Costa Rica",
            state: "Heredia",
            type: "restaurant",
            category: "cultural",
            status: "open",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 7,
                name: "est",
              },
              {
                id: 9,
                name: "aperiam",
              },
              {
                id: 10,
                name: "ad",
              },
            ],
          },
          {
            id: 15,
            agency_id: 1,
            agency_name: "Qui",
            name: "Ea voluptas enim inventore nisi in culpa esse.",
            description:
              "Alias odio consectetur possimus excepturi sequi. Voluptas ducimus et illum aperiam.",
            location: "18.006252,73.443659",
            address: "632 Ondricka Mills\nSmithamhaven, SC 34825-6302",
            phone_number: "+1 (380) 537-5592",
            cover:
              "https://via.placeholder.com/640x480.png/001155?text=similique",
            logo: "https://via.placeholder.com/640x480.png/00ee66?text=asperiores",
            city: "Heredia Province",
            country: "Costa Rica",
            state: "Heredia",
            type: "restaurant",
            category: "relax",
            status: "open",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 2,
                name: "tempore",
              },
              {
                id: 7,
                name: "est",
              },
              {
                id: 8,
                name: "quo",
              },
              {
                id: 9,
                name: "aperiam",
              },
              {
                id: 10,
                name: "ad",
              },
            ],
          },
        ],
        tour: [
          {
            id: 3,
            agency_id: 1,
            agency_name: "Qui",
            name: "Molestias natus tenetur qui ipsum molestiae.",
            description:
              "Aut provident et voluptas odit et qui aperiam quia. Quis sit amet eos tempore rem. Harum minus suscipit doloribus quis. Deleniti dignissimos consequuntur commodi eum voluptatem accusamus rerum.",
            location: "35.612443,-41.629499",
            address: "23227 Alexandrea Walk\nPort Bernhard, AL 76412-0568",
            phone_number: "+1-925-275-6185",
            cover: "https://via.placeholder.com/640x480.png/002233?text=fugit",
            logo: "https://via.placeholder.com/640x480.png/001122?text=sequi",
            city: "Heredia Province",
            country: "Costa Rica",
            state: "Heredia",
            type: "tour",
            category: "cultural",
            status: "open",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 1,
                name: "natus",
              },
              {
                id: 2,
                name: "tempore",
              },
              {
                id: 5,
                name: "blanditiis",
              },
              {
                id: 7,
                name: "est",
              },
              {
                id: 8,
                name: "quo",
              },
            ],
          },
          {
            id: 16,
            agency_id: 1,
            agency_name: "Qui",
            name: "Recusandae est vel ipsam ratione illum nihil.",
            description:
              "Dicta voluptas suscipit tempora. Aperiam eum officia veniam deserunt laboriosam accusamus. Iure delectus impedit totam rerum. Tenetur et odio mollitia eos facilis perferendis magni.",
            location: "8.849185,13.624001",
            address: "5239 Johnson Landing\nEast Enolachester, DC 91745",
            phone_number: "757-674-4550",
            cover: "https://via.placeholder.com/640x480.png/007799?text=qui",
            logo: "https://via.placeholder.com/640x480.png/00dd55?text=qui",
            city: "Heredia Province",
            country: "Costa Rica",
            state: "Heredia",
            type: "tour",
            category: "adventure",
            status: "open",
            age_restriction: 0,
            price: "No price available for this date",
            current_date: "2024-04-21",
            gallery: [],
            tags: [
              {
                id: 1,
                name: "natus",
              },
              {
                id: 5,
                name: "blanditiis",
              },
              {
                id: 7,
                name: "est",
              },
              {
                id: 8,
                name: "quo",
              },
            ],
          },
        ],
      },
    },
  ],
};
