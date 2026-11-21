import { createFileRoute } from '@tanstack/react-router';

import { pageTitle } from '@/lib/site';

const project = { name: 'Truth or Drink', year: '2022' };

export const Route = createFileRoute('/projects/truth-or-drink')({
    staticData: { project },
    head: () => ({ meta: [{ title: pageTitle(project.name) }] }),
    component: TruthOrDrink,
});

function TruthOrDrink() {
    return (
        <div className="flex flex-col justify-center text-left m-6 sm:m-12 space-y-8">
            <iframe
                className="self-center w-full max-w-140 aspect-[560/405]"
                src="https://www.youtube.com/embed/tARY4LJLU1o"
                title="YouTube video player"
            />
            <p>
                The viral Truth or Drink card game by Cut, now as an unofficial mobile port. This application was tested at various social events by directing others to ask each other the fun yet intensely personal questions displayed on each card.
            </p>
            <p>
                You can cycle through each of the four card categories to play with a total of 216 disctinct cards.
            </p>
            <p>
                Built using the <b>React Native</b> framework, <b>Expo</b>.
            </p>
        </div>
    );
}
