import Window from "../common/Window"

function ArrowIcon() {
    return (
        <svg
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
            viewBox="0 0 384 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        </svg>
    )
}

export default function WorkExperience() {
    return (
        <>
            <Window name="Work Experience">
                <div className="w-full lg:w-4xl p-4 lg:p-8">
                    <div className="flex items-center justify-between">
                        <a
                            href="https://kaseya.com" target="_blank" rel="noopener noreferrer"
                            className="group flex flex-row text-lg lg:text-xl font-bold text-shadow-sm text-shadow-neutral-100/25 hover:cursor-pointer"
                        >
                            <div className="font-folk leading-0">
                                Kaseya
                            </div>
                            <div className="aspect-square w-2 ml-1 lg:ml-2 lg:w-3 self-center text-neutral-500 group-hover:text-neutral-100 transition-all">
                                <ArrowIcon />
                            </div>
                        </a>
                        <div className="flex flex-row gap-2 text-xs lg:text-base font-medium mb-1 lg:mb-0 self-end text-shadow-sm text-shadow-neutral-100/25">
                            <div className="flex items-center flex-row gap-1">
                                <div className="self-center mr-0.5 w-2 lg:w-3">
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
                        <div className="flex flex-col lg:pt-0">
                            <div className="font-light flex flex-col lg:flex-row text-xs lg:text-sm justify-between font-code">
                                <div className="text-shadow-sm text-shadow-neutral-100/50">
                                    Software Engineer II
                                </div>
                                <div className="text-neutral-500">
                                    Spring 2024 - Present
                                </div>
                            </div>
                            <div className="list-disc flex flex-col self-center mt-4 pl-3.5 gap-6 text-sm">
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
                            <div className="font-light flex flex-col lg:flex-row text-xs lg:text-sm justify-between font-code">
                                <div className="text-shadow-md text-shadow-neutral-100/50">
                                    Software Engineer I
                                </div>
                                <div className="text-neutral-500">
                                    Fall 2022 - Spring 2024
                                </div>
                            </div>
                            <div className="list-disc flex flex-col self-center mt-4 pl-4 gap-6 text-sm">
                                <li>
                                    Collaborated on the development and ownership of multiple Symfony-based PHP microservices running on self-managed Ubuntu VMs with Apache and NGINX web servers.
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
                        <div className="flex flex-wrap justify-center gap-2 text-xs font-bold my-6 font-code">
                            {[
                                'PHP', 'Symfony', 'PHPUnit', 'REST APIs', 'Docker', 'React', 'TypeScript', 'MySQL',
                                'Puppet', 'Redis', 'WSL', 'GitLab CI/CD', 'Ubuntu', 'Snyk', 'DataDog'
                            ].map((tool) => (
                                <div
                                    key={tool}
                                    className="mx-1 lg:mx-2"
                                >
                                    <div className="text-center justify-center items-center border-2 border-neo rounded-sm px-3 py-1">
                                        {tool}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Window>
        </>
    )
}
