import { ReactNode, useEffect, useState } from 'react';
import { Head } from '@inertiajs/react';

import SiteLayout from '@/layouts/SiteLayout';
import Header from '../components/home/Header';
import Monitor from '../components/home/Monitor';
import WorkExperience from '../components/home/WorkExperience';
import Projects from '@/components/home/Projects';
import TypeWriter from '@/components/home/TypeWriter';

export default function Home() {
    const [typingDone, setTypingDone] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);

    const visibilityDelay = 500;

    useEffect(() => {
        if (typingDone) {
            const timeout = setTimeout(() => setContentVisible(true), visibilityDelay);
            return () => clearTimeout(timeout);
        }
    }, [typingDone]);

    return (
        <>
            <div className={`${contentVisible ? "opacity-0" : "opacity-100 h-svh"} transition-all duration-400 -z-10 fixed inset-0 bg-dark`}></div>
            <div className={`${typingDone ? "mt-0" : "mt-[40vh]"} w-sm px-6 lg:w-190 xl:w-259 text-xs lg:text-sm transition-all duration-400 ease-in-out z-10`}>
                <TypeWriter onTypingDone={() => setTypingDone(true)} />
            </div>
            {
                contentVisible &&
                <Head title="Home" />
            }
            <div className={`pt-4 overflow-hidden flex flex-col gap-32 lg:gap-16 transition-all duration-500`}>
                <div className="flex flex-col justify-center min-w-max xl:flex-row xl:justify-between gap-32 lg:gap-16 items-start w-sm xl:w-260">
                    <div className={`transition-opacity duration-500 delay-0 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
                        <Header />
                    </div>
                    <div className={`transition-opacity duration-500 delay-200 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
                        <Monitor />
                    </div>
                </div>
                <div className={`self-center transition-opacity duration-500 delay-400 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
                    <WorkExperience />
                </div>
                <div className={`self-center opacity-0 transition-opacity duration-500 delay-600 ${contentVisible ? "opacity-100" : ""}`}>
                    <Projects />
                </div>
            </div>
        </>
    );
}

Home.layout = (page: ReactNode) => <SiteLayout>{page}</SiteLayout>
