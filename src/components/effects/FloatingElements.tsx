import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className }) => {
  const elements = [
    { shape: 'circle', size: 30, color: 'bg-primary-300/30', animationClass: 'animate-float-slow' },
    { shape: 'circle', size: 50, color: 'bg-secondary-300/20', animationClass: 'animate-float' },
    { shape: 'circle', size: 20, color: 'bg-accent-300/30', animationClass: 'animate-float-fast' },
    { shape: 'square', size: 40, color: 'bg-primary-200/20', animationClass: 'animate-float-slow' },
    { shape: 'square', size: 25, color: 'bg-secondary-200/20', animationClass: 'animate-float' },
    { shape: 'triangle', size: 45, color: 'border-accent-200/30', animationClass: 'animate-float-fast' },
    { shape: 'triangle', size: 30, color: 'border-primary-300/20', animationClass: 'animate-float' },
  ];

  const positions = [
    { top: '10%', left: '20%' },
    { top: '20%', right: '10%' },
    { top: '50%', left: '5%' },
    { top: '30%', right: '25%' },
    { top: '70%', left: '30%' },
    { top: '85%', right: '15%' },
    { top: '60%', right: '8%' },
  ];

  return (
    <div className={`${className} pointer-events-none`}>
      {elements.map((element, index) => {
        const position = positions[index % positions.length];
        
        if (element.shape === 'circle') {
          return (
            <motion.div
              key={index}
              className={`absolute rounded-full ${element.color} ${element.animationClass}`}
              style={{
                width: element.size,
                height: element.size,
                ...position,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
              }}
            />
          );
        }
        
        if (element.shape === 'square') {
          return (
            <motion.div
              key={index}
              className={`absolute rounded-md ${element.color} ${element.animationClass}`}
              style={{
                width: element.size,
                height: element.size,
                ...position,
                transform: 'rotate(20deg)',
              }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
              }}
            />
          );
        }
        
        if (element.shape === 'triangle') {
          return (
            <motion.div
              key={index}
              className={`absolute w-0 h-0 
                border-l-[${element.size / 2}px] border-l-transparent 
                border-r-[${element.size / 2}px] border-r-transparent 
                border-b-[${element.size}px] ${element.color} ${element.animationClass}`}
              style={{
                ...position,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
              }}
            />
          );
        }
        
        return null;
      })}
    </div>
  );
};

export default FloatingElements;