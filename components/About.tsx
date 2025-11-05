"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      {/* glowing background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-indigo-500/20 to-transparent blur-2xl -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Image / Placeholder futuristic avatar */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.04 }}
          className="relative w-full h-72 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="text-6xl select-none"
          >
            🧠
          </motion.div>

          {/* glow ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/10 blur-2xl" />
        </motion.div>

        {/* Text */}
        <motion.div variants={container} className="space-y-5">
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-300 text-lg leading-relaxed"
          >
            I’m <span className="text-purple-400 font-semibold">Avishek</span>, a passionate learner exploring
            modern tech with focus on:
          </motion.p>

          <motion.ul
            variants={container}
            className="text-gray-300 space-y-2 text-base"
          >
            {[
              "Artificial Intelligence & Automation",
              "Modern Web Development",
              "Cloud & DevOps Fundamentals",
              "Creative Tech + Visual Aesthetics"
            ].map((line, i) => (
              <motion.li
                key={i}
                variants={item}
                className="flex gap-2 items-center"
              >
                <span className="text-purple-400">•</span> {line}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={item}
            className="text-gray-400 text-base"
          >
            Building, learning, and improving daily.  
            My mission is to create futuristic digital experiences.
          </motion.p>

          <motion.a
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block mt-4 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl text-white font-semibold shadow-xl shadow-purple-500/20"
          >
            Let’s Connect
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
