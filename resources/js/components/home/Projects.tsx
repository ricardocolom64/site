import { useState } from "react";

import Window from "../common/Window";

export default function Projects() {
    const [activeCard, setActiveCard] = useState(0);

    const WebApp = () => {
        return (
            <div className="w-72 h-48 rounded-lg border-2 rounded-t-lg border-neutral-500">
                <div className="flex flex-col justify-start w-full h-full">
                    <div className="h-6 bg-neo-grey rounded-t-lg border-b-2 border-neutral-500"></div>
                    <div className="flex-1 bg-background rounded-b-lg"></div>
                </div>
            </div>
        )
    }

    const MobileApp = () => {
        return (
            <div className="w-24 h-48 rounded-lg border-2 border-neutral-500">
                <div className="flex flex-col justify-start w-full h-full rounded-lg relative">
                    <div className="absolute self-center top-2 w-8 h-2 bg-neo-grey-secondary rounded-md"></div>
                    <div className="flex-1 bg-background rounded-t-lg"></div>
                    <div className="h-6 bg-neo-grey border-t-2 rounded-b-lg border-neutral-500"></div>
                </div>
            </div>
        )
    }

    const projectData = [
        {
            type: "web",
            title: "Personal Site",
            description: "You're on it. Deployed onto my VPS.",
            tools: ["Traefik", "Laravel", "PHP", "React", "TypeScript", "Tailwind CSS"],
            href: "/projects/site"
        },
        {
            type: "web",
            title: "HHA Pay",
            description: "Proprietary healthcare payroll web app for a local family business.",
            tools: ["Laravel", "PHP", "React", "TypeScript"],
            href: "#"
        },
        {
            type: "mobile",
            title: "Truth or Drink (Unofficial)",
            description: "The viral Truth or Drink card game by Cut, now as an unofficial mobile port. Played with friends at few parties.",
            tools: ["React Native", "JavaScript"],
            href: "#"
        },
        {
            type: "web",
            title: "Aliens Took My Friend",
            description: "Your fellow astronaut friend has been kidnapped and taken onboard an alien spaceship. Developed in less than 36 hours for KnightHacks 2021.",
            tools: ["Unity", "C#", "Blender"],
            href: "#"
        }
    ];

    return (
        <Window name="Projects">
            <div className="px-6 lg:w-4xl self-center py-6 flex gap-2 w-full">
                {projectData.map((project, index) => (
                    <a
                        key={index}
                        onMouseEnter={() => {
                            setActiveCard(index);
                        }}
                        className={`group hover:cursor-pointer font-code rounded-lg transition-all duration-500 ease-in-out ${activeCard === index ? 'w-full backdrop-brightness-75' : 'w-16'}`}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            className={`h-96 relative transition-all overflow-hidden`}
                        >
                            <div className={`w-full h-full absolute rounded-lg transition-all duration-200 ${activeCard === index ? 'border-neo' : 'border-neutral-500'}`}></div>
                            <div className={`w-full h-full absolute z-30 border-2 rounded-lg transition-all duration-200 ${activeCard === index ? 'border-neutral-500 group-hover:border-neo shadow-[inset_0_0_8px_8px_#73737325] group-hover:shadow-[inset_0_0_8px_8px_#00FF9E25]' : 'border-neo-grey-secondary'}`}></div>
                            <div className={`w-max absolute top-4 left-[36px] origin-top-left rotate-90 text-sm text-shadow-sm text-shadow-neutral-100/25 z-20 transition-all duration-200 ${activeCard === index ? 'opacity-0' : 'opacity-100'}`}>
                                {project.title}
                            </div>
                            <div className={`w-full h-full relative z-10 transition-all duration-200 ease-in-out ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}>
                                <div className={`w-full h-full flex absolute bottom-10.5`}>
                                    <div
                                        className={`w-full flex flex-col gap-4 items-center justify-center transition-all duration-300`}
                                    >
                                        <div className="min-w-96 text-center text-sm text-shadow-sm text-shadow-neutral-100/25">
                                            {project.title}
                                        </div>
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
                                className={`absolute z-40 bottom-0 pb-5 px-5 min-w-158 w-full text-xs font-light transition-all duration-200 ${activeCard === index ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="w-158 mb-4">
                                    {project.description}
                                </div>
                                <div className="mt-2 flex flex-row justify-between font-semibold w-158">
                                    <div
                                        className={`group-hover:underline group-hover:text-neo group-hover:cursor-pointer transition-all duration-200`}
                                    >
                                        Learn more.
                                    </div>
                                    <div className="flex flex-row gap-2 overflow-visible">
                                        {project.tools.map((tool, index) => (
                                            <>
                                                <div
                                                    key={`${index}.${tool}`}
                                                >
                                                    {tool}
                                                </div>
                                                {
                                                    index < project.tools.length - 1 &&
                                                    <div>
                                                        ·
                                                    </div>
                                                }
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))
                }
            </div >
        </Window >
    );
}
