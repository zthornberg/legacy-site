import React, { useState } from 'react';
import { BarChart3, Send, CheckCircle, FileText } from 'lucide-react';

const MarketResearchRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    brokerName: 'John Broker',
    industry: '',
    specificTopic: '',
    researchType: '',
    urgency: '',
    intendedUse: '',
    additionalDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Research request submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl p-12 shadow-lg text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Research Request Submitted
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our research team will compile the requested information and deliver it 
              within 2-3 business days. You'll receive an email notification when ready.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Market Research Request
          </h1>
          <p className="text-gray-600">
            Need data on a niche market? Submit a request and our team will provide 
            the latest research or reports to assist you.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Broker Name
              </label>
              <input
                type="text"
                value={formData.brokerName}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                readOnly
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  required
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select industry</option>
                  <option value="manufacturing">Manufacturing & Distribution</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="home-services">Home Services</option>
                  <option value="construction">Construction</option>
                  <option value="energy">Energy & Sustainability</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="business-services">Business Services</option>
                  <option value="retail">Retail & Consumer</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Research Type *
                </label>
                <select
                  required
                  value={formData.researchType}
                  onChange={(e) => handleInputChange('researchType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select type</option>
                  <option value="industry-report">Industry report</option>
                  <option value="market-trends">Market trends analysis</option>
                  <option value="competitor-analysis">Competitor analysis</option>
                  <option value="valuation-multiples">Valuation multiples</option>
                  <option value="regulatory-update">Regulatory updates</option>
                  <option value="custom">Custom research</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specific Topic/Focus *
              </label>
              <input
                type="text"
                required
                value={formData.specificTopic}
                onChange={(e) => handleInputChange('specificTopic', e.target.value)}
                placeholder="e.g., specialty plastics manufacturing, HVAC service consolidation trends"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => handleInputChange('urgency', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select urgency</option>
                  <option value="asap">ASAP (within 24 hours)</option>
                  <option value="week">Within 1 week</option>
                  <option value="month">Within 1 month</option>
                  <option value="flexible">Flexible timing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intended Use
                </label>
                <select
                  value={formData.intendedUse}
                  onChange={(e) => handleInputChange('intendedUse', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select use case</option>
                  <option value="client-presentation">Client presentation</option>
                  <option value="due-diligence">Due diligence support</option>
                  <option value="pricing-strategy">Pricing strategy</option>
                  <option value="market-positioning">Market positioning</option>
                  <option value="general-knowledge">General knowledge</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                rows={4}
                value={formData.additionalDetails}
                onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                placeholder="Provide any additional context, specific questions, or requirements for the research..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-accent text-white px-8 py-3 rounded-xl hover:bg-accentAlt motion-safe font-semibold flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Available Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-600" />
            Available Research Resources
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Industry Reports</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• IBISWorld industry analyses</li>
                <li>• Market size and growth projections</li>
                <li>• Competitive landscape overviews</li>
                <li>• Regulatory impact assessments</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Financial Data</h4>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Industry valuation multiples</li>
                <li>• Transaction comparables</li>
                <li>• Profitability benchmarks</li>
                <li>• Economic trend analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketResearchRequest;