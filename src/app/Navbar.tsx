'use client';
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white text-white fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link onClick={() => setDropdownOpen(false)} href="/" className="flex items-center space-x-2">
                            <img
                                style={{ width: 150, height: 150, objectFit: 'contain' }}
                                src="/images/logo.png"
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:flex space-x-4 items-center">
                        <Link
                            onClick={() => setDropdownOpen(false)}
                            href="/"
                            className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                        >
                            Home
                        </Link>
                        <Link
                            onClick={() => setDropdownOpen(false)}
                            href="/AboutUs"
                            className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                        >
                            About
                        </Link>
                        <Link
                            onClick={() => setDropdownOpen(false)}
                            href="/Gallery"
                            className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                        >
                            Gallery
                        </Link>

                        {/* Dropdown (Desktop) */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!isDropdownOpen)}
                                className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold flex items-center space-x-1 focus:outline-none"
                            >
                                <span>All Courses</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.08 1.04l-4.24 4.25a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg z-50">
                                    <Link
                                        onClick={() => setDropdownOpen(false)}
                                        href="/Courses"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#CE3852] hover:text-white"
                                    >
                                        IIT‑JEE
                                    </Link>
                                    <Link
                                        onClick={() => setDropdownOpen(false)}
                                        href="/Neet"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#CE3852] hover:text-white"
                                    >
                                        NEET
                                    </Link>
                                    <Link
                                        onClick={() => setDropdownOpen(false)}
                                        href="/Schoolboard"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#CE3852] hover:text-white"
                                    >
                                        11th & 12th Board
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            onClick={() => setDropdownOpen(false)}
                            href="/ContactUs"
                            className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Hamburger Menu Button (Mobile) */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#CE3852] hover:text-white hover:bg-[#CE3852] focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                // Close icon
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger icon
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="sm:hidden bg-white px-2 pt-2 pb-3 space-y-1 shadow-md">
                    <Link
                        href="/"
                        className="block text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-base font-bold"
                    >
                        Home
                    </Link>
                    <Link
                        href="/AboutUs"
                        className="block text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-base font-bold"
                    >
                        About
                    </Link>
                    <Link
                        href="/Gallery"
                        className="block text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-base font-bold"
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/Courses"
                        className="block text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-base font-bold"
                    >
                        IIT‑JEE
                    </Link>
                    <Link
                        href="/Neet"
                        className="block text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-base font-bold"
                    >
                        NEET
                    </Link>
                    <Link
                        href="/Schoolboard"
                        className="block text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-base font-bold"
                    >
                        11th & 12th Board
                    </Link>
                    <Link
                        href="/ContactUs"
                        className="block text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-base font-bold"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
