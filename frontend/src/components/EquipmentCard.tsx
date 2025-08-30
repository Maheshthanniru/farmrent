import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, MapPin, Calendar, Shield } from 'lucide-react';
import { Equipment } from '../data/equipments';
import { formatPrice, getRatingStars, truncateText } from '../lib/utils';
import { cn } from '../lib/utils';

interface EquipmentCardProps {
  equipment: Equipment;
  className?: string;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipment, className }) => {
  const stars = getRatingStars(equipment.rating);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className={cn("group", className)}
    >
      <Link to={`/equipments/${equipment.id}`}>
        <div className="glass-card glass-card-hover overflow-hidden">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
            <img
              src={equipment.images[0]}
              alt={equipment.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-wrap gap-1">
              {equipment.badges.slice(0, 2).map((badge, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium bg-emerald-500/90 text-white rounded-full backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Age suitability */}
            <div className="absolute top-3 right-3">
              <span className="px-2 py-1 text-xs font-medium bg-white/90 text-slate-700 rounded-full backdrop-blur-sm">
                {equipment.equipmentAge}
              </span>
            </div>

            {/* Condition */}
            <div className="absolute bottom-3 left-3">
              <span className={cn(
                "px-2 py-1 text-xs font-medium rounded-full backdrop-blur-sm",
                equipment.condition === "Like New" && "bg-green-500/90 text-white",
                equipment.condition === "Good" && "bg-yellow-500/90 text-white",
                equipment.condition === "Fair" && "bg-orange-500/90 text-white"
              )}>
                {equipment.condition}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Title and Rating */}
            <div className="mb-3">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {truncateText(equipment.title, 50)}
              </h3>
              
              <div className="flex items-center justify-between">
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
                  <span className="text-sm text-slate-600 dark:text-slate-400 ml-1">
                    {equipment.rating}
                  </span>
                </div>
                
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {equipment.brand}
                </span>
              </div>
            </div>

            {/* Location and Availability */}
            <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{equipment.city}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>Available</span>
              </div>
            </div>

            {/* Owner info */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {equipment.owner.name}
                </span>
                {equipment.owner.verified && (
                  <Shield className="w-4 h-4 text-emerald-500" />
                )}
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {equipment.owner.rating}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  {formatPrice(equipment.pricePerDay)}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">/day</span>
              </div>
              
              <div className="text-right">
                <span className="text-sm text-slate-500 dark:text-slate-400">Deposit</span>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {formatPrice(equipment.deposit)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EquipmentCard;
