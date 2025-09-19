import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoHero from '../components/ui/VideoHero';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import QuickNavBubbles from '../components/home/QuickNavBubbles';
import GlassCard from '../components/ui/GlassCard';
import CaseShowcase from '../components/ui/CaseShowcase';
import homeContent from '../content/home.json';

const Home: React.FC = () => {
  const stats = [
    { icon: Users, value: '2,417+', label: 'Buyer Profiles', color: 'text-blue-600' },
    { icon: Award, value: '30+', label: 'Licensed Brokers Nationwide', color: 'text-green-600' },
    { icon: TrendingUp, value: '97%+', label: 'Client Satisfaction', color: 'text-purple-600' },
    { icon: Clock, value: '35+ Years', label: 'Combined Team Experience', color: 'text-orange-600' },
    { icon: DollarSign, value: '$60M+', label: 'Transaction Value Closed', color: 'text-emerald-600' }
  ];

  return (
    <div>
      {/* Video Hero Section */}
      <VideoHero className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-h1 font-bold leading-tight mb-8 text-white font-space-grotesk"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {homeContent.hero.headline}
            </motion.h1>
            
            <motion.p 
              className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {homeContent.hero.subtext}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/sell/brokerage"
                className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold text-center"
              >
                {homeContent.hero.cta_primary}
              </Link>
              <Link
                to="/buy/listings"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10 motion-safe hover-lift hover-press font-semibold text-center backdrop-blur-sm"
              >
                {homeContent.hero.cta_secondary}
              </Link>
            </motion.div>
          </div>
        </div>

      </VideoHero>

      {/* Animated Stats Banner - Moved outside hero */}
      <section className="relative -mt-24 z-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:grid grid-cols-5 gap-4">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-h2 font-bold text-ink mb-4 font-space-grotesk">
              Your Success Is Our Mission
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Whether you're looking to buy, sell, or build an elite advisory practice, 
              Legacy provides the tools and expertise to achieve your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {homeContent.services.map((service, index) => (
              <GlassCard key={index} animate delay={index * 0.1}>
                <h3 className="text-2xl font-bold text-ink mb-4 font-space-grotesk">
                  {service.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link_url}
                  className="inline-flex items-center text-accent font-semibold hover:text-accentAlt motion-safe"
                >
                  {service.link_text}
                  <span className="ml-2">→</span>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* About Legacy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-h2 font-bold text-ink mb-8 font-space-grotesk">
              About Legacy
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Legacy combines cutting-edge AI analytics with seasoned M&A advisory to provide 
              a modern, client-focused experience. Our team's humble, driven culture means we 
              put your goals first, executing every deal with integrity and excellence.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We believe success is a byproduct of putting others first. Our advisors serve 
              clients with empathy and professionalism, fostering a collaborative network where 
              continuous learning and improvement drive outstanding results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="relative bg-white">
        <CaseShowcase />
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-br from-ink via-slate-900 to-ink text-white" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-h2 font-bold mb-8 font-space-grotesk">Ready to Start Your Legacy?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Join thousands of successful business owners and brokers who trust Legacy 
              for their most important transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/sell/brokerage"
                className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold"
              >
                Get Free Valuation
              </Link>
              <Link
                to="/licensing/program"
                className="border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10 motion-safe hover-lift hover-press font-semibold backdrop-blur-sm"
              >
                Join Our Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;