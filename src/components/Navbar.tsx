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

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 px-4 md:px-8 top-0
        ${isScrolled ? 'backdrop-blur-xl bg-white/80 dark:bg-black/60 shadow-xl scale-90 rounded-[17px] border border-white/20 max-w-6xl w-[95%]' : 'backdrop-blur-md bg-transparent w-full'}
      `}
      dir="rtl"
    >
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="شعار الموقع"
            className={`transition-all duration-300 ${isScrolled ? 'w-20 h-20' : 'w-24 h-24 md:w-28 md:h-28'}`}
            style={{ filter: isScrolled ? 'brightness(0) saturate(100%) sepia(100%) hue-rotate(75deg) saturate(500%) brightness(0.9)' : 'none' }}
          />
        </div>

        <div className={`flex-col md:flex-row md:flex ${isMobileMenuOpen ? 'flex absolute top-full mt-2 right-0 w-full bg-white dark:bg-black p-4 space-y-4 z-40' : 'hidden md:flex'} items-center md:space-x-8 space-x-reverse`}>
          <Link to="/" className={`transition font-medium ${textColorClass} hover:text-green-500`} onClick={closeMobileMenu}>الرئيسية</Link>
          <a href="#" className={`transition font-medium ${textColorClass} hover:text-green-500`} onClick={closeMobileMenu}>قصتنا</a>
          <a href="#" className={`transition font-medium ${textColorClass} hover:text-green-500`} onClick={closeMobileMenu}>احسب أثرك</a>
          <Link to="/advisory" className={`transition font-medium ${textColorClass} hover:text-green-500`} onClick={closeMobileMenu}>المجلس الاستشاري</Link>
          <button
            onClick={() => {
              scrollToPage2();
              closeMobileMenu();
            }}
            className={`transition font-medium ${textColorClass} hover:text-green-500`}
          >
            تواصل معنا
          </button>
          <div className="flex md:hidden flex-col items-center space-y-4">
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
        </div>

        <div className="flex items-center space-x-4 space-x-reverse md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`w-8 h-8 flex items-center justify-center transition ${textColorClass} hover:text-green-400`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
