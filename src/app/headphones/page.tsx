import FrameSequenceCanvas from "@/components/FrameSequenceCanvas";
import PurchaseSection from "@/components/PurchaseSection";
import ColorMatcher from "@/components/ColorMatcher";
import CinematicSection from "@/components/CinematicSection";

export default function HeadphonesPage() {
    return (
        <div className="relative w-full min-h-screen">
            <ColorMatcher imagePath="/images/headphones/1.jpg" />
            
            {/* HERO SECTION - 300 Frames */}
            <FrameSequenceCanvas 
                totalFrames={300} 
                imagePathPrefix="/images/headphones/" 
                heroLine="Hear Beyond Limits"
                modelName="Obsidian X1"
            />

            <div className="w-full flex flex-col">
                <CinematicSection 
                    title="Acoustic Foundation" 
                    description="Our flagship headphones are constructed from high-tensile titanium and Italian leather, creating a resonant chamber that delivers unprecedented clarity across the entire sonic spectrum."
                    imageSrc="/images/headphones/5.jpg"
                />
                <CinematicSection 
                    title="Adaptive Isolation" 
                    description="Advanced noise cancellation algorithms analyze your environment 100,000 times per second, creating a private acoustic sanctuary in any condition."
                    imageSrc="/images/headphones/150.jpg"
                    reverse
                />
                <CinematicSection 
                    title="Engineered Comfort" 
                    description="The precision-calibrated headband and memory foam cushions distribute weight with architectural exactness, allowing for a weightless listening experience that transcends time."
                    imageSrc="/images/headphones/295.jpg"
                />
            </div>

            <PurchaseSection />
        </div>
    );
}
