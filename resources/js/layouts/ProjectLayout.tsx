import { Head } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";

import Window from '@/components/common/Window';
import SiteLayout from "./SiteLayout";

interface ProjectProps {
    name: string;
}

export default function ProjectLayout({ children, name }: PropsWithChildren<ProjectProps>) {

    return (
        <SiteLayout>
            <Head title={name} />
            <div className="w-7xl max-w-[calc(100vw-12px)] h-full flex flex-col flex-1 px-4">
                <Window name={name}>
                    <div className="text-center text-xs lg:text-sm font-code">
                        {children}
                    </div>
                </Window>
            </div>
        </SiteLayout>
    );
}

ProjectLayout.layout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>
