import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    {
      title: 'Buy',
      links: [
        { name: 'Business Listings', href: '/buy/listings' },
        { name: 'Buyer Registration', href: '/buy/registration' }
      ]
    },
    {
      title: 'Sell',
      links: [
        { name: 'Brokerage Services', href: '/sell/brokerage' },
        { name: 'M&A Services', href: '/sell/ma-services' },
        { name: 'Case Studies', href: '/sell/case-studies' }
      ]
    },
    {
      title: 'Licensing',
      links: [
        { name: 'Program Summary', href: '/licensing/program' },
        { name: 'Pricing', href: '/licensing/pricing' },
        { name: 'Testimonials', href: '/licensing/testimonials' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Our Team', href: '/company/team' },
        { name: 'Blog', href: '/blog' },
        { name: 'Industries', href: '/industries' }
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-purple-900">Legacy</span>
            </Link>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Legacy combines cutting-edge AI analytics with seasoned M&A advisory to provide 
              a modern, client-focused experience. We serve with humility and execute with 
              relentless commitment to excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 text-sm">
                <Mail className="h-4 w-4 mr-3 text-purple-900" />
                <a href="mailto:info@legacybrokers.com" className="hover:text-purple-900 transition-colors">
                  info@legacybrokers.com
                </a>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Phone className="h-4 w-4 mr-3 text-purple-900" />
                <a href="tel:+1-555-LEGACY" className="hover:text-purple-900 transition-colors">
                  (555) LEGACY-1
                </a>
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-purple-900" />
                <span>Scottsdale, AZ</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {quickLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-900 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-purple-900 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 lg:mb-0">
            <a 
              href="https://linkedin.com/company/legacy-brokers" 
              className="text-gray-400 hover:text-purple-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/legacybrokers" 
              className="text-gray-400 hover:text-purple-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <Link to="/terms" className="hover:text-purple-900 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-purple-900 transition-colors">
              Privacy Policy
            </Link>
            <span>© 2025 Legacy Business Brokers. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;