import { useEffect, useState } from 'react';


// TODO: Add cursor and caret
// Make this a hook?

export default function TypeWriter({ debug = false }) {
    const phrases = [
        { phrase: "./", charDelay: 50 },
        { phrase: "rickcolom.sh", charDelay: 100 },
    ];
    const phraseDelay = 500;

    const [isWriting, setIsWriting] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    function reset() {
        setIsWriting(false);
        setPhraseIndex(0);
        setCharIndex(0);
        setDisplayedText("");
    }

    useEffect(() => {
        if (!isWriting) return;

        if (phraseIndex >= phrases.length) {
            setIsWriting(false);
            return;
        }

        const { phrase, charDelay } = phrases[phraseIndex];
        const phraseDone = charIndex >= phrase.length;

        // Don't delay for the first character
        const delay = phraseDone ? phraseDelay : charIndex === 0 ? 0 : charDelay;

        const timeout = setTimeout(() => {
            if (!phraseDone) {
                setDisplayedText((prev) => prev + phrase[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else {
                setPhraseIndex((prev) => prev + 1);
                setCharIndex(0);
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [isWriting, phraseIndex, charIndex, phrases]);

    useEffect(
        () => { setIsWriting(true) }
        , []
    )

    return (
        <div>
            {
                debug && <>
                    <button
                        className="bg-red-500 hover:bg-red-700 p-2 mr-2"
                        onClick={reset}
                    >
                        Reset
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 p-2 mr-2"
                        onClick={() => setIsWriting(true)}
                    >
                        Go
                    </button>
                </>
            }
            <div className="flex space-x-[1px]">
                {displayedText.split("").map((char, i) => (
                    <span
                        key={i}
                        className="font-code inline-block translate-y-1 animate-[fadeDown_0.1s_ease-out]"
                    >
                        {char}
                    </span>
                ))}

                <style>{`
                    @keyframes fadeDown {
                    from {
                        opacity: 0;
                        transform: translateY(-0.25em);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    }
                `}
                </style>
            </div>
        </div>
    )
}
