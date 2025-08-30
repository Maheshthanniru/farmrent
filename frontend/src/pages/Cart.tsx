import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import { formatPrice, calculateDays, calculateTotalPrice } from '../lib/utils';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateCartItem, clearCart } = useStore();

  const subtotal = cart.reduce((total, item) => {
    const days = calculateDays(item.startDate, item.endDate);
    return total + calculateTotalPrice(item.equipment.pricePerDay, days) * item.quantity;
  }, 0);

  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Your cart is empty
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Start browsing our equipment to add items to your cart
          </p>
          <Link to="/equipments" className="btn-primary">
            Browse Equipment
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <Link
              to="/equipments"
              className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Shopping Cart ({cart.length} items)
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => {
                const days = calculateDays(item.startDate, item.endDate);
                const itemTotal = calculateTotalPrice(item.equipment.pricePerDay, days) * item.quantity;

                return (
                  <motion.div
                    key={item.equipment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={item.equipment.images[0]}
                        alt={item.equipment.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                          {item.equipment.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                          {item.equipment.brand} • {item.equipment.city}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">Dates:</span>
                            <p className="text-slate-900 dark:text-white">
                              {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <span className="text-slate-600 dark:text-slate-400">Days:</span>
                            <p className="text-slate-900 dark:text-white">{days}</p>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <select
                            value={item.quantity}
                            onChange={(e) => updateCartItem(item.equipment.id, { quantity: parseInt(e.target.value) })}
                            className="input-glass text-sm w-16"
                          >
                            {[1, 2, 3, 4, 5].map(num => (
                              <option key={num} value={num}>{num}</option>
                            ))}
                          </select>
                          <button
                            onClick={() => removeFromCart(item.equipment.id)}
                            className="p-1 text-slate-400 hover:text-red-500"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                          {formatPrice(itemTotal)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                    <span className="text-slate-900 dark:text-white">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Tax (8%)</span>
                    <span className="text-slate-900 dark:text-white">{formatPrice(tax)}</span>
                  </div>
                  <div className="border-t border-white/20 dark:border-slate-700/20 pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-slate-900 dark:text-white">Total</span>
                      <span className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="btn-primary w-full mt-6">
                  Proceed to Checkout
                </button>
                
                <button
                  onClick={clearCart}
                  className="btn-secondary w-full mt-3"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
