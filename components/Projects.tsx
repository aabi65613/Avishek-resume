"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chat Automation",
    description:
      "Conversational bot system built using modern AI APIs and a sleek interface.",
    tech: ["Next.js", "Tailwind", "AI API"],
    link: "#"
  },
  {
    title: "Portfolio Website",
    description:
      "High-tech personal website with smooth scroll, motion effects and modern UI.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#"
  },
  {
    title: "E-Commerce System",
    description:
      "Local marketplace web app for small businesses with order system.",
    tech: ["HTML", "CSS", "JS", "Python"],
    link: "#"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-transparent blur-2xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={cardVariant}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-14"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{
                scale: 1.05,
                rotateX: 4,
                rotateY: 4,
                boxShadow:
                  "0 10px 40px rgba(140, 90, 255, 0.25), 0 8px 20px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-purple-400/50 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-[2px] text-xs rounded-md bg-purple-500/20 text-purple-300 border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="text-purple-300 font-medium hover:underline text-sm"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
