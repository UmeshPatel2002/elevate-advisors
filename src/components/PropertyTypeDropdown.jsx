import React, { useState } from "react";

const PropertyTypeDropdown = ({ propertyType, setPropertyType }) => {
  const [open, setOpen] = useState(false);
  const options = ["All", "Villa", "Apartment", "Plot"];

  return (
    <div className="mb-6 relative">
      <label className="block mb-2 font-medium text-[#484848]">
        Property Type
      </label>

      {/* Selected Box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full p-3 rounded-xl border border-gray-300 bg-white 
                   shadow-sm text-gray-700 font-medium cursor-pointer
                   flex justify-between items-center
                   hover:border-blue-400 transition"
      >
        {propertyType}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-lg 
                     border border-gray-200 overflow-hidden animate-fadeIn"
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setPropertyType(opt);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-50 
                         transition-colors ${
                           propertyType === opt ? "bg-blue-100 font-semibold" : ""
                         }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyTypeDropdown;
