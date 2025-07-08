import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { 
  getStoredCart, 
  saveCart, 
  getStoredUser, 
  saveUser, 
  getStoredFavorites, 
  saveFavorites,
  mockUser 
} from '../services/dataService';

const AppContext = createContext();

const initialState = {
  cart: {},
  user: null,
  favorites: [],
  userLocation: null,
  isLocationLoading: false,
  searchQuery: '',
  selectedCategory: 'all',
  sortBy: 'rating',
  filterBy: 'all'
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, cart: action.payload };
    
    case 'ADD_TO_CART':
      const newCart = { ...state.cart };
      const itemId = action.payload.id;
      newCart[itemId] = (newCart[itemId] || 0) + 1;
      return { ...state, cart: newCart };
    
    case 'REMOVE_FROM_CART':
      const updatedCart = { ...state.cart };
      const removeItemId = action.payload.id;
      if (updatedCart[removeItemId] > 1) {
        updatedCart[removeItemId] -= 1;
      } else {
        delete updatedCart[removeItemId];
      }
      return { ...state, cart: updatedCart };
    
    case 'CLEAR_CART':
      return { ...state, cart: {} };
    
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'LOGOUT':
      return { ...state, user: null };
    
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    
    case 'TOGGLE_FAVORITE':
      const restaurantId = action.payload;
      const newFavorites = state.favorites.includes(restaurantId)
        ? state.favorites.filter(id => id !== restaurantId)
        : [...state.favorites, restaurantId];
      return { ...state, favorites: newFavorites };
    
    case 'SET_USER_LOCATION':
      return { ...state, userLocation: action.payload };
    
    case 'SET_LOCATION_LOADING':
      return { ...state, isLocationLoading: action.payload };
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    
    case 'SET_SORT_BY':
      return { ...state, sortBy: action.payload };
    
    case 'SET_FILTER_BY':
      return { ...state, filterBy: action.payload };
    
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load initial data from localStorage
  useEffect(() => {
    const storedCart = getStoredCart();
    const storedUser = getStoredUser();
    const storedFavorites = getStoredFavorites();

    dispatch({ type: 'SET_CART', payload: storedCart });
    dispatch({ type: 'SET_USER', payload: storedUser });
    dispatch({ type: 'SET_FAVORITES', payload: storedFavorites });
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveCart(state.cart);
  }, [state.cart]);

  // Save user to localStorage whenever it changes
  useEffect(() => {
    if (state.user) {
      saveUser(state.user);
    }
  }, [state.user]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    saveFavorites(state.favorites);
  }, [state.favorites]);

  // Get user location
  const getUserLocation = () => {
    dispatch({ type: 'SET_LOCATION_LOADING', payload: true });
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          dispatch({ type: 'SET_USER_LOCATION', payload: location });
          dispatch({ type: 'SET_LOCATION_LOADING', payload: false });
        },
        (error) => {
          console.error('Error getting location:', error);
          dispatch({ type: 'SET_LOCATION_LOADING', payload: false });
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
      dispatch({ type: 'SET_LOCATION_LOADING', payload: false });
    }
  };

  // Login function
  const login = (email, password) => {
    // Mock authentication - in real app, this would be an API call
    if (email === 'john@example.com' && password === 'password') {
      dispatch({ type: 'SET_USER', payload: mockUser });
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  // Logout function
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    dispatch({ type: 'CLEAR_CART' });
  };

  // Add to cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Remove from cart
  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  // Clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  // Toggle favorite
  const toggleFavorite = (restaurantId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: restaurantId });
  };

  // Get cart total
  const getCartTotal = () => {
    return Object.values(state.cart).reduce((total, quantity) => total + quantity, 0);
  };

  // Get cart items count
  const getCartItemsCount = () => {
    return Object.keys(state.cart).length;
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    login,
    logout,
    toggleFavorite,
    getUserLocation,
    dispatch
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}; 