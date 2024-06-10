"use client"

import { Source_Code_Pro } from 'next/font/google'
import { useEffect, useState } from "react";
import NathFont from '../texts/NathFont';
import { Switch } from "@nextui-org/react";
import { useContext } from 'react';
import { LangContext } from "../../_contexts/LangProvider";

const source_code_pro = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
})

export default function LangSwitcher() {
    const [isChecked, setIsChecked] = useState<boolean | undefined>(false)
    const { lang, setLang } = useContext(LangContext)


    useEffect(() => {
        if (lang === "nt") {
            setIsChecked(true)
        } else {
            setIsChecked(false)
        }
    }, [])

    return (
        <Switch
            isSelected={isChecked}
            color="default"
            thumbIcon={({ isSelected }) =>
                isSelected ?
                    <span className={source_code_pro.className} style={{ color: "#27272a", fontSize: 12 }}>EN</span>
                    : <NathFont style={{ color: "#27272a", fontSize: 20 }}>Bz—Z,—</NathFont>
            }
            onChange={() => {
                setIsChecked((val) => !val)
                setLang(lang === "nt" ? "en" : 'nt')
            }}
        >
        </Switch>
    )
};