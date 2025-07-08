export const restaurants = [
  {
    id: 1,
    name: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: 4.2,
    deliveryTime: "30-35 min",
    deliveryFee: 40,
    minOrder: 200,
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Domino's+Pizza",
    category: "pizza",
    offers: ["50% OFF up to ₹100", "Free delivery"],
    location: { lat: 19.0760, lng: 72.8777 }, // Mumbai coordinates
    isOpen: true,
    featured: true
  },
  {
    id: 2,
    name: "McDonald's",
    cuisine: "Burgers, Fast Food",
    rating: 4.0,
    deliveryTime: "25-30 min",
    deliveryFee: 30,
    minOrder: 150,
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=McDonald's",
    category: "burger",
    offers: ["Buy 1 Get 1 Free", "Free delivery"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: true
  },
  {
    id: 3,
    name: "Paradise Biryani",
    cuisine: "Biryani, Hyderabadi",
    rating: 4.5,
    deliveryTime: "35-40 min",
    deliveryFee: 50,
    minOrder: 300,
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Paradise+Biryani",
    category: "biryani",
    offers: ["20% OFF", "Free delivery"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: false
  },
  {
    id: 4,
    name: "Cream Stone",
    cuisine: "Desserts, Ice Cream",
    rating: 4.3,
    deliveryTime: "20-25 min",
    deliveryFee: 25,
    minOrder: 100,
    image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Cream+Stone",
    category: "dessert",
    offers: ["30% OFF", "Free delivery"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: false
  },
  {
    id: 5,
    name: "Starbucks",
    cuisine: "Coffee, Beverages",
    rating: 4.1,
    deliveryTime: "15-20 min",
    deliveryFee: 20,
    minOrder: 150,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Starbucks",
    category: "beverages",
    offers: ["Buy 2 Get 1 Free"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: false
  },
  {
    id: 6,
    name: "China Town",
    cuisine: "Chinese, Asian",
    rating: 4.4,
    deliveryTime: "30-35 min",
    deliveryFee: 40,
    minOrder: 250,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=China+Town",
    category: "chinese",
    offers: ["40% OFF up to ₹150"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: false
  },
  {
    id: 7,
    name: "Saravana Bhavan",
    cuisine: "South Indian, Vegetarian",
    rating: 4.6,
    deliveryTime: "25-30 min",
    deliveryFee: 35,
    minOrder: 200,
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Saravana+Bhavan",
    category: "south-indian",
    offers: ["25% OFF", "Free delivery"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: true
  },
  {
    id: 8,
    name: "KFC",
    cuisine: "Chicken, Fast Food",
    rating: 3.9,
    deliveryTime: "20-25 min",
    deliveryFee: 30,
    minOrder: 180,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=KFC",
    category: "chicken",
    offers: ["30% OFF", "Free delivery"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: false
  },
  {
    id: 9,
    name: "Biryani House",
    cuisine: "Biryani, Mughlai",
    rating: 4.7,
    deliveryTime: "40-45 min",
    deliveryFee: 60,
    minOrder: 350,
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Biryani+House",
    category: "biryani",
    offers: ["25% OFF", "Free delivery"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: true
  },
  {
    id: 10,
    name: "Cafe Coffee Day",
    cuisine: "Coffee, Beverages",
    rating: 4.0,
    deliveryTime: "15-20 min",
    deliveryFee: 25,
    minOrder: 120,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Cafe+Coffee+Day",
    category: "beverages",
    offers: ["Buy 1 Get 1 Free"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: false
  },
  {
    id: 11,
    name: "Dragon Wok",
    cuisine: "Chinese, Asian",
    rating: 4.3,
    deliveryTime: "35-40 min",
    deliveryFee: 45,
    minOrder: 280,
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Dragon+Wok",
    category: "chinese",
    offers: ["35% OFF up to ₹200"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: false
  },
  {
    id: 12,
    name: "Baskin Robbins",
    cuisine: "Ice Cream, Desserts",
    rating: 4.2,
    deliveryTime: "20-25 min",
    deliveryFee: 30,
    minOrder: 150,
    image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=400&h=300&fit=crop",
    fallbackImage: "https://via.placeholder.com/400x300/f97316/ffffff?text=Baskin+Robbins",
    category: "dessert",
    offers: ["40% OFF", "Free delivery"],
    location: { lat: 19.0760, lng: 72.8777 },
    isOpen: true,
    featured: false
  }
];

export const menuItems = {
  1: {
    recommended: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato sauce with mozzarella cheese",
        price: 299,
        image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Margherita",
        veg: true,
        spicy: false,
        popular: true
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Spicy pepperoni with melted cheese",
        price: 399,
        image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Pepperoni",
        veg: false,
        spicy: true,
        popular: true
      }
    ],
    pizzas: [
      {
        id: 3,
        name: "Veggie Supreme",
        description: "Loaded with fresh vegetables",
        price: 449,
        image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Veggie+Supreme",
        veg: true,
        spicy: false,
        popular: false
      },
      {
        id: 4,
        name: "Chicken Tikka",
        description: "Spicy chicken tikka with onions",
        price: 499,
        image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Chicken+Tikka",
        veg: false,
        spicy: true,
        popular: true
      },
      {
        id: 5,
        name: "BBQ Chicken Pizza",
        description: "BBQ sauce with grilled chicken",
        price: 549,
        image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=BBQ+Chicken",
        veg: false,
        spicy: false,
        popular: false
      }
    ],
    sides: [
      {
        id: 6,
        name: "Garlic Bread",
        description: "Crispy garlic bread with herbs",
        price: 99,
        image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Garlic+Bread",
        veg: true,
        spicy: false,
        popular: false
      },
      {
        id: 7,
        name: "Coke",
        description: "Refreshing Coca Cola",
        price: 60,
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Coke",
        veg: true,
        spicy: false,
        popular: true
      }
    ],
    desserts: [
      {
        id: 8,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center",
        price: 149,
        image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Lava+Cake",
        veg: true,
        spicy: false,
        popular: false
      }
    ]
  },
  2: {
    recommended: [
      {
        id: 9,
        name: "Big Mac",
        description: "Two beef patties with special sauce",
        price: 199,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Big+Mac",
        veg: false,
        spicy: false,
        popular: true
      },
      {
        id: 10,
        name: "McChicken",
        description: "Crispy chicken with lettuce and mayo",
        price: 149,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=McChicken",
        veg: false,
        spicy: false,
        popular: true
      }
    ],
    burgers: [
      {
        id: 11,
        name: "Veg Maharaja Mac",
        description: "Vegetarian burger with potato patty",
        price: 179,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Veg+Maharaja",
        veg: true,
        spicy: false,
        popular: false
      },
      {
        id: 12,
        name: "McSpicy Chicken",
        description: "Spicy chicken burger",
        price: 189,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=McSpicy",
        veg: false,
        spicy: true,
        popular: true
      }
    ],
    sides: [
      {
        id: 13,
        name: "French Fries",
        description: "Crispy golden fries",
        price: 89,
        image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=French+Fries",
        veg: true,
        spicy: false,
        popular: true
      },
      {
        id: 14,
        name: "McFlurry Oreo",
        description: "Creamy ice cream with Oreo cookies",
        price: 129,
        image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=McFlurry",
        veg: true,
        spicy: false,
        popular: false
      }
    ]
  },
  3: {
    recommended: [
      {
        id: 15,
        name: "Chicken Biryani",
        description: "Aromatic basmati rice with tender chicken",
        price: 299,
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Chicken+Biryani",
        veg: false,
        spicy: true,
        popular: true
      },
      {
        id: 16,
        name: "Veg Biryani",
        description: "Fragrant rice with mixed vegetables",
        price: 249,
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Veg+Biryani",
        veg: true,
        spicy: false,
        popular: false
      }
    ],
    biryanis: [
      {
        id: 17,
        name: "Mutton Biryani",
        description: "Tender mutton with aromatic spices",
        price: 399,
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Mutton+Biryani",
        veg: false,
        spicy: true,
        popular: true
      },
      {
        id: 18,
        name: "Paneer Biryani",
        description: "Cottage cheese biryani",
        price: 279,
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Paneer+Biryani",
        veg: true,
        spicy: false,
        popular: false
      }
    ],
    sides: [
      {
        id: 19,
        name: "Raita",
        description: "Cooling yogurt with cucumber",
        price: 49,
        image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Raita",
        veg: true,
        spicy: false,
        popular: true
      },
      {
        id: 20,
        name: "Mirchi Ka Salan",
        description: "Spicy green chili curry",
        price: 69,
        image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Mirchi+Salan",
        veg: true,
        spicy: true,
        popular: false
      }
    ]
  },
  9: {
    recommended: [
      {
        id: 21,
        name: "Hyderabadi Biryani",
        description: "Traditional Hyderabadi style biryani",
        price: 349,
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Hyderabadi+Biryani",
        veg: false,
        spicy: true,
        popular: true
      }
    ],
    biryanis: [
      {
        id: 22,
        name: "Dum Biryani",
        description: "Slow-cooked biryani with tender meat",
        price: 449,
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Dum+Biryani",
        veg: false,
        spicy: true,
        popular: true
      },
      {
        id: 23,
        name: "Veg Dum Biryani",
        description: "Vegetarian dum biryani",
        price: 299,
        image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Veg+Dum+Biryani",
        veg: true,
        spicy: false,
        popular: false
      }
    ]
  },
  10: {
    recommended: [
      {
        id: 24,
        name: "Cappuccino",
        description: "Classic Italian coffee with frothy milk",
        price: 89,
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Cappuccino",
        veg: true,
        spicy: false,
        popular: true
      }
    ],
    beverages: [
      {
        id: 25,
        name: "Espresso",
        description: "Strong Italian coffee shot",
        price: 69,
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Espresso",
        veg: true,
        spicy: false,
        popular: false
      },
      {
        id: 26,
        name: "Latte",
        description: "Smooth coffee with steamed milk",
        price: 99,
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Latte",
        veg: true,
        spicy: false,
        popular: true
      },
      {
        id: 27,
        name: "Mocha",
        description: "Coffee with chocolate and cream",
        price: 119,
        image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Mocha",
        veg: true,
        spicy: false,
        popular: false
      }
    ],
    snacks: [
      {
        id: 28,
        name: "Chocolate Muffin",
        description: "Fresh baked chocolate muffin",
        price: 79,
        image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Chocolate+Muffin",
        veg: true,
        spicy: false,
        popular: false
      }
    ]
  },
  11: {
    recommended: [
      {
        id: 29,
        name: "Chicken Fried Rice",
        description: "Stir-fried rice with chicken and vegetables",
        price: 199,
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Chicken+Fried+Rice",
        veg: false,
        spicy: false,
        popular: true
      }
    ],
    chinese: [
      {
        id: 30,
        name: "Veg Fried Rice",
        description: "Stir-fried rice with mixed vegetables",
        price: 169,
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Veg+Fried+Rice",
        veg: true,
        spicy: false,
        popular: false
      },
      {
        id: 31,
        name: "Chicken Noodles",
        description: "Stir-fried noodles with chicken",
        price: 189,
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Chicken+Noodles",
        veg: false,
        spicy: true,
        popular: true
      },
      {
        id: 32,
        name: "Veg Manchurian",
        description: "Crispy vegetable balls in spicy sauce",
        price: 179,
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Veg+Manchurian",
        veg: true,
        spicy: true,
        popular: false
      },
      {
        id: 33,
        name: "Chilli Chicken",
        description: "Spicy chicken with green chilies",
        price: 249,
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Chilli+Chicken",
        veg: false,
        spicy: true,
        popular: true
      }
    ],
    soups: [
      {
        id: 34,
        name: "Hot & Sour Soup",
        description: "Spicy and tangy soup",
        price: 99,
        image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Hot+Sour+Soup",
        veg: true,
        spicy: true,
        popular: false
      }
    ]
  },
  12: {
    recommended: [
      {
        id: 35,
        name: "Vanilla Ice Cream",
        description: "Classic vanilla ice cream",
        price: 89,
        image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Vanilla+Ice+Cream",
        veg: true,
        spicy: false,
        popular: true
      }
    ],
    ice_creams: [
      {
        id: 36,
        name: "Chocolate Ice Cream",
        description: "Rich chocolate ice cream",
        price: 99,
        image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Chocolate+Ice+Cream",
        veg: true,
        spicy: false,
        popular: true
      },
      {
        id: 37,
        name: "Strawberry Ice Cream",
        description: "Fresh strawberry ice cream",
        price: 109,
        image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Strawberry+Ice+Cream",
        veg: true,
        spicy: false,
        popular: false
      },
      {
        id: 38,
        name: "Mint Chocolate Chip",
        description: "Refreshing mint with chocolate chips",
        price: 119,
        image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Mint+Chocolate+Chip",
        veg: true,
        spicy: false,
        popular: false
      }
    ],
    sundaes: [
      {
        id: 39,
        name: "Hot Fudge Sundae",
        description: "Ice cream with hot chocolate sauce",
        price: 149,
        image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?w=200&h=150&fit=crop",
        fallbackImage: "https://via.placeholder.com/200x150/f97316/ffffff?text=Hot+Fudge+Sundae",
        veg: true,
        spicy: false,
        popular: true
      }
    ]
  }
};

export const categories = [
  { id: 'all', name: 'All', icon: '🍽️' },
  { id: 'pizza', name: 'Pizza', icon: '🍕' },
  { id: 'burger', name: 'Burgers', icon: '🍔' },
  { id: 'biryani', name: 'Biryani', icon: '🍚' },
  { id: 'dessert', name: 'Desserts', icon: '🍰' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
  { id: 'chinese', name: 'Chinese', icon: '🥢' },
  { id: 'south-indian', name: 'South Indian', icon: '🍛' },
  { id: 'chicken', name: 'Chicken', icon: '🍗' },
  { id: 'ice-cream', name: 'Ice Cream', icon: '🍦' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'fast-food', name: 'Fast Food', icon: '🍟' }
];

// Mock user data
export const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  phone: "+91 98765 43210",
  address: "123 Main Street, Andheri West, Mumbai, Maharashtra 400058",
  favorites: [1, 3, 5],
  orders: []
};

export const STORAGE_KEYS = {
  CART: 'swiggy_cart',
  USER: 'swiggy_user',
  FAVORITES: 'swiggy_favorites',
  LOCATION: 'swiggy_location'
};

export const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return d;
};

const deg2rad = (deg) => {
  return deg * (Math.PI/180);
};

export const getStoredCart = () => {
  try {
    const cart = localStorage.getItem(STORAGE_KEYS.CART);
    return cart ? JSON.parse(cart) : {};
  } catch (error) {
    console.error('Error loading cart:', error);
    return {};
  }
};

export const saveCart = (cart) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart:', error);
  }
};

export const getStoredUser = () => {
  try {
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error loading user:', error);
    return null;
  }
};

export const saveUser = (user) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user:', error);
  }
};

export const getStoredFavorites = () => {
  try {
    const favorites = localStorage.getItem(STORAGE_KEYS.FAVORITES);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error loading favorites:', error);
    return [];
  }
};

export const saveFavorites = (favorites) => {
  try {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorites:', error);
  }
}; 