"use client";

import React from 'react';
import Image from 'next/image';

interface CinematicSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    reverse?: boolean;
}

const CinematicSection: React.FC<CinematicSectionProps> = ({ title, description, imageSrc, reverse = false }) => {
    return (
        <section className="relative w-full bg-black py-16 md:py-20">
            <div className={`max-w-7xl mx-auto px-8 md:px-16 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-16`}>
                {/* Text */}
                <div className="flex-1 space-y-6">
                    <span className="text-[10px] tracking-[0.4em] text-white/25 uppercase font-light">Precision Engineering</span>
                    <h2 className="text-3xl md:text-5xl font-display font-light tracking-tight leading-[0.95] uppercase text-white">
                        {title}
                    </h2>
                    <div className="w-10 h-[1px] bg-white/10" />
                    <p className="text-white/35 text-xs md:text-sm font-light leading-relaxed max-w-md tracking-wide">
                        {description}
                    </p>
                </div>

                {/* Image */}
                <div className="flex-1 relative aspect-[4/3] w-full max-w-xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                        quality={95}
                    />
                </div>
            </div>
        </section>
    );
};

export default CinematicSection;
