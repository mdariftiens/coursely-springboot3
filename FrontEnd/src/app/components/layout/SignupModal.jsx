"use client";
import { useState } from "react";
import { GiTireIronCross } from "react-icons/gi";

// interface SignupModalProps {
//     show: boolean;
//     onClose: () => void;
// }

export default function SignupModal({ show, setShow, showSignUp, setShowSignUp, showSignIn, setShowSignIn }) {

    const LoginShow = () => {
        setShowSignIn(true);
        setShowSignUp(false);
    }

    const signInShow = () => {
        setShowSignIn(false);
        setShowSignUp(true);
    }
    console.log(showSignUp, showSignIn)
    return (
        <>
            {showSignUp && show && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal */}
                    <div className="relative bg-[#0e0e25] text-white w-[420px] rounded-2xl border border-white/10 shadow-2xl p-7 z-50">
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
                        >
                            <GiTireIronCross />
                        </button>

                        <h2 className="text-2xl font-semibold mb-1">Sign up</h2>
                        <p className="text-sm text-gray-400 mb-6">
                            Already have an account?{" "}
                            <button href="#" onClick={LoginShow} className="text-blue-400 hover:underline">
                                Sign in here
                            </button>
                        </p>

                        {/* Form */}
                        <form className="space-y-4">
                            <div>
                                <label className="text-sm mb-1 block">Username</label>
                                <input
                                    type="text"
                                    placeholder="Enter a username (publicly displayed)"
                                    className="w-full bg-[#121233] border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm mb-1 block">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#121233] border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm mb-1 block">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full bg-[#121233] border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                />
                                <p className="text-xs text-gray-500 mt-1">8 character minimum</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="remember" className="accent-blue-500" />
                                <label htmlFor="remember" className="text-sm text-gray-300">
                                    Remember me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 text-sm font-medium"
                            >
                                Sign up
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center my-5">
                            <div className="h-px bg-white/10 flex-1" />
                            <span className="mx-3 text-xs text-gray-400">Or sign up with</span>
                            <div className="h-px bg-white/10 flex-1" />
                        </div>

                        {/* Social Buttons */}
                        <div className="flex gap-3">
                            <button className="flex items-center justify-center gap-2 w-1/2 border border-white/20 rounded-lg py-2 text-sm hover:bg-white/10 transition">
                                <img src="/google.svg" alt="google" className="w-5" />
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 w-1/2 border border-white/20 rounded-lg py-2 text-sm hover:bg-white/10 transition">
                                <img src="/github.svg" alt="github" className="w-5" />
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showSignIn && show && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    {/* Modal */}
                    <div className="relative bg-[#0e0e25] text-white w-[420px] rounded-2xl border border-white/10 shadow-2xl p-7 z-50">
                        <button
                            onClick={() => setShow(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
                        >
                            <GiTireIronCross />
                        </button>

                        <h2 className="text-2xl font-semibold mb-1">Sign In</h2>
                        <p className="text-sm text-gray-400 mb-6">
                            Already have an account?{" "}
                            <button href="#" onClick={signInShow} className="text-blue-400 hover:underline">
                                Sign up here
                            </button>
                        </p>

                        {/* Form */}
                        <form className="space-y-4">
                            <div>
                                <label className="text-sm mb-1 block">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#121233] border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm mb-1 block">Password</label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full bg-[#121233] border border-white/10 rounded-lg px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                />
                                <p className="text-xs text-gray-500 mt-1">8 character minimum</p>
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="remember" className="accent-blue-500" />
                                <label htmlFor="remember" className="text-sm text-gray-300">
                                    Remember me
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 text-sm font-medium"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center my-5">
                            <div className="h-px bg-white/10 flex-1" />
                            <span className="mx-3 text-xs text-gray-400">Or sign up with</span>
                            <div className="h-px bg-white/10 flex-1" />
                        </div>

                        {/* Social Buttons */}
                        <div className="flex gap-3">
                            <button className="flex items-center justify-center gap-2 w-1/2 border border-white/20 rounded-lg py-2 text-sm hover:bg-white/10 transition">
                                <img src="/google.svg" alt="google" className="w-5" />
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 w-1/2 border border-white/20 rounded-lg py-2 text-sm hover:bg-white/10 transition">
                                <img src="/github.svg" alt="github" className="w-5" />
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
