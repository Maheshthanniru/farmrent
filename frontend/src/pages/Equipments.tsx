import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import FiltersSidebar from '../components/FiltersSidebar';
import EquipmentCard from '../components/EquipmentCard';
import { equipments } from '../data/equipments';
import { useStore } from '../store/store';
import { cn } from '../lib/utils';

type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'newest' | 'rating';

const Equipments: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filters, setFilters, isFiltersOpen, setIsFiltersOpen } = useStore();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter equipment based on current filters
  const filteredEquipment = useMemo(() => {
    return equipments.filter(equipment => {
      // Search query
      if (searchQuery && !equipment.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filters.category.length > 0 && !filters.category.includes(equipment.category)) {
        return false;
      }

      // Price range
      if (equipment.pricePerDay < filters.priceRange[0] || equipment.pricePerDay > filters.priceRange[1]) {
        return false;
      }

      // Age suitability
      if (filters.ageSuitability.length > 0 && 
          !filters.ageSuitability.some(age => equipment.ageSuitability.includes(age as any))) {
        return false;
      }

      // Equipment age
      if (filters.equipmentAge.length > 0 && !filters.equipmentAge.includes(equipment.equipmentAge)) {
        return false;
      }

      // Condition
      if (filters.condition.length > 0 && !filters.condition.includes(equipment.condition)) {
        return false;
      }

      // City
      if (filters.city.length > 0 && !filters.city.includes(equipment.city)) {
        return false;
      }

      // Rating
      if (filters.rating > 0 && equipment.rating < filters.rating) {
        return false;
      }

      return true;
    });
  }, [equipment, filters, searchQuery]);

  // Sort equipment
  const sortedEquipment = useMemo(() => {
    const sorted = [...filteredEquipment];
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.pricePerDay - b.pricePerDay);
      case 'price-desc':
        return sorted.sort((a, b) => b.pricePerDay - a.pricePerDay);
      case 'newest':
        return sorted.sort((a, b) => b.year - a.year);
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      default:
        return sorted;
    }
  }, [filteredEquipment, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({ searchQuery });
    if (searchQuery) {
      searchParams.set('search', searchQuery);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Equipment Catalog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Find the perfect equipment for your next project
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <FiltersSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="glass-card p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Search */}
                <form onSubmit={handleSearch} className="flex-1 w-full lg:max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search equipment..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="input-glass w-full pl-10"
                    />
                  </div>
                </form>

                {/* Controls */}
                <div className="flex items-center space-x-4">
                  {/* Mobile filter button */}
                  <button
                    onClick={() => setIsFiltersOpen(true)}
                    className="lg:hidden btn-secondary flex items-center space-x-2"
                  >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                  </button>

                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => handleSortChange(e.target.value as SortOption)}
                      className="input-glass pr-8 appearance-none"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="newest">Newest</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                    <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>

                  {/* View mode */}
                  <div className="flex items-center space-x-1 glass-bg rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        "p-2 rounded-md transition-colors",
                        viewMode === 'grid' 
                          ? "bg-emerald-500 text-white" 
                          : "text-slate-600 hover:text-emerald-600"
                      )}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        "p-2 rounded-md transition-colors",
                        viewMode === 'list' 
                          ? "bg-emerald-500 text-white" 
                          : "text-slate-600 hover:text-emerald-600"
                      )}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <p className="text-slate-600 dark:text-slate-400">
                  {sortedEquipment.length} equipment found
                </p>
                {Object.values(filters).some(filter => 
                  Array.isArray(filter) ? filter.length > 0 : filter !== '' && filter !== 0
                ) && (
                  <button
                    onClick={() => {
                      setFilters({
                        category: [],
                        priceRange: [0, 500],
                        ageSuitability: [],
                        equipmentAge: [],
                        condition: [],
                        city: [],
                        rating: 0,
                        searchQuery: '',
                      });
                      setSearchQuery('');
                    }}
                    className="text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {/* Equipment Grid/List */}
              {sortedEquipment.length > 0 ? (
                <div className={cn(
                  "grid gap-6",
                  viewMode === 'grid' 
                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                    : "grid-cols-1"
                )}>
                  {sortedEquipment.map((equipment, index) => (
                    <motion.div
                      key={equipment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <EquipmentCard 
                        equipment={equipment} 
                        className={viewMode === 'list' ? "flex" : ""}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass-card text-center py-16"
                >
                  <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    No equipment found
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Try adjusting your search criteria or filters
                  </p>
                  <button
                    onClick={() => {
                      setFilters({
                        category: [],
                        priceRange: [0, 500],
                        ageSuitability: [],
                        equipmentAge: [],
                        condition: [],
                        city: [],
                        rating: 0,
                        searchQuery: '',
                      });
                      setSearchQuery('');
                    }}
                    className="btn-primary"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
