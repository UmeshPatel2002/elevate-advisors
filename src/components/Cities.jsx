import React from "react";
import gnoida from "./../assets/noida.jpg"
import noida from "./../assets/gnoida.jpg"
import delhi from "./../assets/delhi.jpg"
import gurugram from "./../assets/gurugram.jpg"


const cities = [
  {
    name: "Noida",
    subtitle: "Properties",
    img: noida,
  },
  {
    name: "Gurugram",
    subtitle: "Properties",
    img: gurugram,
  },
  {
    name: "Greater Noida",
    subtitle: "Properties",
    img: gnoida,
  },
  {
    name: "Delhi NCR",
    subtitle: "Properties",
    img: delhi,
  },
];

export default function Cities() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#fff]">
      <p className="mt-2 font-medium text-center text-gray-500">
        Find the perfect property across top cities.
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#484848]">
        Explore Our Prime Locations
      </h2>
      <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>

      {/* Cards Section */}
      <div className="mt-8">
        {/* Large Screen: 4 in a row */}
        <div className="hidden lg:flex justify-center gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group w-64"
            >
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center text-center justify-end p-4">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-200">{city.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Medium: Horizontal Scroll */}
        <div className="flex lg:hidden gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group min-w-[250px] snap-center"
            >
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center text-center justify-end p-4">
                <h3 className="text-lg font-bold text-white">{city.name}</h3>
                <p className="text-sm text-gray-200">{city.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
