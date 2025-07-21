import React from 'react';

const LogoStrip: React.FC = () => {
  const logos = [
    { id: 1, src: '/Partners/bim.svg', alt: 'BIM' },
    { id: 2, src: '/Partners/Frame 2.svg', alt: 'Frame 2' },
    { id: 3, src: '/Partners/mew.svg', alt: 'MEW' },
    { id: 4, src: '/Partners/mushat.svg', alt: 'Mushat' },
    { id: 5, src: '/Partners/ntdp.svg', alt: 'NTDP' },
    { id: 6, src: '/Partners/Sunbolah.svg', alt: 'Sunbolah' },
  ];

  return (
    <div className="w-full overflow-hidden bg-transparent py-4 group">
      <div className="flex animate-scroll-rtl group-hover:[animation-play-state:paused] w-fit">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-16 mx-8 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoStrip;
