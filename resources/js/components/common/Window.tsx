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
                        <div className="w-max text-2xl font-bold -z-5 px-2 opacity-0">
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
                        <div className="absolute left-0 bottom-2 pl-3 py-1 text-shadow-sm text-shadow-neo/50 w-max h-max text-2xl font-bold text-right">
                            {name}
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row">
                    <img src={stack} />
                    <div
                        className="w-full"
                        style={{
                            backgroundImage: `url(${bar_h_small_t_2})`,
                            backgroundRepeat: 'repeat-x'
                        }}
                    />
                    <img src={corner_tr} />
                </div>
            </div>
            <div className="w-full flex flex-row">
                <div
                    className="w-2 min-h-4"
                    style={{
                        backgroundImage: `url(${bar_v_small_l})`,
                        backgroundRepeat: 'repeat-y'
                    }}
                />
                <div className="relative flex flex-col justify-center items-center flex-1 w-full">
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
