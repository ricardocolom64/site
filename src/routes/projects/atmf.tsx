import { createFileRoute } from '@tanstack/react-router';

import { pageTitle } from '@/lib/site';

const project = { name: 'Aliens Took My Friend', year: '2021' };

export const Route = createFileRoute('/projects/atmf')({
    staticData: { project },
    head: () => ({ meta: [{ title: pageTitle(project.name) }] }),
    component: ATMF,
});

function ATMF() {
    return (
        <div className="flex flex-col justify-center text-left m-6 sm:m-12 space-y-8">
            <iframe
                className="self-center w-full max-w-140 aspect-[560/405]"
                src="https://www.youtube.com/embed/-XpHuNfeMX0"
                title="YouTube video player"
            />
            <p>
                A short top-down adventure game a friend and I developed where your fellow
                astronaut friend has been kidnapped and taken onto an alien spaceship. It was developed in <b>less than 36 hours</b> for the
                KnightHacks 2021 hackathon, where we were awarded <b>Best Space App</b> by the United States Space Force,
                which sponsored the event{" "}
                <a
                    href="https://devpost.com/software/spacegame-pxqdgv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                >
                    (more info)
                </a>
                .
            </p>
            <p>
                In this game, it is your moral duty to save
                your friend from these hostile extraterrestrials by using your
                levitating laser gun to rid of them for good. Beware, the aliens have
                differing movement speeds, patterns, and attacks. Progress through
                several rooms and defeat the final alien boss to save your friend!
            </p>
            <p>
                My personal contributions:
                <ul className="list-disc pl-4 ml-4 mt-2">
                    <li>Programmed character movement, shooting, and room logic.</li>
                    <li>
                        Designed and modeled <b>all</b> models.
                    </li>
                    <li>Produced and arranged the game's music.</li>
                    <li>Arranged sound effects.</li>
                </ul>
            </p>
            <p>
                Built using <b>Unity (C#)</b>, and <b>Blender</b>.
            </p>
            <a
                href="https://github.com/ricardocolom64/AliensTookMyFriend" target="_blank" rel="noopener noreferrer"
                className="underline">
                Source available here.
            </a>
        </div>
    );
}
