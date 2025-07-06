"use client";

import { useState } from "react";

export default function Projects() {
    const [activeCard, setActiveCard] = useState(0);

    const projectData = [
        {
            title: "Personal site",
            description: "You're on it, just a simple site showcasing my experience and projects.",
            cta: "Learn more."
        },
        {
            title: "HHA Pay",
            description: "Proprietary healthcare payroll web app for a local family business.",
            cta: "Learn more."
        },
        {
            title: "Truth or Drink (Unofficial)",
            description: "The viral Truth or Drink card game by Cut, now as an unofficial mobile port. Played with friends at few parties.",
            cta: "Learn more."
        },
        {
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
                        onMouseEnter={() => setActiveCard(index)}
                        className="border border-[#1F1F1F] rounded-lg font-[family-name:var(--font-geist-mono)]"
                    >
                        <div
                            className={`h-96 relative transition-all duration-300 ease-in-out overflow-hidden ${activeCard === index ? 'w-100' : 'w-14 opacity-50'}`}
                        >
                            <div className="w-max absolute top-4 left-[38px] origin-top-left rotate-90 text-sm">
                                {project.title}
                            </div>
                            <div
                                className={`absolute bottom-4 w-96 left-4 text-xs font-light transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                    }`}
                            >
                                <div>{project.description}</div>
                                <div className="mt-2 font-semibold">
                                    {project.cta}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}