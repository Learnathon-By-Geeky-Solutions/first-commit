'use client';

import React, { useState } from 'react';
import { Search, MapPin, ChevronDown, Clock, Info } from 'lucide-react';

// Separate components for better organization
const FilterDropdown = ({ label, options = [], value, onChange }) => (
    <div className="relative">
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full appearance-none bg-transparent border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
            <option value="">{label}</option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
    </div>
);

const DoctorCard = ({ doctor }) => (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex gap-4">
            <div className="w-24 h-24 bg-blue-50 rounded-lg flex items-center justify-center">
                <img
                    src="/api/placeholder/96/96"
                    alt="Doctor avatar"
                    className="w-16 h-16"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">{doctor.name}</h2>
                <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                <p className="text-sm text-blue-600 font-medium">{doctor.speciality}</p>
                <p className="text-sm text-gray-600 mt-1">
                    {doctor.experience} Years of Experience Overall
                </p>
            </div>
            <div className="flex items-start">
                <div className="flex items-center text-sm text-blue-600">
                    <Info className="w-4 h-4 mr-1" />
                    Availability
                </div>
            </div>
        </div>

        <div className="mt-4">
            <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                    <p className="text-sm font-medium text-gray-900">{doctor.hospital}</p>
                    <p className="text-sm text-gray-600">{doctor.address}</p>
                    {doctor.otherLocations && (
                        <button className="text-sm text-blue-600 mt-1">
                            + {doctor.otherLocations} more locations
                        </button>
                    )}
                </div>
            </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
            {doctor.services.map((service, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full"
                >
                    {service}
                </span>
            ))}
            {doctor.services.length > 0 && (
                <button className="px-3 py-1 text-blue-600 text-sm">
                    View all
                </button>
            )}
        </div>

        <div className="mt-4 flex items-center gap-4 pt-4 border-t">
            <div className="text-sm text-gray-600">
                Book appointment for:
            </div>
            <div className="relative flex-1">
                <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="mm/dd/yyyy"
                />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                Book Appointment
            </button>
        </div>
    </div>
);

const DoctorSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        gender: '',
        speciality: '',
        country: '',
        city: '',
        distance: '',
        consultationType: ''
    });

    // Sample doctor data
    const sampleDoctor = {
        name: 'Dr. Mohammad Aminul Hoque',
        qualifications: 'MBBS, BCS (Health), MD (Gastroenterology)',
        speciality: 'Gastroenterologist',
        experience: 17,
        hospital: 'Mirpur General Hospital | Kalshi',
        address: 'Plot-10, Road-4/5, Block-B, Section-12, Kalshi Road, Dhaka-1216, Bangladesh',
        otherLocations: 1,
        services: [
            'Bariatric (Gastric Bypass) Surgery',
            'Gas bloat',
            'Gastric Balloon',
            'Gastric Plication'
        ]
    };

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="mb-6">
                <div className="flex gap-4 mb-4">
                    <div className="w-40">
                        <FilterDropdown
                            label="Doctor"
                            options={[]}
                            value={filters.type}
                            onChange={(value) => setFilters({ ...filters, type: value })}
                        />
                    </div>
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search doctors..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors">
                        Search
                    </button>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="w-48">
                        <FilterDropdown
                            label="Gender"
                            options={[]}
                            value={filters.gender}
                            onChange={(value) => setFilters({ ...filters, gender: value })}
                        />
                    </div>
                    <div className="w-48">
                        <FilterDropdown
                            label="Specialities"
                            options={[]}
                            value={filters.speciality}
                            onChange={(value) => setFilters({ ...filters, speciality: value })}
                        />
                    </div>
                    <div className="w-48">
                        <FilterDropdown
                            label="Countries"
                            options={[]}
                            value={filters.country}
                            onChange={(value) => setFilters({ ...filters, country: value })}
                        />
                    </div>
                    <div className="w-48">
                        <FilterDropdown
                            label="Cities"
                            options={[]}
                            value={filters.city}
                            onChange={(value) => setFilters({ ...filters, city: value })}
                        />
                    </div>
                    <div className="w-48">
                        <FilterDropdown
                            label="Distance"
                            options={[]}
                            value={filters.distance}
                            onChange={(value) => setFilters({ ...filters, distance: value })}
                        />
                    </div>
                    <div className="w-48">
                        <FilterDropdown
                            label="Consultation Type"
                            options={[]}
                            value={filters.consultationType}
                            onChange={(value) => setFilters({ ...filters, consultationType: value })}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <p className="text-sm text-gray-600">
                    Book appointments with minimum wait-time & Video consult with verified doctors
                </p>
                <button className="flex items-center text-sm text-gray-700">
                    Show Map
                    <MapPin className="w-4 h-4 ml-2" />
                </button>
            </div>

            <div className="space-y-4">
                <DoctorCard doctor={sampleDoctor} />
            </div>
        </div>
    );
};

export default DoctorSearch;