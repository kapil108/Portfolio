import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0f1113] text-gray-300 border-t border-gray-800/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-[#16a34a]"></span>
                    About Me
                </h2>

                <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                    <p>
                        I am a final-year <strong className="text-white">B.Tech IT student at IIIT Bhopal</strong> (Class of 2026), comfortable shipping production systems. I bridge the gap between raw data and actionable intelligence, combining rigorous engineering with analytical depth.
                    </p>

                    <p>
                        My hands-on experience spans executing SQL queries on <strong className="text-[#0ea5ff]">100K+ rows</strong>, designing complex Power BI dashboards, and orchestrating Python ML pipelines. I build scalable backends with <strong className="text-white">FastAPI</strong> and implement advanced LLM & RAG architectures using <strong className="text-white">Gemini and FAISS</strong>.
                    </p>

                    <div className="pt-4">
                        <blockquote className="border-l-4 border-[#0ea5ff] pl-4 italic text-white bg-white/5 py-4 rounded-r-lg">
                            “I design intelligence around data to solve real problems.”
                        </blockquote>
                    </div>

                    <div className="pt-8">
                        <h3 className="text-xl font-bold text-white mb-6">Why Hire Me?</h3>
                        <div className="space-y-4">
                            {[
                                "Production-Ready ML: I don't just build models; I deploy scalable APIs.",
                                "Full-Stack Data: From raw SQL queries to interactive Power BI dashboards.",
                                "Immediate Impact: Familiar with enterprise tools (Git, Docker, CI/CD).",
                                "Business-First Mindset: I optimize for revenue and efficiency, not just accuracy.",
                                "Problem Solver: Proven track record in hackathons and competitive programming."
                            ].map((point, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="mt-1 text-[#16a34a] flex-shrink-0">
                                        <svg className="w-5 h-5 bg-[#16a34a]/10 rounded-full p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <p className="text-gray-300 text-base">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
