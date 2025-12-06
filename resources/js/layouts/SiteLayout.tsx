import { PropsWithChildren } from "react";

import grid from '@/assets/cylindrical-grid.svg';

export default function SiteLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 py-20 font-[family-name:var(--font-geist-sans)]">
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
                    w-[calc(80vw)]
                    [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]
                    [mask-repeat:no-repeat]
                    [mask-position:center]
                    object-cover"
                />
            </div>

            {/* <div className="z-0 fixed inset-0 bg-neo-grid flex xl:hidden"></div> */}


            <main className="flex flex-col gap-4 lg:gap-16 items-center sm:items-start z-10">
                {children}
            </main>
        </div>
    );
}
