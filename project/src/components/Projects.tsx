import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ui/ProjectCard';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'JalKotha: Flood Crisis Solution',
      description: 'Award-winning solution for flood-induced crisis in Assam. Developed as part of Harvard HPAIR Impact Challenge.',
      image: 'https://images.pexels.com/photos/1762973/pexels-photo-1762973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['AI', 'Climate Tech', 'Crisis Management'],
      link: '#',
    },
    {
      title: 'AI-Driven Market Analysis Tool',
      description: 'Developed during my role at Walford Capitals, this tool uses machine learning to analyze financial market trends.',
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'Machine Learning', 'Finance'],
      link: '#',
    },
    {
      title: 'Stanford Code In Place - Python Course',
      description: 'Designed interactive Python curriculum for global learners, focusing on accessibility and practical applications.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Education', 'Python', 'Curriculum Design'],
      link: '#',
    },
    {
      title: 'Climate Change Awareness Platform',
      description: 'Interactive platform developed for UNICEF YuWaah to raise awareness about climate change impacts and solutions.',
      image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Climate Advocacy', 'Web Development', 'Education'],
      link: '#',
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
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;