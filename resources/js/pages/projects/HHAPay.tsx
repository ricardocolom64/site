import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

import SiteLayout from '@/layouts/SiteLayout';
import Window from '@/components/common/Window';

export default function HHAPay() {

    return (
        <>
            <Head title="HHA Pay" />
            <Window name="HHA Pay">
                <div className="w-7xl max-w-[calc(100vw-12px)] py-64 text-center text-xs lg:text-sm font-code">
                    Under construction, please try again later.
                </div>
            </Window>
        </>
    );
}

HHAPay.layout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>
