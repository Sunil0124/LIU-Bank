import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div>
            <Logo variant="white" size="lg" />
            <p className="text-gray-400 mt-4 mb-4">
              Leading Innovative User-centric Banking solutions for all your financial needs.
            </p>
            <div className="flex space-x-4">
              <Link to="/social/facebook" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="/social/twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link to="/social/instagram" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="/social/linkedin" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-blue-400 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Banking Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Banking Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/accounts" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Accounts
                </Link>
              </li>
              <li>
                <Link to="/services/cards" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link to="/services/loans" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link to="/services/mortgages" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Mortgages
                </Link>
              </li>
              <li>
                <Link to="/services/investments" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Investments
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Banking Street<br />
                  Financial District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-blue-400" />
                <a href="tel:+18001234567" className="text-gray-400 hover:text-blue-400 transition-colors">
                  1-800-123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-400" />
                <a href="mailto:info@liubank.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@liubank.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LIU Bank. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/security" className="hover:text-blue-400 transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;