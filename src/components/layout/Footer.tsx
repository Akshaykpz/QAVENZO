import React from 'react';
import { ArrowUp, MessageSquare, Mail } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from '../ui/Icons';
import { QavenzoLogo } from '../ui/QavenzoLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0C] pt-10 sm:pt-14 pb-8 px-4 sm:px-8 md:px-12 border-t border-white/15">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Tier: QAVENZO Wordmark without red background */}
        <div className="pb-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="mb-3">
              <QavenzoLogo className="scale-110 origin-left" />
            </div>
            <p className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              Creative & Digital Growth Agency
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-left sm:text-right">
              <div className="font-display font-extrabold text-sm sm:text-base text-[#E5B800]">
                CREATE • CONNECT • GROW
              </div>
              <div className="text-[10px] sm:text-xs font-mono text-neutral-400 mt-0.5">
                Content • Design • Web • Marketing • Branding • Social
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 sm:p-3 rounded-full bg-[#141418] hover:bg-[#B8141B] text-white border border-white/20 transition-all flex items-center justify-center cursor-pointer flex-shrink-0"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Compact Navigation & Social Strip */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          
          {/* Nav Links */}
          <div className="flex items-center gap-5 sm:gap-8">
            <a href="#work" className="text-neutral-300 hover:text-white transition-colors uppercase">
              Work
            </a>
            <a href="#services" className="text-neutral-300 hover:text-white transition-colors uppercase">
              Services
            </a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition-colors uppercase">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-[#B8141B]" />
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/919072951662"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-[#25D366] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#E5B800]" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:hello@qavenzo.com"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#B8141B]" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-[#E5B800]" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs font-mono text-neutral-500">
          <div>
            © 2026 QAVENZO. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Bengaluru, India</span>
            <span>•</span>
            <span className="text-[#B8141B] font-bold">CREATE • CONNECT • GROW</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
