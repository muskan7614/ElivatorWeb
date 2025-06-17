import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import  logo  from '../../Assets/logo.webp'


export const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  // Click outside logic
  useEffect(() => {
    if (!isServicesOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  const handleCallClick = () => {
    window.location.href = 'tel:+919354927034';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@trezorelevators.com';
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const services = [
    { name: 'AMC', path: '/services/amc' },
    { name: 'Modernisation', path: '/services/modernisation' },
    { name: 'Repair', path: '/services/repair' },
    { name: 'Customisation', path: '/services/customisation' },
  ];

  return (
    <>
      {/* Top Header */}
      <div className="bg-slate-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* <ArrowUp className="h-6 w-6 text-blue-400 rotate-45" /> */}
            <header>
      <img src={logo} alt=""  />
    </header>
            {/* <img src={} alt="" /> */}
            <span className="text-xl font-bold tracking-wide">Liftas Components Private Limited</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleCallClick}
              className="flex items-center border border-yellow-600 space-x-2 bg-transparent-600 hover:bg-yellow-600 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Us</span>
            </button>
            <a
              href="mailto:info@trezorelevators.com"
              className="flex items-center border border-yellow-600 space-x-2 bg-transparent-600 hover:bg-yellow-600 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/') ? 'text-yellow-700' : 'text-gray-700 hover:text-yellow-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/about') ? 'text-yellow-700' : 'text-gray-700 hover:text-yellow-700'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/products') ? 'text-yellow-700' : 'text-gray-700 hover:text-yellow-700'
                }`}
              >
                Products
              </Link>
              <div
                className="relative"
                ref={servicesDropdownRef}
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  closeTimer.current = setTimeout(() => setIsServicesOpen(false), 5000);
                }}
              >
                <button className="flex items-center space-x-1 font-medium text-gray-700 hover:text-yellow-700 transition-colors duration-200">
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/gallery"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/gallery') ? 'text-yellow-700' : 'text-gray-700 hover:text-yellow-700'
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/contact') ? 'text-yellow-700' : 'text-gray-700 hover:text-yellow-700'
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/testimonials"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/testimonials') ? 'text-yellow-700' : 'text-gray-700 hover:text-yellow-700'
                }`}
              >
                Testimonials
              </Link>
              <Link
                to="/privacy-policy"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/privacy-policy') ? 'text-yellow-700' : 'text-gray-700 hover:text-yellow-700'
                }`}
              >
                Privacy Policy
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-yellow-700 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-yellow-700 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/products"
                  className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-black-700 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <div className="px-4 py-2">
                  <div className="text-gray-600 font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-2 py-1 text-gray-600 hover:text-black-700 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-yellow-700 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-yellow-700 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  to="/testimonials"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-yellow-700 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  to="/privacy-policy"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};