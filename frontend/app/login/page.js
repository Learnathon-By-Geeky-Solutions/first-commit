"use client";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "User",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data: ", formData);
        // Add API call or authentication logic here
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="mb-4">
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
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                        <Link href="/register" className="text-sm text-blue-500 hover:underline">
                            Register
                        </Link>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
