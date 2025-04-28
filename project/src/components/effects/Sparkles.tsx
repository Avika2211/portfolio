import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SparkleProps {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

interface SparklesProps {
  className?: string;
  children?: ReactNode;
}

const generateSparklePositions = (count: number) => {
  const sparkles = [];
  for (let i = 0; i < count; i++) {
    sparkles.push({
      id: i,
      size: Math.random() * 8 + 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 3,
      color: i % 3 === 0 
        ? 'rgba(236, 72, 153, 0.7)' 
        : i % 3 === 1 
        ? 'rgba(139, 92, 246, 0.7)'
        : 'rgba(16, 185, 129, 0.7)',
    });
  }
  return sparkles;
};

const Sparkle: React.FC<SparkleProps> = ({ 
  size = 10, 
  color = 'rgba(236, 72, 153, 0.7)',
  style 
}) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        boxShadow: `0 0 ${size / 2}px ${color}`,
        ...style,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

const Sparkles: React.FC<SparklesProps> = ({ className, children }) => {
  const sparkles = generateSparklePositions(15);

  return (
    <div className={`${className} overflow-hidden`}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          size={sparkle.size}
          color={sparkle.color}
          style={{
            top: `${sparkle.y}%`,
            left: `${sparkle.x}%`,
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default Sparkles;