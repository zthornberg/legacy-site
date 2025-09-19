import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cog, 
  ShoppingBag, 
  Monitor, 
  Heart, 
  Briefcase, 
  Home, 
  HardHat, 
  Zap, 
  Coffee,
  Rocket
} from 'lucide-react';

const IndustriesOverview: React.FC = () => {
  const industries = [
    {
      name: 'Manufacturing & Distribution',
      slug: 'manufacturing-distribution',
      icon: Cog,
      description: 'Precision manufacturing, advanced materials, industrial machinery, and wholesale distribution',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      name: 'Retail & Consumer',
      slug: 'retail-consumer',
      icon: ShoppingBag,
      description: 'Retail stores, e-commerce, consumer services, and franchise operations',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      name: 'Technology',
      slug: 'technology',
      icon: Monitor,
      description: 'Software companies, SaaS platforms, IT services, and digital media',
      color: 'bg-green-50 text-green-600'
    },
    {
      name: 'Healthcare',
      slug: 'healthcare',
      icon: Heart,
      description: 'Medical practices, clinics, healthcare services, and medical device companies',
      color: 'bg-red-50 text-red-600'
    },
    {
      name: 'Business Services',
      slug: 'business-services',
      icon: Briefcase,
      description: 'Professional services, consulting, marketing agencies, and B2B services',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      name: 'Home Services',
      slug: 'home-services',
      icon: Home,
      description: 'HVAC, plumbing, landscaping, roofing, and residential service businesses',
      color: 'bg-orange-50 text-orange-600'
    },
    {
      name: 'Construction',
      slug: 'construction',
      icon: HardHat,
      description: 'General contractors, specialty trades, and construction materials suppliers',
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      name: 'Energy & Sustainability',
      slug: 'energy-sustainability',
      icon: Zap,
      description: 'Oil & gas services, renewable energy, solar installers, and sustainability firms',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      name: 'Hospitality',
      slug: 'hospitality',
      icon: Coffee,
      description: 'Hotels, restaurants, bars, and travel/tourism services',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      name: 'Startup Funding',
      slug: 'startup-funding',
      icon: Rocket,
      description: 'Early-stage companies, venture capital connections, and growth funding',
      color: 'bg-teal-50 text-teal-600'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Legacy has facilitated deals across a wide range of industries. Our diversified 
              expertise allows us to understand the unique challenges and opportunities in each sector, 
              providing specialized guidance for every transaction.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={`/industries/${industry.slug}`}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${industry.color} group-hover:scale-110 transition-transform`}>
                  <industry.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why Industry Expertise Matters
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Sellers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understanding your industry's specific value drivers, market trends, and buyer 
                  preferences allows us to position your business optimally and attract the right 
                  acquirers who truly appreciate what you've built.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Buyers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our industry knowledge helps identify the key risks and opportunities in each 
                  sector, ensuring you make informed acquisition decisions with a clear understanding 
                  of market dynamics and growth potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesOverview;