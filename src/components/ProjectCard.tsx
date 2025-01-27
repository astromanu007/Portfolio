import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
}

const ProjectCard = ({ title, description, image, github, demo }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <div className="flex space-x-4">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;