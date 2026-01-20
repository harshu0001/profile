
"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/lib/data";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export function Contact() {
    return (
        <footer className="py-24 px-4 bg-zinc-950 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter"
                >
                    Let's work together.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-zinc-400 text-lg mb-12 max-w-md"
                >
                    Interested in building something unique? I'm always open to discussing new projects and opportunities.
                </motion.p>

                <motion.a
                    href={`mailto:${RESUME_DATA.contact.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors"
                >
                    <Mail size={20} />
                    <span>Get in Touch</span>
                </motion.a>

                <div className="mt-16 flex items-center gap-6">
                    {RESUME_DATA.contact.social.map((social) => {
                        const Icon = social.name === "GitHub" ? Github : social.name === "LinkedIn" ? Linkedin : Twitter;

                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-white transition-colors p-2"
                                aria-label={social.name}
                            >
                                <Icon size={24} />
                            </a>
                        );
                    })}
                </div>

                <p className="mt-16 text-zinc-600 text-sm">
                    © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
