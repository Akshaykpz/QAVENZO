import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { QavenzoLogo } from '../ui/QavenzoLogo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0E0E11]/95 backdrop-blur-md border-b border-white/10 py-3 sm:py-3.5 shadow-xl'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          
          {/* QAVENZO Logo without red background */}
          <a
            href="#"
            className="flex items-center focus:outline-none group hover:opacity-90 transition-opacity"
            aria-label="QAVENZO Agency Home"
          >
            <QavenzoLogo />
          </a>

          {/* Desktop/Tablet Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-xs font-bold tracking-widest text-neutral-300 uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA Button: Red Pill */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B8141B] hover:bg-[#D01620] text-white font-bold text-xs tracking-wider uppercase transition-all duration-200 shadow-lg active:scale-95"
            >
              <span>LET'S TALK</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button - min 44x44px touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg bg-[#141418] border border-white/20 text-white focus:outline-none active:bg-white/10"
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Navigation Menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Animated Full-Screen Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0A0A0D] flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 lg:hidden overflow-y-auto"
          >
            {/* Top Links Stack */}
            <div className="flex flex-col space-y-4 sm:space-y-6 my-auto">
              <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase pb-2 border-b border-white/10">
                Menu Navigation
              </div>
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-black text-3xl sm:text-4xl text-neutral-200 hover:text-[#FFD200] active:text-[#FFD200] transition-colors py-2 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-neutral-600">0{idx + 1}</span>
                </a>
              ))}
            </div>

            {/* Bottom CTA Block */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-full bg-[#B8141B] active:bg-[#D01620] text-white font-black text-sm tracking-wider uppercase shadow-xl"
              >
                LET'S TALK →
              </a>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-1">
                <span>CREATE • CONNECT • GROW</span>
                <span className="text-[#FFD200]">@QAVENZO</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
