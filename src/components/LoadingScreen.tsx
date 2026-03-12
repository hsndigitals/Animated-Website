"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
    progress: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
    const [shouldShow, setShouldShow] = useState(true);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => setShouldShow(false), 500);
        }
    }, [progress]);

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center select-none"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-display font-bold tracking-tighter mb-8"
                    >
                        AEON LABS
                    </motion.h1>

                    <div className="w-48 h-[1px] bg-neutral-900 overflow-hidden">
                        <motion.div
                            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        className="mt-4 text-[8px] tracking-[0.2em] font-medium uppercase"
                    >
                        Initializing High-Fidelity Experience...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
