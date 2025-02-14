"use client";
import { useState } from "react";
import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "User",
        verificationCode: "",
        isVerified: false,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleVerification = () => {
        if (formData.verificationCode === "123456") {
            setFormData({ ...formData, isVerified: true });
            alert("Verification Successful!");
        } else {
            alert("Invalid verification code.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration Data: ", formData);
    };

    return (
        <AuthLayout
            reverse={true} // This moves the form to the right side
            info={
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Join DocNest Today!</h2>
                    <p className="mt-2 text-gray-600">
                        Create an account and start exploring the best healthcare services available.
                    </p>
                </div>
            }
            form={
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded-lg mt-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded-lg mt-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded-lg mt-1" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full p-2 border rounded-lg mt-1" />
                        </div>
                        <button type="submit" disabled={!formData.isVerified} className={`w-full text-white p-2 rounded-lg ${formData.isVerified ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}>
                            Register
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Already have an account? Login
                        </Link>
                    </div>
                </div>
            }
        />
    );
};

export default Register;
