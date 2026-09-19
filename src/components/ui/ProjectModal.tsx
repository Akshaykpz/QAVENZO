import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle2, Calendar, Tag, Layers } from 'lucide-react';
import type { ProjectItem } from '../../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-dark-900 border-2 border-white/20 rounded-2xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="bg-dark-850 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-brand-red text-white text-[11px] font-mono font-bold tracking-wider uppercase">
                {project.category}
              </span>
              <span className="font-mono text-xs text-neutral-400">
                CASE STUDY // {project.number}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-dark-900 hover:bg-brand-red hover:text-white text-neutral-400 border border-white/10 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Main Visual */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                <span>{project.tag}</span>
                <span className="text-brand-yellow font-bold">QAVENZO STUDIOS</span>
              </div>
            </div>

            {/* Header info */}
            <div>
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 mb-2">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-brand-yellow" /> {project.year}</span>
                <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5 text-brand-red" /> {project.tag}</span>
              </div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-neutral-300 text-base sm:text-lg mt-3 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="p-5 rounded-xl bg-dark-850 border border-white/5">
                <div className="font-mono text-xs text-brand-red font-bold uppercase tracking-wider mb-2">
                  The Challenge
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-850 border border-white/5">
                <div className="font-mono text-xs text-brand-yellow font-bold uppercase tracking-wider mb-2">
                  The Execution
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-4 h-4 text-brand-yellow" />
                <span className="font-mono text-xs text-white uppercase font-bold tracking-wider">
                  Delivered Assets & Architecture:
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300 bg-dark-850 px-3.5 py-2 rounded-lg border border-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-neutral-400">
                Interested in similar results for your business?
              </span>
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-light text-white font-bold text-xs uppercase tracking-wider border border-black shadow-[3px_3px_0px_0px_#FFD200] inline-flex items-center justify-center gap-2"
              >
                <span>INITIATE PROJECT INQUIRY</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
