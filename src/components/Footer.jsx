import React from "react";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      {/* Decorative Line (using green + gold gradient to match navbar hover colors) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fff] via-[#24324a] to-[#fff]"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 text-center">
        {/* Company Info */}
        <p className="text-[#484848] font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#24324a] font-semibold">InvestoXpert</span>
        </p>
        <p className="text-sm text-[#484848] mt-1">
          3rd Floor, Riana Aurelia, Plot 93-94, Sector 136, Noida, UP 201305
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 text-sm">
          <a
            href="tel:+919880083870"
            className="flex items-center gap-2 text-[#484848] hover:text-[#69bb53] transition-colors"
          >
            <Phone className="w-4 h-4" /> +91 9880083870
          </a>
          <a
            href="mailto:info@investoxpert.com"
            className="flex items-center gap-2 text-[#484848] hover:text-[#c89c52] transition-colors"
          >
            <Mail className="w-4 h-4" /> info@investoxpert.com
          </a>
        </div>
      </div>
    </footer>
  );
}
