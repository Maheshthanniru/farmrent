import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Clock, Star, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: Users },
    { label: 'Equipment Items', value: '5,000+', icon: Award },
    { label: 'Cities Covered', value: '50+', icon: Shield },
    { label: 'Average Rating', value: '4.8', icon: Star },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'All equipment owners are verified and insured for your peace of mind.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building a community of trusted professionals sharing quality equipment.'
    },
    {
      icon: Clock,
      title: 'Convenience',
      description: 'Instant booking, flexible scheduling, and seamless payment processing.'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Promoting equipment sharing to reduce waste and environmental impact.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About FarmRent
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing equipment rental by connecting professionals with trusted equipment owners. 
            Our platform makes it easy to find, book, and rent high-quality equipment for any project.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              At FarmRent, we believe that access to quality equipment shouldn't be limited by ownership. 
              Our mission is to create a sustainable, community-driven platform where professionals can easily 
              find and rent the equipment they need, while equipment owners can monetize their investments 
              and contribute to a more efficient, environmentally-friendly economy.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass-card p-8"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="glass-card p-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Why Trust FarmRent?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Verified Owners
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                All equipment owners go through our verification process to ensure quality and reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Quality Guarantee
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We guarantee the quality of all equipment listed on our platform with comprehensive insurance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                24/7 Support
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our customer support team is available around the clock to help with any questions or issues.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
