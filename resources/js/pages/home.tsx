import WorkExperience from '../components/home/WorkExperience';
import Header from '../components/home/Header';
import Monitor from '../components/home/Monitor';
import Projects from '@/components/home/Projects';
import { useEffect, useState } from 'react';
import TypeWriter from '@/components/home/TypeWriter';

export default function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[64px] row-start-2 items-center sm:items-start">
                <TypeWriter debug={true} />
                <div className="flex flex-row gap-[64px]">
                    <div className={`opacity-0 transition-opacity duration-500 ${visible ? "opacity-100" : ""}`}>
                        <Header />

                    </div>
                    <div className={`opacity-0 transition-opacity duration-500 delay-200 ${visible ? "opacity-100" : ""}`}>
                        <Monitor />
                    </div>
                </div>

                <div className={`self-center opacity-0 transition-opacity duration-500 delay-400 ${visible ? "opacity-100" : ""}`}>
                    <WorkExperience />
                </div>
                {/* <div className={`self-center opacity-0 transition-opacity duration-500 delay-600 ${visible ? "opacity-100" : ""}`}>
                    <Projects />
                </div> */}
            </main>
        </div>
    );
}
