import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Users, CheckCircle } from 'lucide-react';
import industryContent from '../../content/industries/industries.json';

interface IndustryData {
  name: string;
  overview: string;
  whyActive: string;
  legacyInsight: string;
  keyDrivers: string[];
  seoTerms: string[];
}

const IndustryPage: React.FC = () => {
  const { industry } = useParams<{ industry: string }>();
  
  const industryData = industryContent[industry as keyof typeof industryContent] as IndustryData;

  if (!industryData) {
    return (
      <div className="pt-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Industry Not Found</h1>
            <Link to="/industries" className="text-purple-600 hover:text-purple-700">
              ← Back to Industries
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link 
          to="/industries"
          className="inline-flex items-center text-accent hover:text-accentAlt mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Industries
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {industryData.name}
          </h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Overview */}
          <section>
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-accent mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Industry Overview</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {industryData.overview}
            </p>
          </section>

          {/* Why It's Active */}
          <section>
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-slate-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Market Activity</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {industryData.whyActive}
            </p>
          </section>

          {/* Key Value Drivers */}
          <section className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Value Drivers</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {industryData.keyDrivers.map((driver, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{driver}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Legacy's Insight */}
          <section>
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Legacy's Expertise</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {industryData.legacyInsight}
            </p>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Explore Opportunities in {industryData.name}?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're looking to buy or sell in this industry, Legacy's specialized 
            knowledge can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/buy/listings"
              className="bg-accent text-white px-6 py-3 rounded-xl hover:bg-accentAlt motion-safe font-semibold"
            >
              View Available Businesses
            </Link>
            <Link
              to="/sell/brokerage"
              className="border-2 border-accent text-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-white motion-safe font-semibold"
            >
              Get Free Valuation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;