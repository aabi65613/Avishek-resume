"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full py-10 mt-20 border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        {/* Left */}
        <p className="text-gray-300 text-sm md:text-base">
          © {new Date().getFullYear()} Avishek. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-5 text-gray-300">
          {[
            { name: "GitHub", link: "https://github.com/aabi65613" },
            { name: "LinkedIn", link: "#" },
            { name: "YouTube", link: "#" },
          ].map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              whileHover={{ scale: 1.12 }}
              className="hover:text-purple-400 transition font-medium"
            >
              {s.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
