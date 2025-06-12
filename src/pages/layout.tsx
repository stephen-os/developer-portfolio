import React, { ReactNode } from "react";
import { Press_Start_2P } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
// import Background from "@/components/background";

const pressStart = Press_Start_2P({
    weight: "400",
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
            <body>
                <main className="relative w-full min-h-screen bg-neutral-900 text-white overflow-hidden">
                    <Navbar />
                    <div className="relative z-10 pt-24 md:pt-32 pb-24 md:pb-32">
                        {children}
                    </div>
                </main>
            </body>
        </html >
    );
};

export default Layout;