"use client";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, HeartPulse, CalendarCheck, ShieldCheck } from "lucide-react";

const FeaturedSection = ({ title, items }) => {
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let animationFrame;
        const scrollSpeed = 1.5; // Faster scrolling speed

        const scroll = () => {
            if (!isPaused) {
                containerRef.current.scrollLeft += scrollSpeed;
                if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
                    containerRef.current.scrollLeft = 0;
                }
            }
            animationFrame = requestAnimationFrame(scroll);
        };

        animationFrame = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationFrame);
    }, [isPaused]);

    const handleScrollLeft = () => {
        containerRef.current.scrollLeft -= 250;
    };

    const handleScrollRight = () => {
        containerRef.current.scrollLeft += 250;
    };

    return (
        <section className="mt-12 px-6 relative">
            {/* Section Title */}
            <h2 className="text-3xl font-semibold text-white text-center mb-4">{title}</h2>

            {/* Informative Paragraph */}
            <p className="text-center text-white text-lg max-w-2xl mx-auto mb-6">
                Discover top-rated doctors, book appointments effortlessly, and experience healthcare like never before.
                We ensure trusted and verified professionals to cater to your needs. Your health, our priority!
            </p>

            {/* Engaging Text with Icons */}
            <div className="flex justify-center gap-8 text-white text-lg mb-6">
                <div className="flex items-center gap-2">
                    <HeartPulse size={24} className="text-red-400 animate-pulse-fast" />
                    <span>Top Rated Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarCheck size={24} className="text-green-400 animate-bounce-fast" />
                    <span>Easy Appointment Booking</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck size={24} className="text-blue-400 animate-spin" />
                    <span>Verified & Trusted</span>
                </div>
            </div>

            {/* Arrows */}
            <button
                onClick={handleScrollLeft}
                className="absolute left-1 top-2/3 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 
hover:bg-gray-200 transition flex items-center justify-center"
            >
                <ChevronLeft size={28} className="text-gray-800" />
            </button>

            <button
                onClick={handleScrollRight}
                className="absolute right-1 top-2/3 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 
hover:bg-gray-200 transition flex items-center justify-center"
            >
                <ChevronRight size={28} className="text-gray-800" />
            </button>



            {/* Scrolling Cards */}
            <div
                ref={containerRef}
                className="flex space-x-6 overflow-hidden whitespace-nowrap py-6 relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="min-w-[280px] bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 
            transition-all duration-300 hover:shadow-lg hover:scale-[1.04]"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-52 object-cover rounded-t-xl"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {item.name}
                            </h3>
                            <p className="text-gray-500 text-sm">{item.role}</p>

                            {/* Rating */}
                            <div className="flex justify-center items-center gap-1 mt-2">
                                <Star className="text-yellow-500" />
                                <span className="text-gray-700 font-medium">{item.rating}</span>
                            </div>

                            {/* Button */}
                            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg 
                hover:bg-blue-700 transition">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedSection;
