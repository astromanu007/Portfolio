import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { ReactNode, useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
  icon: ReactNode;
}

const ProjectCard = ({ title, description, image, github, demo, tags, icon }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleTouch = () => {
    setIsTouched(!isTouched);
  };

  return (
    <motion.div
      className="relative group h-[400px] md:h-[450px] rounded-xl overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={handleTouch}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated Background Gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 transition-opacity duration-500 ${
          isHovered || isTouched ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered || isTouched ? 1.1 : 1,
            filter: isHovered || isTouched ? 'brightness(0.7)' : 'brightness(0.9)'
          }}
          transition={{ duration: 0.5 }}
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 transition-opacity duration-300 ${
            isHovered || isTouched ? 'opacity-100' : 'opacity-90'
          }`} 
        />
      </div>

      {/* Content */}
      <div className="relative h-full p-4 md:p-6 flex flex-col justify-end">
        {/* Floating Icon */}
        <motion.div
          className="absolute top-4 right-4 p-3 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/20"
          animate={{
            y: isHovered || isTouched ? 0 : -10,
            scale: isHovered || isTouched ? 1.1 : 1,
            rotateZ: isHovered || isTouched ? 360 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        {/* Title and Description */}
        <motion.div
          initial={false}
          animate={{
            y: isHovered || isTouched ? 0 : 10,
            opacity: 1
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3
            className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"
            animate={{ scale: isHovered || isTouched ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className={`text-gray-300 text-sm mb-4 transition-all duration-300 ${
              isHovered || isTouched ? 'line-clamp-none' : 'line-clamp-2'
            }`}
            animate={{
              height: isHovered || isTouched ? 'auto' : '3em',
              opacity: isHovered || isTouched ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Animated Tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-4"
          initial={false}
          animate={{
            y: isHovered || isTouched ? 0 : 20,
            opacity: isHovered || isTouched ? 1 : 0.7
          }}
          transition={{ duration: 0.3 }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-purple-900/30 text-purple-400 border border-purple-500/20 backdrop-blur-sm"
              initial={false}
              animate={{
                scale: isHovered || isTouched ? 1.05 : 1,
                x: isHovered || isTouched ? 0 : -10
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
{/* Permanent Links (No Animation) */}
<div className="flex gap-6 mt-4 relative z-10">
  {github && (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
      style={{ pointerEvents: 'auto', zIndex: 10 }} // Ensuring Clickability
    >
      <Github className="w-5 h-5" />
      <span className="text-sm">Code</span>
    </a>
  )}
  {demo && (
    <a
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
      style={{ pointerEvents: 'auto', zIndex: 10 }} // Ensuring Clickability
    >
      <ExternalLink className="w-5 h-5" />
      <span className="text-sm">Live Demo</span>
    </a>
  )}
</div>


        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          initial={false}
          animate={{
            boxShadow: isHovered || isTouched
              ? '0 0 0 2px rgba(168, 85, 247, 0.4), 0 0 20px rgba(168, 85, 247, 0.2)'
              : '0 0 0 0px rgba(168, 85, 247, 0)'
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
