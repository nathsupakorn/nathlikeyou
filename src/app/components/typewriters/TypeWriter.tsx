"use client"

import { useState, useEffect, useContext } from 'react';
import { LangContext } from '../../_contexts/LangProvider';

type TTypewriter = {
    texts: string[],
    delay: number,
    loop: "start" | "random" | "none",
    erase: boolean
}

const Typewriter = (props: TTypewriter) => {
    const { lang } = useContext(LangContext)
    const { texts, delay, loop, erase } = props;

    const [fullText, setFullText] = useState(texts.length === 0 ? '' : texts[0]);
    const [fullTextIndex, setFullTextIndex] = useState(0)
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isForward, setIsForward] = useState(true);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (currentIndex <= fullText.length) {
            if (isForward) {
                timeout = setTimeout(() => {
                    setCurrentText(prevText => currentIndex !== fullText.length ? prevText + fullText[currentIndex] : prevText);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, delay);

            } else {
                if (currentIndex === -1 && erase && loop !== "none") {
                    setIsForward(true)
                    setCurrentIndex(0)
                    setCurrentText("")

                    if (loop === "start") {
                        const newIdx = (fullTextIndex + 1) % texts.length
                        setFullText(texts[newIdx])
                        setFullTextIndex(newIdx)

                    } else if (loop === "random") {
                        setFullText(texts.length === 0 ? '' : texts[Math.floor(Math.random() * texts.length)])
                    }

                } else if (currentIndex === -1 && erase && loop === "none") {
                    //pass
                } else if (currentIndex === -1 && !erase && loop === "none") {
                    timeout = setTimeout(() => {
                        setCurrentText(prevText => prevText.slice(0, currentIndex));
                        setCurrentIndex(prevIndex => prevIndex - 1);
                    }, delay);
                } else {
                    timeout = setTimeout(() => {
                        setCurrentText(prevText => prevText.slice(0, currentIndex));
                        setCurrentIndex(prevIndex => prevIndex - 1);
                    }, delay);
                }
            }
        } else if (erase) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText.slice(0, currentIndex - 1));
                setCurrentIndex(prevIndex => prevIndex - 1);
            }, delay);

            setIsForward((v) => !v)
        }
        else if (loop !== "none") {
            setCurrentIndex(0)
            setCurrentText('')

            if (loop === "start") {
                const newIdx = (fullTextIndex + 1) % texts.length
                setFullText(texts[newIdx])
                setFullTextIndex(newIdx)
            } else if (loop === "random") {
                setFullText(texts.length === 0 ? '' : texts[Math.floor(Math.random() * texts.length)])
            }
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, loop, texts, fullText]);

    useEffect(() => {
        setCurrentText('');
        setCurrentIndex(0);
        setFullText(texts.length === 0 ? '' : texts[0])
        setFullTextIndex(0)
        setIsForward(true)
    }, [lang, texts])

    return <span>{' '}{currentText}</span>;
};

export default Typewriter;