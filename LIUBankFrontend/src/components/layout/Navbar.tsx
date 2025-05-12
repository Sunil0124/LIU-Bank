import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Bell, User, ChevronDown, LogOut, Calendar } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import Button from '../common/Button';
import Logo from '../common/Logo';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  const keywordMap = {
    'open account': '/signup',
    'sign up': '/signup',
    'register': '/signup',
    'login': '/login',
    'check balance': '/dashboard',
    'transfer': '/dashboard/checking',
    'transactions': '/transactions',
    'appointment': '/appointments',
    'services': '/services'
  };

  useEffect(() => {
    const match = Object.entries(keywordMap).find(([keyword]) =>
      searchQuery.toLowerCase().includes(keyword)
    );
    if (match) {
      const [, path] = match;
      navigate(path);
    }
  }, [searchQuery]);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setShowUserMenu(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Logo size="md" />
            </div>

            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <form onSubmit={(e) => e.preventDefault()} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    className="bg-gray-100 w-full pl-10 pr-4 py-2 rounded-lg border-transparent focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="How can we help you?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <Search size={18} />
                  </div>
                </div>
              </form>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Dashboard</Link>
                  <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</Link>
                  <Button variant="outline" size="sm" onClick={() => navigate('/appointments')} className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                  </Button>
                  <div className="relative">
                    <button onClick={toggleUserMenu} className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium focus:outline-none">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                        {user?.firstName?.charAt(0) || <User size={16} />}
                      </div>
                      <span>{user?.firstName}</span>
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {showUserMenu && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                        <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowUserMenu(false)}>Profile</Link>
                        <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowUserMenu(false)}>Settings</Link>
                        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <div className="flex items-center">
                            <LogOut size={16} className="mr-2" /> <span>Logout</span>
                          </div>
                        </button>
                      </motion.div>
                    )}
                  </div>
                  <button className="text-gray-700 hover:text-blue-600 relative">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Services</Link>
                  <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">About Us</Link>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</Link>
                  <Button variant="outline" size="sm" onClick={() => navigate('/appointments')} className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" /> Book Appointment
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => navigate('/login')}>Login</Button>
                  <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>Sign Up</Button>
                </>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none" onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </LazyMotion>
  );
};

export default Navbar;