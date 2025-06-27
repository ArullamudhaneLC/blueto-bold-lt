import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Github, Linkedin, Twitter } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    // { icon: Github, href: '#', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/blueto-tech-pvt-ltd/posts/',
      label: 'LinkedIn',
    },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-3">
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 sm:p-2 rounded-lg sm:rounded-xl shadow-lg">
                <Zap className="h-5 sm:h-5 lg:h-6 w-5 sm:w-5 lg:w-6 text-white" />
              </div>
              <div className="absolute -top-1 sm:-top-1 -right-1 sm:-right-1 w-3 sm:w-3 h-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-lg sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Blueto Tech
              </span>
              <div className="text-xs text-gray-400 font-mono hidden sm:block">
                Pvt Ltd
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium relative group text-base lg:text-base"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social Links & CTA */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                    aria-label={social.label}
                  >
                    <SocialIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 lg:px-4 xl:px-5 py-2.5 lg:py-2.5 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 text-base lg:text-base">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 rounded-b-xl mx-2 sm:mx-0">
            <nav className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {socialLinks.map((social, index) => {
                      const SocialIcon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-lg"
                        >
                          <SocialIcon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                  <button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-lg font-medium text-base"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;