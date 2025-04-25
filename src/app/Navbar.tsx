import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-white text-white fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-2">
                            <img
                                style={{ width: 150, height: 150, objectFit: 'contain' }}
                                src="/images/logo.png"
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:block">
                        <div className="flex space-x-4 items-center">
                            <a
                                href="/"
                                className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                            >
                                Home
                            </a>

                            <Link
                                href="/AboutUs"
                                className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                            >
                                About
                            </Link>
                            <a
                                href="/Gallery"
                                className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                            >
                                Gallery
                            </a>



                            {/* Dropdown */}
                            <div className="relative group">
                                <button className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold flex items-center space-x-1">
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
                                <div className="absolute left-0 mt-2 w-44 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 ease-in-out z-50">
                                    <a
                                        href="/Courses"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#CE3852] hover:text-white"
                                    >

                                        IIT‑JEE
                                    </a>
                                    <a
                                        href="/Neet"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#CE3852] hover:text-white"
                                    >
                                        NEET
                                    </a>
                                    <a
                                        href="/Schoolboard"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#CE3852] hover:text-white"
                                    >
                                        11th & 12th Board
                                    </a>
                                </div>
                            </div>
                            <a
                                href="/ContactUs"
                                className="text-[#CE3852] hover:bg-[#CE3852] hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                            >
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button Placeholder */}
                    <div className="sm:hidden">
                        {/* Optional: Insert mobile menu button here */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
