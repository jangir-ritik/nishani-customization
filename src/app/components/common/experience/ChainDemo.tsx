import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Presentation from './Presentation';

export default function ChainDemo() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <color attach="background" args={['#f4f0ed']} />
        <Presentation />
        <OrbitControls />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}