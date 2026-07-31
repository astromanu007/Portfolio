import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Award, Download, ShieldCheck, Database, Rocket } from 'lucide-react';
import { sfx } from '../utils/audio';

interface TabContent {
  title: string;
  icon: any;
  content: string;
  stats?: { label: string; value: string; color: string }[];
}

const ABOUT_TABS: Record<string, TabContent> = {
  summary: {
    title: 'Mission Summary',
    icon: Terminal,
    content: "I am Manish Dhatrak — an AI/ML Engineer, Computer Vision, Robotics, and Biomedical AI Researcher. Recognized with All India Rank 1 in Mission Rhumi 2024 Assessment and a Fully Funded Visit to NASA, I pioneer intelligent perception systems, biomedical diagnostic devices, and deep learning models. Author of 6 peer-reviewed research papers and inventor with 50+ design patents (25 Granted).",
    stats: [
      { label: 'Academic Domain', value: 'Electronics & Computer Eng.', color: 'from-purple-400 to-indigo-500' },
      { label: 'Primary Specialization', value: 'AI/ML & Robotics', color: 'from-blue-400 to-cyan-500' },
      { label: 'Scholarly Impact', value: '6 IEEE/Springer Papers', color: 'from-pink-400 to-rose-500' }
    ]
  },
  ai_core: {
    title: 'Cognitive AI Core',
    icon: Cpu,
    content: "Specializing in real-time computer vision, edge AI, and deep learning diagnostics. Architectural expertise spans MobileNet SSD perception engines for autonomous cars, OpenCV radiometric thermal imaging for PCB fault localization, PyTorch ResNet50/EfficientNet biomedical signal classifiers, AI virtual try-on models, and MediaPipe 3D gesture kinematics.",
    stats: [
      { label: 'Vision Architecture', value: 'MobileNet & OpenCV', color: 'from-purple-400 to-pink-500' },
      { label: 'Biomedical AI', value: 'Cardiopulmonary Diagnostic Models', color: 'from-blue-400 to-indigo-500' },
      { label: 'Engineering Output', value: '60+ Tech Projects', color: 'from-cyan-400 to-teal-500' }
    ]
  },
  patents: {
    title: 'Patents & Inventions',
    icon: Award,
    content: "Pioneering novel hardware-software IP creation across autonomous perception, wearable women safety systems, assistive vision glasses, and waste-energy harvesting turbines. Inventor holding 50+ design patents (25 officially Granted by the Indian Patent Office) and author of 6 peer-reviewed research publications in IEEE and Springer.",
    stats: [
      { label: 'Granted IP', value: '25 Granted Patents', color: 'from-emerald-400 to-teal-500' },
      { label: 'Total Portfolio', value: '50+ Design Patents', color: 'from-amber-400 to-orange-500' },
      { label: 'Product Patents', value: '3+ Tech Filings', color: 'from-blue-400 to-purple-500' }
    ]
  },
  directives: {
    title: 'Space & Excellence',
    icon: Rocket,
    content: "Awarded All India Rank 1 in the national Mission Rhumi 2024 Assessment by Space Zone India (Fully Funded NASA Visit) and achieved 2nd Global Rank in the International Space Olympiad (ISO). Winner of the NASA Space Apps Challenge People's Choice Award for ExoYatra.",
    stats: [
      { label: 'National Rank', value: 'AIR 1 (Mission Rhumi 2024)', color: 'from-amber-400 to-yellow-500' },
      { label: 'NASA Space Apps', value: 'People\'s Choice Award Winner', color: 'from-purple-400 to-pink-500' },
      { label: 'Global Honor', value: 'Fully Funded NASA Visit & M2L Summer Scholar', color: 'from-cyan-400 to-blue-500' }
    ]
  }
};

const InteractiveAboutMe = () => {
  const [activeTab, setActiveTab] = useState<string>('summary');
  const [typingText, setTypingText] = useState<string>('');

  const selectedData = ABOUT_TABS[activeTab];

  // Simulated typewriter effect on tab change
  useEffect(() => {
    let index = 0;
    const fullText = selectedData.content;
    setTypingText('');

    let isCancelled = false;

    const interval = setInterval(() => {
      if (isCancelled) return;

      setTypingText(fullText.slice(0, index + 1));
      sfx.playKeyboard();
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 12); // Steady typing speed

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [activeTab, selectedData.content]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-5 gap-10 items-stretch">

        {/* Left 2 columns: Sleek HUD Profile Avatar */}
        <div className="md:col-span-2 flex flex-col items-center justify-center relative">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-purple-500/40 via-blue-500/20 to-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)] group">
            <div className="w-full h-full rounded-full overflow-hidden border border-cyan-500/30 bg-slate-950 relative flex items-center justify-center">
              {/* Rotating outer orbit indicator */}
              <motion.div
                className="absolute inset-1 rounded-full border border-dashed border-cyan-400/30 pointer-events-none z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Laser Scan line overlay */}
              <motion.div
                className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.8)] z-10 pointer-events-none"
                animate={{
                  top: ['5%', '95%', '5%']
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Profile Avatar Image */}
              <img
                src="https://anish-dhatrak.sirv.com/ChatGPT%20Image%20Jul%2026%2C%202026%2C%2011_43_23%20PM.png"
                alt="Manish Dhatrak"
                className="w-full h-full rounded-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Elegant HUD Telemetry Pills */}
          <div className="mt-6 w-full max-w-xs p-3.5 bg-slate-900/80 border border-purple-500/20 rounded-2xl font-mono text-xs backdrop-blur-md shadow-lg space-y-2">
            <div className="flex justify-between items-center px-1">
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>System State</span>
              </span>
              <span className="text-emerald-400 font-bold tracking-wider">ONLINE</span>
            </div>
            <div className="h-px bg-white/5 w-full" />
            <div className="flex justify-between items-center px-1">
              <span className="flex items-center gap-2 text-gray-400">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>Intel Cores</span>
              </span>
              <span className="text-cyan-300 font-semibold">50+ Patents</span>
            </div>
          </div>
        </div>

        {/* Right 3 columns: Interactive Flight Logs & Diagnostic Console */}
        <div className="md:col-span-3 flex flex-col justify-between p-6 md:p-8 bg-slate-950/80 border border-purple-500/20 rounded-3xl backdrop-blur-md relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl opacity-50 pointer-events-none"></div>

          <div className="relative">
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                SECURE ACCESS
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
              {Object.entries(ABOUT_TABS).map(([key, item]) => {
                const Icon = item.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => { sfx.playClick(); setActiveTab(key); }}
                    onMouseEnter={() => sfx.playHover()}
                    className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-mono transition-all duration-300 ${isActive
                      ? 'bg-purple-600/20 border-purple-500 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                      : 'border-white/5 hover:border-purple-500/30 text-gray-400 hover:text-white bg-white/5'
                      }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Telemetry Console Screen */}
            <div className="min-h-[140px] bg-slate-900/60 rounded-2xl border border-white/5 p-5 font-mono text-xs md:text-sm text-gray-300 leading-relaxed mb-6">
              <p className="min-h-[100px] text-gray-300">
                {typingText}
                <span className="inline-block w-1.5 h-4 bg-purple-400 ml-1 animate-pulse"></span>
              </p>
            </div>

            {/* Stats Telemetry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <AnimatePresence mode="wait">
                {selectedData.stats?.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="text-[10px] text-gray-500 uppercase font-mono tracking-wider mb-1">{stat.label}</div>
                    <div className={`text-base font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <motion.a
              href="https://drive.google.com/file/d/1AOQb5gR1mdHdX_PPkxkGkDS18kUwxcoK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-mono text-xs font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/35 transition duration-300"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME/CV</span>
            </motion.a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InteractiveAboutMe;
