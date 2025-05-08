"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState(""); 
    const [input3, setInput3] = useState(""); 
    const [selectedOption, setSelectedOption] = useState('');
    useEffect(() => {
        setIsModalOpen(true); 
    }, []);

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
      };
      

    // Function to handle form submission
    const handleSubmit = () => {
        console.log("Input 1:", input1);
        console.log("Input 2:", input2);
        console.log("Input 3:", input3);
        closeModal(); 
    };

    return (
        <div>
            {/* Modal */}
            {isModalOpen && (
             <div className="fixed inset-0 bg-gray-900/60 flex justify-center items-center z-[999]">
             <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl transform transition-transform duration-500 ease-in-out scale-95 hover:scale-100">
                 <h2
                     className="text-xl font-bold text-black text-center mb-3 tracking-wide drop-shadow-md"
                     style={{ fontFamily: 'Poppins, sans-serif' }}
                 >
                     Enquiry Form
                 </h2>
                 <h4 className="font-medium text-sm text-gray-700 text-center mb-4 drop-shadow-md opacity-90">
                     Fill out the form and we’ll get back to you shortly.
                 </h4>
                 <div className="space-y-3">
                     <div>
                         <label htmlFor="name" className="text-sm font-semibold text-gray-800">
                             Name
                         </label>
                         <input
                             id="name"
                             type="text"
                             placeholder="Enter your Name"
                             value={input1}
                             onChange={(e) => setInput1(e.target.value)}
                             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-sm text-black"
                         />
                     </div>
                     <div>
                         <label htmlFor="mobile" className="text-sm font-semibold text-gray-800">
                             Mobile Number
                         </label>
                         <input
                             id="mobile"
                             type="text"
                             placeholder="Enter Your Mobile Number"
                             value={input2}
                             onChange={(e) => setInput2(e.target.value)}
                             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-sm text-black"
                         />
                     </div>
                     <div>
                         <label htmlFor="email" className="text-sm font-semibold text-gray-800">
                             Email
                         </label>
                         <input
                             id="email"
                             type="text"
                             placeholder="Enter Your Email"
                             value={input3}
                             onChange={(e) => setInput3(e.target.value)}
                             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-sm text-black"
                         />
                     </div>
                 </div>
                 <div className="w-full mt-3">
                     <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-1">
                         Select Service
                     </label>
                     <select
                         id="service"
                         value={selectedOption}
                         onChange={handleChange}
                         className="w-full p-2 border bg-white border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none text-sm text-black"
                     >
                         <option value="" className="text-black">-- Select a Service --</option>
                         <option value="product-enquiry" className="text-black">IIT-JEE</option>
                         <option value="support" className="text-black">NEET</option>
                         <option value="other" className="text-black">11th & 12th Board</option>
                     </select>
                 </div>
                 <div className="flex justify-center space-x-4 mt-4">
                     <button
                         onClick={handleSubmit}
                         className="bg-[#CE3852] text-white px-4 py-2 text-sm rounded-md shadow hover:bg-[#FF7B7B] transition-all duration-300 transform hover:scale-105"
                     >
                         Submit
                     </button>
                     <button
                         onClick={closeModal}
                         className="bg-transparent text-[#CE3852] px-4 py-2 text-sm rounded-md border-2 border-[#CE3852] hover:bg-[#CE3852] hover:text-white transition-all duration-300 transform hover:scale-105"
                     >
                         Close
                     </button>
                 </div>
             </div>
         </div>
         

            )}
            {/* Hero Section */}
            <div className="pt-20 pb-24 bg-[#CE3852]">
                <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-y-10 items-center text-center">
                    {/* Heading */}
                    <div className="md:col-start-3 mt-10 md:col-span-8">
                        <h1 className="text-white font-montserrat font-extrabold text-4xl md:text-6xl leading-tight md:leading-[1.2]">
                            Top Physics Classes for <br className="hidden md:block" /> JEE and NEET
                        </h1>
                    </div>

                    {/* Subheading */}
                    <div className="md:col-start-3 md:col-span-8">
                        <p className="text-gray-300 font-roboto text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Join Patna&apos;s premier institute for JEE and NEET preparations. Get ahead with top-notch faculty and real results.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="md:col-start-5 md:col-span-4 flex justify-center">
                        <Link
                            href="/enquiry"
                            target="_blank"
                            className="bg-white text-[#CE3852] font-semibold font-montserrat px-8 py-3 rounded-full 
             border-2 border-[#CE3852] transition-all duration-300 shadow-md hover:bg-[#CE3852] 
             hover:text-white hover:shadow-lg"
                        >
                            Book a Free Demo
                        </Link>

                    </div>
                </div>
            </div>
            <div className="w-full min-h-[648px] md:min-h-[653px] grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 py-10 items-center">
                {/* Left content */}
                <div className="flex flex-col justify-start gap-6">
                    <h3 className="text-4xl md:text-5xl text-[#CE3852] font-bold text-left">
                        Welcome to Physics Classes
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                        Anand Kumar Sir, the academy blends hybrid learning (offline Patna campus + online app), a concept‑first pedagogy, personalised mentorship and rigorous, exam‑oriented practice. Its students regularly secure top AIRs in JEE/NEET and 95 %+ board scores, making the institute a recognised name on review platforms, Justdial listings and social media.
                    </p>
                    <div>
                        <Link
                            href="/AboutUs"
                            className="bg-[#CE3852] text-white font-semibold font-montserrat px-8 py-3 rounded-full 
             border-2 border-[#CE3852] transition-all duration-300 shadow-md hover:bg-[#CE3852] 
             hover:text-white hover:shadow-lg"
                        >
                            About us
                        </Link>
                    </div>
                </div>

                {/* Right image */}
                <div className="flex justify-center items-center">
                    <img
                        src="https://i.ytimg.com/vi/PRqP83O2Zag/maxresdefault.jpg"
                        alt="Rajesh Physics Classes"
                        className="w-full h-auto max-w-[606px] max-h-[455px] object-contain"
                    />
                </div>
            </div>

            <section className="grid md:grid-cols-2 gap-8 px-4 md:px-16 py-12 items-center">
                {/* Text Section */}
                <div>
                    <h3 className="text-6xl font-semibold mb-2 text-[#CE3852]">One to One Live Private Tuition</h3>
                    <p className="text-2xl text-gray-700 mb-6">
                        Premium Tutors. Personal Attention. Perfect Learning.
                    </p>

                    <a
                        className="bg-[#CE3852] text-white font-semibold font-montserrat px-8 py-3 rounded-full 
                         border-2 border-[#CE3852] transition-all duration-300 shadow-md hover:bg-[#CE3852] 
                         hover:text-white hover:shadow-lg">
                        Learn more
                    </a>
                </div>


                {/* Image Section */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-center items-center">
                        <img
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V5vbDyqehovVja/online-tutor-32-dOq8nJRLBbiDr6VX.jpg"
                            alt="Online Tutor"
                            className="rounded-xl w-full max-w-xs object-cover"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V5vbDyqehovVja/online-tutor-32-dOq8nJRLBbiDr6VX.jpg"
                            alt="Online Tutor"
                            className="rounded-xl w-full max-w-xs object-cover"
                        />
                    </div>
                </div>
            </section>
            <div className="w-full py-16 bg-gray-200">
                <div
                    className="relative z-[1] col-span-full md:col-span-3 row-start-2 row-end-3 md:row-start-2 md:row-end-3 mb-4 transition-all duration-500 slide-in"
                    style={{
                        margin: '0 0 16px 0',
                    }}
                >
                    <div
                        id="ai-SCpJtP"
                        className="text-box layout-element__component layout-element__component--GridTextBox text-center"
                        style={{ whiteSpace: 'break-spaces' }}
                    >
                        <h1 className="text-4xl md:text-5xl font-semibold text-[#CE3852]">
                            Expert Physics Tutoring
                        </h1>
                    </div>

                    <div
                        className="layout-element layout-element--layout layout-element transition transition--slide"
                        data-qa="layout-element-wrapper:ai-lf_j7n"
                        data-animation-state="active"
                    >
                        <div className="text-box layout-element__component layout-element__component--GridTextBox flex justify-center items-center py-8 px-4 max-w-3xl mx-auto">
                            <p className="text-gray-700 text-lg md:text-xl text-center">
                                Physics Classes offers top-notch tutorials for JEE and NEET in Patna, ensuring student success.
                            </p>
                        </div>
                    </div>

                </div>
                {/* Row of 3 similar divs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
                    {/* First Div */}
                    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
                        {/* Image */}
                        <div className="flex justify-center items-center mb-4">
                            <img
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V5vbDyqehovVja/online-tutor-32-dOq8nJRLBbiDr6VX.jpg"
                                alt="Online Tutor"
                                className="rounded-xl w-full max-w-xs object-cover"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">IIT JEE Preparationy</h1>

                        {/* Paragraph */}
                        <p className="text-gray-600 text-lg mb-6">
                            Comprehensive coaching for JEE Main and Advanced, tailored to help students excel in their exams.
                        </p>

                        {/* Button */}
                        <Link
                            href="/enquiry"
                            className="bg-[#CE3852] text-white font-semibold font-montserrat px-8 py-3 rounded-full 
                            border-2 border-[#CE3852] transition-all duration-300 shadow-md hover:bg-[#CE3852] 
                            hover:text-white hover:shadow-lg">
                            Enroll Now
                        </Link>
                    </div>

                    {/* Second Div */}
                    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
                        {/* Image */}
                        <div className="flex justify-center items-center mb-4">
                            <img
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V5vbDyqehovVja/online-tutor-32-dOq8nJRLBbiDr6VX.jpg"
                                alt="Online Tutor"
                                className="rounded-xl w-full max-w-xs object-cover"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">NEET Preparation</h1>

                        {/* Paragraph */}
                        <p className="text-gray-600 text-lg mb-6">
                            Specialized training for NEET aspirants, focusing on Physics concepts to boost your performance.
                        </p>

                        {/* Button */}
                        <Link
                            href="/enquiry"
                            className="bg-[#CE3852] text-white font-semibold font-montserrat px-8 py-3 rounded-full 
             border-2 border-[#CE3852] transition-all duration-300 shadow-md hover:bg-[#CE3852] 
             hover:text-white hover:shadow-lg">
                            Enroll Now
                        </Link>
                    </div>
                    {/* Third Div */}
                    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg text-center">
                        {/* Image */}
                        <div className="flex justify-center items-center mb-4">
                            <img
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=400,h=400,fit=crop/m7V5vbDyqehovVja/online-tutor-32-dOq8nJRLBbiDr6VX.jpg"
                                alt="Online Tutor"
                                className="rounded-xl w-full max-w-xs object-cover"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">School Preparation</h1>

                        {/* Paragraph */}
                        <p className="text-gray-600 text-lg mb-6">
                            Personalized tuition for Class 11th and 12th, enhancing understanding and application of Physics principles.
                        </p>

                        {/* Button */}
                        <Link
                            href="/enquiry"
                            className="bg-[#CE3852] text-white font-semibold font-montserrat px-8 py-3 rounded-full 
             border-2 border-[#CE3852] transition-all duration-300 shadow-md hover:bg-[#CE3852] 
             hover:text-white hover:shadow-lg">
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </div>
            <section className="bg-[#eafaea] px-4 py-12 md:py-20">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Heading */}
                    <div className="md:col-span-3 text-center">
                        <h3 className="text-[36px] md:text-[52px] font-semibold text-[#CE3852] leading-snug mb-4">
                            In-Depth Lessons & Expert Guidance
                        </h3>
                        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mt-2">
                            Watch and experience firsthand how makes Physics simple, engaging, and accessible for all learners.
                            Ready to dive deeper? Explore more in our full course sections!
                        </p>
                    </div>

                    {/* Video 1 */}
                    <div className="w-full">
                        <div className="w-full h-[250px]">
                            <iframe
                                src="https://www.youtube.com/embed/iyKMsH83uPA"
                                title="Rajesh Physics Video 1"
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Video 2 */}
                    <div className="w-full">
                        <div className="w-full h-[250px]">
                            <iframe
                                src="https://www.youtube.com/embed/TFREcIRib2Y"
                                title="Rajesh Physics Video 2"
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Video 3 */}
                    <div className="w-full">
                        <div className="w-full h-[250px]">
                            <iframe
                                src="https://www.youtube.com/embed/QAkQ7_1D_NM"
                                title="Rajesh Physics Video 3"
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-white px-4 py-20 text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Testimonial Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-4 overflow-visible">
                        <div className="text-2xl text-[#CE3852]">★★★★★</div>
                        <p className="text-lg md:text-xl font-light text-[#CE3852]">
                            Physics Classes transformed my understanding of physics. Their teaching methods and depth of knowledge helped me ace my JEE exams with confidence and clarity.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1596496181861-5fc5346995ba?auto=format&fit=crop&w=100&h=100"
                            alt="testimonial"
                            className="w-16 h-16 rounded-full object-cover border-2 border-[#CE3852]"
                        />
                        <p className="font-semibold text-base text-[#CE3852]">Anand Kumar</p>
                    </div>
                    {/* Testimonial Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center space-y-4 overflow-visible">
                        <div className="text-2xl text-[#CE3852]">★★★★★</div>
                        <p className="text-lg md:text-xl font-light text-[#CE3852]">
                            The problem-solving approach and conceptual clarity I gained at Physics Classes made my learning experience fun and effective. Highly recommended!
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=100&h=100"
                            alt="testimonial"
                            className="w-16 h-16 rounded-full object-cover border-2 border-[#CE3852]"
                        />
                        <p className="font-semibold text-base text-[#CE3852]">Sneha Sharma</p>
                    </div>
                </div>

            </section>
            <section className="w-full bg-gradient-to-br from-pink-100 to-pink-50
 py-12 lg:py-20">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="flex justify-center items-center mb-10">
                        <h3 className="text-4xl font-extrabold text-center text-[#CE3852]">
                            Register a Free Demo Class
                        </h3>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Image Section */}
                        <div className="flex justify-center items-center">
                            <img
                                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=606,h=404,fit=crop/m7V5vbDyqehovVja/adobestock_345324097-1-mP42lxe5znirZ3kE.jpeg"
                                alt="Demo Class"
                                className="rounded-xl shadow-lg w-full h-[350px] lg:h-[420px] object-cover"
                            />
                        </div>

                        {/* Form Section */}
                        <div className="bg-white p-8 shadow-xl rounded-xl border border-gray-200">
                            <form className="space-y-5">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="fullName">Full Name*</label>
                                    <input
                                        id="fullName"
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="phone">Phone*</label>
                                    <input
                                        id="phone"
                                        type="text"
                                        placeholder="Your phone number"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                                    />
                                </div>

                                {/* Courses */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-gray-700">Courses*</label>
                                    <div className="space-y-2">
                                        {['IIT JEE', 'NEET', 'Class 11th & 12th', 'Private Tuition', 'Others'].map((course, idx) => (
                                            <label key={idx} className="flex items-center">
                                                <input type="radio" name="course" value={course} className="mr-2 accent-green-600" />
                                                {course}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#CE3852] hover:bg-white hover:text-[#CE3852] text-white font-semibold py-3 rounded-full transition duration-300 border-2 border-transparent hover:border-[#CE3852]"
                                >
                                    Submit
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#CE3852] mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What makes Physics Classes stand out for JEE and NEET preparation?",
                                a: "Physics Classes offers an unmatched blend of expert faculty, personalized attention, and comprehensive study material. Our teaching methods are designed to simplify complex Physics concepts, ensuring a deep understanding and strong conceptual clarity.",
                            },
                            {
                                q: "How are the classes structured for JEE and NEET?",
                                a: "We offer both online and offline classes tailored to your learning pace. The curriculum is broken down into easy-to-understand modules, with a focus on building a strong foundation in Physics.",
                            },
                            {
                                q: "Do you provide study materials?",
                                a: "Yes, we provide comprehensive study materials including notes, problem sets, and reference books that are regularly updated as per the latest exam trends.",
                            },
                            {
                                q: "Can I attend demo classes before enrolling?",
                                a: "Yes, we offer free demo classes so that you can get a firsthand experience of our teaching methodology and environment.",
                            },
                            {
                                q: "How can I enroll in Physics Classes?",
                                a: "You can enroll easily through our website or by contacting our admission team. We’ll guide you step-by-step.",
                            },
                            {
                                q: "Do you offer online classes for students outside the city?",
                                a: "Absolutely! We provide live online classes with recorded sessions, doubt-solving, assignments, and mock tests — just like offline classes.",
                            },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="group bg-white border border-gray-200 rounded-xl shadow-sm open:ring-2 ring-[#CE3852] transition-all"
                            >
                                <summary className="cursor-pointer px-5 py-4 text-gray-800 font-medium flex justify-between items-center">
                                    {faq.q}
                                    <svg
                                        className="w-5 h-5 text-[#CE3852] transition-transform group-open:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 text-sm sm:text-base">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
