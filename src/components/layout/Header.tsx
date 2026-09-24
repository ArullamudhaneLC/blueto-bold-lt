import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BluetoLogo } from '../ui/Logo';

const navItems = [
  { name: 'Try a job', to: '/#try' },
  { name: 'For shops', to: '/fliproles' },
  { name: 'About', to: '/#about' },
  { name: 'Contact', to: '/#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-b border-line bg-paper/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between lg:h-20">
        <BluetoLogo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm font-medium text-ink-soft transition hover:text-ink"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/fliproles#onboard" className="btn-primary !px-5 !py-2.5">
            List your shop
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-ink md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="container-page space-y-1 pb-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="block rounded-lg px-2 py-3 text-lg font-medium text-ink"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/fliproles#onboard" className="btn-primary mt-4 w-full">
            List your shop
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
