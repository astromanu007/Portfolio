import { motion } from 'framer-motion';
import { XIcon as Icon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  description: string;
  icon: Icon;
}

const SkillCard = ({ title, description, icon: IconComponent }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
      <div className="relative p-6 bg-black rounded-lg leading-none flex items-center space-x-6">
        <IconComponent className="w-8 h-8 text-purple-400" />
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;