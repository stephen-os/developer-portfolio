import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import { Inter } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    weight: ['400', '600', '700'],
    display: 'swap',
});

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <Background>
                    <Navbar />
                    <div className="relative z-10 pt-24 md:pt-32 pb-24 md:pb-32">
                        {children}
                    </div>
                </Background>
            </body>
        </html>
    );
};

export default Layout;
