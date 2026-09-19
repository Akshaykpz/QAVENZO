import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('02');

  const services = [
    {
      number: '01',
      title: 'CONTENT',
      desc: 'Social content, reels, AI video, campaign creatives, copywriting',
      mobileDesc: 'Social content, reels, AI video & creatives',
    },
    {
      number: '02',
      title: 'DESIGN',
      desc: 'Social media design, posters, campaign creatives, UI/UX, visual systems',
      mobileDesc: 'Social design, posters, UI/UX & systems',
    },
    {
      number: '03',
      title: 'WEB',
      desc: 'Business websites, landing pages, portfolio websites, e-commerce, web experiences',
      mobileDesc: 'Websites, landing pages & digital platforms',
    },
    {
      number: '04',
      title: 'MARKETING',
      desc: 'Social media management, Meta advertising, Google advertising, local marketing, campaign strategy',
      mobileDesc: 'Meta & Google ads, growth strategy',
    },
    {
      number: '05',
      title: 'BRANDING',
      desc: 'Logo design, brand identity, visual language, brand guidelines, marketing materials',
      mobileDesc: 'Logo design, visual identity & guidelines',
    },
    {
      number: '06',
      title: 'SOCIAL MEDIA',
      desc: 'Instagram management, content planning, stories, reels, community management',
      mobileDesc: 'Instagram growth, reels & community',
    },
  ];

  return (
    <section id="services" className="relative py-12 sm:py-16 lg:py-24 px-3 sm:px-8 md:px-12 bg-[#0C0C0F] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Heading with gold underline bar */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display font-black text-xs sm:text-sm tracking-[0.25em] text-white uppercase inline-block">
            WHAT WE DO
          </h2>
          <div className="w-14 sm:w-16 h-[2px] bg-[#E5B800] mx-auto mt-2" />
        </div>

        {/* ========================================================= */}
        {/* 2x3 Modular Sharp Grid (Screenshot 2 Reference)           */}
        {/* Responsive: 2 cols on mobile/tablet, 3 cols on desktop   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/30 bg-[#0E0E12]">
          {services.map((service) => {
            const isActive = activeService === service.number;

            return (
              <div
                key={service.number}
                onClick={() => setActiveService(service.number)}
                onMouseEnter={() => setActiveService(service.number)}
                className={`relative p-4 sm:p-6 lg:p-10 flex flex-col justify-between min-h-[150px] sm:min-h-[220px] lg:min-h-[270px] transition-colors duration-200 cursor-pointer border border-white/20 -m-[0.5px] ${
                  isActive
                    ? 'bg-[#A81318] text-black z-10'
                    : 'bg-[#0E0E12] text-white hover:bg-[#14141A]'
                }`}
              >
                <div>
                  {/* Big Number: Stroked white outline if inactive, solid gold if active */}
                  <div className="mb-2 sm:mb-4">
                    {isActive ? (
                      <span className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#E5B800] tracking-tight">
                        {service.number}
                      </span>
                    ) : (
                      <span
                        className="font-display font-extralight text-3xl sm:text-5xl lg:text-6xl text-transparent tracking-tight"
                        style={{
                          WebkitTextStroke: '1.2px rgba(255, 255, 255, 0.85)',
                        }}
                      >
                        {service.number}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display font-black text-base sm:text-xl lg:text-2xl tracking-tight mb-1.5 sm:mb-2.5 ${
                      isActive ? 'text-black' : 'text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-[10px] sm:text-xs lg:text-sm leading-relaxed max-w-xs font-normal ${
                      isActive ? 'text-black/90 font-medium' : 'text-neutral-400'
                    }`}
                  >
                    <span className="hidden sm:inline">{service.desc}</span>
                    <span className="sm:hidden line-clamp-2">{service.mobileDesc}</span>
                  </p>
                </div>

                {/* Bottom Right Circled Arrow */}
                <div className="flex justify-end mt-3 sm:mt-6">
                  <div
                    className={`w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full border flex items-center justify-center transition-transform duration-200 ${
                      isActive
                        ? 'border-black text-black'
                        : 'border-white/40 text-white'
                    }`}
                  >
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
