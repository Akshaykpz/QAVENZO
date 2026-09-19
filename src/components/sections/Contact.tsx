import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, CheckCircle2, Copy, Check, Phone } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Content & Video',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const projectTypes = [
    'Content & Video',
    'Design & UI/UX',
    'Web Development',
    'Performance Marketing',
    'Brand Identity',
    'Social Media Management',
  ];

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#B8141B', '#FFD200', '#FFFFFF']
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-8 md:px-12 bg-[#0E0E11] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display font-black text-xs sm:text-sm tracking-[0.25em] text-white uppercase inline-block">
            LET'S BUILD SOMETHING
          </h2>
          <div className="w-14 sm:w-16 h-[2px] bg-[#E5B800] mx-auto mt-2" />
        </div>

        {/* Sharp Bordered Container Matching Reference Style */}
        <div className="border border-white/20 bg-[#0A0A0D] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Left Column: Direct Studio Channels */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-2 sm:mb-3">
                LET'S TALK<span className="text-[#B8141B]">.</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
                Tell us about your brand, goals, or upcoming launch. We respond within 24 hours with strategic clarity.
              </p>

              {/* Channels */}
              <div className="space-y-2 font-mono text-xs">
                {/* Instagram */}
                <div className="p-2.5 sm:p-3 border border-white/10 bg-[#101014] flex items-center justify-between hover:border-white/30 transition-colors">
                  <div className="flex items-center gap-2.5 truncate">
                    <InstagramIcon className="w-4 h-4 text-[#B8141B] flex-shrink-0" />
                    <span className="text-neutral-400 text-[11px] sm:text-xs">INSTAGRAM:</span>
                    <span className="text-white font-semibold truncate text-[11px] sm:text-xs">@qavenzo</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('@qavenzo', 'ig')}
                    className="p-1 text-neutral-400 hover:text-white"
                    title="Copy Handle"
                    aria-label="Copy Instagram"
                  >
                    {copiedField === 'ig' ? <Check className="w-3.5 h-3.5 text-[#E5B800]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Email */}
                <div className="p-2.5 sm:p-3 border border-white/10 bg-[#101014] flex items-center justify-between hover:border-white/30 transition-colors">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-[#E5B800] flex-shrink-0" />
                    <span className="text-neutral-400 text-[11px] sm:text-xs">EMAIL:</span>
                    <span className="text-white font-semibold truncate text-[11px] sm:text-xs">hello@qavenzo.com</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('hello@qavenzo.com', 'email')}
                    className="p-1 text-neutral-400 hover:text-white"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-[#E5B800]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* WhatsApp & Call */}
                <div className="p-2.5 sm:p-3 border border-white/10 bg-[#101014] flex items-center justify-between hover:border-white/30 transition-colors">
                  <a
                    href="https://wa.me/919072951662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 truncate hover:text-[#25D366] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#B8141B] flex-shrink-0" />
                    <span className="text-neutral-400 text-[11px] sm:text-xs">WHATSAPP:</span>
                    <span className="text-white font-semibold truncate text-[11px] sm:text-xs">+91 90729 51662</span>
                  </a>
                  <div className="flex items-center gap-1">
                    <a
                      href="tel:+919072951662"
                      className="p-1 text-neutral-400 hover:text-white"
                      title="Direct Call"
                      aria-label="Call +91 90729 51662"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCopy('+91 90729 51662', 'wa')}
                      className="p-1 text-neutral-400 hover:text-white"
                      title="Copy Phone"
                      aria-label="Copy WhatsApp"
                    >
                      {copiedField === 'wa' ? <Check className="w-3.5 h-3.5 text-[#E5B800]" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 text-[10px] sm:text-[11px] font-mono text-neutral-500 uppercase">
              Bengaluru, India • Operating Globally
            </div>
          </div>

          {/* Right Column: Clean Compact Form */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 bg-[#0E0E12]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-10 text-center space-y-3"
              >
                <div className="w-12 h-12 mx-auto bg-[#B8141B] flex items-center justify-center text-white rounded-full">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-black text-xl sm:text-2xl text-white">
                  INQUIRY RECEIVED.
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. We will get back to you shortly via {formData.email}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 border border-white/20 text-xs font-mono text-neutral-300 hover:text-white min-h-[40px]"
                >
                  SEND ANOTHER
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                
                {/* 1. NAME & EMAIL ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Parker"
                      autoComplete="name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0A0A0D] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5B800] text-xs sm:text-sm font-sans min-h-[40px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0A0A0D] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5B800] text-xs sm:text-sm font-sans min-h-[40px]"
                    />
                  </div>
                </div>

                {/* 2. PHONE & COMPANY ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 90729 51662"
                      autoComplete="tel"
                      inputMode="tel"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0A0A0D] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5B800] text-xs sm:text-sm font-sans min-h-[40px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2.5 bg-[#0A0A0D] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5B800] text-xs sm:text-sm font-sans min-h-[40px]"
                    />
                  </div>
                </div>

                {/* 3. PROJECT TYPE */}
                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#0A0A0D] border border-white/15 text-white focus:outline-none focus:border-[#E5B800] text-xs sm:text-sm font-sans min-h-[40px]"
                  >
                    {projectTypes.map((item) => (
                      <option key={item} value={item} className="bg-[#0A0A0D] text-white">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. MESSAGE */}
                <div>
                  <label className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    Message
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your brand goals..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-[#0A0A0D] border border-white/15 text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5B800] text-xs sm:text-sm font-sans resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#B8141B] hover:bg-[#D01620] active:bg-[#A81318] text-white font-extrabold text-xs sm:text-sm font-mono tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[42px]"
                  >
                    <span>START CONVERSATION</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
