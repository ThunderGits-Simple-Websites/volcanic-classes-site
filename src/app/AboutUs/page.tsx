import React from 'react'
function page() {
    return (
        <div>
            <section
                className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1470&q=80')",
                }}
            >
                {/* Overlay (optional: improves text readability) */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-3xl text-white mt-32">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-[#CE3852]/90 drop-shadow-lg">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl drop-shadow-md text-white/70">
                        At the heart of our organization is a shared commitment to education, innovation, and impact. We’re not just a team — we’re a community of passionate educators and mentors dedicated to helping students unlock their full potential. Through personalized guidance, cutting-edge resources, and a supportive environment, we aim to shape confident, future-ready individuals.
                    </p>
                    <a
                        href="/ContactUs"
                        className="inline-block mt-6 bg-[#CE3852]/90 px-6 py-3 text-white/90 font-medium rounded-lg shadow hover:bg-[#b72e46] transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                        Physics Classes, located in Patna, Bihar, is one of the leading coaching institutes specializing in Volcanic for students preparing for IIT JEE, NEET, and school-level exams.
                            Known for its outstanding track record and commitment to excellence, the institute has earned a reputation for producing top-tier results year after year.
                            <br /><br />
                            With expert faculty, personalized attention, flexible learning formats, and a proven track record, Volcanic Classes stands as a pillar of academic excellence.
                            Whether you’re preparing for IIT JEE, NEET, or school exams, this coaching center ensures you are on the right path to achieving your dreams.
                        </p>
                    </div>

                    {/* Optional Image or Icon */}
                    <div className="flex justify-center">
                        <img
                            src="https://images.jdmagicbox.com/comp/patna/dc/0612px612.x612.110629141907.r1c7dc/catalogue/volcanic-classes-pmc-hospital-patna-tutorials-ubrjnui6h3.jpg"
                            alt="Physics Coaching"
                            className="w-full max-w-lg h-auto object-cover"
                        />
                    </div>

                </div>
            </section>

            <section id="why-choose-us" className="bg-gradient-to-r from-[#CE3852] to-[#9C2746] py-16 px-6">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                    {/* Heading Section */}
                    <div className="flex flex-col items-start justify-start space-y-4">
                        <h3 className="text-white text-6xl font-semibold tracking-tight">
                            Why Choose Physics Classes?
                        </h3>

                        <p className="text-white text-lg font-light leading-relaxed max-w-md">
                        Physics Classes stands out for its dedication to quality education, personalized approach, and track record of success in competitive exams. Here’s why we are the best choice for your academic journey:
                        </p>
                    </div>

                    {/* List Section */}
                    <div className="space-y-6 text-white">
                        <ul className="space-y-6">
                            <li className="p-6 bg-[#9C2746] rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out">
                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl text-white">
                                        <i className="fas fa-graduation-cap"></i> {/* Replace with any icon of choice */}
                                    </div>
                                    <div>
                                        <p className="font-semibold">Expert Guidance</p>
                                        <p>Our experienced faculty members provide expert guidance to simplify complex concepts, helping students build a deep understanding of Physics.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 bg-[#9C2746] rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out">
                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl text-white">
                                        <i className="fas fa-user-tie"></i> {/* Replace with any icon of choice */}
                                    </div>
                                    <div>
                                        <p className="font-semibold">Customized One-to-One Tuition</p>
                                        <p>Get personalized, one-on-one tuition (both online and offline) tailored to your learning style and pace, ensuring effective progress.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 bg-[#9C2746] rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out">
                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl text-white">
                                        <i className="fas fa-book-open"></i> {/* Replace with any icon of choice */}
                                    </div>
                                    <div>
                                        <p className="font-semibold">Comprehensive Course Offerings</p>
                                        <p>We offer coaching for IIT JEE, NEET, and school exams, focusing on building a strong foundation and developing problem-solving skills.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="p-6 bg-[#9C2746] rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out">
                                <div className="flex items-start space-x-4">
                                    <div className="text-3xl text-white">
                                        <i className="fas fa-laptop-house"></i> {/* Replace with any icon of choice */}
                                    </div>
                                    <div>
                                        <p className="font-semibold">Online & Offline Flexibility</p>
                                        <p>We offer both online and offline classes, allowing students to choose the learning format that best suits their schedules and preferences.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center text-center py-8 px-4 bg-gray-100 rounded-lg shadow-lg w-full">
                <h6 className="text-gray-800 text-xl font-semibold leading-relaxed mb-4">
                    <span className="text-black text-3xl">&quot;</span> Many of Physics Classes&apos; students have made their mark in prestigious exams, securing top ranks in IIT JEE, NEET, and school boards. The institute is proud of its success stories and continues to inspire future generations of students to aim higher and achieve their academic goals.
                    <span className="text-black text-3xl">&quot;</span>
                </h6>
                <p className="text-gray-700 text-lg font-medium">
                    <span className="text-black">-Anand Kumar</span>
                </p>
            </div>
            <section id="teaching-methodology" className="py-24 relative bg-[#CE3852] overflow-hidden">
                {/* Optional Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h3 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
                            Our Teaching Methodology
                        </h3>
                        <p className="text-lg sm:text-xl text-white/90 mt-6 max-w-3xl mx-auto">
                            At Physics Classes, we blend traditional values with modern educational practices to help students truly understand Physics and excel in competitive exams.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Conceptual Clarity",
                                desc: "We break down complex Volcanic topics into simple, relatable concepts. Students grasp not just the ‘what’ but the ‘why’.",
                                icon: "📘",
                            },
                            {
                                title: "Interactive Classes",
                                desc: "Live discussions, fun quizzes, and demonstrations make our sessions dynamic and highly engaging.",
                                icon: "🧠",
                            },
                            {
                                title: "Personalized Attention",
                                desc: "We provide one-on-one mentorship to focus on each student’s learning curve and growth.",
                                icon: "👨‍🏫",
                            },
                            {
                                title: "Practice & Problem Solving",
                                desc: "Frequent practice sets and mock tests build confidence and develop real exam skills.",
                                icon: "📝",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl text-white text-center transition-transform hover:scale-[1.05] duration-300"
                            >
                                <div className="text-6xl mb-5">{item.icon}</div>
                                <h4 className="text-white/90 text-2xl font-semibold mb-3">{item.title}</h4>
                                <p className="text-white/90 text-base leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <section className="relative bg-gradient-to-br from-[#CE3852] via-[#bf304a] to-[#aa2e44] text-white py-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl text-white/90 font-bold tracking-tight leading-tight mb-4">About Physics Classes</h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            We help students crack IIT JEE, NEET, and board exams with concept clarity, personal mentoring, and innovation. Our mission? Making Physics  feel logical, not intimidating.
                        </p>
                        <div className="mt-6 h-1 w-24 mx-auto bg-white/30 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Mission Section */}
                        <div>
                            <h3 className="text-3xl font-semibold mb-4 text-white/90">🎯 Our Mission</h3>
                            <p className="text-lg text-white/85 mb-6 leading-relaxed">
                            Deliver high‑quality, student‑centric physics education tailored to IIT‑JEE & NEET demands, nurturing analytical thinking and building a strong foundation for future scientists, engineers and medical professionals.
                            </p>

                            <h4 className="text-2xl font-semibold mb-4 text-white/90">Why Choose Us?</h4>
                            <ul className="space-y-4">
                                {[
                                    ["🎓", "Veteran faculty with years of Volcanic coaching excellence."],
                                    ["🔬", "Concept-driven lessons with real-life applications."],
                                    ["📈", "Proven student results across JEE, NEET & boards."],
                                    ["📝", "Weekly tests, performance tracking, and feedback."],
                                ].map(([icon, text], idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:bg-white/15 transition duration-300"
                                    >
                                        <span className="text-2xl mr-4">{icon}</span>
                                        <p className="text-white/90">{text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Vision Section */}
                        <div>
                            <h3 className="text-3xl font-semibold mb-4 text-white/90">🌟 Our Vision</h3>
                            <p className="text-lg text-white/85 mb-6 leading-relaxed">
                            To ignite a lifelong passion for Physics, empowering students with clarity, curiosity and confidence to excel in competitive arenas and beyond.
                            </p>

                            <h4 className="text-2xl font-semibold mb-4 text-white/90">What Makes Us Unique?</h4>
                            <ul className="space-y-4">
                                {[
                                    ["👨‍🏫", "One-on-one coaching tailored for personal growth."],
                                    ["🌐", "Flexible learning: offline & online with recorded access."],
                                    ["💡", "Tech-powered lessons with visual explanations & live demos."],
                                    ["🌱", "A nurturing environment with mental & academic support."],
                                ].map(([icon, text], idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:bg-white/15 transition duration-300"
                                    >
                                        <span className="text-2xl mr-4">{icon}</span>
                                        <p className="text-white/90">{text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-semibold text-[#CE3852] mb-16">What Our Students Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Testimonial 1 */}
                        <div className="bg-gradient-to-tl from-[#FF8E72] to-[#CE3852] p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90">
                            <p className="text-lg text-white mb-4">&quot;The experience here has been life-changing! The faculty and staff are so supportive, and the programs helped me develop both personally and professionally.&quot;</p>
                            <p className="font-semibold text-white">John Doe</p>
                            <p className="text-white opacity-80">JEE 2025 Graduate</p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-gradient-to-tl from-[#FF8E72] to-[#CE3852] p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90">
                            <p className="text-lg text-white mb-4">&quot;I am grateful for all the skills I learned during my time here. The resources provided helped me ace my exams and truly boosted my confidence.&quot;</p>
                            <p className="font-semibold text-white">Jane Smith</p>
                            <p className="text-white opacity-80">Medical Student</p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-gradient-to-tl from-[#FF8E72] to-[#CE3852] p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90">
                            <p className="text-lg text-white mb-4">&quot;The interactive sessions and expert guidance were key to my success. I highly recommend this to anyone looking for top-notch education.&quot;</p>
                            <p className="font-semibold text-white">Sam Williams</p>
                            <p className="text-white opacity-80">Engineering Aspirant</p>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="bg-gradient-to-tl from-[#FF8E72] to-[#CE3852] p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90">
                            <p className="text-lg text-white mb-4">&quot;This place helped me discover my true potential. The teaching methods were effective, and I always felt supported along the way.&quot;</p>
                            <p className="font-semibold text-white">Emma Johnson</p>
                            <p className="text-white opacity-80">Commerce Graduate</p>
                        </div>

                        {/* Testimonial 5 */}
                        <div className="bg-gradient-to-tl from-[#FF8E72] to-[#CE3852] p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90">
                            <p className="text-lg text-white mb-4">&quot;A wonderful experience! The community here is incredible, and I learned so much that I couldn&apos;t have imagined elsewhere.&quot;</p>
                            <p className="font-semibold text-white">Michael Brown</p>
                            <p className="text-white opacity-80">Art & Design Student</p>
                        </div>

                        {/* Testimonial 6 */}
                        <div className="bg-gradient-to-tl from-[#FF8E72] to-[#CE3852] p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90">
                            <p className="text-lg text-white mb-4">&quot;I’ve been able to grow both academically and personally, thanks to the guidance from my instructors and the wide range of resources available.&quot;</p>
                            <p className="font-semibold text-white">Olivia Martinez</p>
                            <p className="text-white opacity-80">Science Major</p>
                        </div>
                    </div>
                </div>
            </div>




            <section className="py-8 px-4 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Text Section */}
                    <div>
                        <h3 className="text-4xl font-bold mb-4">Director&apos;s Message</h3>
                        <p className="text-gray-700 mb-4">
                            Welcome to <strong>Physics Classes</strong>! I am happy to have you with us.
                            As the director of this institute, I am proud of the strong foundation we provide to
                            our students in Physics. At Anand Physics Classes, we make learning Physics easy and
                            interesting. Our experienced teachers focus on helping each student understand the
                            subject clearly, solve problems confidently, and build a strong knowledge base. We
                            believe every student has the potential to do well. Our goal is to guide you through
                            your learning journey and make Physics enjoyable. With regular practice, real-life
                            examples, and continuous support, we are confident that you will succeed.
                        </p>
                        <p className="italic text-gray-600">
                            Thank you for choosing Physics Classes. We are here to help you every step of the way!
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full max-w-[406px]  mx-auto">
                        <img
                            src="/images/directorImg.png"
                            alt="Director"
                            className="w-full h-auto rounded-lg shadow-md object-cover"
                        />

                    </div>
                </div>

            </section>

        </div>
    )
}

export default page
