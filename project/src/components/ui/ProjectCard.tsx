import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="perspective-container h-full"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="preserve-3d relative rounded-xl overflow-hidden shadow-lg h-full bg-white transform transition-all duration-500">
        <div className="h-64 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <motion.a
            href={link}
            className="inline-flex items-center gap-1 text-secondary-600 font-medium hover:text-secondary-700 transition-colors"
            whileHover={{ x: 2 }}
          >
            View Project <ExternalLink size={16} />
          </motion.a>
        </div>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;