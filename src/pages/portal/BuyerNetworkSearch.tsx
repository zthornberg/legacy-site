import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, Building, Mail } from 'lucide-react';

interface Buyer {
  id: string;
  type: string;
  investmentRange: string;
  preferredIndustries: string[];
  location: string;
  lastActive: string;
}

const BuyerNetworkSearch: React.FC = () => {
  const [searchFilters, setSearchFilters] = useState({
    industry: '',
    location: '',
    investmentRange: '',
    buyerType: ''
  });

  const mockBuyers: Buyer[] = [
    {
      id: 'B001',
      type: 'Individual Investor',
      investmentRange: '$1M - $2M',
      preferredIndustries: ['Manufacturing', 'Construction'],
      location: 'Phoenix, AZ',
      lastActive: '2 days ago'
    },
    {
      id: 'B002', 
      type: 'Private Equity',
      investmentRange: '$5M - $20M',
      preferredIndustries: ['Technology', 'Healthcare'],
      location: 'Dallas, TX',
      lastActive: '1 week ago'
    },
    {
      id: 'B003',
      type: 'Strategic Buyer',
      investmentRange: '$500K - $5M',
      preferredIndustries: ['Home Services', 'Business Services'],
      location: 'Denver, CO',
      lastActive: '3 days ago'
    }
  ];

  const handleSearch = () => {
    // Implement search logic
    console.log('Searching with filters:', searchFilters);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Buyer Network Search
          </h1>
          <p className="text-gray-600">
            Search our database of 2,400+ qualified buyers to find matches for your listings
          </p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <select
              value={searchFilters.industry}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, industry: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">All Industries</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="services">Services</option>
            </select>

            <select
              value={searchFilters.location}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, location: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">All Locations</option>
              <option value="arizona">Arizona</option>
              <option value="texas">Texas</option>
              <option value="california">California</option>
              <option value="colorado">Colorado</option>
            </select>

            <select
              value={searchFilters.investmentRange}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, investmentRange: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">All Investment Ranges</option>
              <option value="under-1m">Under $1M</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m-plus">$5M+</option>
            </select>

            <select
              value={searchFilters.buyerType}
              onChange={(e) => setSearchFilters(prev => ({ ...prev, buyerType: e.target.value }))}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="">All Buyer Types</option>
              <option value="individual">Individual Investor</option>
              <option value="private-equity">Private Equity</option>
              <option value="strategic">Strategic Buyer</option>
            </select>
          </div>

          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-accent text-white px-6 py-3 rounded-xl hover:bg-accentAlt motion-safe font-semibold flex items-center justify-center"
          >
            <Search className="h-4 w-4 mr-2" />
            Search Buyers
          </button>
        </div>

        {/* Results */}
        <div className="space-y-4">
          {mockBuyers.map((buyer) => (
            <div key={buyer.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {buyer.id}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">{buyer.type}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                      {buyer.investmentRange}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      {buyer.location}
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-purple-600" />
                      {buyer.preferredIndustries.join(', ')}
                    </div>
                  </div>
                  
                  <div className="mt-2 text-xs text-gray-500">
                    Last active: {buyer.lastActive}
                  </div>
                </div>

                <button className="bg-accent text-white px-4 py-2 rounded-xl hover:bg-accentAlt motion-safe flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Request Introduction
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Note:</strong> All buyer introductions are coordinated through Legacy HQ 
            to maintain confidentiality and ensure proper vetting. Contact information is 
            shared only after mutual interest is established.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerNetworkSearch;