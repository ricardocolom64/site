import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

import SiteLayout from '@/layouts/SiteLayout';
import Window from '@/components/common/Window';

export default function Site() {

    return (
        <>
            <Head title="Site" />
            <Window name="Site">
                <div className="w-7xl">
                    some content here...
                </div>
            </Window>
        </>
    );
}

Site.layout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>
