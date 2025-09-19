import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import GlassMenuPanel from '../ui/GlassMenuPanel';

// Debounce utility for smooth scroll handling
const useDebounce = (value: boolean, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Debounce the scroll state to prevent jitter - apply to ALL pages
  const isSticky = useDebounce(scrolled, 50);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show simplified portal header only on portal routes
  if (location.pathname.startsWith('/portal')) {
    return (
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky ? 'bg-white/95 backdrop-blur-xl border border-white/40 shadow-glass rounded-2xl ring-1 ring-black/5 m-4' : 'bg-black/20 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          scaleY: isSticky ? 0.95 : 1,
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <div
          className={`max-w-8xl mx-auto px-6 lg:px-8 xl:px-12 origin-left transition-all duration-300 ease-out ${
            isSticky ? 'scale-y-95' : 'scale-y-100'
          }`}
        >
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isSticky ? 'h-16' : 'h-20'
          }`}>
            <Link to="/" className="flex items-center text-slate-600 hover:text-ink motion-safe">
              <Home className="h-5 w-5 mr-2" />
              <span className="text-sm">Home</span>
            </Link>
            <div className="w-px h-6 bg-hairline"></div>
            <Link to="/portal" className="flex items-center shrink-0">
              <img 
                src="/media/Horizontal Logo High Res.png" 
                alt="Legacy" 
                className={`transition-all duration-300 ${
                  isSticky ? 'h-10 lg:h-12' : 'h-14 lg:h-16'
                } ${
                  isSticky ? 'brightness-100' : 'brightness-0 invert'
                } w-auto`}
              />
              <span className="ml-2 text-sm text-slate-700">Broker Portal</span>
            </Link>
            {user && (
              <button
                onClick={logout}
                className="text-slate-700 hover:text-ink motion-safe hover-lift px-4 py-2 rounded-lg hover:bg-slate-50"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </motion.header>
    );
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Buy', 
      href: '/buy/listings',
      dropdown: [
        { name: 'Business Listings', href: '/buy/listings' },
        { name: 'Buyer Registration', href: '/buy/registration' }
      ]
    },
    { 
      name: 'Sell', 
      href: '/sell/brokerage',
      dropdown: [
        { name: 'Brokerage Services', href: '/sell/brokerage' },
        { name: 'M&A Services', href: '/sell/ma-services' },
        { name: 'Case Studies', href: '/sell/case-studies' }
      ]
    },
    { 
      name: 'Licensing Program', 
      href: '/licensing/program',
      dropdown: [
        { name: 'Program Summary', href: '/licensing/program' },
        { name: 'Pricing', href: '/licensing/pricing' },
        { name: 'Testimonials', href: '/licensing/testimonials' }
      ]
    },
    { 
      name: 'Industries', 
      href: '/industries',
      dropdown: [
        { name: 'Manufacturing & Distribution', href: '/industries/manufacturing-distribution' },
        { name: 'Retail & Consumer', href: '/industries/retail-consumer' },
        { name: 'Technology', href: '/industries/technology' },
        { name: 'Healthcare', href: '/industries/healthcare' },
        { name: 'Business Services', href: '/industries/business-services' },
        { name: 'Home Services', href: '/industries/home-services' },
        { name: 'Construction', href: '/industries/construction' },
        { name: 'Energy & Sustainability', href: '/industries/energy-sustainability' },
        { name: 'Hospitality', href: '/industries/hospitality' },
        { name: 'Startup Funding', href: '/industries/startup-funding' }
      ]
    },
    { 
      name: 'Company', 
      href: '/company/team',
      dropdown: [
        { name: 'Our Team', href: '/company/team' }
      ]
    }
  ];

  const handleDropdownEnter = (name: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 350);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveDropdown(null);
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSticky ? 'glass-panel m-4' : 'bg-black/20 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: 0,
        scaleY: isSticky ? 0.95 : 1,
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-8 xl:px-12">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isSticky ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/media/Horizontal Logo High Res.png"
              alt="Legacy"
              className={`transition-all duration-300 ${
                isSticky ? 'h-10 lg:h-12' : 'h-14 lg:h-16'
              } ${
                isSticky ? 'brightness-100' : 'brightness-0 invert'
              } w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative whitespace-nowrap"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                onMouseLeave={() => item.dropdown && handleDropdownLeave()}
              >
                {item.dropdown ? (
                  <Link
                    to={item.href}
                    className={`font-medium flex items-center motion-safe hover-lift ${
                      isSticky 
                        ? 'text-ink hover:text-accent' 
                        : 'text-white hover:text-white/80'
                    } ${location.pathname.startsWith(item.href) ? 'text-accent' : ''}`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium flex items-center motion-safe hover-lift ${
                      isSticky 
                        ? 'text-ink hover:text-accent' 
                        : 'text-white hover:text-white/80'
                    } ${location.pathname === item.href ? 'text-accent' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                <GlassMenuPanel 
                  isOpen={!!(item.dropdown && activeDropdown === item.name)}
                  className="w-64 py-2"
                  onMouseEnter={() => item.dropdown && handleDropdownEnter(item.name)}
                  onMouseLeave={() => item.dropdown && handleDropdownLeave()}
                  data-testid={`menu-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.dropdown?.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.href}
                      className="block px-4 py-3 text-slate-700 hover:text-accent hover:bg-slate-50/50 motion-safe rounded-lg text-left"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </GlassMenuPanel>
              </div>
            ))}

            {/* Broker Login Button */}
            <Link
              to="/portal/login"
              className={`px-4 lg:px-6 py-2 rounded-xl font-medium motion-safe hover-lift hover-press shrink-0 ${
                isSticky
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              Broker Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md motion-safe hover-lift ${
              isSticky 
                ? 'text-slate-700 hover:text-ink hover:bg-slate-100' 
                : 'text-white hover:text-white/80 hover:bg-white/10'
            }`}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden glass-panel mt-4 overflow-hidden"
              data-testid="mobile-drawer"
            >
              <div className="px-4 py-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block text-ink hover:text-accent font-medium motion-safe"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block text-slate-700 hover:text-accent text-sm motion-safe"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTAs */}
                <div className="pt-4 border-t border-hairline space-y-3">
                  <Link
                    to="/contact"
                    className="block bg-accent text-white px-6 py-3 rounded-xl hover:bg-accent/90 motion-safe font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="drawer-cta-advisor"
                  >
                    Meet Advisor
                  </Link>
                  <Link
                    to="/licensing/program"
                    className="block border-2 border-accent text-accent px-6 py-3 rounded-xl hover:bg-accent hover:text-white motion-safe font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                    data-testid="drawer-cta-apply"
                  >
                    Apply License
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;