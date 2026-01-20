
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";

const TimelineItem = ({ item, index }: { item: typeof RESUME_DATA.work[number]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-12 py-10 border-l border-white/10 last:border-0 group"
        >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-12 h-2.5 w-2.5 rounded-full bg-zinc-800 ring-4 ring-black group-hover:bg-white group-hover:ring-white/20 transition-all duration-300" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                    {item.company}
                </h3>
                <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">
                    {item.start} — {item.end}
                </span>
            </div>

            <p className="text-lg text-white/80 font-medium mb-4">{item.title}</p>

            <p className="text-zinc-400 leading-relaxed font-light text-base max-w-2xl">
                {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
                {item.badges.map((badge) => (
                    <span
                        key={badge}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-white/5 text-zinc-400 border border-white/5 group-hover:border-white/10 transition-colors"
                    >
                        {badge}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export function Experience() {
    return (
        <section className="py-32 px-4 bg-zinc-950/50">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tighter"
                >
                    Professional Journey
                </motion.h2>

                <div className="relative">
                    {/* Simple Gradient Line Overlay for "Progress" effect visual */}
                    <div className="absolute left-[0px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                    <div className="ml-2">
                        {RESUME_DATA.work.map((item, index) => (
                            <TimelineItem key={item.company} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
