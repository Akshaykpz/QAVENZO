import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Share, Plus, Lock } from 'lucide-react';
import { ProjectModal } from '../ui/ProjectModal';
import type { ProjectItem } from '../../data/projects';
import { projectsData } from '../../data/projects';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const openProjectByIndex = (index: number) => {
    if (projectsData[index]) {
      setSelectedProject(projectsData[index]);
    }
  };

  const mobileProjects = [
    { index: 0, num: '01', title: 'AI VIDEO CAMPAIGN', shortTitle: 'AI VIDEO', year: '2026', image: '/assets/projects/portfolio_ai_wave.jpg', category: 'AI & Next-Gen Video' },
    { index: 1, num: '02', title: 'BRAND IDENTITY', shortTitle: 'KRONOS BRAND', year: '2026', image: '/assets/projects/portfolio_kronos.jpg', category: 'KRONOS Fine Watches' },
    { index: 3, num: '04', title: 'WEBSITE DESIGN', shortTitle: 'STUDIO NOIR', year: '2026', image: '/assets/projects/portfolio_studio_noir.jpg', category: 'Studio Noir 3D Platform' },
    { index: 2, num: '03', title: 'SOCIAL MEDIA CAMPAIGN', shortTitle: 'SOCIAL MEDIA', year: '2026', image: '/assets/projects/social_campaign.jpg', category: 'Viral Reel Direction' },
    { index: 4, num: '05', title: 'PROMOTIONAL CONTENT', shortTitle: 'APEX PROMO', year: '2026', image: '/assets/projects/portfolio_car_rain.jpg', category: 'Apex Commercial Film' },
    { index: 5, num: '06', title: 'DIGITAL EXPERIENCE', shortTitle: 'DIGITAL EXP', year: '2026', image: '/assets/projects/digital_experience.jpg', category: 'Crimson Geometries 3D' },
  ];

  return (
    <section id="work" className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 md:px-12 bg-[#0A0A0C] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================= */}
        {/* Browser Window Mockup Frame (Screenshot 3 Reference)      */}
        {/* ========================================================= */}
        <div className="rounded-xl border border-white/20 bg-[#0E0E12] shadow-2xl overflow-hidden">
          
          {/* Top Window Bar (Traffic lights + Centered URL Bar) */}
          <div className="bg-[#141418] px-3 sm:px-4 py-2.5 sm:py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] inline-block" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] inline-block" />
              
              <div className="hidden sm:flex items-center gap-1.5 ml-3 text-neutral-500">
                <ChevronLeft className="w-3.5 h-3.5" />
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="bg-[#0C0C0E] border border-white/10 rounded-md px-3 sm:px-6 py-1 text-[10px] sm:text-[11px] font-mono text-neutral-300 max-w-xs sm:max-w-md w-full mx-2 sm:mx-4 flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3 text-neutral-500" />
              <span className="truncate">qavenzo.com/selected-work</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-neutral-500">
              <Share className="w-3 h-3 sm:w-3.5 sm:h-3.5 hover:text-white transition-colors cursor-pointer" />
              <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Inner Mockup Canvas */}
          <div className="p-4 sm:p-6 lg:p-10 bg-[#0B0B0E]">
            
            {/* Header: SELECTED WORK / Ideas made visible. */}
            <div className="mb-6 sm:mb-8">
              <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                SELECTED WORK
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-normal">
                Ideas made visible.
              </p>
            </div>

            {/* ========================================================= */}
            {/* DESKTOP & TABLET-LANDSCAPE (lg+): Exactly 2 Rows of Cards */}
            {/* Row 1: 6 cols (01) + 3 cols (02) + 3 cols (04) = 12 cols  */}
            {/* Row 2: 4 cols (03) + 5 cols (05) + 3 cols (06) = 12 cols  */}
            {/* ========================================================= */}
            <div className="hidden lg:grid grid-cols-12 gap-5 items-stretch">
              
              {/* ------------------- ROW 1 ------------------- */}

              {/* Card 01: AI Video Campaign (col-span-6) */}
              <div
                onClick={() => openProjectByIndex(0)}
                className="col-span-6 flex flex-col border border-white/30 bg-[#0E0E12] cursor-pointer group hover:border-white/80 transition-colors h-[280px]"
              >
                <div className="relative flex-1 w-full overflow-hidden bg-black">
                  <img
                    src="/assets/projects/portfolio_ai_wave.jpg"
                    alt="AI Video Campaign"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3 bg-[#0B0B0E] border-t border-white/20 flex items-center justify-between text-[11px] font-mono tracking-wider text-neutral-300">
                  <div className="flex items-center gap-2.5">
                    <span className="text-white font-bold">01</span>
                    <span className="text-white font-semibold uppercase">AI VIDEO CAMPAIGN</span>
                    <span className="text-neutral-500">2026</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 02: Brand Identity - KRONOS (col-span-3) */}
              <div
                onClick={() => openProjectByIndex(1)}
                className="col-span-3 flex flex-col border border-white/30 bg-[#0E0E12] cursor-pointer group hover:border-white/80 transition-colors h-[280px]"
              >
                <div className="relative flex-1 w-full overflow-hidden bg-black">
                  <img
                    src="/assets/projects/portfolio_kronos.jpg"
                    alt="Brand Identity"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3 bg-[#0B0B0E] border-t border-white/20 flex items-center justify-between text-[11px] font-mono tracking-wider text-neutral-300">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-white font-bold">02</span>
                    <span className="text-white font-semibold uppercase truncate">BRAND IDENTITY</span>
                    <span className="text-neutral-500">2026</span>
                  </div>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 04: Website Design - Studio Noir (col-span-3) */}
              <div
                onClick={() => openProjectByIndex(3)}
                className="col-span-3 flex flex-col border border-white/30 bg-[#0E0E12] cursor-pointer group hover:border-white/80 transition-colors h-[280px]"
              >
                <div className="relative flex-1 w-full overflow-hidden bg-black">
                  <img
                    src="/assets/projects/portfolio_studio_noir.jpg"
                    alt="Website Design"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3 bg-[#0B0B0E] border-t border-white/20 flex items-center justify-between text-[11px] font-mono tracking-wider text-neutral-300">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-white font-bold">04</span>
                    <span className="text-white font-semibold uppercase truncate">WEBSITE DESIGN</span>
                    <span className="text-neutral-500">2026</span>
                  </div>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* ------------------- ROW 2 ------------------- */}

              {/* Card 03: Social Media Campaign (col-span-4) - Matching Reference 3 with VIEW PROJECT overlay */}
              <div
                onClick={() => openProjectByIndex(2)}
                className="col-span-4 flex flex-col border border-white/30 bg-[#0E0E12] cursor-pointer group hover:border-white/80 transition-colors h-[280px] relative overflow-hidden"
              >
                <div className="relative flex-1 w-full overflow-hidden bg-black">
                  <img
                    src="/assets/projects/social_campaign.jpg"
                    alt="Social Media Campaign"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Subtle dark gradient overlay at bottom with VIEW PROJECT text */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-center pb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-white uppercase flex items-center gap-1.5 drop-shadow">
                      <span>VIEW PROJECT</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 05: Promotional Content (col-span-5) */}
              <div
                onClick={() => openProjectByIndex(4)}
                className="col-span-5 flex flex-col border border-white/30 bg-[#0E0E12] cursor-pointer group hover:border-white/80 transition-colors h-[280px]"
              >
                <div className="relative flex-1 w-full overflow-hidden bg-black">
                  <img
                    src="/assets/projects/portfolio_car_rain.jpg"
                    alt="Promotional Content"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3 bg-[#0B0B0E] border-t border-white/20 flex items-center justify-between text-[11px] font-mono tracking-wider text-neutral-300">
                  <div className="flex items-center gap-2.5">
                    <span className="text-white font-bold">05</span>
                    <span className="text-white font-semibold uppercase">PROMOTIONAL CONTENT</span>
                    <span className="text-neutral-500">2026</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Card 06: Digital Experience (col-span-3) */}
              <div
                onClick={() => openProjectByIndex(5)}
                className="col-span-3 flex flex-col border border-white/30 bg-[#0E0E12] cursor-pointer group hover:border-white/80 transition-colors h-[280px]"
              >
                <div className="relative flex-1 w-full overflow-hidden bg-black">
                  <img
                    src="/assets/projects/digital_experience.jpg"
                    alt="Digital Experience"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>
                <div className="px-4 py-3 bg-[#0B0B0E] border-t border-white/20 flex items-center justify-between text-[11px] font-mono tracking-wider text-neutral-300">
                  <div className="flex items-center gap-2 truncate">
                    <span className="text-white font-bold">06</span>
                    <span className="text-white font-semibold uppercase truncate">DIGITAL EXPERIENCE</span>
                    <span className="text-neutral-500">2026</span>
                  </div>
                  <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* MOBILE & TABLET (<lg): Clean Compact 2-Column Grid        */}
            {/* 3 rows of 2 cards — no squishing, zero endless scrolling  */}
            {/* ========================================================= */}
            <div className="lg:hidden grid grid-cols-2 gap-2.5 sm:gap-4">
              {mobileProjects.map((item) => (
                <div
                  key={item.index}
                  onClick={() => openProjectByIndex(item.index)}
                  className="flex flex-col border border-white/25 bg-[#0E0E12] overflow-hidden cursor-pointer active:border-[#E5B800] transition-colors"
                >
                  <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2 sm:p-3 bg-[#0B0B0E] border-t border-white/15 flex items-center justify-between text-[10px] sm:text-xs font-mono">
                    <div className="truncate">
                      <span className="text-[#E5B800] font-bold mr-1">{item.num}</span>
                      <span className="text-white font-semibold uppercase truncate">{item.shortTitle}</span>
                    </div>
                    <ArrowRight className="w-3 h-3 text-neutral-400 flex-shrink-0 ml-1" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
