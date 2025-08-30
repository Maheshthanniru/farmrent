import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    if (location) params.append('city', location);
    navigate(`/equipments?${params.toString()}`);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400 rounded-full blur-xl" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-green-400 rounded-full blur-xl" />
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-emerald-300 rounded-full blur-xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Rent Professional
            <span className="block text-gradient">Equipment</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-slate-600 dark:text-slate-400 mt-4">
              From Trusted Owners
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            Find and rent professional photography gear, power tools, musical instruments, 
            and more from verified owners in your area.
          </p>

          {/* Search Form */}
          <motion.form
            onSubmit={handleSearch}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search Input */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-glass w-full pl-10"
                  />
                </div>

                {/* Location Input */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-glass w-full pl-10"
                  />
                </div>

                {/* Search Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full"
                >
                  Search Equipment
                </motion.button>
              </div>
            </div>
          </motion.form>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>Verified Owners</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>Insurance Included</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
