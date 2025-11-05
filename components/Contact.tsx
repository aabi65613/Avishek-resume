"use client";
import { motion } from "framer-motion";
import { useState } from "react";

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

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* glow background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500/20 via-purple-600/20 to-transparent blur-2xl -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-xl mx-auto text-center"
      >
        <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-white mb-8">
          Contact Me
        </motion.h2>

        <motion.p variants={item} className="text-gray-300 mb-10 text-lg">
          I would love to connect! Let’s talk about tech, AI, creativity, or your next idea.
        </motion.p>

        <motion.form
          variants={container}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <motion.input
            variants={item}
            type="text"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:border-purple-400 outline-none"
          />

          <motion.input
            variants={item}
            type="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:border-purple-400 outline-none"
          />

          <motion.textarea
            variants={item}
            required
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:border-purple-400 outline-none"
          />

          <motion.button
            variants={item}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.93 }}
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg shadow-lg shadow-purple-500/20"
          >
            Send Message
          </motion.button>
        </motion.form>

        {sent && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 font-medium mt-5"
          >
            ✅ Message sent! I will get back soon.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
