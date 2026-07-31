import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Rocket, Code2 } from 'lucide-react';
import { sfx } from '../utils/audio';

export type RoleType = 'All' | 'AI/ML' | 'Space' | 'FullStack';

interface RoleFilterBarProps {
  activeRole: RoleType;
  onSelectRole: (role: RoleType) => void;
}

const ROLES: { id: RoleType; label: string; icon: any; color: string }[] = [
  { id: 'All', label: 'All Roles (Full View)', icon: Sparkles, color: 'from-purple-500 to-indigo-500' },
  { id: 'AI/ML', label: 'AI / ML Engineer', icon: Brain, color: 'from-pink-500 to-rose-500' },
  { id: 'Space', label: 'Space & Avionics', icon: Rocket, color: 'from-cyan-500 to-blue-500' },
  { id: 'FullStack', label: 'Full-Stack Developer', icon: Code2, color: 'from-emerald-500 to-teal-500' }
];

const RoleFilterBar: React.FC<RoleFilterBarProps> = ({ activeRole, onSelectRole }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 my-8">
      <div className="p-2 rounded-2xl bg-slate-950/90 border border-purple-500/30 backdrop-blur-md flex flex-wrap items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.15)] font-mono">
        <span className="text-xs text-gray-400 px-3 hidden md:inline-block">Tailor View for Hiring:</span>
        {ROLES.map((role) => {
          const Icon = role.icon;
          const isActive = activeRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => {
                sfx.playClick();
                onSelectRole(role.id);
              }}
              onMouseEnter={() => sfx.playHover()}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                isActive
                  ? `bg-gradient-to-r ${role.color} text-white shadow-lg shadow-purple-500/20 scale-[1.02]`
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{role.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RoleFilterBar;
