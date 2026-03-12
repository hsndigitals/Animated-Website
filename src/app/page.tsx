"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push('/headphones');
    }, [router]);

    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <h1 className="text-white text-sm tracking-[0.5em] font-light uppercase animate-pulse">
                Transitioning to Experience...
            </h1>
        </div>
    );
}
