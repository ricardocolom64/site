import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import Header from '@/components/home/Header';
import Monitor from '@/components/home/Monitor';
import Projects from '@/components/home/Projects';
import TypeWriter from '@/components/home/TypeWriter';
import WorkExperience from '@/components/home/WorkExperience';
import { pageTitle } from '@/lib/site';

const TITLE = pageTitle('Home');

// Module state survives client-side navigation but resets on a full reload,
// so the intro plays once per page load.
let introPlayed = false;

export const Route = createFileRoute('/')({
    // The home page draws its own animated TypeWriter header.
    staticData: { hideHeader: true },
    head: () => ({ meta: [{ title: TITLE }] }),
    component: Home,
});

function Home() {
    // Always false when prerendering and hydrating, so server and client HTML match.
    const [skipIntro] = useState(() => introPlayed);
    const [typingDone, setTypingDone] = useState(skipIntro);
    const [contentVisible, setContentVisible] = useState(skipIntro);

    const visibilityDelay = 500;

    useEffect(() => {
        introPlayed = true;
    }, []);

    useEffect(() => {
        if (typingDone) {
            const timeout = setTimeout(() => setContentVisible(true), visibilityDelay);
            return () => clearTimeout(timeout);
        }
    }, [typingDone]);

    // TypeWriter animates document.title while typing; restore the real title once it's done.
    useEffect(() => {
        if (contentVisible) {
            document.title = TITLE;
        }
    }, [contentVisible]);

    return (
        <>
            <div className={`${contentVisible ? "opacity-0" : "opacity-100 h-svh"} transition-all duration-400 -z-10 fixed inset-0 bg-dark`}></div>
            <Link
                className={`${typingDone ? "-mt-10" : "mt-[30vh] sm:mt-[40vh]"} flex justify-center sm:justify-start w-min text-xs lg:text-sm transition-all duration-400 ease-in-out z-10`}
                to="/"
            >
                <TypeWriter isStatic={skipIntro} onTypingDone={() => setTypingDone(true)} />
            </Link>
            {/* Collapsed during the intro so the hidden content doesn't make the page scrollable. */}
            <div className={`${contentVisible ? "" : "h-0"} sm:pt-4 overflow-hidden flex flex-col gap-16 transition-all duration-500`}>
                <div className="flex flex-col justify-center lg:flex-row lg:justify-between sm:gap-16 items-center lg:items-start">
                    <div className={`flex flex-col h-[calc(100svh-96px)] sm:h-auto transition-opacity duration-500 delay-0 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
                        <div className="h-full flex items-center">
                            <Header />
                        </div>
                        <div className="sm:hidden h-[20%] pb-12 flex flex-col justify-center">
                            <div className="text-6xl font-code text-center text-neo motion-safe:animate-bounce">
                                ↓
                            </div>
                        </div>
                    </div>
                    <div className={`pt-16 sm:pt-0 w-full items-center transition-opacity duration-500 delay-200 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
                        <Monitor />
                    </div>
                </div>
                <div className={`w-full max-w-230 self-center transition-opacity duration-500 delay-400 ${contentVisible ? "opacity-100" : "opacity-0"}`}>
                    <WorkExperience />
                </div>
                <div className={`w-full max-w-230 self-center transition-opacity duration-500 delay-600 ${contentVisible ? "opacity-100 flex" : "opacity-0 hidden"}`}>
                    <Projects />
                </div>
            </div>
        </>
    );
}
