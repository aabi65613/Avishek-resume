'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const projects = [
    {
      title: 'EviWare',
      description:
        'Personal website hosted on Vercel (Front-end completed, backend under development). This project serves as my digital portfolio.',
      tags: ['React', 'Vercel', 'Web Design'],
    },
    {
      title: 'Local E-Commerce System',
      description:
        'Custom-built website for local shop orders and deliveries, providing a streamlined e-commerce solution for small businesses.',
      tags: ['E-Commerce', 'Web Development', 'Business'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                rotateX: 5,
              }}
              style={{
                perspective: '1000px',
              }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring' as const, stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href="#"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Details
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
