import React from 'react';
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowUp,
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extract SVG data URL to avoid parsing issues
  const svgPattern =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News & Updates', href: '#' },
    ],
    products: [
      { name: 'Hospital Management System', href: '#products' },
      { name: 'School Management AI', href: '#products' },
      { name: 'Custom AI Solutions', href: '#services' },
      { name: 'AI Consulting', href: '#services' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Community', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
    ],
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/blueto-tech-pvt-ltd/posts/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Twitter,
      href: '#',
      label: 'Twitter',
      color: 'hover:text-cyan-400',
    },
    // {
    //   icon: Github,
    //   href: '#',
    //   label: 'GitHub',
    //   color: 'hover:text-purple-400',
    // },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div
          className={`absolute top-0 left-0 w-full h-full bg-[url('${svgPattern}')]`}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 xl:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 sm:space-x-3 mb-6 sm:mb-6">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-3 rounded-lg sm:rounded-xl shadow-lg">
                  <Zap className="h-7 sm:h-8 w-7 sm:w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 sm:w-4 h-4 sm:h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Blueto Tech
                </span>
                <div className="text-sm sm:text-sm text-gray-400 font-mono">
                  Pvt Ltd
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 sm:mb-6 leading-relaxed text-base sm:text-base">
              Pioneering the future of artificial intelligence with cutting-edge
              solutions that transform industries and empower businesses to
              achieve unprecedented growth and innovation.
            </p>

            <div className="space-y-3 sm:space-y-3 mb-8 sm:mb-8">
              <div className="flex items-center space-x-3 sm:space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="h-4 sm:h-4 w-4 sm:w-4" />
                <span className="text-sm sm:text-sm">contact@myblueto.com</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="h-4 sm:h-4 w-4 sm:w-4" />
                <span className="text-sm sm:text-sm">+91 9952400694</span>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
                <MapPin className="h-4 sm:h-4 w-4 sm:w-4" />
                <span className="text-sm sm:text-sm">
                  Block:B, Flat:D, Poorni Building, BK Koil, Manachanallur TK,
                  Trichy, Tamil Nadu, 621216
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 sm:space-x-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`bg-white/5 backdrop-blur-sm p-3 sm:p-3 rounded-lg sm:rounded-xl border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                  >
                    <SocialIcon className="h-5 sm:h-5 w-5 sm:w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg sm:text-lg font-semibold mb-6 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-3 sm:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group text-sm sm:text-sm"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg sm:text-lg font-semibold mb-6 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Products & Services
            </h3>
            <ul className="space-y-3 sm:space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center space-x-2 group text-sm sm:text-sm"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="text-base font-semibold mb-3 sm:mb-3 text-gray-400">
              Legal
            </h4>
            <ul className="space-y-2 sm:space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 sm:mt-12 pt-8 sm:pt-8 border-t border-white/10">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-8 sm:p-8 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl sm:text-2xl font-bold text-white mb-4 sm:mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-6 text-base sm:text-base">
                Get the latest updates on AI innovations and our product
                releases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-4 py-3 sm:py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-white placeholder-gray-400 text-base sm:text-base"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-6 py-3 sm:py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-base sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-12 pt-8 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 sm:space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Blueto Tech Pvt Ltd. All rights
              reserved. Crafted with ❤️ for the future.
            </div>
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-3 rounded-lg sm:rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 sm:h-5 w-5 sm:w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;