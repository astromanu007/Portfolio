import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, Star, GitFork, ExternalLink, Code } from 'lucide-react';
import { sfx } from '../utils/audio';

const GitHubStatsWidget: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="p-8 rounded-3xl bg-slate-950/80 border border-purple-500/20 backdrop-blur-md relative overflow-hidden group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-700"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left info */}
          <div className="space-y-4 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
              <Github className="w-4 h-4 text-purple-400" /> LIVE GITHUB ACTIVITY & OPEN SOURCE
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Consistent Code Contribution & Git Hygiene
            </h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-mono">
              Maintains active repositories covering Autonomous Perception, Medical ML, Reusable Rocket Payloads, and Full-Stack Applications.
            </p>

            <a
              href="https://github.com/astromanu007"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sfx.playClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-purple-600 text-white font-mono text-xs font-bold transition border border-white/10"
            >
              <span>Explore @astromanu007 on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Right stat cards */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <GitCommit className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white font-mono">1,200+</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase">Yearly Commits</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <Code className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white font-mono">60+</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase">Public Repos</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white font-mono">60k+</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase">Votes / Stars</div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <GitFork className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <div className="text-xl font-bold text-white font-mono">Python / C++</div>
              <div className="text-[10px] font-mono text-gray-400 uppercase">Primary Stack</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStatsWidget;
