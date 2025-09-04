import React from "react";
import image from "./../assets/images.jpg"
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Discover Your Dream Property in India
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl">
            InvestoXpert is one of the fastest-growing companies in real estate offering comprehensive solutions. 
            Explore premium residential and commercial spaces across Delhi NCR with trusted developers and verified listings.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#properties" className="px-5 py-3 bg-primary-500 text-white rounded-lg shadow">
              Explore Properties
            </a>
            <a href="#contact" className="px-5 py-3 border border-primary-500 text-primary-500 rounded-lg">
              Book Appointment
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-sm">
            <div className="p-2 bg-white rounded shadow text-center">Noida</div>
            <div className="p-2 bg-white rounded shadow text-center">Gurugram</div>
            <div className="p-2 bg-white rounded shadow text-center">Greater Noida</div>
            <div className="p-2 bg-white rounded shadow text-center">Delhi</div>
          </div>
        </div>

        <div className="order-first md:order-last">
          {/* placeholder image area — replace with real hero image */}
          <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            <img
              src={image}
              alt="Dream Property"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
       <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-50"></div>
    </section>
  );
}

