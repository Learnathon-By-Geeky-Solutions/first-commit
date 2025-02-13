"use client";
import { Star } from "lucide-react";

const FeaturedSection = ({ title, items }) => {
    return (
        <section className="mt-12 px-6">
            <h2 className="text-3xl font-semibold text-white text-center mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-gray-600">{item.role}</p>
                            <div className="flex justify-center items-center gap-1 mt-2">
                                <Star className="text-yellow-500" /> <span>{item.rating}</span>
                            </div>
                            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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
