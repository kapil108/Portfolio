import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ variant = 'A' }) => {
    const [taglineIndex, setTaglineIndex] = useState(0);

    const taglines = [
        "Data Analyst | ML Engineer | Turning raw data into intelligent systems.",
        "I build production-ready ML and analytics systems that drive decisions."
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const primaryCtaText = variant === 'A' ? "View Projects" : "See Case Studies";

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f1113] text-white selection:bg-[#0ea5ff] selection:text-white">
            {/* Background Grid & Particles */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#0ea5ff] opacity-20 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                {/* Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mb-6"
                >
                    {['Data Analytics', 'Machine Learning', 'Backend + APIs'].map((badge) => (
                        <span key={badge} className="px-3 py-1 text-sm font-medium tracking-wide text-[#0ea5ff] bg-[#0ea5ff]/10 rounded-full border border-[#0ea5ff]/20">
                            {badge}
                        </span>
                    ))}
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-display"
                >
                    {variant === 'A' ? (
                        <>
                            Kapil Sarathe <span className="text-gray-500">—</span> <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                                Data Analyst & ML Engineer.
                            </span>
                        </>
                    ) : (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            I build production ML systems and analytics dashboards.
                        </span>
                    )}
                </motion.h1>

                {/* Animated Tagline (Terminal Style) */}
                <div className="h-16 md:h-12 mb-6 flex items-center justify-center">
                    <motion.p
                        key={taglineIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-lg md:text-xl text-gray-400 font-mono"
                    >
                        {`> ${taglines[taglineIndex]}`}
                        <span className="animate-pulse">_</span>
                    </motion.p>
                </div>

                {/* Subline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 mb-10 text-base md:text-lg max-w-2xl mx-auto"
                >
                    IIIT Bhopal IT — building backend-powered ML products, dashboards and RAG systems.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#projects" className="px-8 py-3.5 rounded-lg bg-[#0ea5ff] text-white font-semibold hover:bg-[#0ea5ff]/90 transition-all shadow-[0_0_20px_-5px_#0ea5ff] hover:shadow-[0_0_25px_-5px_#0ea5ff] flex items-center justify-center gap-2 group">
                        {primaryCtaText}
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                    <a href="https://drive.google.com/file/d/1hJAe6vFnd1R5QYY4mddsIINbXhG3w9BA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg bg-[#1a1d21] text-gray-300 border border-gray-800 hover:border-gray-600 hover:text-white transition-all font-medium flex items-center justify-center gap-2">
                        View Resume
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
