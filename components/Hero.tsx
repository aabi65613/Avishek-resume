"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[90vh] w-full flex items-center overflow-hidden select-none">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-transparent blur-3xl opacity-50 -z-10" />

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-24 right-16 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-16 left-20 w-28 h-28 bg-indigo-400/20 rounded-full blur-2xl"
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
        className="px-6 lg:px-24 max-w-3xl"
      >
        <motion.h1
          variants={textVariant}
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Hi, I'm <span className="text-purple-400">Avishek</span>
        </motion.h1>

        <motion.p
          variants={textVariant}
          className="mt-4 text-lg md:text-xl text-gray-200/90"
        >
          Future AI & Web Engineer, Cloud Learner, and Creative Tech Explorer.
        </motion.p>

        <motion.p
          variants={textVariant}
          className="mt-2 text-base md:text-lg text-gray-300/80"
        >
          Crafting modern web experiences and smarter technology. Building my world with code.
        </motion.p>

        <motion.div variants={textVariant} className="mt-8 flex gap-4">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl text-white font-semibold shadow-xl shadow-purple-500/20"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-purple-500/50 px-6 py-3 rounded-xl text-white font-semibold backdrop-blur-sm"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
