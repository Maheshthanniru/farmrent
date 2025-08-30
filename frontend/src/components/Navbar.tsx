import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  LogOut, 
  Search,
  Sun,
  Moon
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useStore } from '../store/store';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const { cart } = useStore();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Equipment', href: '/equipments' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass-bg border-b border-white/20 dark:border-slate-700/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FR</span>
            </div>
            <span className="text-xl font-bold text-gradient">FarmRent</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg glass-bg hover:bg-white/20 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 rounded-lg glass-bg hover:bg-white/20 transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* User menu */}
            <div className="relative">
              <button className="p-2 rounded-lg glass-bg hover:bg-white/20 transition-colors duration-200">
                <User className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-bg hover:bg-white/20 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/20 dark:border-slate-700/20"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200",
                    isActive(item.href)
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20 dark:border-slate-700/20">
                <Link
                  to="/login"
                  className="block text-sm font-medium text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
