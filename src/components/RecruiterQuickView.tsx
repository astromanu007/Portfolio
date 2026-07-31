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
            Electronics & Computer Engineering Researcher | AI, Computer Vision & Space Avionics
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-[10px] text-gray-400 uppercase font-mono">Patents Filed</div>
              <div className="text-xl font-bold text-amber-400">35 Total (20 Granted)</div>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-[10px] text-gray-400 uppercase font-mono">Research Papers</div>
              <div className="text-xl font-bold text-cyan-400">10 Published</div>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-[10px] text-gray-400 uppercase font-mono">NASA Award</div>
              <div className="text-xl font-bold text-purple-400">People's Choice</div>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-[10px] text-gray-400 uppercase font-mono">Completed Projects</div>
              <div className="text-xl font-bold text-emerald-400">60+ Delivered</div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-4 bg-purple-950/20 border border-purple-500/20 rounded-2xl mb-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <p className="font-semibold text-purple-200 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" /> Key Highlights for Hiring Teams:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li><strong>Research Experience:</strong> Remote Research Student Intern at NTU Singapore (Medical Image Diagnostics) & Sanjivani University (YOLO threat perception).</li>
              <li><strong>Aerospace & Avionics:</strong> Contributed to Rhumi-1 (India's 1st hybrid reusable rocket launch payload) at Space Zone India.</li>
              <li><strong>Technical Depth:</strong> Python, PyTorch, C/C++, OpenCV, MobileNet SSD, Embedded C, AWS, React, TypeScript.</li>
            </ul>
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
              href="https://drive.google.com/file/d/1aT5M4RNyHwRgD4V8OUoDhwzYkLOSPQUg/view?usp=sharing"
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
