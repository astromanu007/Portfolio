import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, CpuIcon, Layers, Server, ShieldCheck, ArrowRight } from 'lucide-react';
import { sfx } from '../utils/audio';

interface ArchitectureDiagramModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle?: string;
}

const ArchitectureDiagramModal: React.FC<ArchitectureDiagramModalProps> = ({ isOpen, onClose, projectTitle = 'System Pipeline Architecture' }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-slate-950 border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] max-h-[90vh] overflow-y-auto font-mono"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-white uppercase">{projectTitle} - Flow Diagram</span>
            </div>
            <button
              onClick={() => { sfx.playClick(); onClose(); }}
              className="p-1 rounded-lg bg-white/5 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-gray-400 mb-6">
            Visual system design and end-to-end telemetry / AI inferencing data flow architecture.
          </p>

          {/* Interactive Flow Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-8">
            
            {/* Step 1: Input Sensor Layer */}
            <div className="p-4 rounded-2xl bg-white/5 border border-cyan-500/30 text-center relative group">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <div className="text-xs font-bold text-cyan-300 mb-1">Telemetry & Sensors</div>
              <p className="text-[11px] text-gray-400">IR Thermal / Camera / GPS Payload Feed</p>
            </div>

            <div className="hidden md:flex justify-center text-cyan-400">
              <ArrowRight className="w-6 h-6 animate-pulse" />
            </div>

            {/* Step 2: Processing Core */}
            <div className="p-4 rounded-2xl bg-white/5 border border-purple-500/30 text-center relative group">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <div className="text-xs font-bold text-purple-300 mb-1">YOLO / Perception Engine</div>
              <p className="text-[11px] text-gray-400">TensorRT MobileNet Feature Extraction</p>
            </div>

            <div className="hidden md:flex justify-center text-purple-400">
              <ArrowRight className="w-6 h-6 animate-pulse" />
            </div>

            {/* Step 3: Edge Decision Layer */}
            <div className="p-4 rounded-2xl bg-white/5 border border-blue-500/30 text-center relative group">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <div className="text-xs font-bold text-blue-300 mb-1">Edge Microcontroller</div>
              <p className="text-[11px] text-gray-400">Real-Time Threat Classification & Fault Alerts</p>
            </div>

            <div className="hidden md:flex justify-center text-blue-400">
              <ArrowRight className="w-6 h-6 animate-pulse" />
            </div>

            {/* Step 4: Telemetry Cloud / Ground Station */}
            <div className="p-4 rounded-2xl bg-white/5 border border-emerald-500/30 text-center relative group">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                4
              </div>
              <div className="text-xs font-bold text-emerald-300 mb-1">Ground Station Dashboard</div>
              <p className="text-[11px] text-gray-400">Perspective Real-Time Telemetry Stream</p>
            </div>

          </div>

          {/* System Spec Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10">
              <div className="text-[10px] text-gray-500 uppercase mb-1">Latency / FPS</div>
              <div className="text-base font-bold text-cyan-400">45 FPS (Edge Ingestion)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10">
              <div className="text-[10px] text-gray-500 uppercase mb-1">Model Accuracy</div>
              <div className="text-base font-bold text-purple-400">94.8% mAP@0.5</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-white/10">
              <div className="text-[10px] text-gray-500 uppercase mb-1">Hardware Layer</div>
              <div className="text-base font-bold text-emerald-400">Nvidia Jetson / CubeSat PCB</div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ArchitectureDiagramModal;
