import React from 'react';

const Skills = () => {
    const skills = {
        "Data Analytics": [
            { name: "SQL", level: "Expert", width: "95%" },
            { name: "Excel (Advanced)", level: "Expert", width: "95%" },
            { name: "Power BI", level: "Proficient", width: "85%" },
            { name: "KPI Analysis", level: "Proficient", width: "80%" },
            { name: "Data Cleaning", level: "Proficient", width: "85%" },
        ],
        "ML & AI": [
            { name: "Python", level: "Expert", width: "90%" },
            { name: "Pandas & NumPy", level: "Expert", width: "90%" },
            { name: "Random Forest", level: "Proficient", width: "80%" },
            { name: "RAG (Gemini+FAISS)", level: "Proficient", width: "85%" },
            { name: "Prompt Eng.", level: "Working", width: "70%" },
        ],
        "Backend & Infra": [
            { name: "FastAPI", level: "Proficient", width: "85%" },
            { name: "PostgreSQL", level: "Proficient", width: "80%" },
            { name: "REST APIs", level: "Proficient", width: "85%" },
            { name: "JWT Auth", level: "Proficient", width: "80%" },
            { name: "Async Services", level: "Working", width: "65%" },
        ],
        "Tools": [
            { name: "Git & GitHub", level: "Proficient", width: "85%" },
            { name: "VS Code", level: "Expert", width: "95%" },
            { name: "Streamlit", level: "Proficient", width: "90%" },
            { name: "Railway", level: "Proficient", width: "80%" },
            { name: "Search Console", level: "Working", width: "60%" },
        ]
    };

    return (
        <section className="py-20 bg-[#0f1113] text-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-[#0ea5ff]"></span>
                    Technical Arsenal
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-[#1a1d21] p-6 rounded-xl border border-gray-800 hover:border-[#0ea5ff]/30 transition-colors">
                            <h3 className="text-xl font-semibold mb-6 text-[#0ea5ff]">{category}</h3>
                            <div className="space-y-5">
                                {items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                            <span className="text-xs text-gray-500">{skill.level}</span>
                                        </div>
                                        <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className="bg-gradient-to-r from-[#0ea5ff] to-[#16a34a] h-1.5 rounded-full"
                                                style={{ width: skill.width }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
