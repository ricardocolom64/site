import { PropsWithChildren } from 'react';

interface WindowProps {
    name: string;
}

const LINE = 'absolute bg-neo';
const BORDER = 'absolute border-neo';

// 2.6px wide so the stripe measures ~2px across the slant.
const DIAGONAL = 'absolute h-[26px] w-[2.6px] bg-neo origin-bottom-left -skew-x-[39.3deg]';

export default function Window({ name, children }: PropsWithChildren<WindowProps>) {
    return (
        <div className="sm:min-w-93 h-full flex flex-col flex-1">
            <div className="relative w-full pt-[34px] px-2.5 pb-2.5">
                <div className="relative flex flex-col justify-center items-center w-full">
                    <div className="absolute inset-0 -z-5 bg-dark/50 mask-t-from-95%" />
                    {children}
                </div>
                <WindowFrame name={name} />
            </div>
        </div>
    );
}

// The frame is split into three columns (title tab, 50px step, rest) that meet
// along straight horizontal edges, so the joins don't show.
function WindowFrame({ name }: { name: string }) {
    return (
        <div className="pointer-events-none absolute inset-0 flex">
            <div className="relative min-w-0">
                <div className="-mt-2.5 pl-3 pr-1 truncate text-xl font-bold font-folk text-shadow-sm text-shadow-neo/25">{name}</div>
                <div className={`${BORDER} inset-x-0 top-6 bottom-0 border-2 border-r-0 rounded-l`} />
                <div className={`${BORDER} left-1.5 right-0 top-[30px] bottom-1.5 border-2 border-r-0 rounded-l-xs`} />
            </div>

            <div className="relative w-[50px] shrink-0">
                <div className={`${LINE} left-0 top-6 h-0.5 w-[25px]`} />
                <div className={`${DIAGONAL} top-0 left-[-1.1px]`} />
                <div className={`${DIAGONAL} top-0 left-[6.9px]`} />
                <div className={`${DIAGONAL} top-0 left-[14.9px]`} />
                <div className={`${DIAGONAL} top-0 left-[22.9px]`} />
                <div className={`${LINE} left-5 right-0 top-0 h-0.5`} />
                <div className={`${LINE} inset-x-0 bottom-0 h-0.5`} />
                <div className={`${LINE} left-0 top-[30px] h-0.5 w-[30px]`} />
                <div className={`${DIAGONAL} top-1.5 left-[26.9px]`} />
                <div className={`${LINE} left-12 right-0 top-1.5 h-0.5`} />
                <div className={`${LINE} inset-x-0 bottom-1.5 h-0.5`} />
            </div>

            <div className="relative flex-1 min-w-4">
                <div className={`${BORDER} inset-0 border-2 border-l-0 rounded-r`} />
                <div className={`${BORDER} left-0 top-1.5 right-1.5 bottom-1.5 border-2 border-l-0 rounded-r-xs`} />
            </div>
        </div>
    );
}
