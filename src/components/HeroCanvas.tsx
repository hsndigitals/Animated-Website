"use client";

import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

interface HeroCanvasProps {
    images: HTMLImageElement[];
    isLoaded: boolean;
}

const HeroCanvas: React.FC<HeroCanvasProps> = ({ images, isLoaded }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const frameIndex = useTransform(
        smoothProgress,
        [0, 1],
        [0, Math.max(0, images.length - 1)]
    );

    useEffect(() => {
        if (!isLoaded || images.length === 0 || !canvasRef.current) return;

        const context = canvasRef.current.getContext("2d");
        if (!context) return;

        let animationFrameId: number;

        const render = () => {
            const index = Math.round(frameIndex.get());
            const image = images[index];

            if (image && canvasRef.current) {
                const canvas = canvasRef.current;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    // Responsive sizing with luxury margin
                    const margin = 0.9; // 10% margin
                    const scale = Math.min(
                        (canvas.width * margin) / image.width,
                        (canvas.height * margin) / image.height
                    );
                    const x = (canvas.width / 2) - (image.width / 2) * scale;
                    const y = (canvas.height / 2) - (image.height / 2) * scale;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
                }
            }
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [images, isLoaded, frameIndex]);

    // Initial draw and resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && containerRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div ref={containerRef} className="h-[400vh] relative">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-black">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full pointer-events-none"
                />

                {/* Overlay Text - Repositioned to Right */}
                <div className="absolute inset-y-0 right-12 md:right-24 flex flex-col items-end justify-center z-10 text-right px-4 pointer-events-none max-w-2xl ml-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9] italic">
                            A NEW ERA<br />OF SOUND
                        </h1>
                        <p className="text-xs md:text-sm text-neutral-400 font-light tracking-[0.4em] uppercase">
                            Precision Engineering.<br />Pure Freedom.
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-30"
                >
                    <span className="text-[8px] tracking-widest uppercase font-medium">Scroll to Experience</span>
                    <div className="w-[1px] h-12 bg-white/50" />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroCanvas;
