import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Home, Building2, Building, Warehouse } from "lucide-react";

// Import background images
import bg1 from "./../assets/bg1.jpg";
import bg2 from "./../assets/bg2.jpg";
import bg3 from "./../assets/bg3.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[110vh] md:min-h-[130vh] text-center overflow-hidden md:pt-0">
      {/* Background Carousel */}
      <div className="relative w-full h-[80vh] sm:h-[70vh] md:h-screen z-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src={bg1}
              alt="Background 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bg2}
              alt="Background 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bg3}
              alt="Background 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/20"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-lg sm:text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
            Discover Your Dream Property in India
          </h1>
          <p className="mt-2 sm:mt-3 text-xs sm:text-base md:text-lg text-white/90">
            Begin the search for your home with us!
          </p>

          {/* Search Bar */}
          <div className="mt-4 sm:mt-6 flex w-full max-w-[95%] sm:max-w-[400px] md:max-w-[500px]">
            <input
              type="text"
              placeholder="Search by city, area ..."
              className="flex-grow px-3 py-2 sm:py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#69bb53] text-xs sm:text-sm md:text-base"
            />
            <button className="bg-[#69bb53] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-r-md hover:bg-[#58a946] transition text-xs sm:text-sm md:text-base">
              Search
            </button>
          </div>
        </div>

        {/* Floating Property Categories */}
        <div className="absolute left-1/2 bottom-0 z-30 transform -translate-x-1/2 translate-y-1/2 px-3 sm:px-4 w-full max-w-6xl">
          <div
            className="bg-white/95 backdrop-blur-md shadow-lg rounded-xl 
                  grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-6 sm:py-8"
          >
            {/* Card 1 */}
            <div className="flex flex-col items-center w-full border-r border-b lg:border-b-0 border-gray-300 group py-4">
              <div
                className="p-5 sm:p-6 bg-[#2e3b4e] rounded-full text-white 
                      w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center 
                      transition-colors duration-300 group-hover:bg-[#69bb53]"
              >
                <Home size={28} className="sm:w-9 sm:h-9" />
              </div>
              <p
                className="mt-3 text-sm sm:text-base md:text-lg text-[#484848] font-medium 
                   transition-colors duration-300 group-hover:text-[#69bb53]"
              >
                Modern Villa
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center w-full border-b lg:border-b-0 border-r border-gray-300 group py-4">
              <div
                className="p-5 sm:p-6 bg-[#2e3b4e] rounded-full text-white 
                      w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center 
                      transition-colors duration-300 group-hover:bg-[#69bb53]"
              >
                <Building2 size={28} className="sm:w-9 sm:h-9" />
              </div>
              <p
                className="mt-3 text-sm sm:text-base md:text-lg text-[#484848] font-medium 
                   transition-colors duration-300 group-hover:text-[#69bb53]"
              >
                Family House
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center w-full border-r border-gray-300 group py-4">
              <div
                className="p-5 sm:p-6 bg-[#2e3b4e] rounded-full text-white 
                      w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center 
                      transition-colors duration-300 group-hover:bg-[#69bb53]"
              >
                <Building size={28} className="sm:w-9 sm:h-9" />
              </div>
              <p
                className="mt-3 text-sm sm:text-base md:text-lg text-[#484848] font-medium 
                   transition-colors duration-300 group-hover:text-[#69bb53]"
              >
                Office Space
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-center w-full group py-4">
              <div
                className="p-5 sm:p-6 bg-[#2e3b4e] rounded-full text-white 
                      w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center 
                      transition-colors duration-300 group-hover:bg-[#69bb53]"
              >
                <Warehouse size={28} className="sm:w-9 sm:h-9" />
              </div>
              <p
                className="mt-3 text-sm sm:text-base md:text-lg text-[#484848] font-medium 
                   transition-colors duration-300 group-hover:text-[#69bb53]"
              >
                Apartment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
