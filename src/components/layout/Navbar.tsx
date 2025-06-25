import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from './logo.svg'; // ✅ Correct way to import local image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home', exact: true },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActiveRoute = (href: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

const handleResumeDownload = () => {
  window.open('https://drive.google.com/file/d/18CYbR5QeMmmFRmQzPlDZb9bfeBkPRHoJ/view?usp=sharing', '_blank');
};


  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <img 
              src={logo}  
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-teal-600 relative group ${
                  isActiveRoute(link.href, link.exact)
                    ? 'text-teal-600'
                    : 'text-gray-700'
                }`}
              >
                {link.label}
                {isActiveRoute(link.href, link.exact) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></div>
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </Link>
            ))}
            <Button 
              onClick={handleResumeDownload}
              className="bg-teal-600 hover:bg-teal-700 text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-teal-600 py-2 px-2 rounded-md ${
                    isActiveRoute(link.href, link.exact)
                      ? 'text-teal-600 bg-teal-50 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                onClick={handleResumeDownload}
                className="bg-teal-600 hover:bg-teal-700 text-white mt-4 transition-all duration-200"
                size="sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
