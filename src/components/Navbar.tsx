"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const isHeadphones = pathname === "/headphones";

    return (
        <>
            <motion.nav 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-8 mix-blend-difference text-white pointer-events-none"
            >
                <div className="flex items-center pointer-events-auto">
                    <Link href="/" className="text-sm tracking-[0.4em] font-light uppercase">
                        Aeon Labs
                    </Link>
                </div>

                <div className="flex items-center gap-6 opacity-80 pointer-events-auto">
                    <button className="text-[10px] uppercase tracking-[0.3em] border border-white/10 px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-light backdrop-blur-md">
                        Explore
                    </button>
                </div>
            </motion.nav>

            {/* Premium Side Navigation */}
            <div className="fixed right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50">
                <Link 
                    href="/headphones"
                    className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/20 bg-white/10 transition-all duration-500 backdrop-blur-sm"
                    aria-label="Headphones"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                </Link>
            </div>
        </>
    );
}
