"use client";

import { useEffect } from "react";

export default function ColorMatcher({ imagePath }: { imagePath: string }) {
    useEffect(() => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imagePath;
        
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1;
            canvas.height = 1;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            
            // Draw top left pixel
            ctx.drawImage(img, 0, 0, 1, 1, 0, 0, 1, 1);
            const pixel = ctx.getImageData(0, 0, 1, 1).data;
const r = pixel[0];
const g = pixel[1];
const b = pixel[2];
            
            const toHex = (n: number) => n.toString(16).padStart(2, '0');
            const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
            
            document.documentElement.style.setProperty('--background', hexColor);
            document.body.style.backgroundColor = hexColor;
        };
    }, [imagePath]);

    return null;
}
