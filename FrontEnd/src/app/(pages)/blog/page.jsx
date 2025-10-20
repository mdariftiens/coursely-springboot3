import React from "react"
import Image from "next/image";
import Link from 'next/link'
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Blog = (props) => {
    return (
        <div className="bg-[#080E1C]">
            <Header />

            <section className="lesson_area">
                <div className="container mx-auto px-3 lg:px-5 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8">
                        <div className="space-y-[20px]">
                            <div className="mb-5">
                                <h1 className="text-2xl md:text-3xl xl:text-4xl font-heading font-black tracking-tight text-white">
                                    Lessons.
                                </h1>
                                <h3 className="text-[#818cf8] font-bold text-brand-600 uppercase relative z-10 mb-1.5 md:mb-0">
                                    Odds and Ins and news
                                </h3>
                            </div>

                            {/* Block 1 */}
                            <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                                <Image
                                    src="/assets/images/s0ugloteg5w4f8jzstwm0k7s.jpg"
                                    alt="lesson"
                                    width={320}
                                    height={180}
                                    className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="flex flex-col justify-center space-y-2">
                                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                        <p>Adding an Api to an Ado...</p>
                                        <div className="flex items-center gap-2">
                                            <span>#5.7</span>
                                            <span>.</span>
                                            <span>Jul 25</span>
                                        </div>
                                    </div>
                                    <h1 className="text-[#F0F4F8] text-xl font-bold">
                                        Fixing Our ESLint Integration
                                    </h1>
                                    <p className="text-[#94a3b8] text-[15px]">
                                        I ran into a ReferenceError and realized our ESLint wasn't
                                        working. In this lesson, we'll take a brief aside to fix the
                                        linting within our project so it works with ESLint v9.
                                    </p>
                                </div>
                            </div>

                            {/* Block 2 */}
                            <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                                <Image
                                    src="/assets/images/p5zhmeapntdknkhqu9qqa042.jpg"
                                    alt="lesson"
                                    width={320}
                                    height={180}
                                    className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="flex flex-col justify-center space-y-2">
                                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                        <p>Adding an Api to an Ado...</p>
                                        <div className="flex items-center gap-2">
                                            <span>#5.6</span>
                                            <span>.</span>
                                            <span>Jul 23</span>
                                        </div>
                                    </div>
                                    <h1 className="text-[#F0F4F8] text-xl font-bold">
                                        Getting Just Course Modules & Lessons
                                    </h1>
                                    <p className="text-[#94a3b8] text-[15px]">
                                        In this lesson, we'll remove our GET module route, using the
                                        except method on our resource. Then we'll refactor to add a
                                        GetModules action.
                                    </p>
                                </div>
                            </div>

                            {/* Block 3 */}
                            <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                                <Image
                                    src="/assets/images/rwo8i5iq2m399m8k81zlkp13.jpg"
                                    alt="lesson"
                                    width={320}
                                    height={180}
                                    className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="flex flex-col justify-center space-y-2">
                                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                        <p>Adding an Api to an Ado...</p>
                                        <div className="flex items-center gap-2">
                                            <span>#5.5</span>
                                            <span>.</span>
                                            <span>Jul 15</span>
                                        </div>
                                    </div>
                                    <h1 className="text-[#F0F4F8] text-xl font-bold">
                                        Course Module Nested Resource
                                    </h1>
                                    <p className="text-[#94a3b8] text-[15px]">
                                        In this lesson, we'll work on nested resourceful endpoints for
                                        our course modules. We'll add endpoints to create, update,
                                        patch, and deleting modules from a specific course.
                                    </p>
                                </div>
                            </div>

                            {/* Block 4 */}
                            <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                                <Image
                                    src="/assets/images/rwo8i5iq2m399m8k81zlkp13.jpg"
                                    alt="lesson"
                                    width={320}
                                    height={180}
                                    className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="flex flex-col justify-center space-y-2">
                                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                        <p>Adding an Api to an Ado...</p>
                                        <div className="flex items-center gap-2">
                                            <span>#5.5</span>
                                            <span>.</span>
                                            <span>Jul 15</span>
                                        </div>
                                    </div>
                                    <h1 className="text-[#F0F4F8] text-xl font-bold">
                                        Course Module Nested Resource
                                    </h1>
                                    <p className="text-[#94a3b8] text-[15px]">
                                        In this lesson, we'll work on nested resourceful endpoints for
                                        our course modules. We'll add endpoints to create, update,
                                        patch, and deleting modules from a specific course.
                                    </p>
                                </div>
                            </div>

                            {/* Block 5 */}
                            <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                                <Image
                                    src="/assets/images/drfexpqsk3n2pc4dbnzb17lr.jpg"
                                    alt="lesson"
                                    width={320}
                                    height={180}
                                    className="md:w-80 md:h-45 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="flex flex-col justify-center space-y-2">
                                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                                        <p>Adding an Api to an Ado...</p>
                                        <div className="flex items-center gap-2">
                                            <span>#5.4</span>
                                            <span>.</span>
                                            <span>Jul 15</span>
                                        </div>
                                    </div>
                                    <h1 className="text-[#F0F4F8] text-xl font-bold">
                                        Updating A Course's Difficulty, Status, or Access Level
                                    </h1>
                                    <p className="text-[#94a3b8] text-[15px]">
                                        In this lesson, we'll add a specific endpoint with the ability
                                        to patch a course's difficulty, status, or access level with a
                                        new value so our users have a way to update these without
                                        needing to send the entire course payload.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-white font-extrabold text-lg">From The Feed</h2>
                                <a href="#" className="text-sm text-slate-300">
                                    View Feed →
                                </a>
                            </div>

                            {/* Articles */}
                            {[1, 2, 3].map((i) => (
                                <article
                                    key={i}
                                    className="bg-[#131C2C] border border-[#12202a] rounded-xl shadow-lg p-4 mb-3"
                                >
                                    <div className="flex items-start gap-3">
                                        <Image
                                            src="https://i.pravatar.cc/40?img=5"
                                            alt="avatar"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 rounded-full ring-1 ring-[#0f1724]"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h4 className="text-slate-300 text-sm font-medium">
                                                    Abdelmadjid Cherfaoui
                                                </h4>
                                                <span className="ml-2 inline-flex items-center px-2 py-0.5 text-xs rounded bg-[#0f2036] text-indigo-300 border border-[#172336]">
                                                    🏅
                                                </span>
                                                <span className="text-xs text-slate-400">· 2 months ago</span>
                                            </div>

                                            <h3 className="text-white text-lg font-extrabold leading-tight mb-2">
                                                EdgeJS extension for Zed code editor
                                            </h3>

                                            <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                                Hello folks,<br />
                                                <br />
                                                Since I met AdonisJS, I adopted it to be my main framework
                                                for building web apps, I would love to thank the team
                                                behind it for this amazing work.
                                                <br />
                                                <br />
                                                Recently, I rediscovered Zed editor, which is the...
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                        <svg
                                                            className="w-4 h-4 text-slate-300"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
                                                            />
                                                        </svg>
                                                        <span className="text-xs text-slate-300">5</span>
                                                    </div>

                                                    <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                        <svg
                                                            className="w-4 h-4 text-slate-300"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 015.656 5.656L10 18.657l-6.828-6.829a4 4 0 010-5.656z" />
                                                        </svg>
                                                        <span className="text-xs text-slate-300">1</span>
                                                    </div>

                                                    <div className="flex items-center gap-2 bg-[#1e293b] px-3 py-2 rounded-lg border border-[#15202a]">
                                                        <svg
                                                            className="w-4 h-4 text-slate-300"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M15 10l4.553-2.276A2 2 0 0122 9.618V16a2 2 0 01-2 2h-6"
                                                            />
                                                        </svg>
                                                        <span className="text-xs text-slate-300">1,721</span>
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="text-xs px-3 py-1 rounded-md bg-[#1e293b] border border-[#142233] text-slate-300 hover:bg-[#334155]">
                                                        EdgeJS
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* footer area */}

            <Footer />
        </div>
    )
};

export default Blog;
