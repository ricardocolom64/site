import { Link } from "@tanstack/react-router";
import { PropsWithChildren, useEffect, useState } from "react";

import grid from '@/assets/cylindrical-grid.svg';
import TypeWriter from "@/components/home/TypeWriter";

interface WindowProps {
    hideHeader?: boolean;
}

export default function SiteLayout({ children, hideHeader = false }: PropsWithChildren<WindowProps>) {
    const [contentVisible, setContentVisible] = useState(false);

    const visibilityDelay = 50;

    useEffect(() => {
        const timeout = setTimeout(() => setContentVisible(true), visibilityDelay);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="flex flex-col items-center justify-start min-h-svh px-6 pt-20 pb-3 sm:pb-20">
            <div
                className={`fixed inset-0 bg-dark z-50 transition-opacity duration-500 ${contentVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
            />

            <div
                className="
                fixed inset-0 z-0 pointer-events-none
                flex
                justify-center
            "
            >
                <img
                    src={grid}
                    alt=""
                    className="
                    w-svw
                    mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]
                    mask-no-repeat
                    mask-center
                    object-cover"
                />
            </div>

            <main className="flex flex-col gap-4 lg:gap-16 items-center sm:items-start z-10 flex-1">
                {
                    !hideHeader && <Link
                        className="w-min h-min flex justify-center sm:justify-start -mt-10 text-xs lg:text-sm transition-all duration-400 ease-in-out z-10"
                        to="/"
                    >
                        <TypeWriter isStatic />
                    </Link>
                }
                {children}
            </main>
        </div>
    );
}
