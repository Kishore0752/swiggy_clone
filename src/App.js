import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Home from './components/Home';
import RestaurantDetail from './components/RestaurantDetail';
import Cart from './components/Cart';
import Auth from './components/Auth';
import Settings from './components/Settings';
import Contact from './components/Contact';
import Help from './components/Help';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
                  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
