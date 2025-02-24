import { useEffect, useState } from 'react'

export const useMobileHomeTyper = () => {
    const [activeText, setActiveText] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const texts = ["welcome!", "this is my digital archive", "it is also a work in progress...", "enjoy :)"]
    const fullText = texts[activeText]
    const typingSpeed = 75;
    const deletingSpeed = 50;

    useEffect(() => {
        const handleText = () => {
            if (isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length - 1));
            } else {
                setDisplayText(fullText.substring(0, displayText.length + 1));
            }

            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && displayText === '') {
                if (activeText !== 3) {
                    setActiveText(activeText + 1)
                    setIsDeleting(false);
                }
            }
        };

        const timer = setTimeout(handleText, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting]);

    return {
        displayText: activeText === 3 && isDeleting && displayText === '' ? null : displayText + "_"
    }
}

export default useMobileHomeTyper