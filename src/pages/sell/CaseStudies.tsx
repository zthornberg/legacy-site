import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Award, Building, Zap, HardHat, ShoppingBag, Home, Cog } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      industry: 'Construction',
      title: 'From Listing to Close in 6 Months',
      icon: HardHat,
      color: 'bg-yellow-100 text-yellow-600',
      summary: 'Legacy helped a family-owned construction firm attract multiple offers, ultimately closing a sale at 15% above the asking price.',
      details: 'A third-generation construction company specializing in commercial projects was ready to retire. Despite market challenges, our targeted marketing approach identified three serious buyers within 90 days.',
      outcome: 'Sold for 3.5× EBITDA',
      timeframe: '6 months',
      highlight: 'Multiple offers, 15% above ask'
    },
    {
      industry: 'Manufacturing',
      title: 'Strategic Acquisition Success',
      icon: Cog,
      color: 'bg-blue-100 text-blue-600',
      summary: 'An elevator components manufacturer was acquired by a larger industry player, securing the founder\'s retirement and preserving all jobs.',
      details: 'Legacy orchestrated a deal structure that rewarded the seller\'s decades of hard work while ensuring operational continuity.',
      outcome: 'Strategic acquisition',
      timeframe: '8 months',
      highlight: 'All jobs preserved, founder retirement secured'
    },
    {
      industry: 'Retail',
      title: 'Private Equity Expansion',
      icon: ShoppingBag,
      color: 'bg-purple-100 text-purple-600',
      summary: 'Legacy prepared a regional flooring retailer for sale, resulting in a private equity acquisition that infused growth capital.',
      details: 'The deal enabled the business to expand while the original owners retained a minority stake for upside participation.',
      outcome: 'PE growth capital',
      timeframe: '10 months',
      highlight: 'Growth capital + minority stake retention'
    },
    {
      industry: 'Energy',
      title: 'Navigating a Niche Sale',
      icon: Zap,
      color: 'bg-green-100 text-green-600',
      summary: 'Even amid oil market volatility, Legacy facilitated the sale of an oilfield services company to an investor group.',
      details: 'Our expertise in energy sector trends helped overcome due diligence hurdles, achieving a successful exit for the owners.',
      outcome: 'Strategic exit',
      timeframe: '12 months',
      highlight: 'Navigated market volatility successfully'
    },
    {
      industry: 'Home Services',
      title: 'Smooth Owner Transition',
      icon: Home,
      color: 'bg-orange-100 text-orange-600',
      summary: 'A longstanding electrical contracting business was transitioned to new ownership through Legacy\'s network.',
      details: 'We vetted and found a buyer who valued the company\'s legacy, ensuring continuity for employees and clients alike.',
      outcome: 'Seamless transition',
      timeframe: '7 months',
      highlight: 'Employee and client continuity preserved'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [caseStudies.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how Legacy has helped business owners across various industries 
              achieve successful exits and buyers find the right opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Carousel */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Case Study Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 lg:p-12 shadow-xl mx-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${currentCase.color} mr-4`}>
                      <currentCase.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                        {currentCase.industry}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {currentCase.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {currentCase.summary}
                  </p>

                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {currentCase.details}
                  </p>

                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-900">{currentCase.timeframe}</div>
                        <div className="text-sm text-gray-600">Time to Close</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-green-600">{currentCase.outcome}</div>
                        <div className="text-sm text-gray-600">Result</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="bg-slate-50 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-purple-900 mb-4">
                      Key Highlight
                    </h3>
                    <p className="text-lg text-slate-700 font-medium mb-6">
                      "{currentCase.highlight}"
                    </p>
                    
                    <div className="space-y-4 text-slate-700">
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-3 text-accent" />
                        <span>Above market valuation achieved</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 mr-3 text-accent" />
                        <span>Client satisfaction: 100%</span>
                      </div>
                      <div className="flex items-center">
                        <Building className="h-5 w-5 mr-3 text-accent" />
                        <span>Smooth transition completed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-ink via-slate-900 to-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Join the Legacy family and experience the same level of service and success 
            that our clients have come to expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/sell/brokerage"
              className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold"
            >
              Get Free Valuation
            </a>
            <a
              href="/buy/listings"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10 motion-safe hover-lift hover-press font-semibold backdrop-blur-sm"
            >
              Browse Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;