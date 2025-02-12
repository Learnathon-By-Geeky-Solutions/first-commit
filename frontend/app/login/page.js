"use client";
import { useState } from "react";
import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "", role: "User" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data: ", formData);
    };

    return (
        <AuthLayout
            info={
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
                    <p className="mt-2 text-gray-600">
                        Log in to access your account and explore the best healthcare services.
                    </p>
                </div>
            }
            form={
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email or Phone</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Role</label>
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
                        <div className="flex justify-between items-center text-sm">
                            <Link href="/forgot-password" className="text-blue-500 hover:underline">
                                Forgot Password?
                            </Link>
                            <Link href="/register" className="text-blue-500 hover:underline">
                                Register
                            </Link>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                            Login
                        </button>
                    </form>
                </div>
            }
        />
    );
};

export default Login;
