import React from "react";

export default function Background({ children }: { children?: React.ReactNode }) {
    return (
        <main className="relative w-full min-h-screen bg-stone-900 text-white overflow-hidden">
            <div className="relative z-10 flex items-center justify-center h-full">
                {children}
            </div>
        </main>
    );
}
