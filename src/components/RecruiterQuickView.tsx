import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Zap, Award, CheckCircle2, Mail, ExternalLink, Cpu, Terminal, Shield } from 'lucide-react';
import { sfx } from '../utils/audio';

interface RecruiterQuickViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const RecruiterQuickView: React.FC<RecruiterQuickViewProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-slate-950 border border-purple-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.2)] max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={() => { sfx.playClick(); onClose(); }}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-purple-500/20 transition duration-300"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Zap className="w-3.5 h-3.5" /> RECRUITER 60-SEC SUMMARY
            </span>
            <span className="text-xs font-mono text-gray-500">Fast Candidate Snapshot</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            Manish Dhatrak
          </h2>
          <p className="text-sm text-purple-300 font-mono mb-6">
            Electronics & Computer Engineering Researcher | AI, Computer Vision & Full-Stack Development
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-[10px] text-gray-400 uppercase font-mono">Design Patents</div>
              <div className="text-xl font-bold text-amber-400">50+ (25 Granted)</div>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-[10px] text-gray-400 uppercase font-mono">Product Patents</div>
              <div className="text-xl font-bold text-purple-400">3+ Filed</div>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-[10px] text-gray-400 uppercase font-mono">Research Papers</div>
              <div className="text-xl font-bold text-cyan-400">6 Published</div>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-[10px] text-gray-400 uppercase font-mono">Completed Projects</div>
              <div className="text-xl font-bold text-emerald-400">60+ Delivered</div>
            </div>
          </div>

          {/* Executive Summary / Key Highlights */}
          <div className="p-5 bg-gradient-to-br from-purple-950/30 to-blue-950/20 border border-purple-500/30 rounded-2xl mb-6 space-y-3">
            <p className="font-bold text-purple-200 text-sm flex items-center gap-2 border-b border-white/10 pb-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Key Highlights for Hiring Teams</span>
            </p>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 font-mono text-[11px] font-semibold shrink-0 mt-0.5">
                  Research & AI
                </span>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Research Student Intern</strong> at <span className="text-cyan-300 font-medium">NTU Singapore</span> (Medical Image Diagnostics) & <span className="text-purple-300 font-medium">Sanjivani University</span> (YOLO Computer Vision).
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-semibold shrink-0 mt-0.5">
                  Tech Stack
                </span>
                <p className="text-gray-300 leading-relaxed">
                  Python, PyTorch, C/C++, OpenCV, MobileNet SSD, Embedded C, AWS, React, TypeScript.
                </p>
              </div>
            </div>
          </div>

          {/* Primary Skill Pillars */}
          <div className="mb-6">
            <div className="text-xs font-mono text-gray-400 uppercase mb-3 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" /> Primary Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PyTorch', 'C / C++', 'OpenCV', 'YOLO / CNNs', 'TensorFlow', 'React / TS', 'Embedded Systems', 'Git / AWS'].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-purple-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <a
              href="https://drive.google.com/file/d/1AOQb5gR1mdHdX_PPkxkGkDS18kUwxcoK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono text-xs font-bold shadow-lg shadow-purple-500/25 hover:scale-[1.02] transition"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD ATS RESUME (PDF)</span>
            </a>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href="mailto:manishdhatrak007@gmail.com"
                className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-purple-300 transition"
              >
                <Mail className="w-4 h-4" /> Contact Manish
              </a>
              <a
                href="https://github.com/astromanu007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
              >
                GitHub Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RecruiterQuickView;
