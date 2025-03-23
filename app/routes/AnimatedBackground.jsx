import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function AnimatedBackground() {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        // Transition throught different phases (storm, rain, sunrise)
        setTimeout(() => setPhase(1), 2000); // Storm
        setTimeout(() => setPhase(2), 5000); // Rainfall
        setTimeout(() => setPhase(3), 8000); // Sunrise
    }, []);

    return (
        <div className="absolute inset-0">
        {/* Storm Lightning Effect */}
            {phase === 1 && (
                <motion.div
                    className="absolute inset-0 bg-white opacity-0"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.2, repeat: 3 }}
                    />
            )}
        {/* Rainfall Effect */}
            {phase === 2 && (
                <motion.div
                    className="absolute inset-0 bg-grey-900 opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                   </motion.div>
            )}
        {/* Sunrise Effect */}
            {phase === 3 && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-blue-600 to-yellow-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3 }}
                        />
                )}
                {/* Plant Groth Animation */}
                {phase === 3 && <GrowingPlants />}
                </div>
            );
        }