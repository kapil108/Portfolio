import React from 'react';

const Achievements = () => {
    return (
        <section className="py-20 bg-[#0f1113] text-gray-300 border-t border-gray-800/50">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-[#0ea5ff]"></span>
                    Achievements & Certificates
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#16181c] p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-[#0ea5ff]/30 transition-colors">
                        <div className="text-[#0ea5ff] mt-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg">1st Place — Wordsmith Clash</h3>
                            <p className="text-sm text-gray-500">Today’s Nifty (1000+ participants)</p>
                        </div>
                    </div>

                    <div className="bg-[#16181c] p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-[#0ea5ff]/30 transition-colors">
                        <div className="text-[#16a34a] mt-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg">17th / 5000+ Rank</h3>
                            <p className="text-sm text-gray-500">AlgoUniversity Coding Contest</p>
                        </div>
                    </div>

                    <div className="bg-[#16181c] p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-[#0ea5ff]/30 transition-colors">
                        <div className="text-[#eab308] mt-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg">Competitive Programming</h3>
                            <div className="flex gap-4 mt-1 text-sm text-gray-400">
                                <span>CodeChef: <strong className="text-white">1703</strong></span>
                                <span>Codeforces: <strong className="text-white">1054</strong></span>
                            </div>
                        </div>
                    </div>

                    <a href="https://drive.google.com/file/d/1WcJtuyzlNd_vGRFoNxdeSBq-9skNade0/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-[#16181c] p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-[#0ea5ff] group transition-all cursor-pointer">
                        <div className="text-[#0ea5ff] mt-1 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg group-hover:text-[#0ea5ff] transition-colors">View Certificate</h3>
                            <p className="text-sm text-gray-500">Google Drive Verification</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
