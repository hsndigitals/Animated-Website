"use client";

import { useEffect, useRef, useState } from "react";

interface FrameSequenceCanvasProps {
    totalFrames: number;
    imagePathPrefix: string;
    heroLine?: string;
    modelName?: string;
    onLoadComplete?: () => void;
}

export default function FrameSequenceCanvas({
    totalFrames,
    imagePathPrefix,
    heroLine,
    modelName,
    onLoadComplete,
}: FrameSequenceCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);

    // Preload images
    useEffect(() => {
        let isCancelled = false;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            img.src = `${imagePathPrefix}${i}.jpg`;
            img.onload = () => {
                if (isCancelled) return;
                loadedCount++;
                setLoaded(loadedCount);
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    if (onLoadComplete) onLoadComplete();
                }
            };
            loadedImages.push(img);
        }

        return () => {
            isCancelled = true;
        };
    }, [totalFrames, imagePathPrefix, onLoadComplete]);

    // Handle scroll and render
    useEffect(() => {
        if (images.length !== totalFrames || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const renderFrame = (frameIndex: number) => {
            const img = images[frameIndex];
            if (!img) return;

            const container = containerRef.current;
            if (!container) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // COVER mode: fill entire canvas, crop overflow
            const imgRatio = img.width / img.height;
            const canvasRatio = canvas.width / canvas.height;
            let drawWidth: number;
            let drawHeight: number;
            let offsetX: number;
            let offsetY: number;

            if (imgRatio > canvasRatio) {
                drawHeight = canvas.height;
                drawWidth = img.width * (canvas.height / img.height);
            } else {
                drawWidth = canvas.width;
                drawHeight = img.height * (canvas.width / img.width);
            }

            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = (canvas.height - drawHeight) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        const handleScroll = () => {
            if (!containerRef.current) return;
            const container = containerRef.current;
            const scrollTop = window.scrollY - container.offsetTop;
            const maxScroll = container.scrollHeight - window.innerHeight;
            
            let progress = scrollTop / maxScroll;
            progress = Math.max(0, Math.min(1, progress));

            const frameIndex = Math.floor(progress * (totalFrames - 1));
            setCurrentFrame(frameIndex);
            
            animationFrameId = requestAnimationFrame(() => {
                renderFrame(frameIndex);
            });
        };

        renderFrame(0);

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [images, totalFrames]);

    // Model name only visible during last ~40 frames (reassembly)
    const reassemblyStart = Math.floor(totalFrames * 0.85);
    const showModelName = modelName && currentFrame >= reassemblyStart;
    const modelOpacity = showModelName 
        ? Math.min(1, (currentFrame - reassemblyStart) / 15) 
        : 0;

    return (
        <div ref={containerRef} className="relative w-full h-[500vh]">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                />

                {/* Hero One-Liner — Left Center */}
                {heroLine && (
                    <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 z-10 pointer-events-none max-w-[280px] md:max-w-[320px]">
                        <div className="w-8 h-[2px] bg-white/30 mb-6" />
                        <h1 className="text-white text-2xl md:text-4xl font-display font-semibold tracking-[0.15em] uppercase leading-[1.2]">
                            {heroLine}
                        </h1>
                        <div className="w-8 h-[2px] bg-white/30 mt-6" />
                    </div>
                )}

                {/* Model Name — Inside headband gap, only during reassembly */}
                {modelName && (
                    <div 
                        className="absolute left-0 right-0 top-[28%] flex flex-col items-center z-10 pointer-events-none transition-opacity duration-700"
                        style={{ opacity: modelOpacity }}
                    >
                        <span className="text-sm md:text-base tracking-[0.15em] text-white/50 uppercase font-bold mb-2">
                            Aeon Labs
                        </span>
                        <span className="text-4xl md:text-6xl tracking-[0.1em] text-white/40 uppercase font-bold font-display">
                            {modelName}
                        </span>
                    </div>
                )}
            </div>
            
            {/* Loading Overlay */}
            {loaded < totalFrames && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
                    <h1 className="text-xl tracking-[0.5em] font-light uppercase mb-8">Aeon Labs</h1>
                    <div className="w-64 h-px bg-white/20 relative">
                        <div 
                            className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
                            style={{ width: `${(loaded / totalFrames) * 100}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
