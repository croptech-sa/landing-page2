import React from 'react';
import { ChevronDown } from 'lucide-react';
import Threads from './Threads';
import LogoStrip from './LogoStrip';

const Page1: React.FC = () => {
  const scrollToPage2 = () => {
    const page2 = document.getElementById('page2');
    if (page2) {
      page2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="page1" className="min-h-screen relative overflow-hidden" dir="rtl">
      <div id="page1-background-container" className="absolute inset-0 bg-black">
        <Threads
          color={[0.216, 0.443, 0.216]} // #377138 in RGB normalized
          amplitude={1.2}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>
mb-8
      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Main Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <div className="mb-2">بيئة تُزرع بالتقنية</div>
              <div>وتشجير يُبنى على الثقة</div>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xl md:text-2xl text-white/80 font-light">
              ثقة تدعم النمو - أثر يُثبت - استدامة تُبنى
            </p>
          </div>

          {/* Logo Strip */}
          <div className="w-full max-w-6xl">
            <LogoStrip />
          </div>
        </div>

        {/* Scroll Cue - Anchored at bottom */}
        <div className="text-center pb-8 md:pb-12">
          <p className="text-white/70 mb-4 font-medium">انطلق نحو التشجير</p>
          <button
            onClick={scrollToPage2}
            className="text-white hover:text-green-400 transition-colors duration-200 animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page1;