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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <>
      <nav
        className={fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 px-4 md:px-8
          ${isScrolled
            ? 'top-4 backdrop-blur-xl shadow-xl bg-white/80 dark:bg-black/60 scale-90 rounded-[17px] border border-white/20 max-w-6xl w-[95%]'
            : 'top-0 bg-transparent w-full'}
          }
        dir="rtl"
      >
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.svg"
              alt="شعار الموقع"
              className={transition-all duration-300 ${isScrolled ? 'w-20 h-20' : 'w-24 h-24 md:w-28 md:h-28'} ${isScrolled ? 'filter invert-0 brightness-100' : 'filter invert brightness-0'} }
              style={isScrolled ? { filter: 'invert(34%) sepia(56%) saturate(372%) hue-rotate(62deg) brightness(95%) contrast(86%)' } : {}}
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className={transition font-medium ${isScrolled || window.location.pathname !== '/' ? 'text-black dark:text-white' : 'text-white'} hover:text-green-500}>الرئيسية</Link>
            <a href="#" className={transition font-medium ${isScrolled || window.location.pathname !== '/' ? 'text-black dark:text-white' : 'text-white'} hover:text-green-500}>قصتنا</a>
            <a href="#" className={transition font-medium ${isScrolled || window.location.pathname !== '/' ? 'text-black dark:text-white' : 'text-white'} hover:text-green-500}>احسب أثرك</a>
            <Link to="/advisory" className={transition font-medium ${isScrolled || window.location.pathname !== '/' ? 'text-black dark:text-white' : 'text-white'} hover:text-green-500}>المجلس الاستشاري</Link>
            <button
              onClick={scrollToPage2}
              className={transition font-medium ${isScrolled || window.location.pathname !== '/' ? 'text-black dark:text-white' : 'text-white'} hover:text-green-500}
            >
              تواصل معنا
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="hidden md:flex items-center space-x-4 space-x-reverse">
              <button
                onClick={toggleTheme}
                className={transition-all duration-300 ${isScrolled || window.location.pathname !== '/' ? 'text-black dark:text-white' : 'text-white'} hover:text-green-600}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="border border-[#377138] bg-white text-[#377138] px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                ابدأ الآن
              </button>
            </div>

            {/* Mobile hamburger menu */}
            <button
              onClick={toggleMobileMenu}
              className={md:hidden w-8 h-8 flex items-center justify-center transition ${isScrolled || window.location.pathname !== '/' ? 'text-black dark:text-white' : 'text-white'} hover:text-green-400}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu} />
          <div className="absolute top-0 right-0 w-80 h-full bg-black/90 backdrop-blur-md border-l border-white/10" dir="rtl">
            <div className="flex flex-col h-full pt-24 px-6">
              <div className="flex flex-col space-y-6 mb-8">
                <Link to="/" onClick={closeMobileMenu} className="text-white hover:text-green-400 transition text-lg py-2">الرئيسية</Link>
                <a href="#" onClick={closeMobileMenu} className="text-white hover:text-green-400 transition text-lg py-2">قصتنا</a>
                <a href="#" onClick={closeMobileMenu} className="text-white hover:text-green-400 transition text-lg py-2">احسب أثرك</a>
                <Link to="/advisory" onClick={closeMobileMenu} className="text-white hover:text-green-400 transition text-lg py-2">المجلس الاستشاري</Link>
                <button onClick={scrollToPage2} className="text-white hover:text-green-400 transition text-lg py-2 text-right">
                  تواصل معنا
                </button>
              </div>
              <div className="flex flex-col space-y-4 mt-auto mb-8">
                <button className="bg-white text-black px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition text-lg">
                  ابدأ الآن
                </button>
                <button
                  onClick={() => {
                    toggleTheme();
                    closeMobileMenu();
                  }}
                  className="flex items-center justify-center w-full py-3 rounded-lg border border-white text-white hover:border-green-600 hover:text-green-600 transition"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span className="font-medium ml-2">تبديل المظهر</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 
