import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { sfx } from '../utils/audio';

const AudioControls = () => {
  const [isMuted, setIsMuted] = useState<boolean>(() => sfx.isMuted());

  const toggleMute = () => {
    const nextState = sfx.toggleMute();
    setIsMuted(nextState);
    if (!nextState) {
      sfx.playChime();
    }
  };

  return (
    <button
      onClick={toggleMute}
      title={isMuted ? "Unmute Sound FX" : "Mute Sound FX"}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-slate-950/80 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-500 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 group"
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
      ) : (
        <Volume2 className="w-5 h-5 text-purple-400 group-hover:text-cyan-300 transition-colors animate-pulse" />
      )}
    </button>
  );
};

export default AudioControls;
