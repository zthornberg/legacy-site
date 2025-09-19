import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Upload, 
  Search, 
  Building, 
  BarChart3, 
  Calendar,
  TrendingUp,
  Users
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const BrokerDashboard: React.FC = () => {
  const { user } = useAuth();

  const portalSections = [
    {
      title: 'Document Library',
      description: 'Access training videos, guides, legal templates, and marketing materials',
      icon: FileText,
      href: '/portal/documents',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'Listing Submission',
      description: 'Submit new business listings for review and approval',
      icon: Upload,
      href: '/portal/listing-submission',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'Buyer Network Search',
      description: 'Search our database of 2,400+ qualified buyers',
      icon: Search,
      href: '/portal/buyer-search',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      title: 'Private Equity Requests',
      description: 'Request PE firm information and introductions for deals',
      icon: Building,
      href: '/portal/pe-request',
      color: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    {
      title: 'Market Research',
      description: 'Request custom industry reports and market analysis',
      icon: BarChart3,
      href: '/portal/market-research',
      color: 'bg-teal-50 text-teal-600 border-teal-200'
    }
  ];

  const recentActivity = [
    { action: 'New lead assigned', item: 'Manufacturing Company - Phoenix', time: '2 hours ago' },
    { action: 'Document downloaded', item: 'Valuation Template.pdf', time: '1 day ago' },
    { action: 'Listing submitted', item: 'HVAC Service Provider', time: '3 days ago' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}
          </h1>
          <p className="text-gray-600 mt-2">
            Your Legacy broker portal – everything you need to succeed
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-lg p-3">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Active Leads</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-slate-100 rounded-lg p-3">
                <FileText className="h-6 w-6 text-slate-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-600">Listings Under Review</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-lg p-3">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Buyer Matches</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-orange-100 rounded-lg p-3">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">1</div>
                <div className="text-sm text-gray-600">Upcoming Training</div>
              </div>
            </div>
          </div>
        </div>

        {/* Portal Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {portalSections.map((section, index) => (
            <Link
              key={index}
              to={section.href}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${section.color}`}>
                <section.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {section.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div>
                  <div className="text-sm font-medium text-gray-900">{activity.action}</div>
                  <div className="text-sm text-gray-600">{activity.item}</div>
                </div>
                <div className="text-xs text-gray-500">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerDashboard;