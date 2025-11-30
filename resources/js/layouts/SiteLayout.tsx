import { PropsWithChildren } from "react";

export default function SiteLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 py-20 font-[family-name:var(--font-geist-sans)]">
            <div className="z-0 fixed inset-0 bg-neo-grid"></div>

            <main className="flex flex-col gap-4 lg:gap-16 items-center sm:items-start z-10">
                {children}
            </main>
        </div>
    );
}
