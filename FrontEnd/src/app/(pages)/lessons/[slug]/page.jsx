"use client"
import React, { useRef, useState, useEffect } from "react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { LuLockKeyhole } from "react-icons/lu";

const LessonDetails = (props) => {
    const lessons = [
        {
            number: 1,
            title: "Lesson 1: Introduction",
            duration: "5:00",
            src: "https://www.w3schools.com/html/mov_bbb.mp4",
            captions: "/captions-1.vtt",
        },
        {
            number: 2,
            title: "Lesson 2: Setup",
            duration: "10:15",
            src: "https://youtu.be/f_iasHji8PA?si=3qwuzYiJL5CGe2DI",
            captions: "/captions-2.vtt",
        },
        {
            number: 3,
            title: "Lesson 3: Search UI",
            duration: "8:45",
            src: "https://youtu.be/UhDrv7aQBTE?si=8ZJSYx18ZWNLGQqO",
            captions: "/captions-3.vtt",
        },
    ];

    const videoRef = useRef(null);

    const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

    useEffect(() => {
        // Optionally autoplay first lesson
        // playSelectedLesson(lessons[0]); // uncomment to autoplay on page load
    }, []);

    // Play the selected lesson without replacing the <video> element
    const playSelectedLesson = (lesson) => {
        setSelectedLesson(lesson);

        const v = videoRef.current;
        if (!v) return;

        const trackEl = v.querySelector("track");
        if (trackEl && lesson.captions) {
            trackEl.src = lesson.captions;
        }

        if (!v.src || !v.src.includes(lesson.src)) {
            v.pause();
            v.src = lesson.src;
            try {
                v.load();
            } catch (e) {

            }
            v
                .play()
                .catch((err) => {
                    console.log("Autoplay blocked or play error:", err);
                });
        } else {
            v.currentTime = 0;
            v
                .play()
                .catch((err) => {
                    console.log("Play error:", err);
                });
        }
    };

    return (
        <>
            <Header />
            <div className="bg-[#0E0925] py-15">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <main className="w-full md:w-[70%] bg-gray-800 rounded-lg overflow-hidden">
                            <div className="relative">
                                <div className="relative w-full aspect-video bg-black">
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        src={selectedLesson.src}
                                        controls
                                    >
                                        <track
                                            kind="subtitles"
                                            srcLang="en"
                                            src={selectedLesson.captions}
                                            default
                                        />
                                    </video>

                                    {/* subtitle overlay (visual only) */}
                                    {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] bg-black bg-opacity-70 text-white text-lg px-4 py-2 rounded">
                                        In this series, we're going to learn how we can set up a multi-search functionality in...
                                    </div> */}
                                </div>

                                {/* optional visual control bar (keeps UI intact) */}
                                {/* <div className="bg-gray-900 border-t border-gray-700 px-4 py-3 flex items-center gap-4">
                                    <button
                                        className="px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
                                        onClick={() => {
                                            const v = videoRef.current;
                                            if (!v) return;
                                            if (v.paused) v.play().catch(() => { });
                                            else v.pause();
                                        }}
                                    >
                                        Play / Pause
                                    </button>
                                    <div className="flex-1">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="0"
                                            aria-label="seek"
                                            className="w-full"
                                            onChange={(e) => {
                                                const v = videoRef.current;
                                                if (!v || !v.duration) return;
                                                // Convert percent to time
                                                const pct = Number(e.target.value) / 100;
                                                v.currentTime = pct * v.duration;
                                            }}
                                        />
                                    </div>
                                    <div className="text-sm text-gray-400">0:00 / {selectedLesson.duration}</div>
                                </div> */}
                            </div>
                        </main>

                        <aside className="w-full md:w-[30%] mt-4 md:mt-0">
                            <div className="bg-gray-800 rounded-lg p-4 h-full flex flex-col">
                                <h2 className="text-lg text-[#fff] font-bold mb-4 font-sans">
                                    Building A Multi-Search with Meilisearch & AdonisJS
                                </h2>

                                <ul className="space-y-1 overflow-auto max-h-[60vh] pr-2">
                                    {lessons.map((l) => (
                                        <li
                                            key={l.number}
                                            // use button-like click area so it's accessible
                                            onClick={() => playSelectedLesson(l)}
                                            className={`flex items-center justify-between py-1 px-3 rounded-md cursor-pointer select-none ${l.number === selectedLesson.number
                                                ? "bg-[#2A3545]"
                                                : "hover:bg-gray-700/50"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="text-sm text-gray-300 font-medium">{l.number}</div>
                                                <div>
                                                    <div className="text-sm font-medium text-white">{l.title}</div>
                                                    <div className="text-xs text-gray-400">Lesson</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-400">{l.duration}</div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-4 text-xs text-gray-400">
                                    <div>12 Lessons • 1h 38m</div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LessonDetails;
