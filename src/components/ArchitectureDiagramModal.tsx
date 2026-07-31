import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, CpuIcon, Layers, Server, ShieldCheck, ArrowRight } from 'lucide-react';
import { sfx } from '../utils/audio';

interface ArchitectureDiagramModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
}

interface PipelineData {
  description: string;
  githubUrl: string;
  steps: Array<{ title: string; desc: string; icon: string }>;
  specs: Array<{ label: string; value: string; color: string }>;
  techStack: string[];
}

const getProjectPipeline = (title: string): PipelineData => {
  const t = title.toLowerCase();

  if (t.includes('autonomous cars') || t.includes('object detection')) {
    return {
      description: 'Real-time vehicle perception pipeline utilizing MobileNet SSD (Caffe prototxt/caffemodel), MediaPipe Pose Estimation, and focal length distance calculation for collision avoidance.',
      githubUrl: 'https://github.com/astromanu007/AI-Driven-Object-Detection-for-Autonomous-Cars-',
      steps: [
        { title: 'Webcam Stream Ingestion', desc: 'Real-time video frame capture via OpenCV & Imutils frame buffer', icon: '📷' },
        { title: 'MobileNet SSD (Caffe)', desc: 'Caffe prototxt & caffemodel multi-class object detection inferencing', icon: '🤖' },
        { title: 'MediaPipe Pose Tracking', desc: '3D Human landmark estimation & posture fault evaluation', icon: '🧍' },
        { title: 'Distance & Safety Alert', desc: 'Focal length distance estimation & unsafe proximity warnings', icon: '⚠️' }
      ],
      specs: [
        { label: 'Object Perception', value: 'MobileNet SSD (Caffe Framework)', color: 'text-cyan-400' },
        { label: 'Pose & Distance', value: 'MediaPipe Pose & Focal Length Math', color: 'text-purple-400' },
        { label: 'Core Libraries', value: 'OpenCV, NumPy, Imutils, Matplotlib', color: 'text-emerald-400' }
      ],
      techStack: ['Python 3.7+', 'MobileNet SSD', 'Caffe Model', 'MediaPipe Pose', 'OpenCV', 'NumPy', 'Imutils']
    };
  }

  if (t.includes('makardhwaj') || t.includes('medicine')) {
    return {
      description: 'AI Healthcare Diagnostic Platform processing user symptoms (e.g. itching, aching) to infer 40+ illnesses and generate full clinical care reports.',
      githubUrl: 'https://github.com/astromanu007/Makardhwaj-Medicine-Recommendation-System',
      steps: [
        { title: 'Symptom Ingestion', desc: 'User inputs symptoms (e.g., itching, aching) into Flask diagnostic interface', icon: '📝' },
        { title: 'AI Model Inference', desc: 'Multi-label Decision Tree & Random Forest classifiers evaluate symptom matrix', icon: '🧠' },
        { title: 'Diagnostic Results', desc: 'Generates Illness diagnosis, clinical explanation, safety measures & Rx drugs', icon: '⚡' },
        { title: 'Care & PDF Report Export', desc: 'Outputs tailored workouts, nutrition plans & downloadable clinical PDF report', icon: '📜' }
      ],
      specs: [
        { label: 'Disease Coverage', value: '40+ Clinical Illnesses', color: 'text-cyan-400' },
        { label: 'Diagnostic Engine', value: 'Decision Tree & Random Forest ML', color: 'text-purple-400' },
        { label: 'Clinical Output', value: 'Rx, Precautions, Workouts, Diets & PDF', color: 'text-emerald-400' }
      ],
      techStack: ['Python 3.8+', 'Flask', 'Scikit-Learn', 'Pandas', 'Jupyter Notebook', 'HTML5/CSS3']
    };
  }

  if (t.includes('pcb') || t.includes('anomaly')) {
    return {
      description: 'Real-time thermal inspection system for printed circuit boards capturing infrared heat signatures to localize hotspot anomalies before physical hardware failure.',
      githubUrl: 'https://github.com/astromanu007/PCB_Anomaly_Detection',
      steps: [
        { title: 'Thermal IR Camera Feed', desc: 'Live radiometric infrared matrix capture via FLIR / Seek Thermal USB', icon: '🌡️' },
        { title: 'Thermal Gradient Analysis', desc: 'OpenCV threshold comparison & localized heatmap delta tracking', icon: '🔍' },
        { title: 'Hotspot Overlay & Auto-Save', desc: 'Visual anomaly bounding box overlay & auto-timestamped frame capture', icon: '📸' },
        { title: 'Live Matplotlib Analytics', desc: 'Real-time accuracy trend & thermal intensity charts in Pygame UI', icon: '📈' }
      ],
      specs: [
        { label: 'Hardware Camera', value: 'FLIR / Seek Thermal USB Hardware', color: 'text-cyan-400' },
        { label: 'User Interface', value: 'Interactive Pygame GUI & Slider Controls', color: 'text-purple-400' },
        { label: 'Computer Vision', value: 'OpenCV, Matplotlib, NumPy', color: 'text-emerald-400' }
      ],
      techStack: ['Python 3.6+', 'OpenCV', 'Pygame UI', 'Matplotlib', 'FLIR / Seek Thermal', 'NumPy']
    };
  }

  if (t.includes('leaf') || t.includes('disease')) {
    return {
      description: 'Deep Learning agricultural diagnostic system classifying plant leaf imagery across 39 distinct crop disease categories using PyTorch CNN.',
      githubUrl: 'https://github.com/astromanu007/Leaf-Disease-Detection',
      steps: [
        { title: 'Leaf Image Upload', desc: 'High-resolution field photo upload via Flask web application', icon: '🌿' },
        { title: 'Image Preprocessing', desc: 'OpenCV image normalization & spatial dimension tensor formatting', icon: '📐' },
        { title: 'PyTorch CNN Classifier', desc: 'Deep Convolutional Neural Network trained on Plant Village Dataset', icon: '🧠' },
        { title: 'Diagnosis & Cure Advice', desc: '39-class disease identification & organic remedy suggestions', icon: '🚑' }
      ],
      specs: [
        { label: 'Disease Taxonomy', value: '39 Plant Leaf Categories', color: 'text-cyan-400' },
        { label: 'Neural Network', value: 'PyTorch CNN Architecture', color: 'text-purple-400' },
        { label: 'Training Corpus', value: 'Plant Village Dataset', color: 'text-emerald-400' }
      ],
      techStack: ['Python 3.8+', 'PyTorch', 'Torchvision', 'Flask', 'OpenCV', 'Jupyter Notebook']
    };
  }

  if (t.includes('stethoscope') || t.includes('aura-steth') || t.includes('vitals')) {
    return {
      description: 'AURA-STETH AI: ESP32-powered pocket ICU stethoscope bringing ResNet50 & EfficientNet-B0 cardiopulmonary AI diagnostics to rural healthcare with HC12 RF long-range offline fail-safe.',
      githubUrl: 'https://github.com/cosmomanish007-pixel/live-vitals-web',
      steps: [
        { title: 'INMP441 & Vitals Sensors', desc: '10s 16kHz WAV audio + MAX30105 PPG & MAX30205 temp capture', icon: '🎙️' },
        { title: 'DWT & Mel-Spectrogram', desc: 'Discrete Wavelet Transform noise reduction & MFCC feature extraction', icon: '📊' },
        { title: 'ResNet50 & EfficientNet AI', desc: 'Dual neural inferencing: Heart Murmur (AUC 0.9578) & Lung AI', icon: '🧠' },
        { title: 'HC12 RF / Supabase Sync', desc: '433MHz RF offline alert transmission & Jitsi WebRTC telemedicine', icon: '📡' }
      ],
      specs: [
        { label: 'Heart AI Model', value: 'ResNet50 (AUC 0.9578)', color: 'text-cyan-400' },
        { label: 'Lung AI Model', value: 'EfficientNet-B0 (AUC 0.8495)', color: 'text-purple-400' },
        { label: 'Hardware Stack', value: 'ESP32-S3, INMP441, MAX30105/205', color: 'text-emerald-400' }
      ],
      techStack: ['ESP32 FreeRTOS', 'ResNet50', 'EfficientNet-B0', 'React + Tailwind', 'Supabase', 'HC-12 RF', 'Jitsi WebRTC']
    };
  }

  if (t.includes('mouse') || t.includes('virtual')) {
    return {
      description: 'Touchless human-computer interaction system translating 3D hand gesture kinematics into operating system mouse events in real-time.',
      githubUrl: 'https://github.com/astromanu007/AI_Virtual_Mouse',
      steps: [
        { title: 'Webcam Video Feed', desc: 'Real-time 60 FPS video frame acquisition via OpenCV', icon: '🎥' },
        { title: 'MediaPipe 3D Landmark Net', desc: '21 3D hand keypoint landmark tracking & mesh extraction', icon: '✋' },
        { title: 'Kinematic Gesture Vectoring', desc: 'Pinch, click, and drag vector distance threshold evaluation', icon: '📐' },
        { title: 'OS Cursor Control', desc: 'PyAutoGUI hardware pointer movement & click execution', icon: '🖱️' }
      ],
      specs: [
        { label: 'Keypoint Mesh', value: '21 3D Hand Landmarks Tracked', color: 'text-cyan-400' },
        { label: 'Kinematic Latency', value: '< 15ms Response Time', color: 'text-purple-400' },
        { label: 'Hardware Requirement', value: 'Zero Special Hardware (Standard Webcam)', color: 'text-emerald-400' }
      ],
      techStack: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI', 'NumPy']
    };
  }

  // Default Pipeline
  return {
    description: 'Visual system design and end-to-end telemetry / AI inferencing data flow architecture.',
    githubUrl: 'https://github.com/astromanu007',
    steps: [
      { title: 'Telemetry & Sensors', desc: 'IR Thermal / Camera / GPS Payload Feed', icon: '📡' },
      { title: 'Perception Engine', desc: 'Deep Neural Network Feature Extraction', icon: '🧠' },
      { title: 'Edge Microcontroller', desc: 'Real-Time Threat Classification & Fault Alerts', icon: '⚡' },
      { title: 'Dashboard Output', desc: 'Perspective Real-Time Telemetry Stream', icon: '📊' }
    ],
    specs: [
      { label: 'Latency / FPS', value: '45 FPS (Edge Ingestion)', color: 'text-cyan-400' },
      { label: 'Model Accuracy', value: '94.8% mAP@0.5', color: 'text-purple-400' },
      { label: 'Hardware Layer', value: 'NVIDIA Jetson / Edge Micro', color: 'text-emerald-400' }
    ],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'TensorRT', 'NumPy']
  };
};

const ArchitectureDiagramModal: React.FC<ArchitectureDiagramModalProps> = ({ isOpen, onClose, projectTitle = 'System Pipeline Architecture' }) => {
  if (!isOpen) return null;

  const pipeline = getProjectPipeline(projectTitle);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-slate-950/95 border border-purple-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)] max-h-[90vh] overflow-y-auto font-sans text-white scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="relative flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase block">TECHNICAL PIPELINE ARCHITECTURE</span>
                <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-300">
                  {projectTitle}
                </h3>
              </div>
            </div>
            <button
              onClick={() => { sfx.playClick(); onClose(); }}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-purple-600/80 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Overview Description Card */}
          <div className="relative mb-6 p-4 rounded-2xl bg-gradient-to-r from-purple-950/30 to-slate-900/50 border border-purple-500/20 text-xs text-gray-300 leading-relaxed font-mono">
            {pipeline.description}
          </div>

          {/* Pipeline Execution Nodes (Clean 2x2 Grid Layout) */}
          <div className="relative mb-8">
            <div className="text-[11px] font-bold text-gray-300 font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" /> End-to-End Pipeline Execution Nodes
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pipeline.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 relative group flex gap-3.5 items-start shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-cyan-300 mb-1 flex items-center gap-1.5 font-mono">
                      <span>{step.icon}</span> {step.title}
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Key Metrics Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {pipeline.specs.map((spec, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-sm">
                <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-1">{spec.label}</div>
                <div className={`text-sm font-extrabold font-mono ${spec.color}`}>{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges & GitHub Button */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-[11px] text-gray-400 font-mono mr-1">Stack:</span>
              {pipeline.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[11px] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={pipeline.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold font-mono text-xs transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 shrink-0"
            >
              <span>View Source Repo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ArchitectureDiagramModal;
