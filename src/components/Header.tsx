import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/useLanguage';
import { scrollToSection } from '../utils/scrollUtils';
import { NavLink } from '../types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks: NavLink[] = [
    { id: 'about', title: t('nav.about') },
    { id: 'projects', title: t('nav.projects') },
    { id: 'contact', title: t('nav.contact') }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up body overflow on unmount
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    // Block scroll when menu is open
    if (newMenuState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };
  
  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
    // Restore scroll when menu is closed
    document.body.style.overflow = 'unset';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Go to top"
          >
            SJ
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.title}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-blue-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Rendered outside header */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 backdrop-blur-md z-[9999] pointer-events-auto">
          {/* Close button */}
          <div className="absolute top-4 right-4 z-[10000]">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          
          {/* Menu content */}
          <div className="flex flex-col justify-center items-center h-full pt-16">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-gray-200 text-2xl py-4 border-b border-gray-700 hover:text-blue-400 transition-colors duration-200 text-center w-full"
                >
                  {link.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;