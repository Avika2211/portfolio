import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import Card3D from './ui/Card3D';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const experiences = [
    {
      title: 'McKinsey & Company',
      role: 'Apprentice',
      period: 'Apr 2025 - Present',
      description: 'Accepted into the McKinsey forward program to develop core consultancy skills under expert mentorship',
      icon: <Briefcase className="text-primary-500" size={32} />,
    },
    {
      title: 'Stanford University: Code In Place',
      role: 'Section Leader',
      period: 'Apr 2025 - Present',
      description: 'Selected as a global representative to lead and mentor students in Stanford\'s global initiative, teaching introductory programming in Python.',
      icon: <GraduationCap className="text-secondary-500" size={32} />,
    },
    {
      title: 'Harvard Project for Asian and International Relations',
      role: 'Winner & Keynote Speaker',
      period: 'Feb 2025 - Present',
      description: 'Winner of the Harvard HPAIR Impact Challenge\'25 for the VCONF. Leader and tech handler of Team JalKotha.',
      icon: <Award className="text-accent-500" size={32} />,
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="section-heading"
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="perspective-container"
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card3D>
              <div className="p-8">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Avika Joshi"
                  className="w-full h-auto rounded-lg shadow-md mb-6"
                />
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://github.com/Avika2211" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/avika-joshi-162782307" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </Card3D>
          </motion.div>

          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Hello! I'm Avika Joshi
            </h3>
            <p className="text-gray-700 mb-6">
              A passionate leader and innovator with experience spanning from McKinsey to Stanford University. 
              I combine my expertise in AI, Python, and robotics with a strong 
              background in leadership and climate advocacy to drive impactful change.
            </p>
            
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  variants={variants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="mt-1">{experience.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {experience.title} - <span className="text-primary-500">{experience.role}</span>
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">{experience.period}</p>
                    <p className="text-gray-700">{experience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;