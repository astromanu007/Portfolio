import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Users, Clock, Flame, ExternalLink } from 'lucide-react';
import { sfx } from '../utils/audio';

const ACHIEVEMENTS = [
  {
    title: "NASA Space Apps Challenge 2024",
    award: "People's Choice Award Winner",
    project: "ExoYatra Exoplanet Exploration Platform",
    votes: "60,000+ Global Votes",
    duration: "48-Hour Hackathon",
    teamSize: "4 Developers",
    color: "from-amber-500 to-orange-500",
    badge: "1st Place (People's Choice)"
  },
  {
    title: "EduMitra International Space Olympiad",
    award: "2nd Global Rank",
    project: "Astrophysics & Orbital Mechanics Challenge",
    votes: "1,000+ Global Competitors",
    duration: "Global Multi-Stage Olympiad",
    teamSize: "Individual",
    color: "from-purple-500 to-pink-500",
    badge: "2nd Global Rank"
  },
  {
    title: "Mission Rhumi Reusable Rocket Payload",
    award: "Payload Integration Trainee Award",
    project: "Rhumi-1 Hybrid Rocket & CubeSat Telemetry",
    votes: "Space Zone India & Martin Group",
    duration: "Intensive Avionics Workshop",
    teamSize: "Avionics Core Team",
    color: "from-cyan-500 to-blue-500",
    badge: "National Rocket Launch"
  }
];

const TrophyCase: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 flex items-center justify-center gap-2">
          <Trophy className="w-7 h-7 text-amber-400" /> Hackathons & Competition Trophy Case
        </h2>
        <p className="text-xs md:text-sm text-gray-400 font-mono">
          High-pressure hackathons, global space competitions, and rapid prototyping achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => sfx.playHover()}
            className="p-6 rounded-3xl bg-slate-950/80 border border-purple-500/20 hover:border-amber-500/40 backdrop-blur-md relative group transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white shadow-md`}>
                  {item.badge}
                </span>
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <div className="text-xs font-mono text-purple-300 mb-3">{item.award}</div>

              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                <strong>Project:</strong> {item.project}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 font-mono text-[11px] text-gray-400">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> Timeline</span>
                <span className="text-white">{item.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-purple-400" /> Team</span>
                <span className="text-white">{item.teamSize}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1"><Award className="w-3.5 h-3.5 text-amber-400" /> Impact</span>
                <span className="text-amber-300 font-bold">{item.votes}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrophyCase;
