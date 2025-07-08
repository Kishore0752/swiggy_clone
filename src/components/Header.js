import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  MapPinIcon,
  HeartIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { useApp } from '../context/AppContext';

const Header = () => {
  const navigate = useNavigate();
  const { 
    user, 
    logout, 
    searchQuery, 
    dispatch, 
    getCartTotal, 
    favorites,
    userLocation,
    isLocationLoading,
    getUserLocation
  } = useApp();
  
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/');
    }
  };

  const handleLocationClick = () => {
    if (!userLocation) {
      getUserLocation();
    }
    setShowLocationModal(true);
  };

  const getLocationText = () => {
    if (isLocationLoading) return 'Getting location...';
    if (userLocation) return 'Location detected';
    return 'Mumbai, Maharashtra';
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">S</span>
            </motion.div>
            <span className="text-xl sm:text-2xl font-bold text-gray-800">Swiggy</span>
          </Link>

          <div className="flex md:hidden items-center space-x-2 text-gray-600">
            <button
              onClick={handleLocationClick}
              className="flex items-center space-x-1 hover:text-orange-500 transition-colors"
            >
              <MapPinIcon className="w-4 h-4" />
              <span className="text-sm text-orange-500 font-semibold">Mumbai</span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-2 text-gray-600">
            <button
              onClick={handleLocationClick}
              className="flex items-center space-x-2 hover:text-orange-500 transition-colors"
            >
              <MapPinIcon className="w-5 h-5" />
              <span className="font-medium">Deliver to:</span>
              <span className="text-orange-500 font-semibold">{getLocationText()}</span>
            </button>
          </div>

          <div className="flex-1 max-w-2xl mx-8 hidden lg:block">
            <form onSubmit={handleSearch} className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for restaurants and food..."
                value={searchQuery}
                onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                  isSearchFocused ? 'border-orange-500' : 'border-gray-300'
                }`}
              />
            </form>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/offers" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
              Offers
            </Link>
            <Link to="/help" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
              Help
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
              Contact
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <HeartIcon className="w-6 h-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <BellIcon className="w-6 h-6" />
            </motion.button>

            {user ? (
              <div className="relative group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-medium hidden lg:block">{user.name}</span>
                </motion.button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      My Orders
                    </Link>
                    <Link to="/favorites" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Favorites
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Settings
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                to="/auth"
                className="flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors"
              >
                <UserIcon className="w-5 h-5" />
                <span className="font-medium">Sign In</span>
              </Link>
            )}

            <Link to="/cart" className="relative flex items-center space-x-1 text-gray-600 hover:text-orange-500 transition-colors">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <ShoppingCartIcon className="w-6 h-6" />
              </motion.div>
              <span className="font-medium">Cart</span>
              {getCartTotal() > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {getCartTotal()}
                </motion.span>
              )}
            </Link>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </motion.button>

            <Link to="/cart" className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors">
              <ShoppingCartIcon className="w-5 h-5" />
              {getCartTotal() > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                >
                  {getCartTotal()}
                </motion.span>
              )}
            </Link>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for restaurants and food..."
              value={searchQuery}
              onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
                isSearchFocused ? 'border-orange-500' : 'border-gray-300'
              }`}
            />
          </form>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-2">
                <Link 
                  to="/offers" 
                  className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Offers
                </Link>
                <Link 
                  to="/help" 
                  className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Help
                </Link>
                <Link 
                  to="/contact" 
                  className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {user ? (
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {user.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link 
                      to="/profile" 
                      className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    <Link 
                      to="/favorites" 
                      className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Favorites
                    </Link>
                    <Link 
                      to="/settings" 
                      className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 text-red-600 hover:text-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-4">
                  <Link 
                    to="/auth" 
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
          >
            <h3 className="text-lg font-semibold mb-4">Delivery Location</h3>
            {isLocationLoading ? (
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
                <span>Getting your location...</span>
              </div>
            ) : userLocation ? (
              <div className="space-y-3">
                <p className="text-green-600">✅ Location detected successfully!</p>
                <p className="text-sm text-gray-600">
                  Latitude: {userLocation.lat.toFixed(4)}<br />
                  Longitude: {userLocation.lng.toFixed(4)}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-gray-600">Unable to detect your location automatically.</p>
                <p className="text-sm text-gray-500">
                  Please ensure location permissions are enabled in your browser.
                </p>
              </div>
            )}
            <button
              onClick={() => setShowLocationModal(false)}
              className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </motion.header>
  );
};

export default Header; 