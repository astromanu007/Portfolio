import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Award, Download, ShieldCheck, Database, Rocket } from 'lucide-react';

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
    content: "I am Manish Dhatrak, an Electronics and Computer Engineering researcher and developer. Passionate about space exploration, machine learning, and hardware-software integration, I lead efforts in building cutting-edge technical products. Over the past 5 years, I have successfully transformed creative concepts into robust research papers, patents, and projects that impact communities globally.",
    stats: [
      { label: 'Academic Standing', value: 'ECE Undergraduate', color: 'from-purple-400 to-indigo-500' },
      { label: 'Leadership', value: 'Founder @ Team Charlie', color: 'from-blue-400 to-cyan-500' },
      { label: 'Active Projects', value: '60+ Completed', color: 'from-pink-400 to-rose-500' }
    ]
  },
  ai_core: {
    title: 'Cognitive AI Core',
    icon: Cpu,
    content: "Developing custom perception pipelines and intelligent algorithms. Expertise ranges from YOLO-based wildlife threat identification systems at Sanjivani University to deep learning applications in medical image diagnostics at NTU Singapore. Bridging advanced computer science and hardware layers.",
    stats: [
      { label: 'CV Models', value: 'YOLO, CNNs', color: 'from-purple-400 to-pink-500' },
      { label: 'Research Depth', value: 'Medical Imaging', color: 'from-blue-400 to-indigo-500' },
      { label: 'Telemetry', value: 'Real-time Datasets', color: 'from-cyan-400 to-teal-500' }
    ]
  },
  patents: {
    title: 'Patents & Inventions',
    icon: Award,
    content: "Fostering technological innovation through active intellectual property protection. Authored 10 research papers in top-tier conferences (including Springer, WBAN-based real-time systems) and filed 35 patents (with 20 successfully granted) covering diverse industrial applications.",
    stats: [
      { label: 'Patents Filed', value: '35 Total', color: 'from-amber-400 to-orange-500' },
      { label: 'Granted Patents', value: '20 Approved', color: 'from-green-400 to-emerald-500' },
      { label: 'Research Papers', value: '10 Published', color: 'from-blue-400 to-purple-500' }
    ]
  },
  directives: {
    title: 'Space & Space Outreach',
    icon: Rocket,
    content: "Pioneering community-level science and space exploration awareness. Contributed to India's first hybrid rocket launch payload (Rhumi-1) at Space Zone India, Tamil Nadu. Winner of NASA Space Apps People's Choice Award with ExoYatra game, drawing 60,000+ global votes.",
    stats: [
      { label: 'NASA Space Apps', value: 'People\'s Choice Winner', color: 'from-purple-400 to-pink-500' },
      { label: 'ISO Olympiad', value: '2nd Global Rank', color: 'from-amber-400 to-yellow-500' },
      { label: 'Rocket Payload', value: 'Rhumi-1 (CubeSat)', color: 'from-cyan-400 to-blue-500' }
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
    
    const interval = setInterval(() => {
      setTypingText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 8); // Fast typing speed

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-5 gap-10 items-stretch">
        
        {/* Left 2 columns: Bio-Scanner Picture Frame */}
        <div className="md:col-span-2 flex flex-col items-center justify-center relative">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-purple-500/30 group bg-slate-950 flex items-center justify-center">
            {/* Pulsing scanning radar glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-purple-600 via-blue-500 to-cyan-400 rounded-full blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
            
            {/* Rotating dashed HUD outer ring */}
            <motion.div 
              className="absolute inset-1 rounded-full border border-dashed border-cyan-400/40 pointer-events-none z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Dynamic radar scanning green/cyan line */}
            <motion.div 
              className="absolute left-0 w-full h-[2px] bg-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.8)] z-10 pointer-events-none"
              animate={{
                top: ['0%', '100%', '0%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Profile Avatar Image */}
            <img
              src="https://avatars.githubusercontent.com/u/98075143?s=400&u=d87c28809dc33c8d81123df7627a6fee69023b63&v=4"
              alt="Manish Dhatrak"
              className="w-[96%] h-[96%] rounded-full object-cover z-0 transition-all duration-700"
            />

            {/* Futuristic Tech Scan Markers */}
            <div className="absolute top-4 left-6 text-[9px] font-mono text-cyan-400/60 pointer-events-none select-none z-10">
              SYS.LOC // 19.6248° N
            </div>
            <div className="absolute bottom-4 right-6 text-[9px] font-mono text-purple-400/60 pointer-events-none select-none z-10">
              SCAN_STATUS: OK
            </div>
          </div>

          {/* Quick HUD Metrics below Photo */}
          <div className="mt-6 w-full max-w-xs p-4 bg-slate-950/70 border border-white/5 rounded-2xl font-mono text-xs text-gray-400 space-y-2">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-green-400" /> System State</span>
              <span className="text-green-400 font-bold">ONLINE</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><Database className="w-3.5 h-3.5 text-blue-400" /> Database Cores</span>
              <span className="text-white">Active (35 Patents)</span>
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
                <span className="text-xs font-mono text-gray-500 ml-2">bio_system_diagnostic.sh</span>
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
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-mono transition-all duration-300 ${
                      isActive
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
              <div className="text-purple-400 text-xs mb-2">manish@astromanu:~# cat {selectedData.title.toLowerCase().replace(/ /g, '_')}.txt</div>
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
              href="https://drive.google.com/file/d/1aT5M4RNyHwRgD4V8OUoDhwzYkLOSPQUg/view?usp=sharing"
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
