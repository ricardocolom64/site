import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

import SiteLayout from '@/layouts/SiteLayout';
import Window from '@/components/common/Window';

export default function Site() {

    return (
        <>
            <Head title="Site" />
            <Window name="Site">
                <div className="w-7xl max-w-[calc(100vw-12px)] py-64 text-center text-xs lg:text-sm font-code">
                    Under construction, please try again later.
                </div>
            </Window>
        </>
    );
}

Site.layout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>
