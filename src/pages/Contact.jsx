import React from "react";
import { Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 mt-20 py-16 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gray-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-gray-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-3xl mx-auto px-5 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#484848]">
          Get in Touch
        </h2>
        <p className="text-center text-[#484848] mb-10">
          We’d love to hear from you! Fill out the form and we’ll get back to you soon.
        </p>

        {/* Form */}
        <form className="space-y-5 bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/30">
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 outline-none text-[#484848]"
            placeholder="Name"
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 outline-none text-[#484848]"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 outline-none text-[#484848]"
            placeholder="Phone"
          />
          <textarea
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all duration-300 outline-none resize-none text-[#484848]"
            rows="4"
            placeholder="Message"
          />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition-all duration-300"
            >
              Submit
            </button>
            <a
              href="tel:+919880083870"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-500 text-gray-500 font-semibold rounded-lg hover:bg-gray-500 hover:text-white transition-all duration-300"
            >
              <Phone className="w-4 h-4" /> Call: +91 9880083870
            </a>
          </div>
        </form>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
      </div>
    </div>
  );
}
