import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#24324a] mt-12 relative">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div className="text-left">
            <h3 className="font-semibold mb-4 text-white">Elevate Estate</h3>
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed font-medium text-sm">
                At Elevate, we don't just close deals—we foster long-term
                relationships. Your vision is our mission.
              </p>
            </div>
            {/* Follow Us Section */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3 text-white">Follow us</h3>
              <div className="flex space-x-4">
                <Link
                  to="#"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  to="#"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-left">
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300 block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                 to="/about"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300 block"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300 block"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300 block"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-left">
            <h3 className="font-semibold mb-4 text-white">Contact us </h3>
            <div className="space-y-4">
              
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  3rd Floor, Elevate Expert, Plot 68-80, 
                  <br />
                  Sector 136, Noida, UP 201305
                </span>
              </div>
              <Link
                to="mailto:info@elevateestateadvisors.com"
                className="flex items-start gap-2 text-gray-300 hover:text-[#c89c52] transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@elevateestateadvisors.com</span>
              </Link>
              <Link
                to="tel:919880544456"
                className="flex items-center gap-2 text-gray-300 hover:text-[#c89c52] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" /> 91 98800xxxxx
              </Link>
            </div>
          </div>

          {/* Resources section */}
          <div className="text-left">
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacypolicy"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300 block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                 to="#"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300 block"
                >
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-gray-300 hover:text-[#c89c52] transition-colors duration-300 block"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} by Elevate Expert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}