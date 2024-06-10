"use client";
import React from 'react';

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import LangProvider from "./_contexts/LangProvider";
import FollowerPointerProvider from './_contexts/FollowerPointerProvider';


export function Providers({ children }: { children: React.ReactNode }) {

    return (
        <FollowerPointerProvider>
            <LangProvider>
                <NextUIProvider>
                    <NextThemesProvider attribute="class" defaultTheme="dark">
                        {children}
                    </NextThemesProvider>
                </NextUIProvider>
            </LangProvider>
        </FollowerPointerProvider>
    )
}