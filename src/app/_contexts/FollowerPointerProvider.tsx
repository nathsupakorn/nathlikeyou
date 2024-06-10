"use client"
import { motion } from "framer-motion"
import { useFollowPointer } from '../components/motion/FollowPointer'
import { Dispatch, useRef, createContext, SetStateAction, useState } from "react"
import picture from '/len_filter.svg'

type TFollowerPointer = {
    hasFollower: boolean,
    setHasFollwer: Dispatch<SetStateAction<boolean>>
}

export const FollowerPointerContext = createContext({} as TFollowerPointer)

export default function FollowerPointerProvider({ children }: { children: React.ReactNode }) {
    const pointerRef = useRef(null)
    const [hasFollower, setHasFollwer] = useState<boolean>(false)
    const { x, y } = useFollowPointer(pointerRef)

    return (
        <FollowerPointerContext.Provider value={{ hasFollower, setHasFollwer }}>
            <motion.div ref={pointerRef} style={{
                x: x,
                y: y,
                width: hasFollower ? "150px" : '0px',
                height: hasFollower ? "150px" : '0px',
                borderRadius: "50%",
                backgroundImage: "linear-gradient(to bottom right, rgba(200, 200, 200, 0), rgba(200, 200, 200, 0.2))",
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                position: 'absolute',
                borderBlockWidth: "1px",
                zIndex: 20,
            }} />
            {children}
        </FollowerPointerContext.Provider>
    )
}