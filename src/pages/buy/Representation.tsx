import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';

const Representation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    buyerType: '',
    targetEV: '',
    message: ''
  });

  const processSteps = [
    {
      title: "Mandate & Criteria",
      description: "Define investment thesis, size parameters, and must-have characteristics for your ideal acquisition."
    },
    {
      title: "Sourcing & First Pass",
      description: "Leverage our network and proprietary deal flow to identify high-signal opportunities that match your criteria."
    },
    {
      title: "Diligence Prep",
      description: "Structure comprehensive due diligence process with expert guidance on financial, operational, and strategic factors."
    },
    {
      title: "Bid Strategy",
      description: "Develop competitive positioning and negotiation strategy to win the right deals at the right price."
    },
    {
      title: "Close & 90-Day Plan",
      description: "Execute seamless closing process and implement integration roadmap for immediate value creation."
    }
  ];

  const buyerTypes = [
    "Private Equity",
    "Family Office", 
    "Search Fund",
    "Corporate/Strategic",
    "Individual Operator"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buyer representation inquiry:', formData);
    // Form submission would go here
  };

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Buyer Representation
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Legacy sources off-market, high-signal deals—then prosecutes a professional process 
              so you can move first and win clean.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              A disciplined approach to finding and winning the right opportunities
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
              
              <div className="flex justify-between items-center relative">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col items-center max-w-xs"
                  >
                    <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 relative z-10">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600">
              We represent sophisticated buyers across the investment spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {buyerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">
                  {type}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start the Conversation
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your acquisition criteria and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    aria-label="Your email address"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buyer Type *
                  </label>
                  <select
                    required
                    value={formData.buyerType}
                    onChange={(e) => handleInputChange('buyerType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    aria-label="Select buyer type"
                  >
                    <option value="">Select buyer type</option>
                    {buyerTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Enterprise Value
                  </label>
                  <select
                    value={formData.targetEV}
                    onChange={(e) => handleInputChange('targetEV', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                    aria-label="Select target enterprise value"
                  >
                    <option value="">Select range</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-10m">$5M - $10M</option>
                    <option value="10m-25m">$10M - $25M</option>
                    <option value="25m-plus">$25M+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your acquisition criteria, preferred industries, geographic focus, and timeline..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  aria-label="Additional message"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-accent text-white px-8 py-4 rounded-xl hover:bg-accentAlt motion-safe hover-lift hover-press font-semibold inline-flex items-center"
                  aria-label="Submit inquiry"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Representation;