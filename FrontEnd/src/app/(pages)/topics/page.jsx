import React from "react"
import Image from "next/image";
import Link from 'next/link'
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Topics = (props) => {
    return (
        <div className="bg-[#080E1C]">
            {/* header area */}
            <Header />

            <section className="bg-[#0f172a]">
                <div className="container mx-auto px-3 lg:px-5 py-10">
                    <h1 className="text-[#fff] text-4xl font-bold mb-5">Featured Topics.</h1>
                    <div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-10 mb-5">
                            {/* LEFT: Large card (title and lessons list) */}
                            <div className="group rounded-2xl overflow-hidden border border-[#122033] bg-[#202942] pl-6 pt-6 card-inner">
                                <div className="flex flex-col gap-6 lg:flex-row">
                                    {/* left column content */}
                                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                        {/* title box */}
                                        <div className="w-[350px] topic-badge rounded-xl px-5 py-4 max-w-xs bg-[#0F172A]">
                                            <h3 className="text-white text-xl font-extrabold">Lucid</h3>
                                            <div className="flex gap-3 mt-3 text-sm text-slate-300">
                                                <div className="flex items-center gap-2">
                                                    <svg width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm10 47.38l-3.35-15.9l46.82-10.06l3.34 15.9Zm70 100.41l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm48 160H56v-16h48z"></path></svg>
                                                    10 Series</div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M176 207.24a119 119 0 0 0 16-7.73V240a8 8 0 0 1-16 0Zm11.76-88.43l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l17-9.06Zm64-29.87l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76v-76.57l-5-2.67l-43 22.93L43.83 106L25 96l103-54.93L231 96l-18.78 10h-.06L188 118.94a8 8 0 0 1 4 6.93v73.64a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12"></path></svg>
                                                    150 Lessons</div>
                                            </div>
                                        </div>

                                        {/* lessons list card */}
                                        <div className="w-[350px] mt-2 rounded-xl bg-[#0F172A] border border-[#122033] p-5 text-sm text-slate-300">
                                            <h4 className="text-xs font-semibold text-slate-400 mb-3">LATEST TOPIC LESSONS</h4>

                                            <ul className="space-y-4">
                                                <li>
                                                    <div className="flex items-center text-xs text-slate-400 mb-1">
                                                        <span>Lesson 6.4</span>
                                                        <span className="ml-3">Aug 14</span>
                                                    </div>
                                                    <div className="text-sm text-white font-semibold">Searching and Filtering Lessons</div>
                                                </li>

                                                <li>
                                                    <div className="flex items-center text-xs text-slate-400 mb-1">
                                                        <span>Lesson 6.2</span>
                                                        <span className="ml-3">Aug 11</span>
                                                    </div>
                                                    <div className="text-sm text-white font-semibold">Filtering by a Number or Array of Numbers</div>
                                                </li>

                                                <li>
                                                    <div className="flex items-center text-xs text-slate-400 mb-1">
                                                        <span>Lesson 6.1</span>
                                                        <span className="ml-3">Aug 07</span>
                                                    </div>
                                                    <div className="text-sm text-white font-semibold">Advanced String Filtering</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* right column: large image with badge */}
                                    <div className="w-full lg:w-1/2 image-perspective">
                                        {/* parent is flex so we can align image horizontally and vertically */}
                                        <div className="group relative rounded-2xl flex justify-end h-64 lg:h-full mr-[-45px]">
                                            <Image
                                                src="/assets/images/topic-1.png"
                                                alt="Lucid preview"
                                                className="w-[75%] h-auto object-cover card-image transform origin-right mb-[-65px] rotate-[7deg]
                                            transition-transform duration-500 ease-out group-hover:rotate-0"
                                                width={150}
                                                height={50}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* RIGHT: separate small card (e.g. VueJS tile) */}
                            <div className="group bg-[#141F32] rounded-2xl overflow-hidden border border-[#122033] p-4">
                                <div className="image-perspective relative h-64 lg:h-auto min-h-[250px]">
                                    <div className="absolute w-[350px] topic-badge rounded-xl px-5 py-4 max-w-xs bg-[#0F172A] mt-3 ml-3 z-[50]">
                                        <h3 className="text-white text-xl font-extrabold">Lucid</h3>
                                        <div className="flex gap-3 mt-3 text-sm text-slate-300">
                                            <div className="flex items-center gap-2">
                                                <svg width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm10 47.38l-3.35-15.9l46.82-10.06l3.34 15.9Zm70 100.41l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm48 160H56v-16h48z"></path></svg>
                                                10 Series</div>
                                            <div className="flex items-center gap-2">
                                                <svg width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M176 207.24a119 119 0 0 0 16-7.73V240a8 8 0 0 1-16 0Zm11.76-88.43l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l17-9.06Zm64-29.87l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76v-76.57l-5-2.67l-43 22.93L43.83 106L25 96l103-54.93L231 96l-18.78 10h-.06L188 118.94a8 8 0 0 1 4 6.93v73.64a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12"></path></svg>
                                                150 Lessons</div>
                                        </div>
                                    </div>
                                    <Image
                                        src="/assets/images/topic-2.png"
                                        alt="Lucid preview"
                                        className="w-full h-full object-cover card-image rotate-[7deg]
    transition-transform duration-500 ease-out group-hover:rotate-0"
                                        tabIndex={0}
                                        width={150}
                                        height={50}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-10 mb-5">
                            {/* RIGHT: separate small card (e.g. VueJS tile) */}
                            <div className="group bg-[#141F32] rounded-2xl overflow-hidden border border-[#122033] p-4">
                                <div className="image-perspective relative h-64 lg:h-auto min-h-[250px]">
                                    <div className="absolute w-[350px] topic-badge rounded-xl px-5 py-4 max-w-xs bg-[#0F172A] mt-3 ml-3 z-[50]">
                                        <h3 className="text-white text-xl font-extrabold">Lucid</h3>
                                        <div className="flex gap-3 mt-3 text-sm text-slate-300">
                                            <div className="flex items-center gap-2">
                                                <svg width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm10 47.38l-3.35-15.9l46.82-10.06l3.34 15.9Zm70 100.41l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm48 160H56v-16h48z"></path></svg>
                                                10 Series</div>
                                            <div className="flex items-center gap-2">
                                                <svg width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M176 207.24a119 119 0 0 0 16-7.73V240a8 8 0 0 1-16 0Zm11.76-88.43l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l17-9.06Zm64-29.87l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76v-76.57l-5-2.67l-43 22.93L43.83 106L25 96l103-54.93L231 96l-18.78 10h-.06L188 118.94a8 8 0 0 1 4 6.93v73.64a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12"></path></svg>
                                                150 Lessons</div>
                                        </div>
                                    </div>
                                    <Image
                                        src="/assets/images/topic-2.png"
                                        alt="Lucid preview"
                                        className="w-full h-full object-cover card-image rotate-[7deg]
                                        transition-transform duration-500 ease-out group-hover:rotate-0"
                                        tabIndex={0}
                                        width={150}
                                        height={50}
                                    />
                                </div>
                            </div>
                            {/* LEFT: Large card (title and lessons list) */}
                            <div className="group rounded-2xl overflow-hidden border border-[#122033] bg-[#202942] pl-6 pt-6 card-inner">
                                <div className="flex flex-col gap-6 lg:flex-row">
                                    {/* left column content */}
                                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                        {/* title box */}
                                        <div className="w-[350px] topic-badge rounded-xl px-5 py-4 max-w-xs bg-[#0F172A]">
                                            <h3 className="text-white text-xl font-extrabold">Lucid</h3>
                                            <div className="flex gap-3 mt-3 text-sm text-slate-300">
                                                <div className="flex items-center gap-2">
                                                    <svg width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m231.65 194.55l-33.19-157.8a16 16 0 0 0-19-12.39l-46.81 10.06a16.08 16.08 0 0 0-12.3 19l33.19 157.8A16 16 0 0 0 169.16 224a16.3 16.3 0 0 0 3.38-.36l46.81-10.06a16.09 16.09 0 0 0 12.3-19.03M136 50.15v-.09l46.8-10l3.33 15.87L139.33 66Zm10 47.38l-3.35-15.9l46.82-10.06l3.34 15.9Zm70 100.41l-46.8 10l-3.33-15.87l46.8-10.07l3.33 15.85zM104 32H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M56 48h48v16H56Zm48 160H56v-16h48z"></path></svg>
                                                    10 Series</div>
                                                <div className="flex items-center gap-2">
                                                    <svg width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M176 207.24a119 119 0 0 0 16-7.73V240a8 8 0 0 1-16 0Zm11.76-88.43l-56-29.87a8 8 0 0 0-7.52 14.12L171 128l17-9.06Zm64-29.87l-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.9 15.9 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76v-76.57l-5-2.67l-43 22.93L43.83 106L25 96l103-54.93L231 96l-18.78 10h-.06L188 118.94a8 8 0 0 1 4 6.93v73.64a115.6 115.6 0 0 0 27.94-22.57a15.9 15.9 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12"></path></svg>
                                                    150 Lessons</div>
                                            </div>
                                        </div>

                                        {/* lessons list card */}
                                        <div className="w-[350px] mt-2 rounded-xl bg-[#0F172A] border border-[#122033] p-5 text-sm text-slate-300">
                                            <h4 className="text-xs font-semibold text-slate-400 mb-3">LATEST TOPIC LESSONS</h4>

                                            <ul className="space-y-4">
                                                <li>
                                                    <div className="flex items-center text-xs text-slate-400 mb-1">
                                                        <span>Lesson 6.4</span>
                                                        <span className="ml-3">Aug 14</span>
                                                    </div>
                                                    <div className="text-sm text-white font-semibold">Searching and Filtering Lessons</div>
                                                </li>

                                                <li>
                                                    <div className="flex items-center text-xs text-slate-400 mb-1">
                                                        <span>Lesson 6.2</span>
                                                        <span className="ml-3">Aug 11</span>
                                                    </div>
                                                    <div className="text-sm text-white font-semibold">Filtering by a Number or Array of Numbers</div>
                                                </li>

                                                <li>
                                                    <div className="flex items-center text-xs text-slate-400 mb-1">
                                                        <span>Lesson 6.1</span>
                                                        <span className="ml-3">Aug 07</span>
                                                    </div>
                                                    <div className="text-sm text-white font-semibold">Advanced String Filtering</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* right column: large image with badge */}
                                    <div className="w-full lg:w-1/2 image-perspective">
                                        {/* parent is flex so we can align image horizontally and vertically */}
                                        <div className="group relative rounded-2xl flex justify-end h-64 lg:h-full mr-[-45px]">
                                            <Image
                                                src="/assets/images/topic-1.png"
                                                alt="Lucid preview"
                                                className="w-[75%] h-auto object-cover card-image transform origin-right mb-[-65px] rotate-[7deg]
    transition-transform duration-500 ease-out group-hover:rotate-0"
                                                tabIndex={0}
                                                width={150}
                                                height={50}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bd-[#0F172A]">
                <div className="container mx-auto px-3 lg:px-5 py-10">
                    <h1 className="text-[#fff] text-4xl font-bold mb-5 mt-15">Topics.</h1>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div
                            className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="pr-3 flex items-center">
                                <Image
                                    src={"/assets/images/terminal_1697770046459.png"}
                                    alt="aci"
                                    className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Ace CLI</h3>
                                <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                                    <h3 className="text-xs"><i className="fa-solid fa-server"></i> 3 series</h3>
                                    <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 15 Lessons</h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="pr-3 flex items-center">
                                <Image
                                    src={"/assets/images/adonisjs-icon-with-bg_1671308746819.jpeg"}
                                    alt="aci"
                                    className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">AdonisJS</h3>
                                <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                                    <h3 className="text-xs"><i className="fa-solid fa-server"></i> 15 series</h3>
                                    <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 394 Lessons</h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="pr-3 flex items-center">
                                <Image
                                    src={"/assets/images/alpinejs_1706922995887.png"}
                                    alt="aci"
                                    className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">AlpineJS</h3>
                                <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                                    <h3 className="text-xs"><i className="fa-solid fa-server"></i> 2 series</h3>
                                    <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 7 Lessons</h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="pr-3 flex items-center">
                                <Image
                                    src={"/assets/images/authentication_1697770401414.png"}
                                    alt="aci"
                                    className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Authentication</h3>
                                <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                                    <h3 className="text-xs"><i className="fa-solid fa-server"></i> 9 series</h3>
                                    <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 43 Lessons</h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="pr-3 flex items-center">
                                <Image
                                    src={"/assets/images/authorization_1697770201941.png"}
                                    alt="aci"
                                    className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Authentication</h3>
                                <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                                    <h3 className="text-xs"><i className="fa-solid fa-server"></i> 3 series</h3>
                                    <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 14 Lessons</h3>
                                </div>
                            </div>
                        </div>


                        <div
                            className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="pr-3 flex items-center">
                                <Image
                                    src={"/assets/images/aws-amplify-logo-D68DDB5AB1-seeklogo_1671308415523.png"}
                                    alt="aci"
                                    className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">AWS Amplify</h3>
                                <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                                    <h3 className="text-xs"><i className="fa-solid fa-server"></i> 1 series</h3>
                                    <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 8 Lessons</h3>
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="pr-3 flex items-center">
                                <Image
                                    src={"/assets/images/bouncer_1697770362618.png"}
                                    alt="aci"
                                    className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Bouncer</h3>
                                <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                                    <h3 className="text-xs"><i className="fa-solid fa-server"></i> 1 series</h3>
                                    <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 4 Lessons</h3>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                            <div className="pr-3 flex items-center">
                                <Image
                                    src={"/assets/images/abstract_1697804733488.png"}
                                    alt="aci"
                                    className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                                    width={150}
                                    height={50}
                                />
                            </div>
                            <div>
                                <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Ace CLI</h3>
                                <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                                    <h3 className="text-xs"><i className="fa-solid fa-server"></i> 3 series</h3>
                                    <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 35 Lessons</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* footer area */}

            <Footer />
        </div>
    )
};

export default Topics;
