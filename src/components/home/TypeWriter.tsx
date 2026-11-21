import { useEffect, useState } from 'react';


type TypeWriterProps = {
    onTypingDone?: () => void,
    isStatic?: boolean
};

export default function TypeWriter({ onTypingDone, isStatic = false }: TypeWriterProps) {
    const phrases = [
        { text: "./", charDelay: 100 },
        { text: "ricardocolom.com", charDelay: 50 },
    ];
    const initialDelay = 500;
    const phraseDelay = 500;

    const [isWriting, setIsWriting] = useState(false);
    const [typingDone, setTypingDone] = useState(false);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (isStatic) {
            let finalText = "";
            phrases.forEach(phrase => {
                finalText += phrase.text
            });
            setDisplayedText(finalText);
            setTypingDone(true);
            return;
        }

        if (!isWriting) return;

        if (phraseIndex >= phrases.length) {
            setIsWriting(false);
            return;
        }

        const { text, charDelay } = phrases[phraseIndex];
        const phraseDone = charIndex >= text.length;

        // Don't delay for the first character
        const delay = phraseDone ? phraseDelay : charIndex === 0 ? 0 : charDelay;

        const timeout = setTimeout(() => {
            if (!phraseDone) {
                setDisplayedText((prev) => prev + text[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else {
                setPhraseIndex((prev) => prev + 1);
                setCharIndex(0);
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [isWriting, phraseIndex, charIndex, phrases]);

    useEffect(() => {
        if (!isStatic) {
            document.title = `$ ${displayedText}▍`;
        }
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
        <div className="w-min">
            <div className="flex space-x-[1px] font-code h-6">
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
                        className={`inline-block ml-[2px] h-[14px] lg:h-[18px] w-[2px] lg:w-[4px] bg-current transition-opacity duration-200
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
