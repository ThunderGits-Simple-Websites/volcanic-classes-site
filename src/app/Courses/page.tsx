import React from 'react'

const page = () => {
    return (
        <div>
            <section className="bg-white px-4 py-12 md:py-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold font-montserrat text-[#CE3852] mb-6">
                            JEE Main And Advanced 2025, Syllabus, Exam Pattern, Exam Dates, Online Courses
                        </h2>
                        <p className="text-[#CE3852] text-base md:text-lg leading-relaxed">
                            JEE 2025 is one of the most important and competitive exams in India. The full form of JEE 2025 is Joint Entrance Examination 2025. It is the gateway for students aiming to secure admission into undergraduate engineering programs at IITs, NITs, and IIITs.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="w-full flex justify-center">
                        <img
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=489,fit=crop/m7V5vbDyqehovVja/12-th-students-1024x996-dJo5LWjj8MIzLbW5.webp"
                            alt="Students"
                            className="w-full max-w-md h-auto rounded-xl shadow-md object-cover"
                        />
                    </div>

                </div>
            </section>
            <div className="px-4 py-12 md:py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto space-y-10 text-center">
                    {/* Top Heading Section (centered) */}
                    <div className="space-y-2">
                        <p className="text-2xl font-semibold text-[#D8728C]">IIT JEE</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#D8728C]">
                            Explore our courses
                        </h2>
                    </div>

                    {/* Card Section with Image + Buttons */}
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col items-center space-y-8">
                        {/* Image */}
                        <img
                            src="https://i.ytimg.com/vi/PRqP83O2Zag/maxresdefault.jpg"
                            alt="IIT JEE"
                            className="w-full max-w-md rounded-xl"
                        />

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                            <a
                                href="#enquiry"
                                className="bg-blue-800 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-900 transition text-center"
                            >
                                Enquiry Now
                            </a>
                            <a
                                href="#learn-more"
                                className="bg-red-800 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-900 transition text-center"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="px-4 py-12 max-w-5xl mx-auto text-[#CE3852]">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-[#D8728C]">
                    📢 Latest Updates of JEE Exam 2025
                </h2>

                <div className="space-y-10 text-base leading-relaxed">
                    {/* Card for JEE Main Exam Dates */}
                    <div className="bg-[#ffeef0] p-8 rounded-3xl shadow-lg border border-[#f1d1d6] hover:shadow-2xl transition-all">
                        <h3 className="text-2xl font-extrabold mb-4 text-[#D8728C]">📅 JEE Main 2025 Exam Dates</h3>
                        <p>
                            The JEE Main 2025 Session 1 exams for Paper 1 (BE/B.Tech) will be held on <strong>January 22, 23, 24, 28, and 29, 2025</strong>. Paper 2A &amp; 2B will take place on <strong>January 30, 2025</strong>. Session 2 is scheduled from <strong>April 1 to April 8, 2025</strong>.
                        </p>
                        <p className="mt-2">
                            The NTA has also discontinued the optional question format in Section B, originally introduced in 2021 during COVID-19.
                        </p>
                    </div>

                    {/* Card for IIT Conducting JEE 2025 */}
                    <div className="bg-[#ffeef0] p-8 rounded-3xl shadow-lg border border-[#f1d1d6] hover:shadow-2xl transition-all">
                        <h3 className="text-2xl font-extrabold mb-4 text-[#D8728C]">🏫 Which IIT Will Conduct JEE 2025?</h3>
                        <p>
                            While JEE Main is conducted by the <strong>National Testing Agency (NTA)</strong>, the <strong>JEE Advanced 2025</strong> will be conducted by <strong>IIT Kanpur</strong>.
                        </p>
                    </div>

                    {/* Card for JEE Exam Overview */}
                    <div className="bg-[#ffeef0] p-8 rounded-3xl shadow-lg border border-[#f1d1d6] hover:shadow-2xl transition-all">
                        <h3 className="text-2xl font-extrabold mb-4 text-[#D8728C]">📘 JEE Exam 2025 Overview</h3>
                        <p>
                            JEE is a national-level entrance exam for engineering aspirants in India, offering admission to IITs, NITs, and CFTIs. It is conducted by the NTA to maintain transparency and high standards.
                        </p>
                    </div>

                    {/* Card for JEE Main Types */}
                    <div className="bg-[#ffeef0] p-8 rounded-3xl shadow-lg border border-[#f1d1d6] hover:shadow-2xl transition-all">
                        <h3 className="text-2xl font-extrabold mb-4 text-[#D8728C]">📄 Types of JEE Main Exam</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Paper 1 (BTech/BE):</strong> 75 MCQs, total 300 marks.</li>
                            <li><strong>Paper 2A (BArch):</strong> 77 questions, total 400 marks. Drawing section is offline.</li>
                            <li><strong>Paper 2B (BPlan):</strong> 100 MCQs, total 400 marks. Fully online.</li>
                        </ul>
                    </div>

                    {/* Card for Eligibility Criteria */}
                    <div className="bg-[#ffeef0] p-8 rounded-3xl shadow-lg border border-[#f1d1d6] hover:shadow-2xl transition-all">
                        <h3 className="text-2xl font-extrabold mb-4 text-[#D8728C]">✅ JEE Main 2025 Eligibility Criteria</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Educational Qualification:</strong> Passed or appearing in Class 12 (2023–2025).</li>
                            <li><strong>Subjects:</strong>
                                <ul className="list-disc list-inside pl-5">
                                    <li>BE/BTech: Physics, Math, + Chemistry/Biology/Vocational.</li>
                                    <li>BArch: Physics, Chemistry, Math.</li>
                                    <li>BPlan: Math only.</li>
                                </ul>
                            </li>
                            <li><strong>Marks:</strong> General: 75% or top 20 percentile. SC/ST: 65%.</li>
                            <li><strong>Age Limit:</strong> No age restriction.</li>
                            <li><strong>Attempts:</strong> Up to 3 consecutive years after Class 12.</li>
                        </ul>
                    </div>

                    {/* Card for JEE Advanced Eligibility */}
                    <div className="bg-[#ffeef0] p-8 rounded-3xl shadow-lg border border-[#f1d1d6] hover:shadow-2xl transition-all">
                        <h3 className="text-2xl font-extrabold mb-4 text-[#D8728C]">📘 JEE Advanced 2025 Eligibility</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Performance in JEE Main:</strong> Top 2,50,000 candidates in Paper 1.</li>
                        </ul>
                    </div>

                    {/* Call to Action Section */}
                    <div className="bg-[#f9e0e7] p-8 mt-12 rounded-3xl shadow-lg border border-[#f1d1d6] text-center">
                        <h3 className="text-2xl font-extrabold mb-4 text-[#D8728C]">🎓 Ready to Start Your JEE Journey?</h3>
                        <p className="text-lg mb-6 text-[#56585E]">Get expert coaching for JEE preparation. Reach out to us today!</p>
                        <button className="px-6 py-3 bg-[#CE3852] text-white rounded-full hover:bg-[#D8728C] transition-all">
                            Contact Us Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
