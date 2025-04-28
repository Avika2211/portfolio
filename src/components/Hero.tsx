import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Sparkles from './effects/Sparkles';
import FloatingElements from './effects/FloatingElements';
import { GamingSetup } from './3d/GamingSetup';

const Hero: React.FC = () => {
  const constraintsRef = useRef(null);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden"
    >
      <Sparkles className="absolute inset-0 pointer-events-none" />
      <FloatingElements className="absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="mb-6 text-primary-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block text-2xl text-secondary-500 mb-2">Hello, I'm</span>
              Avika Joshi
              <span className="block mt-2 text-primary-600 text-3xl md:text-4xl">
                Designer & Developer
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              From McKinsey to Stanford, blending leadership, AI expertise, and a 
              passion for transforming ideas into impactful solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline border-secondary-500 text-secondary-500 hover:bg-secondary-50">
                View Projects
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            ref={constraintsRef}
            className="perspective-container md:w-1/2 h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              style={{ background: 'transparent' }}
            >
              <ambientLight intensity={0.7} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Suspense fallback={null}>
                <GamingSetup />
                <Environment preset="sunset" />
                <OrbitControls 
                  enableZoom={false}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2}
                />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-primary-600 hover:text-primary-700"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;