import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Heart, Calendar, Briefcase } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { NotificationBell } from './NotificationBell';
import logo from '../assets/logo.png';
import { clsx } from 'clsx';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, setAuthModalOpen, logout } = useAppStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Become a Sitter', href: '/become-a-sitter' },
    { name: 'Services', href: '/search' },
    { name: 'Help', href: '#' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Waggle India" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {user ? (
            <div className="flex items-center gap-4">
              <NotificationBell />
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 p-1 pl-3 bg-gray-50 border border-gray-200 rounded-full hover:shadow-md transition-shadow"
                >
                  <span className="text-sm font-semibold text-gray-700">
                    {user.name.split(' ')[0]}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white overflow-hidden">
                    {user.photo ? (
                      <img src={user.photo} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={18} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden"
                    >
                      <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Calendar size={18} className="text-primary" />
                        My Dashboard
                      </Link>
                      <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Heart size={18} className="text-primary" />
                        My Pets
                      </Link>
                      <Link
                        to="/become-a-sitter"
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-xl"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Briefcase size={18} className="text-primary" />
                        Become a Sitter
                      </Link>
                      <div className="my-2 border-t border-gray-100" />
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-xl"
                      >
                        <LogOut size={18} />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setAuthModalOpen(true)}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-primary/20 transition-all active:scale-95"
            >
              Login / Sign Up
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {user && <NotificationBell />}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-xl"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xl font-semibold text-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {!user ? (
                <button
                  onClick={() => {
                    setAuthModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20"
                >
                  Login / Sign Up
                </button>
              ) : (
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-4 text-gray-700 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Calendar className="text-primary" /> Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center gap-4 text-gray-700 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Heart className="text-primary" /> My Pets
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 text-red-600 font-medium py-2"
                  >
                    <LogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

