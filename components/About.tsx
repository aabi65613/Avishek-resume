'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  }

  const aboutText = [
    'My career objective is to build a strong career in AI, cloud computing, and web development, using my mechanical engineering background and technical skills to create innovative and efficient systems.',
    'I possess technical skills in Programming (HTML, CSS, JavaScript, Python with Flask), Cloud (AWS - currently learning), and Tools (VS Code, GitHub, Figma, Canva). I am also an active content creator and have participated in the AI Genesis Hackathon.',
    'I am dedicated to leveraging technology to solve complex problems and deliver high-quality, user-centric solutions. Let\'s connect and build something amazing together.',
  ]

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto space-y-6"
        >
          {aboutText.map((text, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
