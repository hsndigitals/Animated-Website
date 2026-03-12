"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    return (
        <footer className="w-full bg-black text-white relative z-10 font-sans border-t border-white/5">
            {/* Main Footer Grid */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 md:py-28">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
                    
                    {/* Brand Description */}
                    <div className="md:col-span-4 space-y-6">
                        <h3 className="text-sm tracking-[0.4em] font-light uppercase">Aeon Labs</h3>
                        <p className="text-white/30 text-xs leading-relaxed font-light max-w-xs">
                            Premium headphones and wireless earbuds engineered for immersive sound and modern lifestyles. Every product is precision-crafted to deliver an uncompromising audio experience.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-2 space-y-6">
                        <h5 className="text-[9px] tracking-[0.4em] text-white/25 uppercase font-medium">Navigate</h5>
                        <nav className="flex flex-col gap-3">
                            <Link href="/" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Home</Link>
                            <Link href="/headphones" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Headphones</Link>
                            <Link href="/airpods" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Earbuds</Link>
                            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Technology</Link>
                            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">About</Link>
                            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Contact</Link>
                        </nav>
                    </div>

                    {/* Support */}
                    <div className="md:col-span-2 space-y-6">
                        <h5 className="text-[9px] tracking-[0.4em] text-white/25 uppercase font-medium">Support</h5>
                        <nav className="flex flex-col gap-3">
                            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Help Center</Link>
                            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Shipping & Delivery</Link>
                            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Returns & Warranty</Link>
                            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">FAQs</Link>
                            <Link href="#" className="text-xs text-white/40 hover:text-white transition-colors duration-300 font-light tracking-wide">Privacy Policy</Link>
                        </nav>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-4 space-y-6">
                        <h5 className="text-[9px] tracking-[0.4em] text-white/25 uppercase font-medium">Join the Sound Club</h5>
                        <p className="text-white/25 text-xs font-light leading-relaxed">
                            Get exclusive updates on new releases, limited editions, and member-only offers.
                        </p>
                        <div className="flex gap-0">
                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="flex-1 bg-transparent border border-white/10 border-r-0 px-5 py-3.5 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors rounded-l-full font-light tracking-wide"
                            />
                            <button className="px-8 py-3.5 bg-white text-black text-[10px] tracking-[0.2em] uppercase font-medium rounded-r-full hover:bg-white/90 transition-colors duration-300 flex-shrink-0">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[9px] tracking-[0.3em] font-light uppercase text-white/20">
                        &copy; {new Date().getFullYear()} Aeon Labs. All rights reserved.
                    </span>
                    <div className="flex items-center gap-8 text-[9px] tracking-[0.2em] font-light uppercase">
                        <Link href="#" className="text-white/20 hover:text-white/50 transition-colors duration-300">Terms</Link>
                        <Link href="#" className="text-white/20 hover:text-white/50 transition-colors duration-300">Privacy</Link>
                        <Link href="#" className="text-white/20 hover:text-white/50 transition-colors duration-300">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
