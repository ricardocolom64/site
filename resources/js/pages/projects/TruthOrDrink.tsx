import ProjectLayout from '@/layouts/ProjectLayout';

export default function TruthOrDrink() {

    return (
        <ProjectLayout name="Truth or Drink" year="2022">
            <div className="flex flex-col justify-center text-left m-12 space-y-8">
                <iframe
                    className="self-center"
                    width="560"
                    height="405"
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
        </ProjectLayout>
    );
}
