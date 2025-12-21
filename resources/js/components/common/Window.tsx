import { PropsWithChildren } from "react";

import bar_h_small_t_1 from '@/assets/window/bar-h-small-t-1.svg';
import bar_h_small_t_2 from '@/assets/window/bar-h-small-t-2.svg';
import bar_h_small_b from '@/assets/window/bar-h-small-b.svg';
import bar_v_small_l from '@/assets/window/bar-v-small-l.svg';
import bar_v_small_r from '@/assets/window/bar-v-small-r.svg';
import corner_tl from '@/assets/window/corner-tl.svg'
import corner_tr from '@/assets/window/corner-tr.svg'
import corner_br from '@/assets/window/corner-br.svg'
import corner_bl from '@/assets/window/corner-bl.svg'
import stack from '@/assets/window/stack.svg';

interface WindowProps {
    name: string;
}

export default function Window({
    name,
    children,
}: PropsWithChildren<WindowProps>) {
    return (
        <div className="min-w-93 h-full flex flex-col flex-1 ">
            <div className="flex w-full">
                <div className="w-max flex flex-row relative">
                    <div className="flex-1 flex flex-row">
                        {/* hacky trick just to get the proper width... */}
                        <div className="w-max text-xl font-bold font-folk -z-5 px-2 opacity-0 ">
                            {name}
                        </div>
                        <div className="absolute left-0 top-0 min-w-8 flex-1 flex flex-row w-full">
                            <img src={corner_tl} />
                            <div
                                className="w-full"
                                style={{
                                    backgroundImage: `url(${bar_h_small_t_1})`,
                                    backgroundRepeat: 'repeat-x'
                                }}
                            />
                        </div>
                        <div className="absolute left-0 bottom-2 pl-3 py-2 text-shadow-sm text-shadow-neo/50 w-max h-max text-xl font-bold font-folk text-right">
                            {name}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row relative">
                    <img src={stack} />
                    <div
                        className="w-full"
                        style={{
                            backgroundImage: `url(${bar_h_small_t_2})`,
                            backgroundRepeat: 'repeat-x'
                        }}
                    />
                    <img src={corner_tr} />
                    {/* <div className="group hover:cursor-pointer absolute left-11 top-3.25 min-w-32 w-[calc(100%-66px)] h-4.5">
                        <div className="opacity-25 group-hover:opacity-100 transition-all duration-200 bg-neutral-400 group-hover:bg-neo">
                            <div className="absolute h-full w-full bg-neo skew-x-[-37.5deg] rounded-xs" />
                        </div>
                        <div className="relative left-0.5 bottom-px w-full h-full self-center text-center font-code font-bold text-sm">
                            {"Resume.pdf"}
                        </div>
                    </div> */}
                    {/* <div className="absolute right-3 top-3 font-code text-xs p-1 px-12 bg-neo-grey/25 border-2 border-neutral-500 rounded-xs hover:border-neo transition-all duration-200 hover:underline hover:text-neo hover:cursor-pointer">
                        {"Resume.pdf"}
                    </div> */}
                </div>
            </div>
            <div className="w-full flex flex-row">
                <div
                    className="w-2 min-h-4 mr-0.5"
                    style={{
                        backgroundImage: `url(${bar_v_small_l})`,
                        backgroundRepeat: 'repeat-y'
                    }}
                />
                <div className="relative flex flex-col justify-center items-center flex-1 w-full">
                    <div className="absolute flex w-full h-full bg-dark/50 -z-5 mask-t-from-95%" />
                    {children}
                </div>
                <div
                    className="w-2.5 min-h-4"
                    style={{
                        backgroundImage: `url(${bar_v_small_r})`,
                        backgroundRepeat: 'repeat-y'
                    }}
                />
            </div>
            <div className="w-full flex flex-row">
                <img src={corner_bl} />
                <div
                    className="w-full h-2.5"
                    style={{
                        backgroundImage: `url(${bar_h_small_b})`,
                        backgroundRepeat: 'repeat-x'
                    }}
                />
                <img src={corner_br} />
            </div>
        </div>
    )
}
