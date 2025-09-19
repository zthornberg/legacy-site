import React from 'react';
import { Check, Star, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const packages = [
    {
      name: 'Associate Package',
      price: '$60,000',
      icon: Star,
      color: 'border-accent',
      buttonColor: 'bg-accent hover:bg-accentAlt',
      features: [
        '6 guaranteed hot seller leads/mo (≥$1M revenue)',
        '20+ targeted warm local leads in your preferred industries',
        'Backend portal & research suite access (core level)',
        'Hands-on listing prep playbooks & deal coaching',
        'Royalty: 20%'
      ],
      description: 'Perfect for self-starters who can leverage Legacy\'s tools quickly',
      highlight: false
    },
    {
      name: 'Professional Package',
      price: '$85,000',
      icon: Crown,
      color: 'border-accent',
      buttonColor: 'bg-accent hover:bg-accentAlt',
      features: [
        '10 guaranteed hot seller leads/mo',
        '30+ targeted warm local leads (high-fit for nurturing)',
        'Backend portal & research suite access (expanded level)',
        'Dedicated campaign reviews + comp pack per mandate',
        'Royalty: 15%'
      ],
      description: 'Most popular - comprehensive launchpad for scaling fast',
      highlight: true
    },
    {
      name: 'Enterprise Package',
      price: '$110,000',
      icon: Crown,
      color: 'border-yellow-500',
      buttonColor: 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600',
      features: [
        '15 guaranteed hot seller leads/mo',
        '50+ targeted warm local leads',
        'Backend portal & research suite access (advanced level)',
        'Priority data requests (PE lists, buyer maps, industry briefs)',
        'Royalty: 10%'
      ],
      description: 'Elite package for building a multi-agent brokerage firm',
      highlight: false
    }
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Licensing Program Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the package that matches your ambition. Each tier includes everything 
            you need to launch and scale a successful business brokerage practice.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden relative ${
                pkg.highlight ? 'ring-4 ring-accent ring-opacity-50 transform scale-105' : ''
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-accent text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-8 ${pkg.highlight ? 'pt-12' : ''}`}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-4 ${pkg.color} mb-4`}>
                    <pkg.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-ink mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full text-white py-4 rounded-lg transition-all transform hover:scale-105 font-semibold ${pkg.buttonColor}`}>
                  Apply for This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Financing Note */}
        <div className="bg-white rounded-xl p-8 shadow-lg text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Financing Available*
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            For select high-value applicants, Legacy can provide financing options or 
            deferred payment plans. We believe in investing in exceptional talent.
          </p>
          <p className="text-sm text-gray-500">
            *For qualified candidates. Financing options discussed during interview process.
          </p>
        </div>

        {/* Data Access Caption */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500">
            All tiers include ~$60k/yr equivalent access to premium M&A data tools; access level expands with tier.
          </p>
        </div>

        {/* Investment ROI */}
        <div className="mt-16 bg-gradient-to-br from-ink via-slate-900 to-ink rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Your Investment, Your Returns</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            At 10% commission on a $500K business sale, one successful deal could 
            generate $50K in commission. Our system is designed to help you close 
            multiple deals per year.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">$50K</div>
              <div className="text-sm opacity-75">Average commission per deal</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6-12</div>
              <div className="text-sm opacity-75">Leads provided monthly</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$500K+</div>
              <div className="text-sm opacity-75">Annual earning potential</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;