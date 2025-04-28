import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';

export function GamingSetup() {
  const group = useRef();
  const { scene } = useGLTF('/pink_computer.glb'); // yaha correct path

  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    api.start({ rotation: [0, Math.sin(t / 4) / 8, 0] });
  });

  const handlePointerMove = (e) => {
    const x = (e.point.x * Math.PI) / 50;
    const y = (e.point.y * Math.PI) / 50;
    api.start({ rotation: [y, x, 0] });
  };

  return (
    <animated.group
      ref={group}
      dispose={null}
      {...spring}
      onPointerMove={handlePointerMove}
      scale={[2, 2, 2]}
      position={[0, -1, 0]}
    >
      <primitive object={scene} />
    </animated.group>
  );
}
