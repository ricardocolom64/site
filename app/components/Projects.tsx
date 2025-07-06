"use client";

import { useState } from "react";

export default function Projects() {
    const [activeCard, setActiveCard] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const WebApp = () => {
        return (
            <div className="absolute w-72 h-48 rounded-lg border-1 border-[#1F1F1F] drop-shadow-md drop-shadow-[#1F1F1F50]">
                <div className="flex flex-col justify-start w-full h-full rounded-lg">
                    <div className="h-6 bg-[#0f0f0f] rounded-t-lg border-b-1 border-[#1F1F1F]"></div>
                    <div className="flex-1 bg-[#0A0A0A] rounded-b-lg"></div>
                </div>
            </div>
        )
    }

    const MobileApp = () => {
        return (
            <div className="absolute w-24 h-48 rounded-lg border-1 border-[#1F1F1F] drop-shadow-md drop-shadow-[#1F1F1F50]">
                <div className="flex flex-col justify-start w-full h-full rounded-lg">
                    <div className="absolute self-center top-2 w-8 h-2 bg-[#0f0f0f] rounded-md"></div>
                    <div className="flex-1 bg-[#FFFFFF] rounded-t-lg"></div>
                    <div className="h-6 bg-[#0f0f0f] rounded-b-lg border-t-1 border-[#1F1F1F]"></div>
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
        <div className="w-2xl">
            <div className="text-4xl font-bold">
                Projects
            </div>
            {/* TODO: Have the cards take up the full width */}
            <div className="mt-8 flex gap-2 w-full">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => {
                            setActiveCard(index);
                            setIsHovering(true);
                        }}
                        onMouseLeave={() => setIsHovering(false)}
                        className={`border border-[#1F1F1F] rounded-lg font-[family-name:var(--font-geist-mono)] transition-all duration-500 ease-in-out ${activeCard === index ? 'w-full' : 'w-20 opacity-50'}`}
                    >
                        <div
                            className={`h-96 relative transition-all overflow-hidden`}
                        >
                            <div className="w-max absolute top-4 left-[38px] origin-top-left rotate-90 text-sm">
                                {project.title}
                            </div>
                            <div className={`w-full h-full relative`}>
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#77777725_1px,transparent_1px),linear-gradient(to_bottom,#77777725_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]"></div>
                                {/* <div className={`z-10 bg-yellow-500 absolute origin-center transition-all duration-300 ${activeCard === index && isHovering ? 'opacity-100' : 'opacity-0'}`}>
                                    HOVERING
                                </div> */}
                                <div className={`w-full h-full flex flex-col justify-end items-start transition-opacity duration-500 ${activeCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                    <div className={`w-full flex-1 flex items-center justify-center transition-all duration-300 ${activeCard === index && isHovering ? 'drop-shadow-md drop-shadow-[#1F1F1F]' : 'opacity-100'}`}>
                                        {
                                            project.type === "web" && (<WebApp />)
                                        }
                                        {
                                            project.type === "mobile" && (<MobileApp />)
                                        }
                                    </div>
                                    <div className="h-18">
                                        <div
                                            className={`absolute bottom-4 w-96 left-4 text-xs font-light`}
                                        >
                                            <div>{project.description}</div>
                                            <div className="mt-2 font-semibold">
                                                {project.cta}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}