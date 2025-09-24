import React from "react";
import { useNavigate } from "react-router-dom";
import exploreImg from "./../assets/explore.jpg"; // replace with your image

export default function ExploreSection() {
    const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 my-16">
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Background image */}
        <img
          src={exploreImg}
          alt="Explore Properties"
          className="w-full h-72 sm:h-96 md:h-[450px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-end justify-center pb-10 text-center">
          <div className="max-w-lg space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
              Looking to buy your <br /> dream home?
            </h2>
            <p className="text-gray-200 text-sm sm:text-base">
              Explore our exclusive projects
            </p>
            <button
              onClick={() => navigate("/properties")}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-md shadow-md transition flex items-center gap-2 mx-auto"
            >
              Browse <span>➜</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
