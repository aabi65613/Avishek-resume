import "./globals.css";
import Particles from "@/components/Particles";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

export const metadata = {
  title: "Avishek Portfolio",
  description: "Futuristic AI & Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        {/* Background Particles */}
        <Particles />

        {/* Page Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={typeof window !== "undefined" ? window.location.pathname : ""}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-[2]"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
