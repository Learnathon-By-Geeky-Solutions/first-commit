"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                {/* Logo & Description */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white">DocNest</h2>
                    <p className="mt-2 text-sm max-w-sm">
                        Your trusted healthcare companion. Find top-rated doctors, hospitals, and book appointments seamlessly.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="mt-6 md:mt-0">
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><Link href="/find-doctor" className="hover:text-white transition">Find a Doctor</Link></li>
                        <li><Link href="/find-hospital" className="hover:text-white transition">Find a Hospital</Link></li>
                        <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="mt-6 md:mt-0">
                    <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                        <Link href="#" className="hover:text-white transition">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="hover:text-white transition">
                            <Twitter size={20} />
                        </Link>
                        <Link href="#" className="hover:text-white transition">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="hover:text-white transition">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-8 text-sm text-gray-500">
                © {new Date().getFullYear()} DocNest. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
