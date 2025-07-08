import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StarIcon, ClockIcon, TruckIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('recommended');

  const restaurant = {
    id: 1,
    name: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: 4.2,
    deliveryTime: "30-35 min",
    deliveryFee: "₹40",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400&fit=crop",
    offers: ["50% OFF up to ₹100", "Free delivery"],
    description: "Delicious pizzas with fresh ingredients and authentic Italian flavors."
  };

  const categories = [
    { id: 'recommended', name: 'Recommended' },
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'sides', name: 'Sides & Beverages' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const menuItems = {
    recommended: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic tomato sauce with mozzarella cheese",
        price: 299,
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=150&fit=crop",
        veg: true
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Spicy pepperoni with melted cheese",
        price: 399,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=150&fit=crop",
        veg: false
      }
    ],
    pizzas: [
      {
        id: 3,
        name: "Veggie Supreme",
        description: "Loaded with fresh vegetables",
        price: 449,
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=150&fit=crop",
        veg: true
      },
      {
        id: 4,
        name: "Chicken Tikka",
        description: "Spicy chicken tikka with onions",
        price: 499,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=150&fit=crop",
        veg: false
      }
    ],
    sides: [
      {
        id: 5,
        name: "Garlic Bread",
        description: "Crispy garlic bread with herbs",
        price: 99,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop",
        veg: true
      },
      {
        id: 6,
        name: "Coke",
        description: "Refreshing Coca Cola",
        price: 60,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200&h=150&fit=crop",
        veg: true
      }
    ],
    desserts: [
      {
        id: 7,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center",
        price: 149,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=150&fit=crop",
        veg: true
      }
    ]
  };

  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
  };

  const removeFromCart = (item) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[item.id] > 1) {
        newCart[item.id] -= 1;
      } else {
        delete newCart[item.id];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = Object.values(menuItems).flat().find(item => item.id === parseInt(itemId));
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  const getCartCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg mb-2">{restaurant.cuisine}</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <StarIcon className="w-4 h-4 text-yellow-400" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ClockIcon className="w-4 h-4" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <TruckIcon className="w-4 h-4" />
                <span>{restaurant.deliveryFee} delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-4 overflow-x-auto">
            {restaurant.offers.map((offer, index) => (
              <div key={index} className="bg-orange-500 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium">
                {offer}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex space-x-3 lg:space-x-4 mb-4 lg:mb-6 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 lg:px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors text-sm lg:text-base ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {menuItems[selectedCategory]?.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-lg font-bold">₹{item.price}</span>
                            {item.veg && (
                              <span className="text-green-600 text-sm">🟢 Veg</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {cart[item.id] ? (
                            <>
                              <button
                                onClick={() => removeFromCart(item)}
                                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600"
                              >
                                <MinusIcon className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center font-medium">{cart[item.id]}</span>
                              <button
                                onClick={() => addToCart(item)}
                                className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600"
                              >
                                <PlusIcon className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => addToCart(item)}
                              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
                            >
                              ADD
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
              {Object.keys(cart).length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    {Object.entries(cart).map(([itemId, quantity]) => {
                      const item = Object.values(menuItems).flat().find(item => item.id === parseInt(itemId));
                      return (
                        <div key={itemId} className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{item?.name}</p>
                            <p className="text-sm text-gray-600">₹{item?.price} × {quantity}</p>
                          </div>
                          <span className="font-semibold">₹{(item?.price || 0) * quantity}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-lg">₹{getCartTotal()}</span>
                    </div>
                    <Link
                      to="/cart"
                      className="w-full bg-orange-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-orange-600 block"
                    >
                      Checkout ({getCartCount()} items)
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail; 