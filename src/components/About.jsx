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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                { title: "Production ML", text: "I build and deploy scalable RAG and inference pipelines." },
                                { title: "Full-Stack Data", text: "End-to-end expertise from SQL queries to Power BI dashboards." },
                                { title: "Business Impact", text: "I focus on optimization, revenue, and actionable insights." },
                                { title: "Problem Solver", text: "Strong foundation in data structures and competitive coding." }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                                    <div className="mt-1 text-[#16a34a] flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5 bg-[#16a34a]/10 rounded-full p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-bold mb-1">{item.title}</p>
                                        <p className="text-gray-400 text-xs leading-relaxed">{item.text}</p>
                                    </div>
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
