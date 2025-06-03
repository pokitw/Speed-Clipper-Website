import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white dark:bg-dark-surface shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Speed Clipper" 
              className="h-8 w-auto mr-2"
            />
            <span className="font-display font-bold text-xl md:text-2xl text-gray-900 dark:text-dark-text">Speed Clipper</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="font-medium text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('showcase')} 
              className="font-medium text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-primary transition-colors"
            >
              App Showcase
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="font-medium text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-primary transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('download')} 
              className="px-5 py-2 bg-primary-600 dark:bg-dark-primary text-white font-medium rounded-full hover:bg-primary-700 dark:hover:opacity-90 transition-colors"
            >
              Download
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700 dark:text-dark-text" />
              ) : (
                <Sun size={20} className="text-dark-text" />
              )}
            </button>
          </nav>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-border transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon size={20} className="text-gray-700 dark:text-dark-text" />
              ) : (
                <Sun size={20} className="text-dark-text" />
              )}
            </button>
            <button 
              className="text-gray-700 dark:text-dark-text" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-surface shadow-lg animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('features')} 
              className="font-medium text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-primary transition-colors py-2"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('showcase')} 
              className="font-medium text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-primary transition-colors py-2"
            >
              App Showcase
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="font-medium text-gray-700 dark:text-dark-text hover:text-primary-600 dark:hover:text-dark-primary transition-colors py-2"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('download')} 
              className="px-5 py-2 bg-primary-600 dark:bg-dark-primary text-white font-medium rounded-full hover:bg-primary-700 dark:hover:opacity-90 transition-colors w-full"
            >
              Download
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;