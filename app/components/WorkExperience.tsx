export default function WorkExperience() {
    return (
        <div className="w-2xl">
            <div className="text-4xl font-bold">
                Work Experience
            </div>
            <div className="mt-8">
                <div className="flex justify-between">
                    <div className="text-2xl font-bold">
                        Kaseya
                    </div>
                    <div className="text-lg font-medium self-end">
                        2022 - Present
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {/* SE II Block */}
                    <div className="flex flex-col">
                        <div className="font-light flex justify-between font-[family-name:var(--font-geist-mono)]">
                            <div>
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
                                Containerized each of our microservices using Docker to streamline development and testing. Leveraged Puppet to ensure stable, conistent infrastructure upon deployment.
                            </li>
                            <li>
                                Served as a primary POC for high priority production issues impacting communication within our backup fleet to ensure maximum uptime and service reliability.
                            </li>
                            <li>
                                <i>Refined all Software Engineer I skills...</i>
                            </li>
                        </div>
                    </div>
                    {/* SE I Block */}
                    <div className="flex flex-col">
                        <div className="font-light flex justify-between font-[family-name:var(--font-geist-mono)]">
                            <div>
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
                        <div className="border-1 border-[#1F1F1F] rounded-lg">
                            <div className="flex flex-col font-bold my-6 font-[family-name:var(--font-geist-mono)] gap-2">
                                <div className="flex flex-row self-center gap-10">
                                    <div>
                                        PHP
                                    </div>
                                    <div>
                                        Symfony
                                    </div>
                                    <div>
                                        PHPUnit
                                    </div>
                                    <div>
                                        REST APIs
                                    </div>
                                    <div>
                                        Docker
                                    </div>
                                </div>
                                <div className="flex flex-row self-center gap-10">
                                    <div>
                                        React
                                    </div>
                                    <div>
                                        TypeScript
                                    </div>
                                    <div>
                                        MySQL
                                    </div>
                                    <div>
                                        Puppet
                                    </div>
                                    <div>
                                        Redis
                                    </div>
                                </div>
                                <div className="flex flex-row self-center gap-10">
                                    <div>
                                        WSL
                                    </div>
                                    <div>
                                        Gitlab CI/CD
                                    </div>
                                    <div>
                                        Linux Server
                                    </div>
                                    <div>
                                        Snyk
                                    </div>
                                    <div>
                                        DataDog
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}