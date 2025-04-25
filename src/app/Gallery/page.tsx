"use client"
import React, { useState } from 'react'

const page = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const images = [
    "https://thebrightpath.in/assets/images/events/e1.jpeg",
    "https://thebrightpath.in/assets/images/events/e2.jpeg",
    "https://thebrightpath.in/assets/images/events/e3.jpeg",
    "https://thebrightpath.in/assets/images/events/e4.jpeg",
    "https://thebrightpath.in/assets/images/events/e5.jpeg",
    "https://thebrightpath.in/assets/images/events/e1.jpeg",
  ];

  const totalSlides = images.length;


  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg0MnwwfDF8c2VhY3J8Nnx8Z2FsbGVyeSUyQ3JlZ2lzdHJhdGlvbnxlbnwwfHx8fDE2NzkwODI3OTg&ixlib=rb-1.2.1&q=80')",
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white px-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-[#CE3852]">
            Welcome to Gallery
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow-md text-white/80 italic text-center opacity-90 shadow-xl">
            Explore vibrant moments from our JEE & NEET learning environment.
          </p>

          <a
            href="#services"
            className="inline-block bg-[#CE3852] text-white px-8 py-4 font-medium rounded-lg shadow-lg hover:bg-[#b72e46] transition mt-12"
          >
            Learn More
          </a>
        </div>
      </section>
      <div className="container px-5 py-24 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="sm:text-4xl text-3xl font-bold text-[#CE3852]">Gallery</h2>
          <p className="text-lg leading-relaxed text-gray-700 mt-4 max-w-3xl mx-auto">
            Explore the exciting programs, engaging events, and untold success stories of &quot;The Bright Path&quot; through our visual gallery. This gallery offers you a chance to connect with our journey and the inspiring achievements of our students.
          </p>
        </div>
        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Carousel Content */}
          <div className="carousel-inner relative w-full overflow-hidden">
            {/* Carousel Items */}
            <div
              className="carousel-item w-full"
              style={{ display: currentSlideIndex === 0 ? 'block' : 'none' }}
            >
              <img
                className="w-full h-96 object-cover object-center rounded-lg"
                src={images[0]}
                alt="Gallery Image 1"
              />
            </div>
            <div
              className="carousel-item w-full"
              style={{ display: currentSlideIndex === 1 ? 'block' : 'none' }}
            >
              <img
                className="w-full h-96 object-cover object-center rounded-lg"
                src={images[1]}
                alt="Gallery Image 2"
              />
            </div>
            <div
              className="carousel-item w-full"
              style={{ display: currentSlideIndex === 2 ? 'block' : 'none' }}
            >
              <img
                className="w-full h-96 object-cover object-center rounded-lg"
                src={images[2]}
                alt="Gallery Image 3"
              />
            </div>
            <div
              className="carousel-item w-full"
              style={{ display: currentSlideIndex === 3 ? 'block' : 'none' }}
            >
              <img
                className="w-full h-96 object-cover object-center rounded-lg"
                src={images[3]}
                alt="Gallery Image 4"
              />
            </div>
            <div
              className="carousel-item w-full"
              style={{ display: currentSlideIndex === 4 ? 'block' : 'none' }}
            >
              <img
                className="w-full h-96 object-cover object-center rounded-lg"
                src={images[4]}
                alt="Gallery Image 5"
              />
            </div>
            <div
              className="carousel-item w-full"
              style={{ display: currentSlideIndex === 5 ? 'block' : 'none' }}
            >
              <img
                className="w-full h-96 object-cover object-center rounded-lg"
                src={images[5]}
                alt="Gallery Image 6"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-0 left-0 px-6 mt-48 py-3 text-white bg-gray-900 bg-opacity-50 hover:bg-opacity-75 focus:outline-none transform -translate-y-1/2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-0 right-0 px-6 mt-48 py-3 text-white bg-gray-900 bg-opacity-50 hover:bg-opacity-75 focus:outline-none transform -translate-y-1/2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          {/* Status Bar */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-medium bg-gray-900 bg-opacity-50 px-4 py-2 rounded-full">
            <span>{currentSlideIndex + 1}</span> / <span>{totalSlides}</span>
          </div>
        </div>
      </div>
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#CE3852] mb-12">
            Gallery: Top Volcanic Classes for JEE & NEET
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <iframe
                className="w-full h-64"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with your JEE or NEET class video link
                title="JEE Classroom Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <iframe
                className="w-full h-64"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"  // Replace with your JEE or NEET lab class video link
                title="NEET Lab Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <iframe
                className="w-full h-64"
                src="https://www.youtube.com/watch?v=Jf5M7w3jRnM"  // Replace with your teacher interaction video
                title="Teacher Interaction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 4 */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <iframe
                className="w-full h-64"
                src="https://www.youtube.com/embed/kJQP7kiw5Fk"  // Replace with your JEE Batch video
                title="JEE Batch Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 5 */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <iframe
                className="w-full h-64"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with your NEET Batch video
                title="NEET Batch Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Video 6 */}
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <iframe
                className="w-full h-64"
                src="https://www.youtube.com/watch?v=U2p04ShBcC0"  // Replace with your Workshop video
                title="Workshop Video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default page
