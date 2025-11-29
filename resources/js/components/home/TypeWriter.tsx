import { useEffect, useState } from 'react';


type TypeWriterProps = {
    debug?: boolean,
    onTypingDone?: () => void;
};

export default function TypeWriter({ debug = false, onTypingDone }: TypeWriterProps) {
    const phrases = [
        { phrase: "./", charDelay: 300 },
        { phrase: "ricardocolom.com", charDelay: 50 },
    ];
    const initialDelay = 1000;
    const phraseDelay = 500;

    const [isWriting, setIsWriting] = useState(false);
    const [typingDone, setTypingDone] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    function reset() {
        setIsWriting(false);
        setTypingDone(false);
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

    useEffect(() => {
        document.title = `$ ${displayedText}▍`;
    }, [displayedText, typingDone]);


    useEffect(
        () => {
            const timeout = setTimeout(() => setIsWriting(true), initialDelay);
            return () => clearTimeout(timeout);
        }
        , []
    )

    useEffect(() => {
        if (!isWriting && phraseIndex >= phrases.length) {
            setTypingDone(true);
            onTypingDone?.();
        }
    }, [isWriting, phraseIndex, onTypingDone]);

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
            <div className="flex space-x-[1px] font-code h-6 w-60">
                <span className="inline-block mr-1 text-neo">$</span>

                {displayedText.split("").map((char, i) => (
                    <span
                        key={i}
                        className="inline-block animate-[fadeDown_0.1s_ease-out]"
                    >
                        {char}
                    </span>
                ))}

                {
                    !typingDone &&
                    <span
                        className={`inline-block mt-[1px] lg:mt-[3px] ml-[2px] h-[14px] lg:h-[18px] w-[2px] lg:w-[4px] bg-current transition-opacity duration-200
                        ${isWriting ? "opacity-100" : "animate-blink"}`}
                    >
                        &nbsp;
                    </span>
                }

                <style>{`
                    @keyframes fadeDown {
                        from { opacity: 0; transform: translateY(-0.25em); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes blink {
                        0%, 50%, 100% { opacity: 1; }
                        25%, 75% { opacity: 0; }
                    }
                    .animate-blink {
                        animation: blink 1s ease-out infinite;
                    }
                `}
                </style>
            </div>
        </div>
    )
}
