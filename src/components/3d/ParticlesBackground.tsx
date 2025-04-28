import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesProps {
  count: number;
}

function Particles({ count = 2000 }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 50;
      positions[i3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, [count]);
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    
    particles.forEach((particle, i) => {
      const i3 = i * 3;
      
      const { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      
      const a = Math.cos(t + speed * time + i * 0.1) * factor;
      const b = Math.sin(t + speed * time + i * 0.1) * factor;
      
      positions[i3] = xFactor + a;
      positions[i3 + 1] = yFactor + b;
      positions[i3 + 2] = zFactor + a;
    });
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#ec4899"
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
  );
}

const ParticlesBackground: React.FC = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles count={1000} />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;