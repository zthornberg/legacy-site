import React, { useState } from 'react';
import { Building, Send, CheckCircle } from 'lucide-react';

const PrivateEquityRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    brokerName: 'John Broker', // Pre-filled from auth context
    dealOverview: '',
    businessIndustry: '',
    revenueRange: '',
    requestType: '',
    urgency: '',
    additionalInfo: ''
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
    console.log('PE request submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl p-12 shadow-lg text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Request Submitted
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We'll respond with relevant PE firm information within 1 business day.
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
            Private Equity Information Request
          </h1>
          <p className="text-gray-600">
            Request information or introductions to private equity groups for specific deals
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
                onChange={(e) => handleInputChange('brokerName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                readOnly
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Industry *
                </label>
                <select
                  required
                  value={formData.businessIndustry}
                  onChange={(e) => handleInputChange('businessIndustry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="services">Services</option>
                  <option value="construction">Construction</option>
                  <option value="energy">Energy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Revenue Range *
                </label>
                <select
                  required
                  value={formData.revenueRange}
                  onChange={(e) => handleInputChange('revenueRange', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select range</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m-25m">$10M - $25M</option>
                  <option value="25m-plus">$25M+</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Request Type *
                </label>
                <select
                  required
                  value={formData.requestType}
                  onChange={(e) => handleInputChange('requestType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Select request type</option>
                  <option value="pe-list">PE firm contact list</option>
                  <option value="introduction">Direct introduction</option>
                  <option value="market-intel">Market intelligence</option>
                  <option value="deal-structure">Deal structure advice</option>
                </select>
              </div>

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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deal Overview *
              </label>
              <textarea
                required
                rows={4}
                value={formData.dealOverview}
                onChange={(e) => handleInputChange('dealOverview', e.target.value)}
                placeholder="Describe the business, deal size, and why you're seeking PE involvement..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                rows={3}
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                placeholder="Any specific PE preferences, deal structure requirements, or other relevant details..."
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

        {/* Info Panel */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            How It Works
          </h3>
          <ul className="text-blue-800 text-sm space-y-2">
            <li>• Submit your request with deal details</li>
            <li>• Our M&A team reviews and identifies relevant PE firms</li>
            <li>• We provide contact information and introduction support</li>
            <li>• Follow-up within 1 business day guaranteed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivateEquityRequest;