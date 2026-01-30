import OlaChart from './OlaChart';

const Projects = () => {
    const projects = [
        {
            id: 'pharma',
            title: "Intelligent Pharma-Context Engine",
            category: "Pharma AI",
            tech: ["Python", "YOLOv8", "OpenCV", "EasyOCR", "RxNorm", "Streamlit"],
            stats: [
                "95%+ OCR Accuracy",
                "Real-time Validation",
                "RxNorm Integrated"
            ],
            description: "End-to-end computer vision pipeline for pharmaceutical package data extraction and drug verification.",
            details: {
                problem: "Manual entry of pharmaceutical data is error-prone and slow, especially with noisy image sources.",
                approach: "Designed a CV pipeline using YOLOv8 for detection and EasyOCR with custom OpenCV preprocessing (Dewarping, CLAHE).",
                impact: "Achieved high accuracy on noisy package images and integrated RxNorm/OpenFDA to minimize CER using Levenshtein distance."
            },
            links: { repo: "https://github.com/kapil108/Intelligent-Pharma-Context-Engine", demo: "https://intelligent-pharma-context-engine-zz.streamlit.app/" },
            featured: false
        },
        {
            id: 'rag',
            title: "Multimodal AI Stress Platform",
            category: "Flagship Project",
            tech: ["FastAPI", "Streamlit", "RAG (Gemini+FAISS)", "Random Forest", "Railway"],
            stats: [
                "Latency <200ms",
                "99.9% Uptime Goal",
                "10k+ Records Processed"
            ],
            description: "A comprehensive health coaching platform deploying context-aware AI.",
            details: {
                problem: "Traditional health apps lack real-time context and personalized feedback.",
                approach: "Built a RAG retrieval layer with Gemini + FAISS to serve personalized advice based on user context.",
                impact: "Delivered context-aware health coaching; engineered reliable inference pipeline (<200ms) and integrated analytics for model drift detection."
            },
            links: { repo: "https://github.com/kapil108/Ai_Health", demo: "https://aihealth-5ysgdhkb4ttrryrbtlovje.streamlit.app/" },
            featured: true
        },
        {
            id: 'ola',
            title: "Ola Ride Analytics Dashboard",
            category: "Data Analytics",
            tech: ["SQL", "Excel", "Power BI"],
            stats: [
                "103k+ Records",
                "₹35M Revenue Analyzed",
                "28.08% Cancellation Rate"
            ],
            description: "Executive-level dashboard for analyzing ride cancellations and revenue.",
            details: {
                problem: "High cancellation rates were impacting revenue, but drivers were unknown.",
                approach: "Processed raw trip data to identify root causes using Power BI visualizations.",
                impact: "Identified top cancellation drivers and produced an executive dashboard used for stakeholder decisions."
            },
            links: { repo: "https://github.com/kapil108/Ola-Ride-Analytics-Dashboard" },
            featured: true
        },
        {
            id: 'cricket',
            title: "Cricket Data Analytics Dashboard",
            category: "Sports Analytics",
            tech: ["Python", "Power BI", "DAX"],
            stats: [
                "Web-scraped Dataset",
                "Player Selection Insights",
                "Interactive .pbix"
            ],
            description: "Performance analysis tool for match and player selection.",
            details: {
                problem: "Selectors needed data-driven insights for optimal team composition.",
                approach: "Web-scraped data, preprocessed with Python, and modeled with complex DAX measures.",
                impact: "Enabled data-driven match & player selection insights; shared interactive .pbix."
            },
            links: { repo: "https://github.com/kapil108/Cricket-DataAnalyst" },
            featured: false
        },
        {
            id: 'robil',
            title: "Robil Backend",
            category: "Backend Engineering",
            tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"],
            stats: [
                "Secure Auth",
                "Scalable Schema",
                "Async Operations"
            ],
            description: "Built secure and scalable backend services for mobile app operations.",
            details: {
                problem: "Mobile app needed a robust, secure backend to handle user operations.",
                approach: "Designed a clean architecture using FastAPI and SQLAlchemy with JWT authentication.",
                impact: "Implemented robust security and scalable database schema for smooth app operations."
            },
            links: { repo: "https://github.com/kapil108" },
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-20 bg-[#0f1113] text-gray-300">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-[#0ea5ff]"></span>
                    Selected Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className={`group bg-[#16181c] rounded-2xl border border-gray-800 hover:border-[#0ea5ff]/50 transition-all duration-300 flex flex-col h-full overflow-hidden ${project.featured ? 'md:col-span-2 md:grid md:grid-cols-2 lg:col-span-2' : ''}`}
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold tracking-wider text-[#0ea5ff] uppercase px-2 py-1 bg-[#0ea5ff]/10 rounded">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-3">
                                        {project.links.repo && (
                                            <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="View Repository">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="View Live Demo">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#0ea5ff] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6">{project.details.impact}</p>

                                <div className="mt-auto space-y-4">
                                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-800">
                                        {project.stats.map((stat, i) => (
                                            <div key={i} className="text-center">
                                                <span className="block text-xs text-[#0ea5ff] font-semibold">{stat}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-2 text-sm pt-2">
                                        <p><strong className="text-gray-300">Problem:</strong> {project.details.problem}</p>
                                        <p><strong className="text-gray-300">Approach:</strong> {project.details.approach}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded border border-gray-700">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {project.featured && project.id === 'rag' && (
                                <div className="hidden md:flex bg-[#1a1d21] p-8 border-l border-gray-800 items-center justify-center relative overflow-hidden">
                                    {/* Visual RAG Architecture Diagram */}
                                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
                                        <div className="flex items-center gap-4 z-10 w-full justify-around">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-[#0ea5ff]">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                                </div>
                                                <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-500">User</span>
                                            </div>

                                            <div className="w-8 h-[2px] bg-gradient-to-r from-[#0ea5ff] to-[#16a34a] relative">
                                                <div className="absolute top-1/2 left-0 w-1 h-1 bg-[#0ea5ff] rounded-full animate-ping"></div>
                                            </div>

                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-16 h-16 rounded-xl bg-[#0ea5ff]/10 border border-[#0ea5ff]/30 flex items-center justify-center text-[#0ea5ff] shadow-[0_0_15px_-5px_#0ea5ff]">
                                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                                </div>
                                                <span className="text-[10px] uppercase font-bold tracking-tighter text-[#0ea5ff]">Gemini Pro</span>
                                            </div>

                                            <div className="w-8 h-[2px] bg-gradient-to-r from-[#16a34a] to-[#0ea5ff]"></div>

                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-[#16a34a]">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                                                </div>
                                                <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-500">FAISS DB</span>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 flex items-center justify-center text-gray-800/10 text-9xl font-black select-none pointer-events-none uppercase">
                                            RAG
                                        </div>

                                        <div className="px-4 py-2 rounded bg-black/50 border border-gray-800 text-[11px] text-gray-400 font-mono">
                                            query -&gt; vector -&gt; retrieve -&gt; augment
                                        </div>
                                    </div>
                                </div>
                            )}

                            {project.featured && project.id === 'ola' && (
                                <div className="hidden md:flex bg-[#1a1d21] p-8 border-l border-gray-800 items-center justify-center">
                                    <div className="w-full max-w-sm">
                                        <OlaChart />
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
