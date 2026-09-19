import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-6 px-4 sm:px-8 md:px-12 bg-[#0E0E11] overflow-x-hidden">
      {/* Subtle radial dark vignette */}
      <div className="absolute inset-0 bg-radial from-[#15151A]/40 via-transparent to-[#08080A] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1 my-auto relative z-10">
        
        {/* Left Column: Responsive Vertical Composition */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Mobile Small Brand Tag */}
          <div className="lg:hidden mb-3">
            <span className="font-mono text-xs tracking-widest text-[#FFD200] uppercase font-bold">
              QAVENZO
            </span>
          </div>

          <div className="flex flex-col font-display font-black leading-[0.9] sm:leading-[0.88] tracking-tight select-none">
            {/* CREATE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[44px] xs:text-[52px] sm:text-7xl md:text-8xl lg:text-[104px] text-white"
            >
              CREATE.
            </motion.div>

            {/* CONNECT with Gold underline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="relative text-[44px] xs:text-[52px] sm:text-7xl md:text-8xl lg:text-[104px] text-white pb-2"
            >
              CONNECT.
              {/* Thin gold accent line */}
              <div className="w-full max-w-[480px] h-[2px] sm:h-[2.5px] bg-[#E5B800] mt-1" />
            </motion.div>

            {/* GROW in Crimson Red */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="text-[44px] xs:text-[52px] sm:text-7xl md:text-8xl lg:text-[104px] text-[#A81318] pt-1"
            >
              GROW.
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="text-xl sm:text-2xl md:text-3xl text-neutral-100 font-semibold mt-5 sm:mt-7 tracking-tight"
          >
            Creative & Digital Growth Agency
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46 }}
            className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-lg mt-2 sm:mt-2.5 leading-relaxed font-normal"
          >
            We build brands, content and digital experiences that people remember.
          </motion.p>

          {/* Buttons: Stacked on small mobile, row on tablet/desktop */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.56 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto"
          >
            {/* VIEW OUR WORK */}
            <a
              href="#work"
              className="w-full sm:w-auto text-center px-7 py-3.5 sm:py-3 rounded-full bg-[#B8141B] hover:bg-[#C91820] active:bg-[#A81318] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-lg cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              VIEW OUR WORK
            </a>

            {/* START A PROJECT */}
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-7 py-3.5 sm:py-3 rounded-full bg-transparent hover:bg-white/10 active:bg-white/15 text-white font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/80 hover:border-white transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              START A PROJECT
            </a>
          </motion.div>

        </div>

        {/* Right Column: Visual Composition */}
        <div className="lg:col-span-5 relative flex items-center justify-center w-full mt-4 lg:mt-0">
          
          {/* Desktop/Tablet 3 Tilted Cards Collage */}
          <div className="hidden sm:block relative w-full max-w-[380px] sm:max-w-[420px] h-[360px] sm:h-[420px]">
            {/* Top Right Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 right-4 w-44 sm:w-52 aspect-square bg-white p-1.5 shadow-2xl z-20 rotate-12 hover:rotate-6 transition-transform"
            >
              <div className="w-full h-full overflow-hidden bg-black">
                <img
                  src="/assets/hero_fashion.jpg"
                  alt="Creative Direction"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-12 left-0 w-44 sm:w-52 aspect-square bg-white p-1.5 shadow-2xl z-10 -rotate-12 hover:-rotate-6 transition-transform"
            >
              <div className="w-full h-full overflow-hidden bg-black">
                <img
                  src="/assets/hero_emblem.jpg"
                  alt="Brand Identity"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-0 right-2 w-48 sm:w-56 aspect-square bg-white p-1.5 shadow-2xl z-30 -rotate-6 hover:rotate-0 transition-transform"
            >
              <div className="w-full h-full overflow-hidden bg-black">
                <img
                  src="/assets/hero_concert.jpg"
                  alt="Live Media & Experience"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>

          {/* Mobile Single Clean Visual Card (Zero Horizontal Overflow on 360px-480px) */}
          <div className="sm:hidden w-full max-w-[320px] mx-auto py-2">
            <div className="relative aspect-square bg-white p-2 shadow-xl mx-auto rotate-1">
              <div className="w-full h-full overflow-hidden bg-black relative">
                <img
                  src="/assets/hero_fashion.jpg"
                  alt="Creative Direction"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/80 px-2 py-1 flex items-center justify-between text-[10px] font-mono text-white">
                  <span>BRAND & CONTENT</span>
                  <span className="text-[#FFD200]">2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Thin Bordered Ticker Strip */}
      <div className="w-full border-t border-b border-white/10 py-3 sm:py-4 mt-8 sm:mt-12 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <p className="font-mono text-[9px] xs:text-[10px] sm:text-xs tracking-[0.18em] xs:tracking-[0.25em] sm:tracking-[0.35em] text-neutral-400 uppercase font-medium truncate sm:overflow-visible">
            CONTENT &nbsp;•&nbsp; DESIGN &nbsp;•&nbsp; WEB &nbsp;•&nbsp; MARKETING &nbsp;•&nbsp; BRANDING &nbsp;•&nbsp; SOCIAL
          </p>
        </div>
      </div>
    </section>
  );
};
