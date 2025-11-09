import AgeCounter from "./AgeCounter";

export default function Header() {
    return (
        <div className="flex flex-col gap-[64px]">
            <div className="w-2xl">
                <div className="text-7xl font-bold tracking-tight text-shadow-md text-shadow-neo/50">
                    Ricardo Colom
                </div>
                <div className="text-4xl font-extralight tracking-tight text-neo text-shadow-md text-shadow-neo/50">
                    Software Engineer
                </div>
            </div>
            <div className="w-2xl text-lg">
                Hey, I’m Rick.{" "}
                <AgeCounter />
                <br />
                <br />
                I build full-stack apps with a strong focus on scalable, efficient, and maintainable backend systems. I solve real business problems with code that delivers.
                <br />
                <br />
                I enjoy lifting weights, dancing, and hanging out with friends.
                <br />
                <br />
                Above all, I just care about getting better at what I do every day.
            </div>
        </div>
    )
}
