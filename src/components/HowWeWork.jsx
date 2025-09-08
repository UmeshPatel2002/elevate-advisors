import React from "react";
import {
  Search,
  Users,
  MapPin,
  Home,
  CreditCard,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: <Search size={28} />,
    title: "Browse Properties",
    desc: "Explore our wide range of verified listings.",
  },
  {
    icon: <Users size={28} />,
    title: "Meet Our Experts",
    desc: "Get personalized guidance from our specialists.",
  },
  {
    icon: <MapPin size={28} />,
    title: "Visit Location",
    desc: "Schedule site visits at your convenience.",
  },
  {
    icon: <Home size={28} />,
    title: "Finalize Property",
    desc: "Choose the right home or office space for you.",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Easy Financing",
    desc: "Avail loan assistance with trusted partners.",
  },
  {
    icon: <Headphones size={28} />,
    title: "Customer Support",
    desc: "24/7 support even after your purchase.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-[#fff]">
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm uppercase tracking-wide text-gray-500 font-medium">
          How We Work
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
          End-to-End Assistance
        </h2>
        <div className="w-16 h-1 bg-pink-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center lg:items-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center flex-1"
          >
            {/* Icon in bubble */}
            <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-300 bg-white shadow-md group hover:border-pink-500 transition">
              <div className="text-pink-500">{step.icon}</div>
            </div>
            {/* Text */}
            <h3 className="mt-4 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              {step.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{step.desc}</p>
          </div>
        ))}

        {/* Horizontal line only for large screens */}
        <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>
      </div>
    </section>
  );
}
