import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Liftas Components</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With a dedicated engineering team, expansive supplier network and diverse capabilities, 
              Liftas Components has the manufacturing experience ready to support you with your next program.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services/amc" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/amc" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Annual Maintenance Contract
                </Link>
              </li>
              <li>
                <Link to="/services/modernisation" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Modernisation
                </Link>
              </li>
              <li>
                <Link to="/services/repair" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Repair Services
                </Link>
              </li>
              <li>
                <Link to="/services/customisation" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Customisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                 Liftas Components Private Limited Dedicated Seat 07 Situated at B 38, Old DLF Sector 14, Gurugram, Haryana, 122006,  India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <a href="tel:08045729031" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Call Us
                 08045729031
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <a href="mailto:info@liftascomponents.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@liftascomponents.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Liftas Components Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};