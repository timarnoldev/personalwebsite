"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
}: ScrollRevealProps) {
  const initial = {
    opacity: 0,
    ...(direction === "up" && { y: distance }),
    ...(direction === "down" && { y: -distance }),
    ...(direction === "left" && { x: distance }),
    ...(direction === "right" && { x: -distance }),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
