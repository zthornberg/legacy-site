import React, { useState } from 'react';
import { Search, Filter, MapPin, DollarSign, TrendingUp, Eye, Mail, Lock } from 'lucide-react';
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
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

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

  const handleInputChange = (field: string, value: string) => {
    setLoginData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Acquisition Opportunities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acquisition opportunities are available to approved buyers. This keeps sellers 
            confidential and ensures serious, well-prepared counterparties. Log in or register to request access.
          </p>
        </div>

        {/* Login Card with Blurred Background */}
        <div className="relative">
          {/* Blurred Listings Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="blur-xl opacity-30">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockListings.map((listing) => (
                  <div key={listing.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
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
            </div>
          </div>

          {/* Login Form */}
          <div className="relative z-10 flex justify-center">
            <div className="bg-white rounded-xl p-8 shadow-xl max-w-md w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Access Portal
                </h2>
                <p className="text-gray-600">
                  Log in to view confidential opportunities
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      required
                      value={loginData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      placeholder="Enter your email"
                      aria-label="Email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="password"
                      required
                      value={loginData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                      placeholder="Enter your password"
                      aria-label="Password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-xl hover:bg-accentAlt motion-safe font-semibold"
                  aria-label="Log in to access listings"
                >
                  Log In
                </button>
              </form>

              <div className="mt-6 text-center space-y-3">
                <a href="/forgot-password" className="text-accent hover:text-accentAlt text-sm">
                  Forgot password?
                </a>
                <div className="text-gray-500 text-sm">
                  Don't have an account?{' '}
                  <a href="/buy/registration" className="text-accent hover:text-accentAlt font-medium">
                    Register as a Buyer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <ProcessSection mode="buy" />
    </div>
  );
};

export default BusinessListings;