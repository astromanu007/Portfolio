import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  maxLife: number;
  life: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [rotation, setRotation] = useState(-45);
  const [speed, setSpeed] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const prevPos = useRef({ x: -100, y: -100 });
  const targetRotation = useRef(-45);
  const currentRotation = useRef(-45);
  const particlesRef = useRef<Particle[]>([]);
  const [, setFrame] = useState(0);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check touch screen
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const plasmaColors = ['#38bdf8', '#818cf8', '#c084fc', '#a855f7'];

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const dx = x - prevPos.current.x;
      const dy = y - prevPos.current.y;
      const dist = Math.hypot(dx, dy);

      setSpeed(dist);

      if (dist > 1.5) {
        // Calculate rocket heading angle
        const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        targetRotation.current = angleDeg;

        // Spawn delicate micro plasma plume particles behind engine nozzle
        const backRad = (angleDeg - 90) * (Math.PI / 180);
        const spawnCount = Math.min(Math.floor(dist / 4) + 1, 3);

        for (let i = 0; i < spawnCount; i++) {
          const spread = (Math.random() - 0.5) * 0.4;
          const pAngle = backRad + spread;
          const pSpeed = Math.random() * 1.8 + 1.0;

          particlesRef.current.push({
            id: Math.random() + Date.now(),
            x: x - Math.cos(backRad) * 10,
            y: y - Math.sin(backRad) * 10,
            vx: -Math.cos(pAngle) * pSpeed,
            vy: -Math.sin(pAngle) * pSpeed,
            size: Math.random() * 3 + 1.5,
            color: plasmaColors[Math.floor(Math.random() * plasmaColors.length)],
            maxLife: 15 + Math.random() * 10,
            life: 0,
          });
        }
      }

      prevPos.current = { x, y };
      setPosition({ x, y });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
      // Spawn radial pulse particles on click
      for (let i = 0; i < 12; i++) {
        const rad = (i / 12) * Math.PI * 2;
        const pSpeed = Math.random() * 3 + 2;
        particlesRef.current.push({
          id: Math.random() + Date.now(),
          x: prevPos.current.x,
          y: prevPos.current.y,
          vx: Math.cos(rad) * pSpeed,
          vy: Math.sin(rad) * pSpeed,
          size: Math.random() * 4 + 2,
          color: '#f59e0b',
          maxLife: 20,
          life: 0,
        });
      }
    };

    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.getAttribute('role') === 'button' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth physics loop
    const loop = () => {
      // Smooth angle lerp
      let diff = targetRotation.current - currentRotation.current;
      // Handle angle wrap around (-180 / +180)
      diff = ((((diff + 180) % 360) + 360) % 360) - 180;
      currentRotation.current += diff * 0.25;
      setRotation(currentRotation.current);

      // Update particle decay
      particlesRef.current = particlesRef.current
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          size: p.size * 0.93,
          life: p.life + 1,
        }))
        .filter((p) => p.life < p.maxLife && p.size > 0.3);

      setFrame((f) => f + 1);
      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Micro Plasma Stardust Trail */}
      {particlesRef.current.map((p) => (
        <div
          key={p.id}
          className="fixed rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}, 0 0 12px ${p.color}`,
            opacity: 1 - p.life / p.maxLife,
          }}
        />
      ))}

      {/* Professional Aerospace Spacecraft Vector Pointer */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) rotate(${rotation}deg) scale(${
            isClicked ? 0.85 : isHovered ? 1.25 : 1
          })`,
          transition: 'transform 0.08s ease-out',
        }}
      >
        <div className="relative flex flex-col items-center">
          {/* Target Reticle Ring on Hover */}
          {isHovered && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.4, opacity: 1, rotate: 180 }}
              transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
              className="absolute -inset-2 rounded-full border border-purple-500/60 border-dashed pointer-events-none"
            />
          )}

          {/* Precision Spacecraft SVG */}
          <svg
            className={`w-6 h-6 transition-all duration-300 ${
              isHovered
                ? 'text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.9)]'
                : 'text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]'
            }`}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Spacecraft Nosecone & Fuselage */}
            <path
              d="M16 2L20 14L16 26L12 14L16 2Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
            {/* Swept Wings */}
            <path
              d="M16 12L27 21L23 23L16 17L9 23L5 21L16 12Z"
              fill="currentColor"
              fillOpacity="0.75"
            />
            {/* Cockpit / Canopy Glass */}
            <path
              d="M16 5L18 11L16 13L14 11L16 5Z"
              fill="#ffffff"
              fillOpacity="0.9"
            />
            {/* Thruster Nozzle Outline */}
            <rect
              x="14"
              y="25"
              width="4"
              height="3"
              rx="1"
              fill="#38bdf8"
              fillOpacity="0.9"
            />
          </svg>

          {/* Engine Plasma Thruster Stream */}
          <motion.div
            className="w-1.5 rounded-full bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent -mt-0.5 shadow-[0_0_10px_#38bdf8]"
            style={{
              height: Math.min(speed * 0.8 + 8, 22),
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.05 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
