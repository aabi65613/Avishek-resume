'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          variants={imageVariants}
          className="mb-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring' as const, stiffness: 300, damping: 10 }}
        >
          <div className="w-32 h-32 rounded-full mx-auto shadow-2xl ring-4 ring-indigo-500/50 overflow-hidden bg-gray-200">
            <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              AB
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Avishek</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
        >
          Full-Stack Developer | AI Enthusiast | Open Source Contributor
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-colors"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 font-semibold rounded-full hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex justify-center">
            <div className="w-6 h-10 border-2 border-indigo-600 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-indigo-600 rounded-full"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
