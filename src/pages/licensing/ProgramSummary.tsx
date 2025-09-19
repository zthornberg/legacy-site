import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, TrendingUp, Award, CheckCircle, DollarSign, Shield } from 'lucide-react';

const ProgramSummary: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Exclusive Lead Flow',
      description: '6+ exclusive seller leads every month for your first year – high-quality leads with $1M+ revenues, pre-contacted and vetted by our marketing team.'
    },
    {
      icon: Award,
      title: 'All-Expenses-Paid Training',
      description: 'Three-day intensive training conference in Scottsdale, AZ. Legacy covers travel and lodging for this comprehensive bootcamp.'
    },
    {
      icon: Users,
      title: 'Ongoing Coaching & Webinars',
      description: 'Monthly 1-on-1 coaching and weekly training webinars. Continuous development with live sessions and recorded training library.'
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Toolkit',
      description: 'Complete document library, tech suite, custom website, branding kit, and one year of IT support to keep everything running smoothly.'
    },
    {
      icon: Star,
      title: 'Dedicated Support Team',
      description: 'White-glove support from industry veterans. Our experienced team is on-call to assist with complex questions and deal structuring.'
    },
    {
      icon: DollarSign,
      title: '100% Money-Back Guarantee',
      description: 'If you follow our system and don\'t recoup your initial license fee within 12 months, we\'ll pay you the difference. Your success is guaranteed.'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ink via-slate-900 to-ink text-white overflow-hidden">
        {/* Team Photo Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/media/team-photo.jpg"
            alt="Legacy Team"
            className="w-full h-full object-cover opacity-30"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-ink/85 via-slate-900/75 to-ink/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl relative z-10">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Legacy Broker Licensing Program
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed">
              Build a real M&A practice faster—without going it alone. Legacy licenses give you the tools, data, and senior mentorship to serve owners well and earn like a top-5% advisor.
            </p>
            <Link
              to="/licensing/pricing"
              className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold inline-block"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                The Hidden Opportunity
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Opportunity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Business brokering is a hidden gem – lucrative yet largely untapped. Unlike real estate, 
                    the sale of businesses remains an under-served market, creating massive opportunity for 
                    professional, intelligent individuals to thrive.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legacy's Solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Legacy Business Brokers was founded to help people like you break into this networked 
                    industry with all the tools and knowledge you need to succeed. Through our Professional 
                    Business Intermediary (PBI) program, we offer the most comprehensive launch package available.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">6+ exclusive leads monthly</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">All-expenses-paid training</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Custom website & branding</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Monthly 1-on-1 coaching</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">100% money-back guarantee</span>
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">$500K+*</div>
              <div className="text-sm opacity-75">Annual earning potential can exceed</div>
            </div>
          </div>
        </div>
        <p className="text-center text-sm opacity-60 mt-4">
          *From IBBA and M&A Source Reported 2024 Data
        </p>
      </section>

      {/* Program Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Legacy provides everything you need to launch and scale a successful 
              business brokerage practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At Legacy, success is a byproduct of putting others first. Our brokers are trained 
              to serve clients with empathy and professionalism. We foster a collaborative network 
              where every broker continuously learns and improves.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This isn't a get-rich-quick scheme; it's a partnership built on integrity, hard work, 
              and outstanding client results. We seek applicants with a demonstrated track record 
              of excellence – whether in business ownership, finance, corporate leadership, or B2B sales.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Assurance (Deliverable-Based)</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              If you complete onboarding and meet the activity requirements, we guarantee delivery of the defined program assets: warm introductions to highly interested sellers, tailored market data packs, platform access, and hands-on deal coaching. If we fail to deliver these program assets within the stated windows, we'll make it right through additional delivery or fee credit. (This is not an earnings guarantee.)
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 text-xs text-gray-500">
            <p>Legacy is a licensing program—not a franchise. Licensees operate independent businesses and are solely responsible for their services.</p>
            <p>Legacy does not provide or disclose client financial statements. All examples are illustrative.</p>
            <p>Any revenue examples reflect unique circumstances and are not promises of future results.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Build Your Legacy?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Spaces are limited – we accept only a handful of new brokers each quarter. 
            Join the elite network of Legacy professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/licensing/pricing"
              className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold"
            >
              View Pricing & Apply
            </Link>
            <Link
              to="/licensing/testimonials"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10 motion-safe hover-lift hover-press font-semibold backdrop-blur-sm"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramSummary;