import { motion } from "motion/react";

export default function GrowingPlants() {
    return (
        <div className="absolute bottom-0 w-full flex justify-center gap-6">
            {["plant1", "plant2", "plant3"].map((plant, index) => (
                <motion.span
                    key={index}
                    className="text-5xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}  
                    transition={{ delay: index * 1, duration: 2 }}
                >
                    {plant}
                    </motion.span>
            ))}
            </div>
    );
}