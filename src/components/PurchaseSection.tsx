"use client";

import { motion } from "framer-motion";

const headphonesData = {
    name: "Aeon Over-Ear",
    tagline: "Studio-Grade Wireless Headphones",
    price: "$549",
    colors: [
        { name: "Midnight Black", hex: "#1a1a1a" },
        { name: "Titanium Silver", hex: "#8a8a8a" },
        { name: "Champagne Gold", hex: "#c5a55a" },
    ],
    features: [
        { label: "Active Noise Cancellation", detail: "Hybrid ANC with transparency mode" },
        { label: "40-Hour Battery", detail: "Quick charge: 10 min = 5 hours" },
        { label: "Studio-Grade Sound", detail: "50mm custom titanium drivers" },
        { label: "Ultra-Comfort Cushions", detail: "Memory foam with Italian leather" },
        { label: "Seamless Connectivity", detail: "Bluetooth 5.3 multipoint" },
    ],
    cta: "Experience True Sound",
    battery: "40 hours",
};

export default function PurchaseSection() {
    const data = headphonesData;

    return (
        <section className="relative w-full bg-black py-24 md:py-32 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-8 md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row gap-16 md:gap-24"
                >
                    {/* Left: Product Info */}
                    <div className="flex-1 flex flex-col justify-center">
                        <span className="text-[10px] tracking-[0.5em] text-white/25 uppercase font-light mb-4">Limited Collection</span>
                        <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-white uppercase leading-tight mb-2">
                            {data.name}
                        </h2>
                        <p className="text-white/30 text-xs tracking-[0.2em] uppercase font-light mb-8">
                            {data.tagline}
                        </p>
                        
                        <div className="text-4xl md:text-5xl font-extralight text-white tracking-wide mb-10">
                            {data.price}
                        </div>

                        {/* Color Options */}
                        <div className="mb-10">
                            <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-light block mb-4">Available Finishes</span>
                            <div className="flex items-center gap-4">
                                {data.colors.map((color: { name: string; hex: string }, i: number) => (
                                    <button
                                        key={i}
                                        className="group flex flex-col items-center gap-2"
                                        title={color.name}
                                    >
                                        <div 
                                            className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <span className="text-[8px] tracking-[0.15em] text-white/20 group-hover:text-white/50 transition-colors uppercase">{color.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full md:w-auto px-16 py-5 bg-white text-black text-[11px] tracking-[0.3em] uppercase font-medium rounded-full hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mb-8">
                            {data.cta}
                        </button>

                        {/* Delivery Promise */}
                        <div className="flex flex-wrap gap-6 text-[9px] tracking-[0.2em] text-white/25 uppercase font-light">
                            <span>Free Worldwide Shipping</span>
                            <span className="text-white/10">·</span>
                            <span>7-Day Easy Returns</span>
                            <span className="text-white/10">·</span>
                            <span>1-Year Warranty</span>
                        </div>
                    </div>

                    {/* Right: Features */}
                    <div className="flex-1 flex flex-col justify-center">
                        <span className="text-[9px] tracking-[0.3em] text-white/30 uppercase font-light block mb-8">Key Specifications</span>
                        
                        <div className="space-y-0">
                            {data.features.map((feature: { label: string; detail: string }, i: number) => (
                                <div key={i} className="flex items-start justify-between py-5 border-b border-white/5 group">
                                    <div className="flex-1">
                                        <h4 className="text-sm font-light text-white/80 tracking-wide mb-1">{feature.label}</h4>
                                        <p className="text-[11px] text-white/25 font-light tracking-wide">{feature.detail}</p>
                                    </div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white/30 transition-colors mt-2 flex-shrink-0 ml-6" />
                                </div>
                            ))}
                        </div>

                        {/* Battery Highlight */}
                        <div className="mt-10 p-6 border border-white/5 rounded-2xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-[9px] tracking-[0.3em] text-white/25 uppercase font-light">Battery Life</span>
                                    <div className="text-3xl font-extralight text-white mt-1">{data.battery}</div>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/40">
                                        <rect x="6" y="7" width="12" height="10" rx="1" />
                                        <line x1="20" y1="10" x2="20" y2="14" />
                                        <line x1="10" y1="10" x2="10" y2="14" />
                                        <line x1="14" y1="10" x2="14" y2="14" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
