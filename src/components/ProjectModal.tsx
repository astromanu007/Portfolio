import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ShieldCheck, Cpu, Target, HelpCircle } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
  icon: React.ReactNode;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 cursor-pointer"
          onClick={onClose}
        />

        {/* Modal Content container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-gray-950/95 border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl text-white z-10 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-black"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header image & title */}
          <div className="mb-6 rounded-xl overflow-hidden h-[200px] md:h-[280px] relative">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <h2 className="text-2xl md:text-3xl font-extrabold pr-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                {project.title}
              </h2>
              <div className="p-3 bg-purple-600/30 border border-purple-400/20 backdrop-blur-md rounded-xl shrink-0">
                {project.icon}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Detailed sections */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-purple-400 flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5" /> Project Overview
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/10">
                <h4 className="text-md font-bold text-blue-400 flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4" /> Tech Architecture
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leverages state-of-the-art algorithms, pre-trained neural network models (e.g. YOLO, MobileNet, CNNs), Python, or customized web applications optimized for speed, precision, and responsive performance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/10">
                <h4 className="text-md font-bold text-green-400 flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4" /> Key Objectives
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Aims to solve real-world problems in autonomous driving, smart healthcare diagnostic pipelines, agricultural yield security, or human-computer interaction.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 pt-4 border-t border-purple-500/20">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Repository
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-purple-500 hover:bg-purple-500/20 text-purple-300 font-semibold transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
