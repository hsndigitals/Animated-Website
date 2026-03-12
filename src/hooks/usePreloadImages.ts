import { useState, useEffect } from "react";

export const usePreloadImages = (imageUrls: string[]) => {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loaded = 0;
        const total = imageUrls.length;
        const loadedImages: HTMLImageElement[] = [];

        imageUrls.forEach((url, index) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loaded++;
                setLoadedCount(loaded);
                loadedImages[index] = img;
                if (loaded === total) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image: ${url}`);
                loaded++; // Still increment to avoid getting stuck
                if (loaded === total) setIsLoaded(true);
            };
        });
    }, [imageUrls]);

    const progress = imageUrls.length > 0 ? (loadedCount / imageUrls.length) * 100 : 0;

    return { images, isLoaded, progress };
};
