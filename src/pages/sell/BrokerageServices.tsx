import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, FileText, Handshake, Shield, CheckCircle } from 'lucide-react';
import ProcessSection from '../../components/ProcessSection';

const BrokerageServices: React.FC = () => {
  const processSteps = [
    {
      icon: TrendingUp,
      title: 'Valuation & Packaging',
      description: 'We conduct thorough valuations and prepare professional marketing packages to attract qualified buyers.'
    },
    {
      icon: Users,
      title: 'Marketing & Buyer Reach',
      description: 'Your listing is confidentially marketed to our extensive network of 2,400+ buyers, maximizing exposure while protecting your privacy.'
    },
    {
      icon: Handshake,
      title: 'Negotiation & Closing',
      description: 'Experienced advisors handle deal negotiation, due diligence guidance, and work with attorneys to ensure smooth closing.'
    },
    {
      icon: Shield,
      title: 'White-Glove Support',
      description: 'Your Legacy broker guides you at every step – from initial strategy to closing documents – ensuring the best outcome.'
    }
  ];

  const benefits = [
    'Comprehensive business valuation',
    'Professional marketing materials',
    'Access to 2,400+ qualified buyers',
    'Confidential marketing process',
    'Expert negotiation support',
    'Due diligence guidance',
    'Transaction coordination',
    'Post-closing support'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ink via-slate-900 to-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              Brokerage Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed">
              Legacy is honored to guide you through one of the biggest decisions of your life, 
              and we take that responsibility seriously. Our comprehensive brokerage services 
              help small to mid-sized business owners maximize value and achieve successful exits.
            </p>
            <Link
              to="/contact"
              className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold inline-block"
            >
              Get Free Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From valuation to closing, we handle every aspect of your business sale 
              with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose Legacy?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We combine traditional business brokerage expertise with modern technology 
                and a client-first approach that sets us apart in the industry.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Ready to Sell Your Business?
              </h3>
              <p className="text-gray-600 mb-8">
                Get started with a complimentary business valuation and consultation 
                with one of our experienced advisors.
              </p>
              
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block w-full bg-accent text-white py-4 rounded-xl hover:bg-accentAlt motion-safe font-semibold text-center"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  to="/sell/case-studies"
                  className="block w-full border-2 border-accent text-accent py-4 rounded-xl hover:bg-accent hover:text-white motion-safe font-semibold text-center"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection mode="sell" />
    </div>
  );
};

export default BrokerageServices;