import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Bookmark, Star } from 'lucide-react';
import AchievementCard from './ui/AchievementCard';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: 'Harvard Impact Challenge Winner',
      description: 'Winner of the Harvard HPAIR Impact Challenge\'25 for the VCONF.',
      icon: <Award size={28} className="text-yellow-500" />,
      color: 'from-yellow-100 to-orange-100',
    },
    {
      title: 'McKinsey Forward Program',
      description: 'Accepted into the prestigious McKinsey forward program to develop core consultancy skills.',
      icon: <Bookmark size={28} className="text-blue-500" />,
      color: 'from-blue-100 to-indigo-100',
    },
    {
      title: 'SheCodes Scholar',
      description: 'Selected as a SheCodes scholar through a rigorous process of application and screening.',
      icon: <Star size={28} className="text-pink-500" />,
      color: 'from-pink-100 to-purple-100',
    },
    {
      title: 'Stanford Code In Place Section Leader',
      description: 'Selected as a global representative to lead and mentor students in Stanford\'s global initiative.',
      icon: <Award size={28} className="text-green-500" />,
      color: 'from-green-100 to-emerald-100',
    },
    {
      title: 'Keynote Speaker at HPAIR',
      description: 'Chosen as a keynote speaker out of the top selected delegates for Harvard Project for Asian and International Relations.',
      icon: <Star size={28} className="text-purple-500" />,
      color: 'from-purple-100 to-indigo-100',
    },
    {
      title: 'Climate Champion at UNICEF',
      description: 'Selected as a Climate Champion and Specialist for the UNICEF Yuwaah community.',
      icon: <Award size={28} className="text-teal-500" />,
      color: 'from-teal-100 to-green-100',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="achievements" ref={ref} className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Achievements
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AchievementCard
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
                color={achievement.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;