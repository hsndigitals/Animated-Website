"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8 text-center z-20 pointer-events-none">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-4xl md:text-6xl font-light tracking-wide text-white mb-6 drop-shadow-2xl"
            >
                {title}
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.8, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-white/80 font-light text-sm md:text-base tracking-widest max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            >
                {description}
            </motion.p>
        </div>
    );
}
