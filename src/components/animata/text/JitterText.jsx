import { motion } from "motion/react";

export default function JitterText({ text, duration = 0.6, className = "" }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        y: [1.5, 1, -1, 1.5, -1.5, 1, -0.5, 0],
        x: [0, -1, 1.5, -1.5, 1, -1, 0.5, 0],
        rotate: [0.5, -1.5, 1, -1.5, 1, -1, 1, 0],
      }}
      transition={{
        repeat: Infinity,
        repeatDelay: 0.5,
        repeatType: "reverse",
        ease: "easeInOut",
        duration: duration,
      }}
    >
      {text}
    </motion.span>
  );
}