import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoHero from '../components/ui/VideoHero';
import QuickNavBubbles from '../components/home/QuickNavBubbles';
import GlassCard from '../components/ui/GlassCard';
import CaseShowcase from '../components/ui/CaseShowcase';
import MetricStrip from '../components/ui/MetricStrip';
import CaseStudySpotlight, { CaseStudy } from '../components/ui/CaseStudySpotlight';
import LogoTicker from '../components/ui/LogoTicker';
import CTAHeadband from '../components/ui/CTAHeadband';
import homeContent from '../content/home.json';

const Home: React.FC = () => {
  const metrics = [
    { label: "Buyer Profiles", value: 2417, suffix: "+" },
    { label: "Licensed Brokers", value: 30, suffix: "+" },
    { label: "Client Satisfaction", value: 97, suffix: "%" },
    { label: "Transaction Value Closed", value: 60, suffix: "M+" },
  ];

  const cases: CaseStudy[] = [
    {
      id: "construction",
      title: "Construction Co.",
      headline: "Home-Builder Construction Company",
      bullets: [
        "$40M annual revenue, $5.5M EBITDA",
        "Multiple above-ask offers generated",
        "Strong asset base and scale efficiencies highlighted"
      ],
      imageUrl: "/media/Home Builder Construction Case Study.png",
      ctaHref: "/sell/case-studies",
      ctaLabel: "View Case Studies"
    },
    {
      id: "elevator",
      title: "Manufacturing Co.",
      headline: "Elevator Manufacturing Company",
      bullets: [
        "$3M+ annual revenue, $700K EBITDA",
        "Strategic buyer demand from installed base",
        "Recurring parts/service revenue stream"
      ],
      imageUrl: "/media/Elevator Manufacturing Pic.png",
      ctaHref: "/sell/case-studies",
      ctaLabel: "View Case Studies"
    },
    {
      id: "flooring",
      title: "Distribution Co.",
      headline: "Flooring Distribution Company",
      bullets: [
        "$6.5M+ annual revenue, $950K EBITDA",
        "Lean operations with strong supplier terms",
        "Fast diligence from clear documentation"
      ],
      imageUrl: "/media/Flooring Distributor Pic.png",
      ctaHref: "/sell/case-studies",
      ctaLabel: "View Case Studies"
    }
  ];

  const logos = [
    { src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", alt: "Partner 1" },
    { src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg", alt: "Partner 2" },
    { src: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg", alt: "Partner 3" },
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

      {/* Trusted Partners */}
      <section className="relative -mt-24 z-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lg">
            <p className="text-center text-sm text-slate-600 mb-4">Trusted by industry leaders</p>
            <LogoTicker logos={logos} />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section section-wide">
        <MetricStrip items={metrics} />
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

      {/* Case Study Spotlight */}
      <section className="section section-wide">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-ink mb-4 font-space-grotesk">
            Success Stories
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Real outcomes from real transactions across diverse industries.
          </p>
        </div>
        <CaseStudySpotlight items={cases} />
      </section>

      {/* CTA Headband */}
      <CTAHeadband />

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