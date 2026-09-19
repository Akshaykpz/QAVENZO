import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';

export const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-[#0E0E11] text-neutral-100 font-sans selection:bg-[#B8141B] selection:text-white overflow-x-hidden">
      {/* Fluid Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Indicator Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#B8141B] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Primary Responsive Navigation */}
      <Navbar />

      {/* Clean, Non-bloated 4-Screen Page Flow */}
      <main className="overflow-x-hidden">
        {/* Section 01: Hero (Screenshot 1 Reference) */}
        <Hero />

        {/* Section 02: WHAT WE DO (Screenshot 2 Reference) */}
        <Services />

        {/* Section 03: SELECTED WORK (Screenshot 3 Reference) */}
        <Portfolio />

        {/* Section 04: LET'S BUILD SOMETHING (Contact & Collaboration) */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
};

export default App;
