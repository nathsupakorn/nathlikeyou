import { useState, RefObject, useEffect } from "react";
import { useMotionValue, useSpring, frame, useScroll, useMotionValueEvent } from "framer-motion";

const spring = { damping: 20, stiffness: 100, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
    const xPoint = useMotionValue(-150);
    const yPoint = useMotionValue(-150);
    const [currentY, setCurrentY] = useState<number>(0);
    const { scrollY } = useScroll()
    const x = useSpring(xPoint, spring);
    const y = useSpring(yPoint, spring);

    useMotionValueEvent(scrollY, "change", (latest) => {
        yPoint.set(latest - currentY + yPoint.get())
        setCurrentY(latest)
    })

    useEffect(() => {
        if (!ref.current) return;

        const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
            const element = ref.current!;

            frame.read(() => {
                xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2);
                yPoint.set(scrollY.get() + clientY - element.offsetTop - element.offsetHeight / 2);
            })
        }

        window.addEventListener("pointermove", handlePointerMove);

        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return { x, y };
}
