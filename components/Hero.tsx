
"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, useRef } from "react";
import { RESUME_DATA } from "@/lib/data";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Mouse Spotlight Effect with Spring for smoothness
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

    return (
        <motion.section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            style={{ opacity }}
            className="group relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white"
        >
            {/* Spotlight Gradient using Spring values */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseXSpring}px ${mouseYSpring}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

            <motion.div
                style={{ y, scale }}
                className="z-10 flex flex-col items-center text-center px-6 max-w-4xl"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-xs font-medium tracking-wide text-white/80 backdrop-blur-md">
                        Available for work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 pb-4"
                >
                    {RESUME_DATA.name}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="mt-6 text-xl md:text-3xl text-zinc-400 font-light tracking-wide max-w-2xl text-balance"
                >
                    {RESUME_DATA.title}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-8 text-zinc-500 text-sm md:text-base max-w-lg mx-auto"
                >
                    {RESUME_DATA.summary}
                </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </motion.div>
        </motion.section>
    );
}
