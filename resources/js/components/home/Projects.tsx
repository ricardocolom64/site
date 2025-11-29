import { useState } from "react";

export default function Projects() {
    const [activeCard, setActiveCard] = useState(0);

    const WebApp = () => {
        return (
            <div className="absolute w-72 h-48 rounded-lg border-2 border-neo-grey-secondary">
                <div className="flex flex-col justify-start w-full h-full rounded-lg">
                    <div className="h-6 bg-neo-grey rounded-t-lg border-b-1 border-neo-grey-secondary"></div>
                    <div className="flex-1 bg-background rounded-b-lg"></div>
                </div>
            </div>
        )
    }

    const MobileApp = () => {
        return (
            <div className="absolute w-24 h-48 rounded-lg border-1 border-neo-grey-secondary">
                <div className="flex flex-col justify-start w-full h-full rounded-lg">
                    <div className="absolute self-center top-2 w-8 h-2 bg-neo-grey-secondary rounded-md"></div>
                    <div className="flex-1 bg-background rounded-t-lg"></div>
                    <div className="h-6 bg-background rounded-b-lg border-neo-grey-secondary"></div>
                </div>
            </div>
        )
    }

    const projectData = [
        {
            type: "web",
            title: "Personal site",
            description: "You're on it, just a simple site showcasing my experience and projects.",
            cta: "Learn more."
        },
        {
            type: "web",
            title: "HHA Pay",
            description: "Proprietary healthcare payroll web app for a local family business.",
            cta: "Learn more."
        },
        {
            type: "mobile",
            title: "Truth or Drink (Unofficial)",
            description: "The viral Truth or Drink card game by Cut, now as an unofficial mobile port. Played with friends at few parties.",
            cta: "Learn more."
        },
        {
            type: "web",
            title: "Aliens Took My Friend",
            description: "Your fellow astronaut friend has been kidnapped and taken onboard an alien spaceship. Developed in less than 36 hours for KnightHacks 2021.",
            cta: "Learn more."
        }
    ];

    return (
        <div className="w-sm px-4 lg:w-3xl self-center">
            <div className="bg-dark/50 h-6 border-2 border-neo border-b-0 rounded-t-lg flex w-[100%] justify-end items-center relative">
                <div className="absolute left-4 bottom-1 bg-background text-shadow-sm text-shadow-neo/50 shadow-[0px_0px_20px_0px_#0A0A0A] w-max h-max text-2xl font-bold px-1">
                    Projects
                </div>
                <div className="flex flex-row gap-1.5 pr-1.5">
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                </div>
            </div>
            <div className="bg-dark/50 relative">
                <div className="border-2 border-neo rounded-b-lg px-8 py-6 flex flex-col justify-center items-center relative">
                    <div className="flex gap-2 w-full">
                        {projectData.map((project, index) => (
                            <a
                                key={index}
                                onMouseEnter={() => {
                                    setActiveCard(index);
                                }}
                                className={`group hover:cursor-pointer font-code transition-all duration-500 ease-in-out ${activeCard === index ? 'w-full backdrop-brightness-75' : 'w-20'}`}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div
                                    className={`h-96 relative transition-all overflow-hidden`}
                                >
                                    <div className={`w-full h-full absolute rounded-lg transition-all duration-200 ${activeCard === index ? 'border-neo' : 'border-neutral-500'}`}></div>
                                    <div className={`w-full h-full absolute z-30 border-2 rounded-lg transition-all duration-200 ${activeCard === index ? 'border-neutral-500 group-hover:border-neo shadow-[inset_0_0_10px_10px_#73737325] group-hover:shadow-[inset_0_0_10px_10px_#00FF9E25]' : 'border-neo-grey-secondary'}`}></div>
                                    <div className="w-max absolute top-4 left-[38px] origin-top-left rotate-90 text-sm text-shadow-sm text-shadow-neutral-100/25 z-20">
                                        {project.title}
                                    </div>
                                    <div className={`w-full h-full relative z-10 transition-all duration-200 ease-in-out ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}>
                                        <div className={`w-full h-full flex absolute bottom-9`}>
                                            <div
                                                className={`w-full flex-1 flex items-center justify-center transition-all duration-300`}
                                            >
                                                {
                                                    project.type === "web" && (<WebApp />)
                                                }
                                                {
                                                    project.type === "mobile" && (<MobileApp />)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`group absolute z-40 bottom-2 left-2 min-w-96 w-full p-3 pt-1 text-xs font-light transition-all duration-200 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <div className="w-96">
                                            {project.description}
                                        </div>
                                        <div
                                            className={`mt-2 font-semibold group-hover:underline group-hover:text-neo group-hover:cursor-pointer transition-all duration-200`}
                                        >
                                            {project.cta}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}
