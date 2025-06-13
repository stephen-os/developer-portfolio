import React, { useEffect, useState } from "react";

type TypewriterSwitchProps = {
    texts: string[];
    typingSpeed?: number;   // ms per char typed
    deletingSpeed?: number; // ms per char deleted
    delayBetween?: number;  // ms delay after fully typed before deleting
};

const TypewriterSwitch: React.FC<TypewriterSwitchProps> = ({
    texts,
    typingSpeed = 150,
    deletingSpeed = 75,
    delayBetween = 1500,
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (!isDeleting && charIndex <= texts[textIndex].length) {
            // Typing forward
            setDisplayedText(texts[textIndex].slice(0, charIndex));
            timeoutId = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
        } else if (isDeleting && charIndex >= 0) {
            // Deleting
            setDisplayedText(texts[textIndex].slice(0, charIndex));
            timeoutId = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
        } else if (!isDeleting && charIndex > texts[textIndex].length) {
            // Wait before deleting
            timeoutId = setTimeout(() => setIsDeleting(true), delayBetween);
        } else if (isDeleting && charIndex < 0) {
            // Move to next text and start typing
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
            setCharIndex(0);
        }

        return () => clearTimeout(timeoutId);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

    return (
        <span className="font-bold text-2xl md:text-4xl">
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export default TypewriterSwitch;
