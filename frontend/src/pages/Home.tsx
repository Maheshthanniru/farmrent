import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Wrench, 
  Music, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  Star
} from 'lucide-react';
import Hero from '../components/Hero';
import EquipmentCard from '../components/EquipmentCard';
import { equipments } from '../data/equipments';
import { formatPrice } from '../lib/utils';

const Home: React.FC = () => {
  // Get trending equipment (top rated)
  const trendingEquipment = equipments
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const pillars = [
    {
      icon: Shield,
      title: "Trusted & Verified",
      description: "All equipment owners are verified and insured for your peace of mind."
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Book equipment instantly with secure payments and flexible scheduling."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a community of professionals sharing quality equipment."
    }
  ];

  const categories = [
    { name: "Photography", icon: Camera, count: 12, color: "bg-blue-500" },
    { name: "Power Tools", icon: Wrench, count: 8, color: "bg-orange-500" },
    { name: "Musical Equipment", icon: Music, count: 15, color: "bg-purple-500" },
    { name: "Lighting", icon: Camera, count: 6, color: "bg-yellow-500" },
    { name: "Drones", icon: Camera, count: 4, color: "bg-green-500" },
    { name: "AV Equipment", icon: Camera, count: 10, color: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Three Pillars */}
      <section className="py-20 bg-gradient-to-b from-transparent to-emerald-50/50 dark:to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose FarmRent?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We make equipment rental simple, secure, and accessible for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card text-center"
              >
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Popular Categories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Find the equipment you need across our diverse categories
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to={`/equipments?category=${category.name}`}
                  className="glass-card text-center p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {category.count} items
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Rentals */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/50 dark:from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Trending Rentals
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Most popular equipment this week
              </p>
            </div>
            <Link
              to="/equipments"
              className="btn-primary flex items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingEquipment.map((equipment, index) => (
              <motion.div
                key={equipment.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <EquipmentCard equipment={equipment} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card text-center p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Ready to Start Renting?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust FarmRent for their equipment needs. 
              Start browsing our extensive catalog today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/equipments" className="btn-primary">
                Browse Equipment
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
