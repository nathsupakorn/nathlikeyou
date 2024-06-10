"use client"

import { useState, useEffect, useContext } from 'react';
import { LangContext } from '../../_contexts/LangProvider';


const generateRandomNathLogogram = () => {
    const randInt = Math.floor(Math.random() * 6280)
    let format = 0

    if (randInt < 8) {
        format = 0
    } else if (randInt < 72) {
        format = 1
    } else if (randInt < 136) {
        format = 2
    } else if (randInt < 648) {
        format = 3
    } else if (randInt < 1160) {
        format = 4
    } else if (randInt < 1672) {
        format = 5
    } else if (randInt < 2184) {
        format = 6
    } else {
        format = 7
    }

    switch (format) {
        case 0:
            return `${'ASDFGHJK'[Math.floor(Math.random() * 8)]}——`
        case 1:
            return `${'asdfghjk'[Math.floor(Math.random() * 8)]}—${'asdfghjk'[Math.floor(Math.random() * 8)]}—`
        case 2:
            return `${'QWERTYUI'[Math.floor(Math.random() * 8)]}${'qwertyui'[Math.floor(Math.random() * 8)]}——`
        case 3:
            return `${'QWERTYUI'[Math.floor(Math.random() * 8)]}${'zxcvbnm,'[Math.floor(Math.random() * 8)]}—${'zxcvbnm,'[Math.floor(Math.random() * 8)]}—`
        case 4:
            return `${'ZXCVBNM<'[Math.floor(Math.random() * 8)]}${'zxcvbnm,'[Math.floor(Math.random() * 8)]}—${'asdfghjk,'[Math.floor(Math.random() * 8)]}—`
        case 5:
            return `${'ZXCVBNM<'[Math.floor(Math.random() * 8)]}${'qwertyui,'[Math.floor(Math.random() * 8)]}—${'ZXCVBNM<'[Math.floor(Math.random() * 8)]}—`
        case 6:
            return `${'asdfghjk'[Math.floor(Math.random() * 8)]}—${'ZXCVBNM<,'[Math.floor(Math.random() * 8)]}${'zxcvbnm,'[Math.floor(Math.random() * 8)]}—`
        case 7:
            return `${'ZXCVBNM<'[Math.floor(Math.random() * 8)]}${'zxcvbnm,'[Math.floor(Math.random() * 8)]}—${'ZXCVBNM<,'[Math.floor(Math.random() * 8)]}${'zxcvbnm,'[Math.floor(Math.random() * 8)]}—`
        default:
            return `${'ZXCVBNM<'[Math.floor(Math.random() * 8)]}${'zxcvbnm,'[Math.floor(Math.random() * 8)]}—${'ZXCVBNM<,'[Math.floor(Math.random() * 8)]}${'zxcvbnm,'[Math.floor(Math.random() * 8)]}—`
    }
}

const LongTextTypeWriter = (props: { delay: number, reverse?: boolean }) => {
    const { lang } = useContext(LangContext)
    const { delay, reverse } = props;

    const [text, setText] = useState('')
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (reverse) {

            // Bug in reverse
            if (currentText === "undefined") {
                setCurrentText("")
            }

            if (currentIndex === text.length) {
                setText(generateRandomNathLogogram() + " " + text)
            } else {
                timeout = setTimeout(() => {
                    setCurrentText(prevText => text[text.length - currentIndex] + prevText);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, delay);
            }
        } else {

            if (currentIndex === text.length) {
                setText(text + " " + generateRandomNathLogogram())
            } else {
                timeout = setTimeout(() => {
                    setCurrentText(prevText => prevText + text[currentIndex]);
                    setCurrentIndex(prevIndex => prevIndex + 1);
                }, delay);
            }
        }


        return () => clearTimeout(timeout);
    }, [currentIndex, delay, text]);

    useEffect(() => {
        setCurrentText('');
        setCurrentIndex(0);
    }, [lang])

    return <span>{currentText}</span>;
};

export default LongTextTypeWriter;