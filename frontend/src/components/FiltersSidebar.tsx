import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useStore } from '../store/store';
import { categories, cities } from '../data/equipments';
import { cn } from '../lib/utils';

const FiltersSidebar: React.FC = () => {
  const { filters, setFilters, resetFilters, isFiltersOpen, setIsFiltersOpen } = useStore();
  const [expandedSections, setExpandedSections] = useState<string[]>(['category', 'price']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category];
    setFilters({ category: newCategories });
  };

  const handleAgeSuitabilityChange = (age: string) => {
    const newAges = filters.ageSuitability.includes(age)
      ? filters.ageSuitability.filter(a => a !== age)
      : [...filters.ageSuitability, age];
    setFilters({ ageSuitability: newAges });
  };

  const handleEquipmentAgeChange = (age: string) => {
    const newAges = filters.equipmentAge.includes(age)
      ? filters.equipmentAge.filter(a => a !== age)
      : [...filters.equipmentAge, age];
    setFilters({ equipmentAge: newAges });
  };

  const handleConditionChange = (condition: string) => {
    const newConditions = filters.condition.includes(condition)
      ? filters.condition.filter(c => c !== condition)
      : [...filters.condition, condition];
    setFilters({ condition: newConditions });
  };

  const handleCityChange = (city: string) => {
    const newCities = filters.city.includes(city)
      ? filters.city.filter(c => c !== city)
      : [...filters.city, city];
    setFilters({ city: newCities });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setFilters({ priceRange: [min, max] });
  };

  const handleRatingChange = (rating: number) => {
    setFilters({ rating });
  };

  const FilterSection: React.FC<{
    title: string;
    section: string;
    children: React.ReactNode;
  }> = ({ title, section, children }) => (
    <div className="border-b border-white/20 dark:border-slate-700/20 last:border-b-0">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-slate-900 dark:text-white">{title}</span>
        {expandedSections.includes(section) ? (
          <ChevronUp className="w-4 h-4 text-slate-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-slate-500" />
        )}
      </button>
      <AnimatePresence>
        {expandedSections.includes(section) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pb-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const CheckboxFilter: React.FC<{
    label: string;
    checked: boolean;
    onChange: () => void;
  }> = ({ label, checked, onChange }) => (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 text-emerald-600 bg-white border-slate-300 rounded focus:ring-emerald-500 focus:ring-2"
      />
      <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>
    </label>
  );

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsFiltersOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isFiltersOpen ? 0 : -300 }}
        className={cn(
          "fixed lg:relative lg:translate-x-0 z-50 w-80 h-full glass-bg border-r border-white/20 dark:border-slate-700/20 overflow-y-auto",
          "lg:block"
        )}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-emerald-500" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Filters</h2>
            </div>
            <button
              onClick={() => setIsFiltersOpen(false)}
              className="lg:hidden p-1 rounded-lg hover:bg-white/20"
            >
              <X className="w-5 h-5 text-slate-500" />
            </button>
          </div>

          {/* Reset button */}
          <button
            onClick={resetFilters}
            className="w-full mb-6 btn-secondary"
          >
            Reset Filters
          </button>

          {/* Filter sections */}
          <div className="space-y-2">
            {/* Category */}
            <FilterSection title="Category" section="category">
              <div className="space-y-3">
                {categories.map((category) => (
                  <CheckboxFilter
                    key={category}
                    label={category}
                    checked={filters.category.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Price Range */}
            <FilterSection title="Price Range" section="price">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600 dark:text-slate-400">
                    ${filters.priceRange[0]}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    ${filters.priceRange[1]}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={filters.priceRange[1]}
                  onChange={(e) => handlePriceRangeChange(filters.priceRange[0], parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </FilterSection>

            {/* Age Suitability */}
            <FilterSection title="Age Suitability" section="ageSuitability">
              <div className="space-y-3">
                {["13-17", "18-25", "26-40", "40+"].map((age) => (
                  <CheckboxFilter
                    key={age}
                    label={age}
                    checked={filters.ageSuitability.includes(age)}
                    onChange={() => handleAgeSuitabilityChange(age)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Equipment Age */}
            <FilterSection title="Equipment Age" section="equipmentAge">
              <div className="space-y-3">
                {["New", "<1yr", "1-3yr", "3+yr"].map((age) => (
                  <CheckboxFilter
                    key={age}
                    label={age}
                    checked={filters.equipmentAge.includes(age)}
                    onChange={() => handleEquipmentAgeChange(age)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Condition */}
            <FilterSection title="Condition" section="condition">
              <div className="space-y-3">
                {["Like New", "Good", "Fair"].map((condition) => (
                  <CheckboxFilter
                    key={condition}
                    label={condition}
                    checked={filters.condition.includes(condition)}
                    onChange={() => handleConditionChange(condition)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* City */}
            <FilterSection title="City" section="city">
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {cities.map((city) => (
                  <CheckboxFilter
                    key={city}
                    label={city}
                    checked={filters.city.includes(city)}
                    onChange={() => handleCityChange(city)}
                  />
                ))}
              </div>
            </FilterSection>

            {/* Rating */}
            <FilterSection title="Minimum Rating" section="rating">
              <div className="space-y-3">
                {[4, 3, 2, 1].map((rating) => (
                  <CheckboxFilter
                    key={rating}
                    label={`${rating}+ stars`}
                    checked={filters.rating === rating}
                    onChange={() => handleRatingChange(rating)}
                  />
                ))}
              </div>
            </FilterSection>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default FiltersSidebar;
