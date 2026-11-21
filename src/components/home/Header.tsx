import AgeCounter from "./AgeCounter";

export default function Header() {
    return (
        <div className="flex flex-col gap-8 w-full lg:w-xl">
            <div className="flex flex-col w-full items-center sm:items-left font-folk">
                <div className="text-4xl lg:text-6xl font-bold tracking-tight text-shadow-md text-shadow-neo/50">
                    Ricardo Colom
                </div>
                <div className="text-xl lg:text-3xl font-extralight tracking-tight text-neo text-shadow-md text-shadow-neo/50 lg:mt-2">
                    Software Engineer
                </div>
            </div>
            <div className="text-sm lg:text-base sm:mx-0 sm:max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start gap-4 sm:gap-6">
                <div className="max-w-102 lg:max-w-full">
                    {"Hi! I'm Rick."}
                </div>
                <div className="max-w-102 lg:max-w-full">
                    <AgeCounter />
                </div>
                <div className="max-w-88 lg:max-w-full">
                    I build full-stack apps with a strong focus on scalable, efficient, and maintainable backend systems. I solve real business problems with code that delivers.
                </div>
                <div className="max-w-full lg:max-w-full">
                    I enjoy lifting weights, dancing, and hanging out with friends.
                </div>
                <div className="max-w-102 lg:max-w-full">
                    Above all, I just care about getting better at what I do every day.
                </div>
            </div>
        </div>
    )
}
