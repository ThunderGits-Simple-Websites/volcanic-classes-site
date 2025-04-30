import React from 'react'

function page() {
    return (
        <div>
            <section className="bg-white py-12 px-4 md:px-8 lg:px-16 pt-24"> {/* Added pt-24 for top padding */}
                <div className="flex justify-center">
                    <div
                        className="layout-element__component layout-element__component--GridTextBox text-center w-full max-w-xl px-4"
                        id="ai-weqNyT"
                    >
                        <h1 className="text-[32px] md:text-[48px] leading-[1.3] font-semibold text-[#CE3852]">
                            Contact Physics Classes
                        </h1>
                        <div className="layout-element__component layout-element__component--GridTextBox text-center w-full max-w-md mx-auto px-4 mb-6" id="ai-weqNyT">
                            <p className="text-[#56585E] text-base">
                                Get in touch for JEE and NEET coaching information today!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Form */}
                    <div className="bg-blue-50 rounded-2xl p-8 shadow-md">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your First Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Mobile Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your mobile number"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    placeholder="Type your message here"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows={4}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#CE3852] hover:bg-white hover:text-[#CE3852] text-white font-semibold py-3 rounded-full transition duration-300 border-2 border-transparent hover:border-[#CE3852]">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right: Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=397,fit=crop/m7V5vbDyqehovVja/image-32-d957Q2w0K5HNyRM4.png"
                            alt="Contact Illustration"
                            className="w-full max-w-md rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>
            <section >
                <div className="bg-white py-8 px-4 lg:px-16">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                        {/* Left Column - Text Content */}
                        <div className="flex-1 max-w-xl">
                            <div className="mb-6">
                                <h3 className="text-4xl font-bold tracking-tight mb-3 text-[#CE3852]">Contact Us</h3>
                                <p className="text-gray-600">
                                    Visit Physics Classes in Patna, Bihar for top-notch JEE and NEET preparation. We are dedicated to your academic success.
                                </p>
                            </div>
                            <div className="mb-4">
                                <h6 className="text-lg font-semibold mb-1 text-[#CE3852]">Location</h6>
                                <p className="text-gray-600">
                                2nd floor, Shivam Complex, Bank of Baroda building, Near, Khazanchi Rd, Naya Tola, Bhikhana Pahari, Patna, Bihar 800004
                                </p>
                            </div>
                            <div>
                                <h6 className="text-lg font-semibold mb-1 text-[#CE3852]">Phone</h6>
                                <p className="text-gray-600">+91 9097777365</p>
                            </div>
                        </div>

                        {/* Right Column - Fixed Size Map */}
                        <div className="w-full lg:w-[500px] h-[350px] rounded-md shadow-md overflow-hidden">
                            <iframe
                                title="Rajesh Physics Classes Location"
                                className="w-full h-full border-0"
                                src="https://maps.google.com/maps?q=First%20Floor,%20L-1/11,%20Boring%20Rd,%20Near%20Shiv%20Mandir,%20Opp.%20Krishna%20Apartment,%20Sri%20Krishna%20Puri,%20Patna,%20Bihar%20-%20800001&t=m&z=13&ie=UTF8&output=embed"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default page
