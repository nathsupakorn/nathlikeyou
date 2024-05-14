// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { Button } from '@nextui-org/button'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState<boolean>(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            <Button isIconOnly onClick={() => setTheme(theme === 'light' ? "dark" : "light")}>
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} size="lg" />
            </Button>
        </div >
    )
};