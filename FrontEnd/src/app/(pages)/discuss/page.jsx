import React from "react"
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const discuss = (props) => {
    return (
        <div className="bg-[#080E1C]">
            {/* header area */}
            <Header />

            <div className="max-w-4xl mx-auto px-6 py-10">
                {/* top controls */}
                <div className="bg-[#131C2C] flex items-center gap-4 mb-8">
                    <div className="relative">
                        <select className="appearance-none bg-[#0b1220] text-slate-200 px-4 py-2 rounded-md border-2 border-[#334155] shadow-sm pr-8">
                            <option>All</option>
                            <option>Announcements</option>
                            <option>General</option>
                        </select>
                        <svg className="w-4 h-4 text-slate-300 absolute right-2 top-2 pointer-events-none mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    <div className="flex-1">
                        <label className="sr-only">Search</label>
                        <input placeholder="Search ..." className="w-full bg-transparent border-2 border-[#334155] rounded-md px-4 py-2 focus:ring-brand-500 focus:border-brand-500" />
                    </div>

                    <button className="ml-auto px-4 py-2 text-sm rounded-md text-[#fff] bg-[#1e293b] border border-[#202636] hover:bg-[#334155] cursor-pinter">+ New Discussion</button>
                </div>

                {/* posts */}
                <div className="space-y-6">

                    {/* card 1 */}
                    <article className="bg-[#131C2C] border border-[#17202a] rounded-lg shadow-sm overflow-hidden">
                        <div className="p-5 flex gap-4">
                            {/* avatar + timeline */}
                            <div className="flex-shrink-0 relative">
                                <Image
                                    src="https://i.pravatar.cc/48?img=12"
                                    alt="avatar"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full border-2 border-[#0f1724]"
                                />
                                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-[#253544]" style={{ height: '72px' }}></div>
                            </div>

                            {/* content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-medium text-slate-300">manas-marthi</h4>
                                    <span className="text-sm text-slate-400">· 2 months ago</span>
                                </div>

                                <h3 className="text-lg font-extrabold text-white mb-2">about websockets</h3>

                                <p className="text-slate-300 leading-relaxed mb-3 max-w-none">are there any videos on using websockets? <br /> I want to use websocket to send requests to backend to initiate long running tasks and and then receive push notifications from server when the jobs are finished</p>

                                <a href="#" className="text-sm font-medium text-indigo-400 hover:underline">Read more</a>

                                <div className="mt-4 flex items-center gap-3">
                                    {/* badges */}
                                    <div className="flex items-center gap-2 bg-[#08111a] px-3 py-1 rounded-md border border-[#1e2630]">
                                        <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                                        </svg>
                                        <span className="text-xs text-slate-300">1</span>
                                    </div>

                                    <div className="flex items-center gap-2 bg-[#08111a] px-3 py-1 rounded-md border border-[#1e2630]">
                                        <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                        <span className="text-xs text-slate-300">2</span>
                                    </div>

                                    <div className="flex items-center gap-2 bg-[#08111a] px-3 py-1 rounded-md border border-[#1e2630]">
                                        <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0122 9.618V16a2 2 0 01-2 2h-6" />
                                        </svg>
                                        <span className="text-xs text-slate-300">720</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* card 2 */}
                    <article className="bg-[#131C2C] border border-[#17202a] rounded-lg shadow-sm overflow-hidden">
                        <div className="p-5 flex gap-4">
                            {/* avatar + timeline */}
                            <div className="flex-shrink-0 relative">
                                <Image
                                    src="https://i.pravatar.cc/48?img=5"
                                    alt="avatar"
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full border-2 border-[#0f1724]"
                                />
                                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-[#253544]" style={{ height: '120px' }}></div>
                            </div>

                            {/* content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <h4 className="font-medium text-slate-300">Abdelmadjid Cherfaoui <span className="inline-block ml-2 px-2 py-0.5 text-xs rounded-md bg-[#1b2540] text-indigo-300">🏅</span></h4>
                                    <span className="text-sm text-slate-400">· 2 months ago</span>
                                </div>

                                <h3 className="text-xl font-extrabold text-white mb-3">EdgeJS extension for Zed code editor</h3>

                                <p className="text-slate-300 leading-relaxed mb-3">Hello folks, <br /><br /> Since I met AdonisJS, I adopted it to be my main framework for building web apps, I would love to thank the team behind it for this amazing work.<br /><br />Recently, I rediscovered Zed editor, which is the fastest code editor I have ever u...</p>

                                <a href="#" className="text-sm font-medium text-indigo-400 hover:underline">Read more</a>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 bg-[#08111a] px-3 py-1 rounded-md border border-[#1e2630]">
                                            <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                                            </svg>
                                            <span className="text-xs text-slate-300">5</span>
                                        </div>

                                        <div className="flex items-center gap-2 bg-[#08111a] px-3 py-1 rounded-md border border-[#1e2630]">
                                            <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" />
                                            </svg>
                                            <span className="text-xs text-slate-300">1</span>
                                        </div>

                                        <div className="flex items-center gap-2 bg-[#08111a] px-3 py-1 rounded-md border border-[#1e2630]">
                                            <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A2 2 0 0122 9.618V16a2 2 0 01-2 2h-6" />
                                            </svg>
                                            <span className="text-xs text-slate-300">1,717</span>
                                        </div>
                                    </div>

                                    <div className="ml-4">
                                        <span className="text-xs px-3 py-1 rounded-md bg-[#0d1726] border border-[#172236]">EdgeJS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </div>

            <Footer />
        </div>
    )
};

export default discuss;
