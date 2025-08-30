import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Shield, 
  Clock, 
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  User,
  CheckCircle
} from 'lucide-react';
import { equipments } from '../data/equipments';
import { useStore } from '../store/store';
import { formatPrice, getRatingStars, calculateDays, calculateTotalPrice } from '../lib/utils';
import { cn } from '../lib/utils';

const EquipmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const [selectedImage, setSelectedImage] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [quantity, setQuantity] = useState(1);

  const equipment = equipments.find(e => e.id === id);

  if (!equipment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Equipment not found
          </h1>
          <button
            onClick={() => navigate('/equipments')}
            className="btn-primary"
          >
            Back to Equipment
          </button>
        </div>
      </div>
    );
  }

  const stars = getRatingStars(equipment.rating);
  const days = startDate && endDate ? calculateDays(startDate, endDate) : 0;
  const totalPrice = days > 0 ? calculateTotalPrice(equipment.pricePerDay, days) : 0;

  const handleAddToCart = () => {
    if (!startDate || !endDate) {
      alert('Please select start and end dates');
      return;
    }

    addToCart({
      equipment,
      quantity,
      startDate,
      endDate,
    });

    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/equipments')}
          className="flex items-center space-x-2 text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Equipment</span>
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden glass-bg">
              <img
                src={equipment.images[selectedImage]}
                alt={equipment.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {equipment.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square rounded-lg overflow-hidden glass-bg transition-all duration-200",
                    selectedImage === index 
                      ? "ring-2 ring-emerald-500" 
                      : "hover:ring-2 hover:ring-emerald-300"
                  )}
                >
                  <img
                    src={image}
                    alt={`${equipment.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Equipment Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {equipment.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{equipment.city}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Available</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg glass-bg hover:bg-white/20">
                    <Heart className="w-5 h-5 text-slate-600" />
                  </button>
                  <button className="p-2 rounded-lg glass-bg hover:bg-white/20">
                    <Share2 className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Rating and Brand */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {stars.map((star, index) => (
                      <Star
                        key={index}
                        className={cn(
                          "w-4 h-4",
                          star === "full" && "fill-yellow-400 text-yellow-400",
                          star === "half" && "fill-yellow-400 text-yellow-400",
                          star === "empty" && "text-slate-300"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-slate-600 dark:text-slate-400">
                    {equipment.rating} ({equipment.owner.rating} owner rating)
                  </span>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {equipment.brand}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {equipment.badges.map((badge, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="glass-card p-6">
              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  {formatPrice(equipment.pricePerDay)}
                </span>
                <span className="text-slate-600 dark:text-slate-400">/day</span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Deposit: {formatPrice(equipment.deposit)}
              </div>
            </div>

            {/* Owner Info */}
            <div className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {equipment.owner.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {equipment.owner.rating}
                        </span>
                      </div>
                      {equipment.owner.verified && (
                        <div className="flex items-center space-x-1">
                          <Shield className="w-3 h-3 text-emerald-500" />
                          <span className="text-xs text-emerald-600 dark:text-emerald-400">
                            Verified
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Book this equipment
              </h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="input-glass w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="input-glass w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="input-glass w-full"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                {days > 0 && (
                  <div className="glass-bg p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600 dark:text-slate-400">
                        {days} days × {formatPrice(equipment.pricePerDay)}
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-slate-600 dark:text-slate-400">
                      <span>Deposit</span>
                      <span>{formatPrice(equipment.deposit)}</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAddToCart}
                  className="btn-primary w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Specifications
          </h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(equipment.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-white/20 dark:border-slate-700/20 last:border-b-0">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{key}</span>
                  <span className="text-slate-600 dark:text-slate-400">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Description
          </h2>
          <div className="glass-card p-6">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {equipment.description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EquipmentDetail;
