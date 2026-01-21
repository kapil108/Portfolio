import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0f1113] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0ea5ff]/50 to-transparent"></div>

            <div className="container mx-auto px-6 max-w-4xl text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Let's Build Intelligence</h2>
                <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                    Hiring? Let’s chat — I’m open to Data Analyst, ML Engineer and AI Intern roles.
                </p>

                <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                    {/* Direct Contact Info */}
                    <div className="text-left space-y-4">
                        <a href="mailto:kapilsarathe83@gmail.com" className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1d21] border border-gray-800 hover:border-[#0ea5ff] transition-colors group min-w-[300px]">
                            <div className="w-10 h-10 rounded-full bg-[#0ea5ff]/10 flex items-center justify-center text-[#0ea5ff] group-hover:bg-[#0ea5ff] group-hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Email Me</p>
                                <p className="text-white font-medium">kapilsarathe83@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="https://www.linkedin.com/in/kapil-sarathe-07874a38b/" className="px-4 py-2 text-sm text-gray-400 bg-[#1a1d21] rounded border border-gray-800 hover:text-white hover:border-gray-600 transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://github.com/kapil108" className="px-4 py-2 text-sm text-gray-400 bg-[#1a1d21] rounded border border-gray-800 hover:text-white hover:border-gray-600 transition-colors">
                                GitHub
                            </a>
                            <a href="https://www.codechef.com/users/outlaw_01" className="px-4 py-2 text-sm text-gray-400 bg-[#1a1d21] rounded border border-gray-800 hover:text-white hover:border-gray-600 transition-colors">
                                CodeChef
                            </a>
                            <a href="https://codeforces.com/profile/OUTLAW01" className="px-4 py-2 text-sm text-gray-400 bg-[#1a1d21] rounded border border-gray-800 hover:text-white hover:border-gray-600 transition-colors">
                                Codeforces
                            </a>
                        </div>
                    </div>

                    {/* Simple Form */}
                    <form
                        action="mailto:kapilsarathe83@gmail.com"
                        method="post"
                        encType="text/plain"
                        className="w-full max-w-md bg-[#16181c] p-6 rounded-xl border border-gray-800"
                    >
                        <div className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Name" className="w-full bg-[#0f1113] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5ff] focus:ring-1 focus:ring-[#0ea5ff] transition-all" required />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email" className="w-full bg-[#0f1113] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5ff] focus:ring-1 focus:ring-[#0ea5ff] transition-all" required />
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="How can I help?" className="w-full bg-[#0f1113] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0ea5ff] focus:ring-1 focus:ring-[#0ea5ff] transition-all" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#0ea5ff] text-white font-semibold py-3 rounded-lg hover:bg-[#0ea5ff]/90 transition-colors">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
