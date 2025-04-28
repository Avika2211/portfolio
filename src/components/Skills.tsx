import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, LineChart, Users, Globe, Rocket } from 'lucide-react';
import SkillCard from './ui/SkillCard';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Technical",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "AI & Machine Learning", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "Robotics", level: 75 },
        { name: "Data Science", level: 85 },
      ],
      color: "primary",
    },
    {
      title: "Leadership",
      icon: <Users size={24} />,
      skills: [
        { name: "Team Management", level: 95 },
        { name: "Public Speaking", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Strategic Planning", level: 80 },
        { name: "Mentoring", level: 90 },
      ],
      color: "secondary",
    },
    {
      title: "Research",
      icon: <Brain size={24} />,
      skills: [
        { name: "Market Research", level: 85 },
        { name: "Data Analysis", level: 90 },
        { name: "Scientific Research", level: 80 },
        { name: "Problem Solving", level: 95 },
        { name: "Critical Thinking", level: 90 },
      ],
      color: "accent",
    },
  ];

  const otherSkills = [
    {
      title: "Climate Advocacy",
      description: "Passionate about raising awareness for climate change",
      icon: <Globe className="text-accent-500" size={36} />,
    },
    {
      title: "Marketing",
      description: "Experience in event marketing and community outreach",
      icon: <LineChart className="text-primary-500" size={36} />,
    },
    {
      title: "Innovation",
      description: "Constantly seeking creative solutions to complex problems",
      icon: <Rocket className="text-secondary-500" size={36} />,
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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-primary-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <SkillCard
                title={category.title}
                icon={category.icon}
                skills={category.skills}
                color={category.color}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Other Areas of Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="card-3d p-6 flex flex-col items-center text-center"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;