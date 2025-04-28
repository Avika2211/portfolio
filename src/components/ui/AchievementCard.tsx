import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  icon,
  color,
}) => {
  return (
    <motion.div
      className={`card-3d bg-gradient-to-br ${color} p-6 h-full`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-white p-3 rounded-full shadow-md">
          {icon}
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;