import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "./../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = "transition duration-300";
  const activeClass = "text-pink-500 font-semibold"; // active page color
  const normalClass = "text-[#484848] ";

  return (
    <nav className="bg-[#fff] text-[#484848] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="ElevateExperts Logo"
            className="h-20 w-auto rounded-md"
          />
          <span className="text-xl font-bold tracking-wide text-[#484848]">
            ELEVATE ESTATE
          </span>
        </NavLink>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? <Menu size={28} /> : <X size={28} />}
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-gray-700 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0 w-[40%]" : "translate-x-full w-0"
        }`}
      >
        {/* Close Button */}
        {isOpen && (
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-gray-700">
              <X size={28} />
            </button>
          </div>
        )}

        {/* Menu Items */}
        <ul className="flex flex-col space-y-6 px-6 py-4 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
              onClick={() => setIsOpen(false)}
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : normalClass}`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
