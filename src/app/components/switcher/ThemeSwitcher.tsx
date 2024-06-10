"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Switch } from "@nextui-org/react";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState<boolean>(false)
    const { theme, setTheme } = useTheme()
    const [isChecked, setIsChecked] = useState<boolean | undefined>()

    useEffect(() => {
        setMounted(true)
        setIsChecked(theme === 'dark')
    }, [])

    if (!mounted) return null

    return (
        <Switch
            isSelected={isChecked}
            color="default"
            thumbIcon={({ isSelected }) =>
                <FontAwesomeIcon icon={isSelected ? faSun : faMoon} color="#27272a" />
            }
            onChange={() => {
                setTheme(theme === 'light' ? "dark" : "light")
                setIsChecked(theme === 'light')
            }}
        >
        </Switch>
    )
}