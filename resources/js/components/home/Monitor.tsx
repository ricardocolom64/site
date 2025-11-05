import { useState } from "react";

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
        <div className="flex flex-col">
            <div className="h-6 border-2 border-neo border-b-0 rounded-t-lg  flex w-[100%] justify-end items-center relative">
                <div className="absolute left-4 bottom-1 bg-background text-shadow-md text-shadow-neo/50 shadow-[0px_0px_20px_10px_#0a0a0a] w-max h-max text-2xl font-bold px-1">
                    Socials
                </div>
                <div className="flex flex-row gap-1.5 pr-1.5">
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                </div>
            </div>
            <div className="relative">
                <div className="absolute z-0 inset-0 bg-neo-grid"></div>
                <div className="border-2 border-neo rounded-b-lg px-8 py-6 flex flex-col justify-center items-center relative">
                    <div className="h-[300px] w-[230px] bg-background rounded-t-[3%] border-2 border-b-0 border-neo-grey-secondary relative">
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
                            <div className="h-[140px] w-[200px] rounded-t-[5%] border-2 border-b-0 bg-neo-grey border-neo-grey-secondary">
                            </div>
                            <div className="h-[25px] w-[200px] rounded-b-[85%] border-2 border-t-0 bg-neo-grey border-neo-grey-secondary">
                            </div>
                            {/* Screen */}
                            <div className="h-[110px] w-[120px] border-2 border-neo-grey-secondary bg-background absolute top-19 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
                                <div className="h-[14px] w-[70px] rounded-full border-2 border-[#1F1F1F] left-1/2 top-4 absolute transform -translate-x-1/2">
                                </div>
                                <div className="h-[70px] w-[70px] left-2 top-10 absolute">
                                    {/* Up */}
                                    <div
                                        onClick={() => { handlePrev(); handleButtonPress("up"); }}
                                        className="group hover:border-neutral-500 transition-colors duration-200 h-[24px] w-[24px] rounded-t-sm border-2 border-b-0 border-[#1F1F1F] left-1/2 top-0 transform -translate-x-1/2 absolute"
                                    >
                                        <div className={`${pressedButtons.up ? "border-b-neo duration-200" : "border-b-[#1F1F1F] group-hover:border-t-neutral-500 duration-400"} transition-colors w-0 h-0 border-l-[6px] border-l-transparent border-b-[8px] border-r-[6px] border-r-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}>
                                        </div>
                                    </div>
                                    {/* Left */}
                                    <div
                                        onClick={() => { handleButtonPress("left"); }}
                                        className="group hover:border-neutral-500 transition-colors duration-200 h-[24px] w-[24px] rounded-l-sm border-2 border-r-0 border-[#1F1F1F] left-0 top-1/2 transform -translate-y-1/2 absolute"
                                    >
                                        <div className={`${pressedButtons.left ? "border-r-neo duration-200" : "border-r-[#1F1F1F] group-hover:border-r-neutral-500 duration-400"} transition-colors w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-b-[6px] border-b-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}>
                                        </div>
                                    </div>
                                    {/* Right */}
                                    <div
                                        onClick={() => { handleButtonPress("right"); }}
                                        className="group hover:border-neutral-500 transition-colors duration-200 h-[24px] w-[24px] rounded-r-sm border-2 border-l-0 border-[#1F1F1F] right-0 top-1/2 transform -translate-y-1/2 absolute"
                                    >
                                        <div className={`${pressedButtons.right ? "border-l-neo duration-200" : "border-l-[#1F1F1F] group-hover:border-l-neutral-500 duration-400"} transition-colors w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-b-[6px] border-b-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}>
                                        </div>
                                    </div>
                                    {/* Down */}
                                    <div
                                        onClick={() => { handleNext(); handleButtonPress("down"); }}
                                        className="group hover:border-neutral-500 transition-colors duration-200 h-[24px] w-[24px] rounded-b-sm border-2 border-t-0 border-[#1F1F1F] left-1/2 bottom-0 transform -translate-x-1/2 absolute"
                                    >
                                        <div className={
                                            `${pressedButtons.down ? "border-t-neo duration-200" : "border-t-[#1F1F1F] group-hover:border-t-neutral-500 duration-400"} transition-colors w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-r-[6px] border-r-transparent left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute`}>
                                        </div>
                                    </div>
                                    {/* Center */}
                                    <div className="h-[24px] w-[24px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
                                    </div>
                                </div>
                                {/* A and B */}
                                <div className="h-[70px] w-[70px] right-2 top-10 absolute font-code select-none">
                                    {/* B */}
                                    <div className="group hover:border-neutral-500 transition-colors duration-200 h-[30px] w-[30px] rounded-full border-2 border-[#1F1F1F] left-0 top-7 absolute">
                                        <div className="text-[#1F1F1F] group-hover:text-neutral-500 duration-400 font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                                            B
                                        </div>
                                    </div>
                                    {/* A */}
                                    <div
                                        onClick={() => handleButtonPress("a")}
                                        className="group hover:border-neutral-500 transition-colors duration-200 h-[30px] w-[30px] rounded-full border-2 border-[#1F1F1F] right-0 bottom-7 absolute">
                                        <div className="text-[#1F1F1F] group-hover:text-neutral-500 duration-400 font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            A
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[16px] w-[70px] left-1/2 bottom-0 absolute transform -translate-x-1/2">
                                    {/* Start */}
                                    <div className="h-[12px] w-[30px] rounded-full border-2 border-[#1F1F1F] left-0 bottom-0 absolute">
                                    </div>
                                    {/* Select */}
                                    <div className="h-[12px] w-[30px] rounded-full border-2 border-[#1F1F1F] right-0 bottom-0 absolute">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[50px] w-[230px] bg-background rounded-b-[85%] border-2 border-t-0 border-[#1F1F1F]">
                    </div>
                </div>
            </div>
        </div>
    )
}
