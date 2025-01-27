import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Background from './Background';

const Scene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;