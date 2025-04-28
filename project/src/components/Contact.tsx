import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github as GitHub, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/avika-joshi-162782307',
      color: 'bg-[#0077B5] hover:bg-[#0077B5]/80',
    },
    {
      name: 'GitHub',
      icon: <GitHub size={24} />,
      url: 'https://github.com/Avika2211',
      color: 'bg-[#333] hover:bg-[#333]/80',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={24} />,
      url: '#',
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/80',
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:contact@avikajoshi.com',
      color: 'bg-primary-500 hover:bg-primary-600',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              Let's Connect!
            </motion.h3>
            <motion.p className="text-gray-600 mb-8" variants={itemVariants}>
              Whether you have a question, want to collaborate on a project, or just
              want to say hello, I'd love to hear from you! Fill out the form or
              connect with me through social media.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-white ${link.color} transition-all duration-300 transform hover:scale-105`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="perspective-container"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="preserve-3d bg-gradient-to-br from-primary-100 to-secondary-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border-2 border-primary-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-200"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full btn btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;