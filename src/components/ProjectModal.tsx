import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Cpu, Target, HelpCircle, ArrowRight } from 'lucide-react';

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
  onOpenArchitecture?: (title: string) => void;
}

const getProjectTechArchitecture = (title: string): string => {
  const t = title.toLowerCase();
  if (t.includes('autonomous cars') || t.includes('object detection')) {
    return 'Utilizes MobileNet SSD in Caffe (.prototxt & .caffemodel), MediaPipe Pose 3D landmarks, OpenCV frame buffer processing, and focal length distance math for real-time perception.';
  }
  if (t.includes('makardhwaj') || t.includes('medicine')) {
    return 'Powers a Flask web server trained on Decision Tree and Random Forest multi-label classification models, mapping clinical symptoms to 40+ disease diagnostic reports.';
  }
  if (t.includes('pcb') || t.includes('anomaly')) {
    return 'Combines FLIR / Seek Thermal infrared USB camera feeds, OpenCV thermal gradient thresholding, Pygame interactive GUI, and live Matplotlib accuracy tracking.';
  }
  if (t.includes('leaf') || t.includes('disease')) {
    return 'Leverages a PyTorch Deep Convolutional Neural Network trained on the Plant Village dataset, integrated into a Flask web service for 39 crop disease classifications.';
  }
  if (t.includes('stethoscope') || t.includes('aura-steth')) {
    return 'Combines ESP32 FreeRTOS firmware, INMP441 I2S mic, MAX30105/30205 sensors, ResNet50 (AUC 0.9578) heart AI, EfficientNet-B0 lung AI, and HC12 RF 433MHz fail-safe telemetry.';
  }
  if (t.includes('mouse') || t.includes('virtual')) {
    return 'Employs MediaPipe 21 3D hand landmark mesh tracking, kinematic vector distance calculation, and PyAutoGUI hardware OS mouse event dispatchers.';
  }
  return 'Leverages state-of-the-art machine learning models, custom computer vision algorithms, and tailored web frameworks optimized for low latency and high precision.';
};

const getProjectKeyObjectives = (title: string): string => {
  const t = title.toLowerCase();
  if (t.includes('autonomous cars') || t.includes('object detection')) {
    return 'Provide instantaneous vehicle, pedestrian, and posture anomaly alerts to prevent self-driving vehicle collisions.';
  }
  if (t.includes('makardhwaj') || t.includes('medicine')) {
    return 'Empower individuals with instant AI healthcare preliminary diagnosis, safety advice, prescribed drugs, diets, and downloadable PDF reports.';
  }
  if (t.includes('pcb') || t.includes('anomaly')) {
    return 'Detect component thermal hotspots before physical hardware damage occurs, reducing industrial manufacturing defect costs.';
  }
  if (t.includes('leaf') || t.includes('disease')) {
    return 'Help farmers quickly identify agricultural crop pathologies early and provide organic cure remedies to protect harvest yields.';
  }
  if (t.includes('stethoscope') || t.includes('aura-steth')) {
    return 'Bridge rural healthcare gaps by putting a pocket AI cardiologist & pulmonologist into an accessible ₹2,000 ESP32 device.';
  }
  if (t.includes('mouse') || t.includes('virtual')) {
    return 'Enable touchless, hardware-free human-computer interaction using standard webcams for sterile or accessibility environments.';
  }
  return 'Solve real-world problems in autonomous perception, smart healthcare diagnostics, agricultural security, or human-computer interaction.';
};

const ProjectModal = ({ project, onClose, onOpenArchitecture }: ProjectModalProps) => {
  if (!project) return null;

  const techArchitectureDesc = getProjectTechArchitecture(project.title);
  const keyObjectivesDesc = getProjectKeyObjectives(project.title);

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
            className="absolute top-4 right-4 z-50 p-2 text-white bg-black/70 border border-white/20 hover:border-purple-500 rounded-full hover:bg-purple-600 transition-all duration-300 shadow-lg"
          >
            <X className="w-5 h-5" />
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
            {project.tags.map((tag, index) => (
              <span
                key={index}
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
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-md font-bold text-blue-400 flex items-center gap-2 mb-2">
                    <Cpu className="w-4 h-4" /> Tech Architecture
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {techArchitectureDesc}
                  </p>
                </div>
                {onOpenArchitecture && (
                  <button
                    onClick={() => onOpenArchitecture(project.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline pt-2"
                  >
                    <span>View Architecture Flow Diagram</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/10">
                <h4 className="text-md font-bold text-green-400 flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4" /> Key Objectives
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {keyObjectivesDesc}
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
