"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PreFooterCTA() {
    return (
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-transparent relative z-10 py-48">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className="text-center flex flex-col items-center px-6"
            >
                <span className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-light mb-8">Final Availability</span>
                <h2 className="text-4xl md:text-6xl font-extralight tracking-[0.2em] text-white uppercase mb-16 font-display">
                    Secure Yours
                </h2>
                
                <Link href="#" className="group relative px-12 py-5 overflow-hidden">
                    <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-500 rounded-full" />
                    <span className="relative text-[10px] uppercase tracking-[0.4em] text-white/60 group-hover:text-white transition-colors duration-500 font-light">
                        Request Allocation
                    </span>
                </Link>
            </motion.div>
        </section>
    );
}
