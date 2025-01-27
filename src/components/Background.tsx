import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const Background = () => {
  const particlesCount = 5000;
  const positions = new Float32Array(particlesCount * 3);
  const speeds = new Float32Array(particlesCount);
  
  for(let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    speeds[i] = Math.random();
  }
  
  const points = useRef();
  const [isHyperspace, setIsHyperspace] = useState(false);
  
  useEffect(() => {
    const handleNavigation = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const sectionId = target.getAttribute('href').slice(1);
        
        // Start hyperspace effect
        setIsHyperspace(true);
        
        // Animate camera and particles
        gsap.to(points.current.rotation, {
          duration: 1,
          z: points.current.rotation.z + Math.PI * 4,
          ease: "power2.inOut"
        });
        
        gsap.to(points.current.material, {
          duration: 1,
          size: 0.05,
          opacity: 1,
          ease: "power2.inOut",
          onComplete: () => {
            // Reset after animation
            gsap.to(points.current.material, {
              duration: 0.5,
              size: 0.015,
              opacity: 0.8,
              ease: "power2.out",
              onComplete: () => {
                setIsHyperspace(false);
                // Scroll to section
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
              }
            });
          }
        });
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  useFrame((state, delta) => {
    if (points.current) {
      const positions = points.current.geometry.attributes.position.array;
      
      for(let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        
        if (isHyperspace) {
          positions[i3 + 2] -= speeds[i] * 0.2;
          if (positions[i3 + 2] < -5) {
            positions[i3 + 2] = 5;
          }
        } else {
          positions[i3 + 2] += (Math.sin(state.clock.elapsedTime * 0.1 + i) * 0.01);
        }
      }
      
      points.current.geometry.attributes.position.needsUpdate = true;
      points.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#ffffff"
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Background;