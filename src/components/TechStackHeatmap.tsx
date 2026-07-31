import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Terminal, Shield, Zap } from 'lucide-react';
import { sfx } from '../utils/audio';

interface SkillItem {
  name: string;
  category: 'AI/ML' | 'Software' | 'Hardware/Avionics' | 'Data';
  level: 'Expert' | 'Proficient' | 'Familiar';
  rating: number; // 1-100
}

const SKILL_HEATMAP: SkillItem[] = [
  { name: 'Python', category: 'AI/ML', level: 'Expert', rating: 95 },
  { name: 'PyTorch', category: 'AI/ML', level: 'Expert', rating: 90 },
  { name: 'C / C++', category: 'Software', level: 'Expert', rating: 88 },
  { name: 'OpenCV', category: 'AI/ML', level: 'Expert', rating: 92 },
  { name: 'YOLO / CNNs', category: 'AI/ML', level: 'Expert', rating: 94 },
  { name: 'TensorFlow', category: 'AI/ML', level: 'Proficient', rating: 82 },
  { name: 'React / TypeScript', category: 'Software', level: 'Proficient', rating: 85 },
  { name: 'Embedded C / MCU', category: 'Hardware/Avionics', level: 'Proficient', rating: 80 },
  { name: 'MATLAB', category: 'Software', level: 'Proficient', rating: 78 },
  { name: 'ROS / Robotics', category: 'Hardware/Avionics', level: 'Familiar', rating: 72 },
  { name: 'MySQL / MongoDB', category: 'Data', level: 'Proficient', rating: 84 },
  { name: 'Git & CodeCommit', category: 'Software', level: 'Expert', rating: 90 },
  { name: 'AWS Cloud', category: 'Data', level: 'Proficient', rating: 76 },
  { name: 'CubeSat Payload Design', category: 'Hardware/Avionics', level: 'Proficient', rating: 85 },
];

const TechStackHeatmap: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI/ML', 'Software', 'Hardware/Avionics', 'Data'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILL_HEATMAP
    : SKILL_HEATMAP.filter(s => s.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 flex items-center justify-center gap-2">
          <Cpu className="w-7 h-7 text-cyan-400" /> Core Competency Heatmap
        </h2>
        <p className="text-xs md:text-sm text-gray-400 font-mono">
          Structured proficiency matrix across Artificial Intelligence, Avionics, and Software Engineering.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { sfx.playClick(); setSelectedCategory(cat); }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition duration-300 ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 border border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => {
          const levelColor =
            skill.level === 'Expert'
              ? 'border-purple-500/40 text-purple-300 bg-purple-500/10'
              : skill.level === 'Proficient'
              ? 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10'
              : 'border-blue-500/40 text-blue-300 bg-blue-500/10';

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              onMouseEnter={() => sfx.playHover()}
              className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/40 transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white font-mono">{skill.name}</h3>
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${levelColor}`}>
                  {skill.level}
                </span>
              </div>

              {/* Heatmap Bar */}
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mt-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.rating}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackHeatmap;
