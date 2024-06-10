import { motion, useScroll, useSpring, useTransform, useMotionValue, useMotionValueEvent, useVelocity } from "framer-motion"
import { ReactNode, useEffect, useRef, useState, Children } from 'react'
import { wrap } from "@motionone/utils"

export default function ScrollYItem({ children, reverse }: { children: ReactNode, reverse?: boolean }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const baseX = useMotionValue(0)
  const revBaseX = useMotionValue(0)
  const x = useTransform(baseX, (v) => `${wrap(-1000, 1000, v)}%`);
  const revX = useTransform(revBaseX, (v) => `${wrap(-1000, 1000, v)}%`);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    baseX.set((latest - 0.5) * 200 * (2 * Number(!reverse) - 1))
    revBaseX.set((latest - 0.5) * 200 * (2 * Number(reverse) - 1))
  })

  return (
    <section>
      <div ref={ref} className="overflow-hidden">
        {Children.map(children, (child, idx) => {
          return (<motion.div style={{ x: idx % 2 === 0 ? x : revX, padding: '10px 0px 10px 0px' }}>
            {child}
          </motion.div>)
        })}
      </div>
    </section >
  );
}