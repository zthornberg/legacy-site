import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, TrendingUp, Eye } from 'lucide-react';
import ProcessSection from '../../components/ProcessSection';

interface BusinessListing {
  id: string;
  title: string;
  industry: string;
  location: string;
  cashFlow: string;
  askingPrice: string;
  image: string;
  isConfidential: boolean;
}

const BusinessListings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const mockListings: BusinessListing[] = [
    {
      id: '1',
      title: 'Established Manufacturing Company',
      industry: 'Manufacturing',
      location: 'Phoenix, AZ',
      cashFlow: '$850K',
      askingPrice: '$2.4M',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      isConfidential: true
    },
    {
      id: '2',
      title: 'Regional HVAC Service Provider',
      industry: 'Home Services',
      location: 'Dallas, TX',
      cashFlow: '$420K',
      askingPrice: '$1.2M',
      image: 'https://images.pexels.com/photos/8985475/pexels-photo-8985475.jpeg',
      isConfidential: false
    },
    {
      id: '3',
      title: 'Tech Consulting Firm',
      industry: 'Technology',
      location: 'Austin, TX',
      cashFlow: '$650K',
      askingPrice: '$1.8M',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      isConfidential: true
    }
  ];

  const industries = ['All', 'Manufacturing', 'Technology', 'Healthcare', 'Home Services', 'Construction', 'Retail'];
  const locations = ['All', 'Arizona', 'Texas', 'California', 'Florida', 'Colorado'];
  const priceRanges = ['All', 'Under $500K', '$500K - $1M', '$1M - $2M', '$2M - $5M', '$5M+'];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Business Listings
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our curated marketplace of businesses. Each listing is pre-vetted, 
            so you can invest with confidence. Don't see what you're looking for? 
            Our extensive off-market network can help you find the right opportunity.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search businesses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>

            {/* Industry Filter */}
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry === 'All' ? '' : industry}>
                  {industry}
                </option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              {locations.map((location) => (
                <option key={location} value={location === 'All' ? '' : location}>
                  {location}
                </option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              {priceRanges.map((range) => (
                <option key={range} value={range === 'All' ? '' : range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockListings.map((listing) => (
            <div 
              key={listing.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                {listing.isConfidential && (
                  <div className="absolute top-4 right-4 bg-purple-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Confidential
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {listing.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Filter className="h-4 w-4 mr-2 text-accent" />
                    <span className="text-sm">{listing.industry}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                    <span className="text-sm">Cash Flow: {listing.cashFlow}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="text-sm font-semibold">Asking: {listing.askingPrice}</span>
                  </div>
                </div>

                <button className="w-full bg-accent text-white py-3 rounded-xl hover:bg-accentAlt motion-safe font-semibold flex items-center justify-center">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No listings message for empty state */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see the perfect opportunity? Our off-market network has exclusive deals 
            not listed publicly.
          </p>
          <a
            href="/buy/registration"
            className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-xl hover:bg-accentAlt motion-safe font-semibold"
          >
            Register for Exclusive Access
          </a>
        </div>
      </div>

      {/* Process Section */}
      <ProcessSection mode="buy" />
    </div>
  );
};

export default BusinessListings;