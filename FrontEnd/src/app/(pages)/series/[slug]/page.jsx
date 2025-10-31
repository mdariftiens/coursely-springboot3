import React from "react"
import { FaPlay, FaClock, FaBookOpen } from "react-icons/fa";
import { LuPlay, LuClock, LuBookOpenCheck, LuSignal } from "react-icons/lu";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

const Details = (props) => {
    const lessons = [
        {
            id: 1,
            title: "Getting Data by the User's Timezone with Luxon's DateTime",
            desc: "Learn how we can use the user's current timezone to create, update, or query time-sensitive information in AdonisJS using Luxon's DateTime object.",
            duration: "5m 54s",
        },
        {
            id: 2,
            title: "Debugging, Inspecting, and Freezing Code Execution",
            desc: "We cover a couple of ways to debug your AdonisJS application using the Edge inspect global function, the debugger keyword, and the Chromium NodeJS Devtools.",
            duration: "11m 16s",
        },
        {
            id: 3,
            title: "How To Add AdonisJS Edge Support to your WebStorm Environment",
            desc: "A quick tip on how to add AdonisJS Edge syntax highlighting to your JetBrains WebStorm using the VSCode plugin and TextMate Bundles.",
            duration: "1m 52s",
        },
    ];

    return (
        <>
            <Header />
            <div className="bg-[#0E0925]">
                <div className="container mx-auto text-white py-12">
                    <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                        {/* Left Section */}
                        <div>
                            <h1 className="text-4xl text-[#C6C4E0] font-semibold mb-4 font-sans">AdonisJS Quick Tip</h1>
                            <p className="max-w-3xl text-[15px] text-gray-400 font-medium mb-7 lg:mb-8 font-sans">
                                In this series, we'll build a server-rendered mutli-search utilizing Meilisearch, Unpoly, and a sprinkle of AlpineJS. We'll setup factories and seeders to make fake data to allow us to index and search against books, authors, and genres simultaneously!
                                .
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-4 mb-10">
                                <button className="flex items-center gap-2 border border-[#6AB7DC] hover:bg-[#6AB7DC] hover:border-[#6AB7DC]  px-15 py-2 rounded-md text-sm font-medium cursor-pointer">
                                    <LuPlay className="w-4 h-4" /> Start Series
                                </button>
                                <button className="border border-gray-600 hover:border-gray-400 px-15 py-2 rounded-md text-sm font-medium">
                                    Add to Watchlist
                                </button>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="border border-[#242551] rounded-xl">
                            <div className="space-y-3 rounded-xl p-6">
                                <div className="flex">
                                    <LuSignal className="w-4 h-4 mt-3 mr-2.5" />
                                    <div>
                                        <p className="text-gray-400 text-[13px]">Difficulty</p>
                                        <p className="font-medium text-[15px]">Intermediate</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <LuBookOpenCheck className="w-4 h-4 mt-3 mr-2.5" />
                                    <div>
                                        <p className="text-gray-400 text-[13px]">What's Inside</p>
                                        <p className="flex text-[15px] gap-1 font-medium">
                                            25 Lessons
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <LuClock className="w-4 h-4 mt-3 mr-2.5" />
                                    <div>
                                        <p className="text-gray-400 text-[13px]">Viewing Time</p>
                                        <p className="flex text-[15px] gap-1 font-medium">
                                            2h 59m
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full text-[15px] border-t border-[#242551] py-3 font-medium cursor-pointer hover:bg-[#191C39] hover:rounded-b-xl">
                                Sign up to save progress
                            </button>
                        </div>
                    </div>
                    {/* Lessons List */}
                    <div className="space-y-8 mt-15 max-w-5xl">
                        {lessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                className="flex gap-5 items-start border-b border-gray-800 pb-6"
                            >
                                <div className="flex-shrink-0 w-22 h-22 rounded-full border-6 border-[#15102D] flex items-center justify-center text-lg font-semibold">
                                    {lesson.id}
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold mb-1 text-[#C6C4E0]">{lesson.title}</h2>
                                    <p className="text-gray-400 text-[13px] font-light mb-2 font-sans">{lesson.desc}</p>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <LuClock className="w-4 h-4 mr-1" />
                                        {lesson.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Details;
