'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@nextui-org/react";
import NathLogo from "../svg/NathLogo";
import LangSwitcher from "../switcher/LangSwicher";
import ThemeSwitcher from "../switcher/ThemeSwitcher";
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import enJSON from '../../_dictionaries/en.json';
import { getDictionary } from '../../dictionaries'
import { LangContext } from '../../_contexts/LangProvider'
import { useContext, useState, useEffect } from 'react'
import FollwerPointerSwitcher from "../switcher/FollwerPointerSwitcher"
import localFont from 'next/font/local'
import { Source_Code_Pro } from 'next/font/google'

const nathFont = localFont({
    src: '../../../../public/Nath.ttf',
    display: 'swap',
})

const sourceCodeProFont = Source_Code_Pro({
    subsets: ['latin'],
    display: 'swap',
})


const AppNavBar = () => {
    const { lang } = useContext(LangContext)
    const [dict, setDict] = useState(enJSON)

    const setupPage = async () => {
        const newDict = await getDictionary(lang)
        setDict(newDict)
    }

    useEffect(() => {
        setupPage()
    }, [lang])


    const menuItems = [
        { key: "persona_stele", value: dict.navbar.stelle },
        { key: "resume", value: dict.navbar.resume },
        { key: "nath_logogram", value: dict.navbar.nath_logogram },
    ]

    return (<Navbar disableAnimation isBordered>
        <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
                <NathLogo svg={{ width: 25 }} />
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
                <NathLogo svg={{ width: 25 }} />
            </NavbarBrand>
            <NavbarItem>
                <Link color="foreground" href="#persona_stele">
                    <span style={{ fontSize: lang === "nt" ? 20 : 16 }}>
                        {dict.navbar.stelle}
                    </span>
                </Link>
            </NavbarItem>
            <NavbarItem isActive>
                <Link color="warning" href="#resume" aria-current="page" >
                    <span style={{ fontSize: lang === "nt" ? 20 : 16 }}>
                        {dict.navbar.resume}
                    </span>
                </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#nath_logogram">
                    <span style={{ fontSize: lang === "nt" ? 20 : 16 }}>
                        {dict.navbar.nath_logogram}
                    </span>
                </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
            <NavbarItem className="flex lg:hidden">
                <Popover
                    showArrow
                    offset={10}
                    placement="bottom-end"
                    backdrop={"blur"}
                >
                    <PopoverTrigger>
                        <Button variant="flat" className="capitalize">
                            <FontAwesomeIcon icon={faGear} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full">
                        {(titleProps) => (
                            <div className="px-1 py-2 w-full">
                                <p className="text-small font-bold text-foreground" {...titleProps}>
                                    General Setting
                                </p>
                                <div className="mt-2 flex flex-col gap-2 w-full">
                                    <div className="flex gap-2">
                                        <div className="flex-none w-24">Language</div>
                                        <div className="flex-auto"><LangSwitcher /></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-none w-24">Blur Eye</div>
                                        <div className="flex-auto"><FollwerPointerSwitcher /></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-none w-24">Theme</div>
                                        <div className="flex-auto"><ThemeSwitcher /></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </PopoverContent>
                </Popover>
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
                <LangSwitcher />
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
                <FollwerPointerSwitcher />
            </NavbarItem>
            <NavbarItem className="hidden lg:flex">
                <ThemeSwitcher />
            </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
            {menuItems.map((item) => (
                <NavbarMenuItem key={item.key}>
                    <Link
                        className="w-full"
                        color={"foreground"}
                        href={`#${item.key}`}
                        size="lg"
                    >
                        <span
                            className={lang === 'nt' ? `${nathFont.className} sm:text-lg md:text-xl` : `${sourceCodeProFont.className} sm:text-lg md:text-xl`}

                        >
                            {item?.value}
                        </span>
                    </Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    </Navbar >)
}

export default AppNavBar;