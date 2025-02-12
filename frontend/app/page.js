"use client";
import Link from "next/link";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import featuredItems from "./components/data/featuredData";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 text-white flex flex-col">
            {/* Hero Section */}
            <Hero />

            {/* Search Bar */}
            <SearchBar />

            {/* Featured Doctors & Hospitals */}
            <FeaturedSection title="Featured Doctors & Hospitals" items={featuredItems} />

            {/* Footer */}
            <Footer />
        </div>
    );
}
