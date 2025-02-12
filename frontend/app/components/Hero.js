"use client";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => {
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center text-white text-center px-6">
            <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Welcome to <span className="text-yellow-300">DocNest</span>
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200">
                    Your Trusted Healthcare Companion. Find top-rated doctors, hospitals, and book appointments seamlessly.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link href="/find-doctor" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
                        Find a Doctor
                    </Link>
                    <Link href="/find-hospital" className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
                        Find a Hospital
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    <div className="p-4 bg-white/10 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">🔍 Easy Search</h3>
                        <p className="text-gray-200 text-sm mt-1">
                            Quickly find healthcare providers by location, specialty, or name.
                        </p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">📅 Instant Booking</h3>
                        <p className="text-gray-200 text-sm mt-1">
                            Book appointments seamlessly with just a few clicks.
                        </p>
                    </div>
                    <div className="p-4 bg-white/10 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold">🛡️ Verified Listings</h3>
                        <p className="text-gray-200 text-sm mt-1">
                            Access trusted and verified doctors and hospitals for quality care.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Down Button */}
            <div className="absolute bottom-10 animate-slow-bounce">
                <a href="#search-section">
                    <ChevronDown size={36} className="text-white opacity-75 hover:opacity-100 transition" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
