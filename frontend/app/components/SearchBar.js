"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div id="search-section" className="mt-10 px-4 flex justify-center">
            <form className="bg-white shadow-lg rounded-full flex items-center px-5 py-3 w-full max-w-2xl transition-all hover:shadow-xl">
                <Search className="text-blue-600 mx-3" size={24} />

                <input
                    type="text"
                    placeholder="Search doctors, hospitals, specializations..."
                    className="w-full text-gray-800 text-lg px-3 py-2 outline-none bg-transparent placeholder-gray-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button
                    type="submit"
                    className="ml-3 bg-blue-600 text-white text-lg font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
