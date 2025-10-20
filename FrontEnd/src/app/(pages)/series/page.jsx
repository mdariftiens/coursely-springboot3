import React from "react"
import Image from "next/image";
import Link from 'next/link'
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
const Series = (props) => {
    return (
        <div className="bg-[#080E1C]">
            {/* header area */}
            <Header />
            {/* series area */}
            <section className="bg-[#0f172a]">
                <div className="container mx-auto px-3 lg:px-5 py-10">
                    <h1 className="text-white text-4xl font-bold">Recently Updated.</h1>
                    <div className="lg:flex items-center justify-between mb-4">
                        <h3 className="text-[#8186D7] text-xl font-semibold">Series with new lessons</h3>
                    </div>

                    <div className="md:flex items-stretch justify-between gap-8 gap-x-8">
                        <div
                            className="bg-[#162033] flex gap-20 p-5 rounded-md lg:basis-2/3 hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="w-1/2">
                                <h1 className="text-[#fff] text-[20px] font-bold">Adding an API to an AdonisJS Web App</h1>
                                <div className="flex items-center gap-10 my-1 text-[#94a3b8] text-sm">
                                    <h3><i className="fa-solid fa-graduation-cap"></i> 37 Lessons</h3>
                                    <h3><i className="fa-solid fa-clock"></i> 4h 37m</h3>
                                </div>
                                <p className="text-[#94a3b8] text-sm lg:text-base mt-3">In this series, we&apos;ll ad a API, using Opaque
                                    Access
                                    Tokens for
                                    authentication, to a preexisting web application. We well implement dual-guard
                                    authentication,
                                    add a token management panel, and authentication our API directly with an organization
                                    model!
                                </p>
                            </div>
                            <div className="w-1/2 py-2 hidden lg:block">
                                <h4 className="text-[#94a3b8] uppercase font-semibold text-sm mb-3">latest form this series</h4>
                                <div className="flex items-center gap-5 text-[12px] text-[#94a3b8] mb-1">
                                    <h5>Lesson 6.1</h5>


                                    <span>.</span>
                                    <h5>Aug 07</h5>
                                </div>
                                <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">Advanced String filtering</h4>
                                <div className="flex items-center gap-5 text-[12px] text-[#94a3b8] mb-1">
                                    <h5>Lesson 6.0</h5>
                                    <span>.</span>
                                    <h5>Aug 05</h5>
                                </div>
                                <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">Basic course search & filter</h4>
                                <div className="flex items-center gap-5 text-[12px] text-[#94a3b8] mb-1">
                                    <h5>Lesson 5.9</h5>
                                    <span>.</span>
                                    <h5>Jul 31</h5>
                                </div>
                                <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">Getting a Module&apos;s Lessons</h4>
                            </div>
                        </div>
                        <div
                            className="bg-[#162033] lg:basis-1/3 p-5 my-5 lg:my-0 rounded-md lg:min-h-[300px] hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <h4 className="text-[#fff] text-[20px] font-bold">AdonisJS Quick tip</h4>
                            <div className="flex items-center gap-5 my-1 text-[#94a3b8] text-sm">
                                <h3><i className="fa-solid fa-graduation-cap"></i> 23 Lessons</h3>
                                <h3><i className="fa-solid fa-clock"></i> 2h 43m</h3>
                            </div>
                            <p className="text-[#94a3b8] text-sm lg:text-base mt-3">Quick tips, lessons, and screencasts covering
                                specific
                                topics on AdonisJS.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* topics area */}
            <section className="container mx-auto px-6 py-8">
                <div className="bg-[rgba(255,255,255,0.02)] rounded-xl p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        {/* left: filter chips */}
                        <div className="flex-1 min-w-0">
                            <div className="mb-3">
                                <p className="text-sm font-medium text-muted">Filter by topic</p>
                            </div>

                            <div>
                                <ul id="filter-chips" className="flex flex-wrap gap-3">
                                    <li>
                                        <a href="#"
                                            className="bg-[#3730a3] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]"
                                            aria-current="true">
                                            All Series Topics
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#"
                                            className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">AdonisJS</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">AlpineJS</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Authentication</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Authorization</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Components</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">EdgeJS</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">HttpContext</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">InertiaJS</a>
                                    </li>

                                    {/* second row */}
                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">JavaScript</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Lucid</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Nuxt</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Services</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Tips</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">Validator</a>
                                    </li>

                                    <li><a href="#"
                                        className="bg-[#1e293b] chip inline-flex items-center px-4 py-2 rounded-lg text-[15px] font-medium
                                 hover:bg-[#334155] text-[#ffff]">VueJS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* right: sort area */}
                        <div className="shrink-0 w-full sm:w-auto flex items-start sm:items-center gap-3">
                            <div className="hidden sm:block">
                                <p className="text-sm text-muted mb-1">Sort by</p>
                            </div>

                            <div className="relative">
                                <select aria-label="Sort posts"
                                    className="appearance-none rounded-md px-3 py-2 text-sm font-medium bg-[rgba(255,255,255,0.02)]
                           border border-[rgba(255,255,255,0.04)] pr-8 focus:outline-none focus:ring-2 focus:ring-white/10">
                                    <option>Latest</option>
                                    <option>Most popular</option>
                                    <option>Oldest</option>
                                </select>

                                {/* caret icon */}
                                <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3 lg:px-5 py-10">
                    <div className="md:flex items-stretch justify-between gap-8 gap-x-8">
                        <div
                            className="bg-[#162033] lg:basis-1/2 flex gap-5 p-5 rounded-md hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="">
                                <h1 className="text-[#fff] text-3xl font-bold">Adding an API to an AdonisJS Web App</h1>
                                <div className="flex items-center gap-10 my-1 text-[#94a3b8] text-sm mt-2">
                                    <h3><i className="fa-solid fa-graduation-cap"></i> 37 Lessons</h3>
                                    <h3><i className="fa-solid fa-clock"></i> 4h 37m</h3>
                                </div>
                                <p className="text-[#94a3b8] text-[14px] mt-4 leading-7 text-justify">In this series, we&apos;ll ad a
                                    API, using
                                    Opaque
                                    Access
                                    Tokens for
                                    authentication, to a preexisting web application. We well implement dual-guard
                                    authentication,
                                    add a token management panel, and authentication our API directly with an organization
                                    model!
                                </p>
                            </div>
                        </div>
                        <div
                            className="bg-[#162033] lg:basis-1/2 p-5 my-5 lg:my-0 rounded-md lg:min-h-[300px] hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <h4 className="text-[#fff] text-3xl font-bold">AdonisJS Quick tip</h4>
                            <div className="flex items-center gap-10 my-1 text-[#94a3b8] text-sm mt-2">
                                <h3><i className="fa-solid fa-graduation-cap"></i> 23 Lessons</h3>
                                <h3><i className="fa-solid fa-clock"></i> 2h 43m</h3>
                            </div>
                            <p className="text-[#94a3b8] text-[14px] mt-4 leading-7 text-justify">Quick tips, lessons, and
                                screencasts covering
                                specific
                                topics on AdonisJS.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer area */}
            <Footer />

        </div>
    )
};

export default Series;
