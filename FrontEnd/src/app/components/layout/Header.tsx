import Image from "next/image";
import Link from "next/link";
import React from "react"

const Header = () => {
    return (
        <header className="bg-[#231D4C] relative overflow-hidden max-w-[1920px] mx-auto">
            {/* navbar area */}
            <nav className="navbar w-full bg-[rgb(15_23_42)] mx-auto px-3 lg:px-5 py-3 text-[#fff]">
                <div className="container mx-auto flex items-center justify-between gap-5">
                    <div className="">
                        <Image
                            src="/assets/images/logo-white.svg"
                            alt="logo"
                            width={144}
                            height={40}
                            className="w-36"
                        />
                    </div>
                    <div>
                        <nav>
                            <ul className="lg:flex space-x-3 hidden text-[15px]">
                                <li><Link href="/series" className="font-semibold cursor-pointer">Series</Link></li>
                                <li><Link href="/topics" className="font-semibold cursor-pointer">Topics</Link></li>
                                <li><Link href="/lessons" className="font-semibold cursor-pointer">Lessons</Link></li>
                                <li><Link href="/blog" className="font-semibold cursor-pointer">Blog</Link></li>
                                <li><Link href="/discuss" className="font-semibold cursor-pointer">Discuss</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <div
                            className="bg-[#1E293B] px-3 py-2 text-white rounded-lg hover:bg-[#334155] hover:cursor-pointer transition duration-500 ease-in-out">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div
                            className="bg-[#1E293B] px-3 py-2 text-blck rounded-lg hover:bg-[#334155] hover:cursor-pointer transition duration-500 ease-in-out">
                            <i className="fa-solid fa-sun"></i>
                        </div>
                        <div className="hidden lg:flex gap-3 text-sm">
                            <button
                                className="bg-[#1E293B] text-white px-3 py-2 rounded-lg hover:bg-gray-300 hover:cursor-pointer transition duration-500 ease-in-out">SignIn</button>
                            <button className="bg-gray-200 text-black px-3 py-2 rounded-lg">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;
