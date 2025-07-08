import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, MapPinIcon, PhoneIcon, CreditCardIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const [deliveryAddress] = useState({
    name: 'John Doe',
    phone: '+91 98765 43210',
    address: '123 Main Street, Andheri West, Mumbai, Maharashtra 400058'
  });

  const cartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 299,
      quantity: 2,
      image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?w=100&h=100&fit=crop"
    },
    {
      id: 5,
      name: "Garlic Bread",
      price: 99,
      quantity: 1,
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?w=100&h=100&fit=crop"
    },
    {
      id: 6,
      name: "Coke",
      price: 60,
      quantity: 2,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=100&h=100&fit=crop"
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = 40;
  const taxes = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal + deliveryFee + taxes;

  const updateQuantity = (itemId, newQuantity) => {
    console.log(`Update quantity for item ${itemId} to ${newQuantity}`);
  };

  const removeItem = (itemId) => {
    console.log(`Remove item ${itemId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
          <p className="text-gray-600 mt-2">Review your order and proceed to checkout</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-semibold mb-4">Order Items</h2>
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <Link
                    to="/"
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                  >
                    Browse Restaurants
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-sm">₹{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₹{item.price * item.quantity}</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 mt-1"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6 mt-6">
              <h2 className="text-lg lg:text-xl font-semibold mb-4">Delivery Details</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-gray-400 mt-1" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{deliveryAddress.name}</p>
                    <p className="text-gray-600 text-sm">{deliveryAddress.address}</p>
                  </div>
                  <button className="text-orange-500 hover:text-orange-700 font-medium">
                    Change
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-800">{deliveryAddress.phone}</span>
                  <button className="text-orange-500 hover:text-orange-700 font-medium">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-6 sticky top-4">
              <h2 className="text-lg lg:text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Charges</span>
                  <span>₹{taxes}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3">Payment Method</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="payment" value="card" defaultChecked className="text-orange-500" />
                    <CreditCardIcon className="w-5 h-5 text-gray-400" />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="payment" value="upi" className="text-orange-500" />
                    <span>UPI</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="payment" value="cod" className="text-orange-500" />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Place Order • ₹{total}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By placing this order, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 