'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Server, Figma, Terminal } from 'lucide-react'

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const skills = [
    {
      icon: Code,
      title: 'Programming',
      description: 'HTML, CSS, JavaScript, Python (Flask)',
      color: 'text-indigo-500',
    },
    {
      icon: Server,
      title: 'Cloud',
      description: 'AWS (Learning phase)',
      color: 'text-green-500',
    },
    {
      icon: Figma,
      title: 'Tools',
      description: 'VS Code, GitHub, Figma, Canva',
      color: 'text-red-500',
    },
    {
      icon: Terminal,
      title: 'OS',
      description: 'Windows, Linux (basic)',
      color: 'text-yellow-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center hover:border-indigo-500 transition-colors duration-300 cursor-pointer group"
              >
                <motion.div
                  className={`w-12 h-12 mx-auto mb-4 ${skill.color}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring' as const, stiffness: 200 }}
                >
                  <Icon className="w-full h-full" />
                </motion.div>
                <h3 className="font-semibold text-xl mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
