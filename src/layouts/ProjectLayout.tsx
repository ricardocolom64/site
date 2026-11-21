import { PropsWithChildren } from 'react';

import Window from '@/components/common/Window';
import type { ProjectInfo } from '@/router';

export default function ProjectLayout({ children, name, year }: PropsWithChildren<ProjectInfo>) {
    return (
        <div className="transition-all duration-200 w-full max-w-253 sm:w-[calc(100vw-48px)] h-full flex flex-col flex-1">
            <Window name={name}>
                <div className="text-center text-xs lg:text-sm font-code relative">
                    <div className="absolute -top-4 right-2 w-24px h-24px rounded-xs text-sm">{year}</div>
                    {children}
                </div>
            </Window>
        </div>
    );
}
