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
    <section
  id="developers"
  className="bg-gray-50 py-16"
>

      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
          Trusted Developers
        </h2>

        {/* Responsive layout */}
        <div className="flex overflow-x-auto gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 no-scrollbar">
          {devs.map((d, i) => (
            <div
              key={d.name}
              className="relative min-w-[220px] sm:min-w-0 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              {/* Full background image */}
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-500 hover:scale-110"
              />

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400 drop-shadow-md">
  {d.name}
</h3>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
