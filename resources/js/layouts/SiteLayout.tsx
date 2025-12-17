import { PropsWithChildren } from "react";

import grid from '@/assets/cylindrical-grid.svg';
import TypeWriter from "@/components/home/TypeWriter";

interface WindowProps {
    hideHeader?: boolean;
}

export default function SiteLayout({ children, hideHeader = false }: PropsWithChildren<WindowProps>) {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen px-6 pt-20 pb-3 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
            {/* <div className="z-0 fixed inset-0 bg-neo-grid"></div> */}
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
                    [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]
                    [mask-repeat:no-repeat]
                    [mask-position:center]
                    object-cover"
                />
            </div>

            <main className="flex flex-col gap-4 lg:gap-16 items-center sm:items-start z-10 flex-1">
                {
                    !hideHeader && <a
                        className={`w-min px-1.5 h-min flex justify-center sm:justify-start -mt-10 sm:mt-0 text-xs lg:text-sm transition-all duration-400 ease-in-out z-10`}
                        href="/"
                    >
                        <TypeWriter isStatic />
                    </a>
                }
                {children}
            </main>
        </div>
    );
}
