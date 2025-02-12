"use client";
import { useState } from "react";
import Link from "next/link";

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
        <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-200">
                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Register</h2>
                <div className="max-h-[70vh] overflow-y-auto px-2">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-lg mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-lg mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-lg mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-lg mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Role</label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg mt-1"
                            >
                                <option value="User">User</option>
                                <option value="Doctor">Doctor</option>
                                <option value="Hospital Admin">Hospital Admin</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Verification Code</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    name="verificationCode"
                                    value={formData.verificationCode}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-lg mt-1"
                                />
                                <button type="button" onClick={handleVerification} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                                    Verify
                                </button>
                            </div>
                        </div>
                        <div className="mb-4 text-center">
                            <Link href="/login" className="text-sm text-blue-500 hover:underline">
                                Already have an account? Login
                            </Link>
                        </div>
                        <button
                            type="submit"
                            disabled={!formData.isVerified}
                            className={`w-full text-white p-2 rounded-lg ${formData.isVerified ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
