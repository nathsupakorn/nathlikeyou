"use client"

import { Dispatch, SetStateAction, createContext, useState } from "react"
import localFont from 'next/font/local'
import { Source_Code_Pro } from 'next/font/google'

type TLang = "en" | "nt"

type TLangContext = {
    lang: TLang,
    setLang: Dispatch<SetStateAction<TLang>>
}

const nathFont = localFont({
    src: '../../../public/Nath.ttf',
    display: 'swap',
})

const sourceCodeProFont = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
})

export const LangContext = createContext({} as TLangContext)

export default function LangProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<TLang>("en")

    return <LangContext.Provider value={{ lang, setLang }}>
        <span
            className={lang === 'nt' ? `${nathFont.className} sm:text-lg md:text-xl` : `${sourceCodeProFont.className} sm:text-lg md:text-xl`}
        >
            {children}
        </span>
    </LangContext.Provider>
}