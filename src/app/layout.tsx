import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Aeon Labs | Precision Sound Engineering",
    description: "Experience the pinnacle of audio technology with Aeon Labs luxury wireless headphones and earbuds.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} antialiased`}>
                <SmoothScroll>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
