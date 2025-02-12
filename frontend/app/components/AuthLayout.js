"use client";
import React from "react";

const AuthLayout = ({ form, info, reverse = false }) => {
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 px-6">
            <div className={`flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden`}>
                {/* Left or Right Info Section */}
                <div className={`w-1/2 p-8 flex flex-col justify-center ${reverse ? "order-2" : "order-1"}`}>
                    {info}
                </div>

                {/* Left or Right Form Section */}
                <div className={`w-1/2 p-8 bg-gray-100 flex flex-col justify-center ${reverse ? "order-1" : "order-2"}`}>
                    {form}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
