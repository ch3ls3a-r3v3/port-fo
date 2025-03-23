import { motion } from "motion/react";
import { useState, useEffect } from "react"; 
import AnimatedBackground from "./AnimatedBackground";

interface WelcomeProps {
  onComplete: () => void;
}

export default function Welcome({ onComplete }: WelcomeProps) {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // After the seeds drop, show the animated background
    setTimeout(() => setShowBackground(true), 3000);
  }, []);


  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Seed Drop Animation */}
      {!showBackground && (
        <div className="absolute inset-0 flex justify-center items-center">
          {["🌱", "🌱", "🌱"].map((seed, index) => (
            <motion.span
              key={index}
              initial={{ y: -50, opacity: 1 }}
              animate={{ y: 200, opacity: 0 }}
              transition={{ delay: index * 0.5, duration: 1 }}
              className="text-4xl"
            >
              {seed}
            </motion.span>
            ))}
    </div>
  )}

  {/* Background Animation (Storm, Rain, Sunrise) */}
  {showBackground && (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      onAnimationComplete={onComplete}
    >
      <AnimatedBackground />
      </motion.div>
  )}
  </div>
  );
}
  