import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Users, Shield, Briefcase, TrendingUp, Target } from 'lucide-react';

const MAServices: React.FC = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Strategic Sale Planning',
      description: 'We help optimize your business pre-sale through financial recasting and growth adjustments to command top dollar in the marketplace.'
    },
    {
      icon: Users,
      title: 'Buyer Network & PE Relationships',
      description: 'Access our relationships with private equity groups and corporate buyers, enabling nationwide and international reach for your transaction.'
    },
    {
      icon: Shield,
      title: 'Confidential Auction Process',
      description: 'We run targeted auctions or broad outreach while maintaining strict confidentiality, generating competitive offers for your business.'
    },
    {
      icon: Briefcase,
      title: 'Deal Expertise',
      description: 'Our finance professionals navigate complex issues like earn-outs, equity rollovers, and regulatory approvals with Series 79 licensing.'
    }
  ];

  const dealTypes = [
    'Management buyouts',
    'Private equity recapitalizations', 
    'Strategic acquisitions',
    'Corporate divestitures',
    'International transactions',
    'Complex deal structures'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ink via-slate-900 to-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              M&A Advisory Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed">
              Our M&A division combines the analytical rigor of top investment banks with 
              the personalized service of a boutique consultancy. We specialize in complex 
              transactions for lower middle-market companies seeking strategic partners.
            </p>
            <Link
              to="/contact"
              className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold inline-block"
            >
              Contact Our M&A Advisors
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive M&A Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic planning to deal execution, we provide Wall Street-grade 
              service for mid-sized businesses seeking optimal outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Transaction Expertise
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From management buyouts to private equity recapitalizations, our team has 
                the connections to find the right partner for your company's next stage. 
                We handle complex deal structures that maximize value for all stakeholders.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {dealTypes.map((dealType, index) => (
                  <div key={index} className="flex items-center">
                    <Target className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{dealType}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Legacy M&A?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-lg p-2 mr-4 mt-1">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Boutique Focus</h4>
                    <p className="text-gray-600 text-sm">
                      Personalized attention with investment banking-level expertise
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-slate-100 rounded-lg p-2 mr-4 mt-1">
                    <Users className="h-5 w-5 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Extensive Network</h4>
                    <p className="text-gray-600 text-sm">
                      Direct relationships with PE firms and strategic buyers
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-lg p-2 mr-4 mt-1">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Proven Process</h4>
                    <p className="text-gray-600 text-sm">
                      Systematic approach with rigorous due diligence support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for a Strategic Exit?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Whether you're considering a strategic sale, management buyout, or private equity 
            partnership, our M&A advisors can help you explore your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold"
            >
              Schedule Confidential Consultation
            </Link>
            <Link
              to="/sell/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 font-semibold"
            >
              View More Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MAServices;