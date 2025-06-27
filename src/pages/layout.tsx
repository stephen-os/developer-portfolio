import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Background from "@/components/background";

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <Background>
            <Navbar />
            <div className="relative z-10 pt-24 md:pt-32 pb-24 md:pb-32">
                {children}
            </div>
        </Background>
    );
};

export default Layout;
