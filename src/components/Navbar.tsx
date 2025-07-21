import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverDarkBackground, setIsOverDarkBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkColor = (rgb: string) => {
    const match = rgb.match(/\d+/g);
    if (!match) return false;
    const [r, g, b] = match.map(Number);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  useEffect(() => {
    const checkBackground = () => {
      const centerX = window.innerWidth / 2;
      const navHeight = 40;
      const element = document.elementFromPoint(centerX, navHeight);
      if (!element) return;
      const style = window.getComputedStyle(element);
      const bg = style.backgroundColor;
      setIsOverDarkBackground(isDarkColor(bg));
    };

    checkBackground();
    window.addEventListener('scroll', checkBackground);
    window.addEventListener('resize', checkBackground);
    return () => {
      window.removeEventListener('scroll', checkBackground);
      window.removeEventListener('resize', checkBackground);
    };
  }, []);

  const scrollToPage2 = () => {
    const page2 = document.getElementById('page2');
    if (page2) {
      page2.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const textColorClass = isScrolled
    ? 'text-black dark:text-white'
    : isOverDarkBackground
    ? 'text-white'
    : 'text-black dark:text-white';

  const logoColorClass = isScrolled ? 'fill-[#234723]' : 'fill-current';

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 px-4 md:px-8 top-0
        ${isScrolled ? 'backdrop-blur-xl bg-white/80 dark:bg-black/60 shadow-xl scale-90 rounded-[17px] border border-white/20 max-w-6xl w-[95%]' : 'backdrop-blur-md bg-transparent w-full'}
      `}
      dir="rtl"
    >
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <svg
            className={`transition-all duration-300 ${isScrolled ? 'w-20 h-20' : 'w-24 h-24 md:w-28 md:h-28'} ${logoColorClass}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <use href="/logo.svg#main" />
          </svg>
        </div>

        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          <Link to="/" className={`transition font-medium ${textColorClass} hover:text-green-500`}>الرئيسية</Link>
          <a href="#" className={`transition font-medium ${textColorClass} hover:text-green-500`}>قصتنا</a>
          <a href="#" className={`transition font-medium ${textColorClass} hover:text-green-500`}>احسب أثرك</a>
          <Link to="/advisory" className={`transition font-medium ${textColorClass} hover:text-green-500`}>المجلس الاستشاري</Link>
          <button
            onClick={scrollToPage2}
            className={`transition font-medium ${textColorClass} hover:text-green-500`}
          >
            تواصل معنا
          </button>
        </div>

        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <button
              onClick={toggleTheme}
              className={`transition-all duration-300 ${textColorClass} hover:text-green-600`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className={`px-5 py-2 rounded-lg font-medium transition ${isScrolled ? 'bg-[#234723] text-white' : 'border border-[#377138] bg-white text-[#377138] hover:bg-gray-100'}`}
            >
              ابدأ الآن
            </button>
          </div>
          <button
            onClick={toggleMobileMenu}
            className={`md:hidden w-8 h-8 flex items-center justify-center transition ${textColorClass} hover:text-green-400`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;