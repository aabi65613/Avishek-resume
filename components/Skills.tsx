"use client";
import { motion } from "framer-motion";

const skills = [
  "HTML", "CSS", "JavaScript",
  "React & Next.js",
  "Tailwind CSS",
  "Python",
  "Git & GitHub",
  "Cloud Basics (AWS)",
  "Framer Motion",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      {/* neon glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/15 via-indigo-500/15 to-transparent blur-2xl -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Skills & Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 10px 35px rgba(140, 90, 255, 0.25), 0 8px 20px rgba(0,0,0,0.35)",
                borderColor: "rgba(168, 85, 247, 0.6)"
              }}
              transition={{ duration: 0.25 }}
              className="px-6 py-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 text-white font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={item}
          className="mt-10 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Constantly learning and improving to build smarter, faster & modern web experiences.
        </motion.p>
      </motion.div>
    </section>
  );
}
