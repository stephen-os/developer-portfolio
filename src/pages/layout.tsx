import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";

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