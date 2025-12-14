import { PropsWithChildren } from "react";

interface WindowProps {
    name: string;
}

export default function Window({
    name,
    children,
}: PropsWithChildren<WindowProps>) {
    return (
        <div className="min-w-[372px] h-full flex flex-col flex-1">
            <div className="bg-dark/50 h-6 border-2 border-neo border-b-0 rounded-t-lg flex w-full justify-end items-center relative">
                <div className="absolute left-4 bottom-1 bg-background text-shadow-sm text-shadow-neo/50 shadow-[0px_0px_20px_0px_#0A0A0A] w-max h-max text-2xl font-bold px-1">
                    {name}
                </div>
                <div className="flex flex-row gap-1.5 pr-1.5">
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                </div>
            </div>
            <div className="bg-dark/50 border-2 border-neo rounded-b-lg relative flex flex-col justify-center items-center flex-1">
                {children}
            </div>
        </div>
    )
}
