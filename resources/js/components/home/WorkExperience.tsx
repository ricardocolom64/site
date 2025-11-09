function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    )
}

function LocationDotIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 384 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        </svg>
    )
}

function LinkIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 640 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
        </svg>
    )
}

export default function WorkExperience() {
    return (
        <div className="w-3xl self-center">
            <div className="flex justify-end">
                <a href="#" className="flex items-center text-neutral-300  hover:text-neutral-100 transition-all">
                    <ArrowIcon />
                    <div className="ml-2 font-medium self-center">
                        Résumé
                    </div>
                </a>
            </div>
            <div className="bg-dark/50 h-6 border-2 border-neo border-b-0 rounded-t-lg  flex w-[100%] justify-end items-center relative">
                <div className="absolute left-4 bottom-1 bg-background text-shadow-sm text-shadow-neo/50 shadow-[0px_0px_20px_0px_#0A0A0A] w-max h-max text-2xl font-bold px-1">
                    Work Experience
                </div>
                <div className="flex flex-row gap-1.5 pr-1.5">
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                    <div className="aspect-square h-3 border-2 border-neo rounded-full"></div>
                </div>
            </div>
            <div className="bg-dark/50 p-8 border-2 border-neo rounded-b-lg relative">
                <div className="text-shadow-md text-shadow-background">
                    <div className="flex justify-between">
                        <div className="flex flex-row gap-2 text-2xl font-bold text-shadow-sm text-shadow-neutral-100/25">
                            <div>
                                Kaseya
                            </div>
                            <a href="https://kaseya.com" target="_blank" rel="noopener noreferrer" className="self-end w-6 h-6 text-neutral-500 hover:text-neutral-100 transition-all">
                                <LinkIcon />
                            </a>
                        </div>
                        <div className="flex flex-row gap-2 text-lg font-medium self-end text-shadow-sm text-shadow-neutral-100/25">
                            <div className="flex flex-row gap-1">
                                <div className="self-center">
                                    <LocationDotIcon />
                                </div>
                                <div>
                                    Miami, FL
                                </div>
                            </div>
                            <div>
                                •
                            </div>
                            <div>
                                2022 - Present
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {/* SE II Block */}
                        <div className="flex flex-col">
                            <div className="font-light flex justify-between font-code">
                                <div className="text-shadow-sm text-shadow-neutral-100/50">
                                    Software Engineer II
                                </div>
                                <div>
                                    Spring 2024 - Present
                                </div>
                            </div>
                            <div className="list-disc flex flex-col self-center mt-6 pl-4 gap-6">
                                <li>
                                    Drove projects end-to-end, from initial product discussions and technical decomposition to development, testing, and production release, consistently meeting quarterly goals.
                                    <br />
                                    <br />
                                    Delivered full observability via Grafana dashboards, OpenSearch logs, and metrics in DataDog APM.
                                </li>
                                <li>
                                    Led team-wide effort to remediate 180+ critical vulnerabilities identified by Snyk, including upgrading internal packages, PHP versions, and OS firmware with 0 downtime.
                                </li>
                                <li>
                                    Managed all aspects of developer operations, including repositories, CI/CD pipelines, branching strategies, packaging, and deployments.
                                    <br />
                                    <br />
                                    Containerized each of our microservices using Docker to streamline development and testing. Leveraged Puppet to ensure consistent infrastructure upon deployment to self-managed Ubuntu VMs on our OpenStack platform.
                                </li>
                                <li>
                                    Served as primary point of contact for high-priority production issues affecting data protection and fleet communication, ensuring maximum uptime and service reliability.
                                </li>
                                <li>
                                    <i>Refined all Software Engineer I skills...</i>
                                </li>
                            </div>
                        </div>
                        {/* SE I Block */}
                        <div className="flex flex-col">
                            <div className="font-light flex justify-between font-code">
                                <div className="text-shadow-md text-shadow-neutral-100/50">
                                    Software Engineer I
                                </div>
                                <div>
                                    Fall 2022 - Spring 2024
                                </div>
                            </div>
                            <div className="list-disc flex flex-col self-center mt-6 pl-4 gap-6">
                                <li>
                                    Collaborated on the development and ownership of multiple Symfony-based PHP microservices running on self-managed Ubuntu VMs with Apache and Nginx web servers.
                                    <br />
                                    <br />
                                    Proactively engaged with teams across the organization to anticipate blockers and resolve technical questions early.
                                </li>
                                <li>
                                    Gained deep familiarity with the full SDLC by working in a team of other developers and QA engineers within our industry-leading backup division.
                                    Contributed to sprint planning, daily stand-ups, and iterative delivery.
                                </li>
                            </div>
                        </div>
                        {/* Tools */}
                        <div className="flex flex-col">
                            <div className="flex flex-col font-bold my-6 font-code gap-2">
                                {[
                                    ['PHP', 'Symfony', 'PHPUnit', 'REST APIs', 'Docker'],
                                    ['React', 'TypeScript', 'MySQL', 'Puppet', 'Redis'],
                                    ['WSL', 'GitLab CI/CD', 'Ubuntu', 'Snyk', 'DataDog']
                                ].map((row, i) => (
                                    <div key={i} className="flex flex-row justify-left">
                                        {row.map((tool) => (
                                            <div key={tool} className="w-[300px] flex justify-center">
                                                <div className="w-max border-2 border-neo rounded-xl p-1 px-3">
                                                    {tool}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}
