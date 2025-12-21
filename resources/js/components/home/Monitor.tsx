import { useState } from "react";
import WindowOld from "../common/WindowOld";
import Window from "../common/Window";
import logo from '@/assets/monitor-logo.svg';

export default function Monitor() {

    const socials = [
        {
            name: "GitHub",
            url: "https://github.com/ricardocolom64/"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ricardo-colom/"
        },
        {
            name: "E-mail",
            url: "mailto:ricardocolom64@gmail.com"
        }
    ];

    const [selectedSocial, setSelectedSocial] = useState(0);

    const [pressedButtons, setPressedButtons] = useState({
        up: false,
        down: false,
        left: false,
        right: false,
        a: false,
        b: false
    });


    const handleNext = () => {
        setSelectedSocial((curr) => (curr + 1) % socials.length)
    }

    const handlePrev = () => {
        setSelectedSocial((curr) => (curr - 1 + socials.length) % socials.length)
    }

    const handleButtonPress = (button: string) => {
        if (button == "a") {
            window.open(socials[selectedSocial].url, "_blank");
        }
        setPressedButtons((prev) => ({ ...prev, [button]: true }));
        setTimeout(() => {
            setPressedButtons((prev) => ({ ...prev, [button]: false }));
        }, 100);
    };

    return (
        <Window name="Socials">
            <div className="flex flex-col my-6 items-center relative w-full px-4 xl:w-xs">
                <div className="h-[300px] w-[230px] rounded-t-[3%] border-2 border-b-0 border-neutral-500 relative">
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2">
                        <div className="h-[140px] w-[200px] rounded-t-[5%] border-2 border-b-0 border-neutral-500"></div>
                        <div className="h-[30px] w-[200px] rounded-b-[85%] border-2 border-t-0 border-neutral-500"></div>
                        <img src={logo} alt="monitor-logo" className="absolute top-1/2 translate-y-14.5 left-1/2 transform -translate-x-1/2 w-24" />
                        {/* Screen */}
                        <div className="h-[110px] w-[120px] border-2 border-neo absolute top-19 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="h-[110px] w-[120px] border-2 border-neutral-500 backdrop-blur-sm absolute top-19 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="flex flex-col text-sm font-code m-4">
                                {
                                    socials.map((social, index) => {
                                        return selectedSocial == index ? (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-neo text-shadow-md text-shadow-neo/50 underline transition-colors duration-400"
                                            >
                                                {social.name}
                                            </a>
                                        ) : (
                                            <a
                                                key={index}
                                                onMouseEnter={() => setSelectedSocial(index)}
                                            >
                                                {social.name}
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="h-[140px] w-[200px] left-1/2 absolute transform -translate-x-1/2">
                            {/* Company */}
                            <div className="h-[14px] w-[70px] rounded-full border-2 border-neutral-500 left-1/2 top-4 absolute transform -translate-x-1/2">
                            </div>
                            <div className="h-[70px] w-[70px] left-2 top-10 absolute">
                                {/* Up */}
                                <div
                                    onClick={() => { handlePrev(); handleButtonPress("up"); }}
                                    className="group bg-neo-grey-secondary hover:border-neo hover:cursor-pointer transition-colors duration-200 h-[24px] w-[24px] rounded-t-sm border-2 border-b-0 border-neutral-500 left-1/2 top-0 transform -translate-x-1/2 absolute z-20"
                                >
                                    <div className={`${pressedButtons.up ? "border-b-neo duration-200" : "border-neutral-500 duration-400"} transition-colors w-0 h-0 border-l-[6px] border-l-transparent border-b-[8px] border-r-[6px] border-r-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}>
                                    </div>
                                </div>
                                {/* Left */}
                                <div
                                    onClick={() => { handleButtonPress("left"); }}
                                    className="group bg-neo-grey-secondary hover:border-neo hover:cursor-pointer transition-colors duration-200 h-[24px] w-[24px] rounded-l-sm border-2 border-r-0 border-neutral-500 left-[1px] top-1/2 transform -translate-y-1/2 absolute z-20"
                                >
                                    <div className={`${pressedButtons.left ? "border-r-neo duration-200" : "border-neutral-500 duration-400"} transition-colors w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-b-[6px] border-b-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}>
                                    </div>
                                </div>
                                {/* Right */}
                                <div
                                    onClick={() => { handleButtonPress("right"); }}
                                    className="group bg-neo-grey-secondary hover:border-neo hover:cursor-pointer transition-colors duration-200 h-[24px] w-[24px] rounded-r-sm border-2 border-l-0 border-neutral-500 right-0 top-1/2 transform -translate-y-1/2 absolute z-20"
                                >
                                    <div className={`${pressedButtons.right ? "border-l-neo duration-200" : "border-neutral-500 duration-400"} transition-colors w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-b-[6px] border-b-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}>
                                    </div>
                                </div>
                                {/* Down */}
                                <div
                                    onClick={() => { handleNext(); handleButtonPress("down"); }}
                                    className="group bg-neo-grey-secondary hover:border-neo hover:cursor-pointer transition-colors duration-200 h-[24px] w-[24px] rounded-b-sm border-2 border-t-0 border-neutral-500 left-1/2 bottom-0 transform -translate-x-1/2 absolute z-20"
                                >
                                    <div className={`${pressedButtons.down ? "border-t-neo duration-200" : "border-neutral-500 duration-400"} transition-colors w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-r-[6px] border-r-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}>
                                    </div>
                                </div>
                                {/* Center */}
                                <div className="bg-neo-grey-secondary h-[24px] w-[24px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
                                </div>
                            </div>
                            {/* A and B */}
                            <div className="h-[70px] w-[70px] right-2 top-10 absolute font-code select-none">
                                {/* B */}
                                <div
                                    onClick={() => handleButtonPress("b")}
                                    className="group hover:border-neo hover:cursor-pointer transition-colors duration-200 h-[30px] w-[30px] rounded-full border-2 border-neutral-500 bg-neo-grey-secondary left-0 top-7 absolute"
                                >
                                    <div className={`${pressedButtons.b ? "text-neo duration-200" : "text-neutral-500 duration-400 "} font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                                        B
                                    </div>
                                </div>
                                {/* A */}
                                <div
                                    onClick={() => handleButtonPress("a")}
                                    className="group hover:border-neo hover:cursor-pointer transition-colors duration-200 h-[30px] w-[30px] rounded-full border-2 border-neutral-500 bg-neo-grey-secondary right-0 bottom-7 absolute"
                                >
                                    <div className={`${pressedButtons.a ? "text-neo duration-200" : "text-neutral-500 duration-400 "} font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                                        A
                                    </div>
                                </div>
                            </div>
                            <div className="h-[16px] w-[70px] left-1/2 bottom-0 absolute transform -translate-x-1/2">
                                {/* Start */}
                                <div className="h-[12px] w-[30px] rounded-full border-2 border-neutral-500 bg-neo-grey-secondary left-0 bottom-0 absolute">
                                </div>
                                {/* Select */}
                                <div className="h-[12px] w-[30px] rounded-full border-2 border-neutral-500 bg-neo-grey-secondary right-0 bottom-0 absolute">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[50px] w-[230px] rounded-b-[85%] border-2 border-t-0 border-neutral-500">
                </div>
            </div>
        </Window>
    )
}
