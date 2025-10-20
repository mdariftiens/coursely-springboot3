import Image from "next/image";
import Link from "next/link";
import React from "react"

const Footer = () => {
    return (
        <>
            <footer className="container mx-auto px-3 lg:px-5 pt-10 pb-3">
                <div className="flex items-center justify-between gap-5 text-[#94A3B8]">
                    <div>
                        <h1 className="text-[#CBD5E1] uppercase text-xl font-semibold mb-2">Content</h1>
                        <ul className="hover:cursor-pointer py-1 space-y-3">
                            <li className="hover:text-[#fff]"><a href="#">Series</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Topics</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Lessons</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Livestreams</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="hover:cursor-pointer py-1 space-y-3">
                            <li className="hover:text-[#fff]"><a href="#">Blog</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Snippets</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Schedule</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Requests</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[#CBD5E1] uppercase text-xl font-semibold mb-2">Company</h1>
                        <ul className="hover:cursor-pointer py-1 space-y-3">
                            <li className="hover:text-[#fff]"><a href="#">Credits</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Contact Us</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Pricing</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[#CBD5E1] uppercase text-xl font-semibold mb-2">Legal</h1>
                        <ul className="hover:cursor-pointer py-1 space-y-3">
                            <li className="hover:text-[#fff]"><a href="#">Cookies</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Privacy</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Terms</a></li>
                            <li className="hover:text-[#fff]"><a href="#">Guidelines</a></li>
                        </ul>
                    </div>

                    <div className="mb-10">
                        <p className="text-[#CBD5E1] uppercase text-[18px] font-semibold mb-1">Subscribe to our newsletter</p>
                        <p className="text-[#94A3B8] text-[17px]">To get a monthly roundup of our latest lessons.</p>
                        <div className="py-3">
                            <input type="text" name="email" placeholder="Email Address"
                                className="w-[63%] rounded-md text-[#E3E3E3] py-[13px] px-2 bg-[#0F172A]
                        border border-[#1E293B] focus:border-[#4F46E5] outline-none" />

                            <button className="text-white bg-[#634DBA] py-[13px] px-5 rounded-md">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>

            <section className="bg-[#0A0F1C] text-[#B0B8C5] border-t border-[#1E293B]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6">

                    {/* Left Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/assets/images/adocasts-plus-white-40.png"
                            alt="logo"
                            width={144}
                            height={40}
                            className="w-36"
                        />
                    </div>

                    {/* Center Text */}
                    <div className="text-sm text-center my-2 md:my-0">
                        © 2025 Adocasts. All Rights Reserved.
                    </div>

                    {/* Right Social Icons */}
                    <div className="flex items-center space-x-4 text-[#A0AEC0]">
                        <Link href="#" className="hover:text-white"><i className="fab fa-github"></i></Link>
                        <Link href="#" className="hover:text-white"><i className="fab fa-youtube"></i></Link>
                        <Link href="#" className="hover:text-white"><i className="fas fa-butterfly"></i></Link>
                        <Link href="#" className="hover:text-white"><i className="fab fa-twitter"></i></Link>
                        <Link href="#" className="hover:text-white"><i className="fas fa-rss"></i></Link>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Footer;
