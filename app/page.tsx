"use client";
import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LenisScroll from "@/components/LenisScroll";

export default function Page() {
  return (
    <>
      {/* Smooth scroll wrapper */}
      <LenisScroll />

      {/* Navbar */}
      <Navbar />

      {/* Page fade-in animation */}
      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-black min-h-screen w-full overflow-hidden"
      >
        {/* Sections */}
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
