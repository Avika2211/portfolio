import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: Skill[];
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills, color }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary-100 to-primary-200 shadow-neon';
      case 'secondary':
        return 'from-secondary-100 to-secondary-200 shadow-neon-purple';
      case 'accent':
        return 'from-accent-100 to-accent-200 shadow-neon-mint';
      default:
        return 'from-primary-100 to-primary-200 shadow-neon';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary-500';
      case 'secondary':
        return 'bg-secondary-500';
      case 'accent':
        return 'bg-accent-500';
      default:
        return 'bg-primary-500';
    }
  };

  return (
    <motion.div
      className={`card-3d bg-gradient-to-br ${getColorClass(color)} p-6 h-full`}
      whileHover={{ scale: 1.03, translateY: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-gray-800">{icon}</span>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${getProgressColor(color)}`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.2 * index }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;