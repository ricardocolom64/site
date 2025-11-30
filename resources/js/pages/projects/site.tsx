import SiteLayout from '@/layouts/SiteLayout';
import { Head } from '@inertiajs/react';

export default function Site() {

    return (
        <>
            <Head title="Site" />
            <div className="w-sm px-4 lg:w-7xl self-center h-full">
                <div className="bg-dark/50 h-6 border-2 border-neo border-b-0 rounded-t-lg  flex w-[100%] justify-end items-center relative">
                    <div className="absolute left-4 bottom-1 bg-background text-shadow-sm text-shadow-neo/50 shadow-[0px_0px_20px_0px_#0A0A0A] w-max h-max text-2xl font-bold px-1">
                        Site
                    </div>
                    <div className="flex flex-row gap-1.5 pr-1.5">
                        <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                        <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                        <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    </div>
                </div>
                <div className="bg-dark/50 p-6 lg:p-8 min-h-180 border-2 border-neo rounded-b-lg relative text-sm lg:text-base">
                </div>
            </div>
        </>
    );
}

Site.layout = (page) => <SiteLayout>{page}</SiteLayout>
