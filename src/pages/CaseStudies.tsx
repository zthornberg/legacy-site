import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      id: 1,
      title: "Flooring Distributor (3-Region Roll-Up)",
      situation: "Fragmented SKUs, rebate leakage, tight WC.",
      strategy: "SKU rationalization, rebate hygiene, MAP discipline; QoE prep early.",
      result: "+220 bps GM, WC swing +$450k, 5.3× EBITDA vs ~4.7× baseline.",
      category: "Distribution"
    },
    {
      id: 2,
      title: "IT Services (Gov/Commercial Mix)",
      situation: "Underappreciated contract assets; diffuse story.",
      strategy: "Contract quality map, pipeline probability model, reposition narrative.",
      result: "Multiple strategic offers; ~+0.6× multiple lift.",
      category: "Technology"
    },
    {
      id: 3,
      title: "Specialty Manufacturing (Niche OEM)",
      situation: "Owner-centric ops; no bench.",
      strategy: "Interim ops + transition budget; CAPEX ROI rollup.",
      result: "Broader buyer universe; closed at target with earn-out protections.",
      category: "Manufacturing"
    },
    {
      id: 4,
      title: "Energy Services (Pressure Pumping)",
      situation: "Cyclical revenue; cost volatility.",
      strategy: "Service-line margin analysis, parts inventory controls, forward coverage.",
      result: "Cleaner WC profile; credible plan → stronger IOIs.",
      category: "Energy"
    },
    {
      id: 5,
      title: "Healthcare Services (Multi-Location)",
      situation: "Payer mix concerns; compliance gaps.",
      strategy: "Revenue cycle audit, compliance remediation, payer diversification plan.",
      result: "Clean audit trail; premium valuation from strategic buyer.",
      category: "Healthcare"
    },
    {
      id: 6,
      title: "Construction Services (Commercial Focus)",
      situation: "Backlog visibility; bonding capacity constraints.",
      strategy: "Project pipeline analysis, bonding optimization, safety record enhancement.",
      result: "Expanded buyer pool; closed above market multiples.",
      category: "Construction"
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Outcomes in Focus
            </h1>
            <p className="text-sm text-slate-500">
              Situation → Strategy → Result. Details anonymized to protect client confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </span>
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {caseStudy.title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">
                      Situation
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudy.situation}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                      Strategy
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudy.strategy}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                      Result
                    </h4>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {caseStudy.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-ink via-slate-900 to-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Every successful transaction starts with understanding your unique situation and crafting the right strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/sell/brokerage"
              className="bg-white text-ink px-8 py-4 rounded-xl hover:bg-white/90 motion-safe hover-lift hover-press font-semibold inline-flex items-center"
            >
              Get Free Valuation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/buy/representation"
              className="border-2 border-white/40 text-white px-8 py-4 rounded-xl hover:bg-white/10 motion-safe hover-lift hover-press font-semibold backdrop-blur-sm"
            >
              Buyer Representation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;