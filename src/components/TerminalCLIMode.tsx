import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TermIcon, CornerDownLeft } from 'lucide-react';
import { sfx } from '../utils/audio';

interface TerminalCLIModeProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  type: 'input' | 'output' | 'error';
  text: string;
}

const TerminalCLIMode: React.FC<TerminalCLIModeProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<LogEntry[]>([
    { type: 'output', text: 'MANISH DHATRAK OS [Version 2.0.26]' },
    { type: 'output', text: 'Type "help" to list available commands.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    sfx.playKeyboard();
    const newLogs: LogEntry[] = [...history, { type: 'input', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: 'Available Commands:\n - help       : Show command list\n - about      : Brief candidate bio\n - skills     : Key technical skills & tools\n - patents    : Patent filings summary\n - projects   : Highlighted engineering projects\n - contact    : Get contact email & links\n - resume     : Download ATS resume link\n - hire       : Why hire Manish?\n - clear      : Clear terminal screen'
        });
        break;
      case 'about':
        newLogs.push({
          type: 'output',
          text: 'MANISH DHATRAK - ECE Researcher & Developer\nFocus: Computer Vision, Machine Learning, Hardware-Software Integration, Avionics.'
        });
        break;
      case 'skills':
        newLogs.push({
          type: 'output',
          text: 'EXPERT: Python, PyTorch, C/C++, OpenCV, MobileNet SSD, React, TypeScript\nPROFICIENT: Three.js, Docker, Embedded C, ROS, AWS, Git'
        });
        break;
      case 'patents':
        newLogs.push({
          type: 'output',
          text: 'PATENT STATS:\n - 50+ Design Patents (25 Granted)\n - 3+ Product Patents & 2 Utility Patents Filed\n - 6 Published Peer-Reviewed Research Papers (IEEE, Springer, WBAN)'
        });
        break;
      case 'projects':
        newLogs.push({
          type: 'output',
          text: 'TOP PROJECTS:\n 1. AI-Driven Autonomous Car Detection (MobileNet SSD)\n 2. Makardhwaj Medicine Recommendation System\n 3. AI Smart Stethoscope with Telemedicine\n 4. PCB Anomaly Infrared Detection'
        });
        break;
      case 'contact':
        newLogs.push({
          type: 'output',
          text: 'Email: manishdhatrak007@gmail.com\nGitHub: github.com/astromanu007\nLinkedIn: linkedin.com/in/manish-dhatrak'
        });
        break;
      case 'resume':
        newLogs.push({
          type: 'output',
          text: 'Resume Link: https://drive.google.com/file/d/1aT5M4RNyHwRgD4V8OUoDhwzYkLOSPQUg/view?usp=sharing'
        });
        break;
      case 'hire':
        newLogs.push({
          type: 'output',
          text: 'WHY HIRE MANISH:\n 1. Proven research depth (NTU Singapore + Sanjivani Univ).\n 2. NASA Space Apps Winner (60,000+ global votes).\n 3. Real payload engineering (Rhumi-1 Hybrid Rocket CubeSat).'
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newLogs.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of available commands.`
        });
        break;
    }

    setHistory(newLogs);
    setInput('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-slate-950 border border-green-500/30 rounded-3xl p-6 shadow-[0_0_40px_rgba(34,197,94,0.2)] font-mono"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <TermIcon className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400 font-bold">MANISH_CLI_TERMINAL_V2</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg bg-white/5 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Console Log Window */}
          <div className="h-64 overflow-y-auto space-y-2 text-xs text-gray-300 pr-2">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={
                  item.type === 'input'
                    ? 'text-cyan-400 font-semibold'
                    : item.type === 'error'
                    ? 'text-red-400'
                    : 'text-green-300/90 whitespace-pre-wrap'
                }
              >
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={handleCommand} className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
            <span className="text-green-400 text-xs">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command here..."
              className="w-full bg-transparent text-xs text-white outline-none placeholder-gray-600"
              autoFocus
            />
            <button type="submit" className="text-gray-400 hover:text-green-400">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default TerminalCLIMode;
