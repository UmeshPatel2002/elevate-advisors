import React from "react";
import image from "./../assets/images.jpg";

const devs = [
  { name: "SOBHA Realty", img: image },
  { name: "Godrej Properties", img: image },
  { name: "M3M", img: image },
  { name: "Prestige Group", img: image },
  { name: "Birla", img: image },
  { name: "Arihant", img: image },
  { name: "ATS Homekraft", img: image },
  { name: "Nirala", img: image },
];

export default function Developers() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#fff]">
      <div className="max-w-7xl mx-auto">
        <p className="mt-2 font-medium text-center text-gray-500">
          Building trust with world-class developers.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#484848]">
          Trusted Developers
        </h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>

        {/* Cards Section */}
        <div className="mt-8">
          {/* Large Screen: 4 in a row */}
          <div className="hidden lg:flex justify-center gap-6 flex-wrap">
            {devs.map((dev, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg group w-64"
              >
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
                    {dev.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Medium: Horizontal Scroll */}
          <div className="flex lg:hidden gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {devs.map((dev, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg group min-w-[250px] snap-center"
              >
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                  <h3 className="text-lg font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
                    {dev.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
