
"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";
import { MouseEvent } from "react";
import Image from "next/image";

function ProjectCard({ project, index }: { project: typeof RESUME_DATA.projects[number]; index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className={`group relative rounded-3xl bg-zinc-900 border border-white/10 overflow-hidden ${index === 0 || index === 3 ? "md:col-span-2" : ""
                }`}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Hover Glow Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 40%
            )
          `,
                }}
            />

            <div className="relative h-full p-8 flex flex-col justify-end z-20 min-h-[400px]">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-2 rounded-full bg-black/50 text-white border border-white/10 backdrop-blur-md">
                            <Github size={20} />
                        </div>
                        <a
                            href={project.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md"
                        >
                            View Project <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">
                        {project.title}
                    </h3>

                    <p className="text-zinc-300 font-light leading-relaxed mb-6 max-w-md text-balance">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-md"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section className="py-32 px-4 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                        Selected Work
                    </h2>
                    <div className="h-1 w-20 bg-white/20 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {RESUME_DATA.projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
