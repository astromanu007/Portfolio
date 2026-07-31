import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, FolderGit2, Award, Terminal, Mail, FileText, Sparkles } from 'lucide-react';
import { sfx } from '../utils/audio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (action: string, param?: any) => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onSelectAction }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sfx.playClick();
        if (isOpen) onClose();
        else onSelectAction('toggle-palette');
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onSelectAction]);

  if (!isOpen) return null;

  const commands = [
    { id: 'sec-about', title: 'Jump to About Me', category: 'Navigation', icon: Terminal },
    { id: 'sec-skills', title: 'Jump to Skills & Heatmap', category: 'Navigation', icon: Sparkles },
    { id: 'sec-projects', title: 'Jump to Projects Showcase', category: 'Navigation', icon: FolderGit2 },
    { id: 'sec-patents', title: 'Jump to Patents & Research Papers', category: 'Navigation', icon: Award },
    { id: 'sec-contact', title: 'Jump to Contact & Schedule Chat', category: 'Navigation', icon: Mail },
    { id: 'action-recruiter', title: 'Open Recruiter 60-Sec Summary', category: 'Quick Action', icon: Sparkles },
    { id: 'action-cli', title: 'Open Interactive CLI Mode', category: 'Quick Action', icon: Terminal },
    { id: 'action-resume', title: 'Download ATS Resume (PDF)', category: 'Quick Action', icon: FileText },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-xl bg-slate-950 border border-purple-500/30 rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.3)] overflow-hidden"
        >
          {/* Search Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
            <Search className="w-5 h-5 text-purple-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search (e.g. 'resume', 'projects', 'cli')..."
              className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none font-mono"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-white/5 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-72 overflow-y-auto p-2">
            {filteredCommands.length === 0 ? (
              <div className="p-4 text-center text-xs font-mono text-gray-500">
                No matching command found.
              </div>
            ) : (
              filteredCommands.map((cmd) => {
                const Icon = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      sfx.playClick();
                      onSelectAction(cmd.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-2xl text-left hover:bg-purple-600/20 text-xs font-mono text-gray-300 hover:text-white transition group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-purple-400 group-hover:text-cyan-300" />
                      <span>{cmd.title}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                      {cmd.category}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          <div className="px-4 py-2 border-t border-white/5 bg-slate-900/50 flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>Use ↑↓ to navigate</span>
            <span>ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
