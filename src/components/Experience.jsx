import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "Data Science Intern",
            period: "June 2025 - August 2025",
            role: "Machine Learning & Analytics",
            description: "Worked on optimizing data pipelines and building predictive models for business intelligence.",
            achievements: [
                "Automated data extraction from multiple sources using Python, reducing manual effort by 40%.",
                "Developed a customer churn prediction model with 85% accuracy using Random Forest.",
                "Designed interactive Power BI dashboards for executive-level performance tracking."
            ],
            tech: ["Python", "SQL", "Scikit-Learn", "Power BI"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-[#0f1113] text-gray-300 border-t border-gray-800/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-[#0ea5ff]"></span>
                    Experience
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l border-gray-800">
                            {/* Dot on timeline */}
                            <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#0ea5ff] shadow-[0_0_10px_#0ea5ff]"></div>

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                    <p className="text-[#0ea5ff] font-medium">{exp.role}</p>
                                </div>
                                <span className="text-sm text-gray-500 font-mono mt-1 md:mt-0">{exp.period}</span>
                            </div>

                            <p className="text-gray-400 mb-6 italic">{exp.description}</p>

                            <ul className="space-y-3 mb-6">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm">
                                        <svg className="w-4 h-4 text-[#16a34a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span key={t} className="text-[10px] px-2 py-0.5 bg-gray-800 text-gray-400 rounded border border-gray-700 uppercase tracking-wider">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
