import React from "react";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white to-gray-50 border-t border-gray-200 mt-12">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        {/* Company Info */}
        <p className="text-gray-700 font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary-600 font-semibold">InvestoXpert</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          3rd Floor, Riana Aurelia, Plot 93-94, Sector 136, Noida, UP 201305
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 text-sm">
          <a
            href="tel:+919880083870"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Phone className="w-4 h-4" /> +91 9880083870
          </a>
          <a
            href="mailto:info@investoxpert.com"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Mail className="w-4 h-4" /> info@investoxpert.com
          </a>
        </div>
      </div>
    </footer>
  );
}
