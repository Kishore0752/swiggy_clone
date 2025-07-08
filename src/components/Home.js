import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StarIcon, 
  ClockIcon, 
  TruckIcon, 
  HeartIcon,
  MapPinIcon,
  FunnelIcon,
  ArrowsUpDownIcon
} from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import { useApp } from '../context/AppContext';
import { restaurants, categories, getDistance } from '../services/dataService';
import ImageWithFallback from './ImageWithFallback';

const Home = () => {
  const { 
    selectedCategory, 
    searchQuery, 
    sortBy, 
    filterBy,
    userLocation,
    favorites,
    toggleFavorite,
    dispatch 
  } = useApp();

  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const restaurantsPerPage = 6;

  useEffect(() => {
    let filtered = [...restaurants];

    if (searchQuery) {
      filtered = filtered.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(restaurant => restaurant.category === selectedCategory);
    }

    if (filterBy === 'open') {
      filtered = filtered.filter(restaurant => restaurant.isOpen);
    } else if (filterBy === 'featured') {
      filtered = filtered.filter(restaurant => restaurant.featured);
    } else if (filterBy === 'favorites') {
      filtered = filtered.filter(restaurant => favorites.includes(restaurant.id));
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'deliveryTime':
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        case 'deliveryFee':
          return a.deliveryFee - b.deliveryFee;
        case 'distance':
          if (userLocation) {
            const distanceA = getDistance(userLocation.lat, userLocation.lng, a.location.lat, a.location.lng);
            const distanceB = getDistance(userLocation.lat, userLocation.lng, b.location.lat, b.location.lng);
            return distanceA - distanceB;
          }
          return 0;
        default:
          return 0;
      }
    });

    setDisplayedRestaurants(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy, filterBy, userLocation, favorites]);

  const getCurrentRestaurants = () => {
    const startIndex = 0;
    const endIndex = currentPage * restaurantsPerPage;
    return displayedRestaurants.slice(startIndex, endIndex);
  };

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setIsLoading(false);
    }, 500);
  };

  const hasMore = getCurrentRestaurants().length < displayedRestaurants.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hunger? We've got you covered
            </motion.h1>
            <motion.p 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Order from your favorite restaurants and get it delivered to your doorstep
            </motion.p>
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <input
                type="text"
                placeholder="Enter your delivery location..."
                className="w-full max-w-md px-6 py-4 rounded-lg text-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:hidden mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchQuery}
              onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <StarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">Categories</h2>
          <div className="flex space-x-3 lg:space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category.id })}
                className={`flex flex-col items-center space-y-1 lg:space-y-2 px-4 lg:px-6 py-3 lg:py-4 rounded-lg whitespace-nowrap transition-colors min-w-[80px] lg:min-w-[100px] ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-xl lg:text-2xl">{category.icon}</span>
                <span className="font-medium text-xs lg:text-sm">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FunnelIcon className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-700">Filters</span>
            </motion.button>

            <div className="flex items-center space-x-2">
              <ArrowsUpDownIcon className="w-5 h-5 text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => dispatch({ type: 'SET_SORT_BY', payload: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="deliveryTime">Sort by Delivery Time</option>
                <option value="deliveryFee">Sort by Delivery Fee</option>
                {userLocation && <option value="distance">Sort by Distance</option>}
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            {displayedRestaurants.length} restaurants found
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex flex-wrap gap-3">
                  {['all', 'open', 'featured', 'favorites'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => dispatch({ type: 'SET_FILTER_BY', payload: filter })}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        filterBy === filter
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {getCurrentRestaurants().map((restaurant) => (
            <motion.div
              key={restaurant.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <ImageWithFallback
                  src={restaurant.image}
                  fallbackSrc={restaurant.fallbackImage}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {restaurant.offers[0]}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(restaurant.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  {favorites.includes(restaurant.id) ? (
                    <HeartIcon className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartOutlineIcon className="w-5 h-5 text-gray-600" />
                  )}
                </motion.button>
                {!restaurant.isOpen && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-1">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <ClockIcon className="w-4 h-4" />
                    <span className="text-sm">{restaurant.deliveryTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <TruckIcon className="w-4 h-4" />
                    <span className="text-sm">₹{restaurant.deliveryFee} delivery</span>
                  </div>
                  {userLocation && (
                    <div className="flex items-center space-x-1 text-gray-500">
                      <MapPinIcon className="w-4 h-4" />
                      <span className="text-sm">
                        {getDistance(userLocation.lat, userLocation.lng, restaurant.location.lat, restaurant.location.lng).toFixed(1)}km
                      </span>
                    </div>
                  )}
                </div>
                {restaurant.offers.length > 1 && (
                  <span className="text-xs text-green-600 font-medium">
                    +{restaurant.offers.length - 1} more offers
                  </span>
                )}
                <Link
                  to={`/restaurant/${restaurant.id}`}
                  className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg text-center font-medium hover:bg-orange-600 transition-colors block"
                >
                  View Menu
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {hasMore && (
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              disabled={isLoading}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Loading...</span>
                </div>
              ) : (
                'Load More Restaurants'
              )}
            </motion.button>
          </div>
        )}

        {displayedRestaurants.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home; 