import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./../assets/bg1.jpg"
import img2 from "./../assets/bg2.jpg"
import {
  Home,
  MapPin,
  IndianRupee,
  Ruler,
  Calendar,
  Building2,
} from "lucide-react";

// Sample property data (in real app -> fetch from backend/DB)
const sampleProperties = [
  {
    property_id: 1,
    address: "123 Palm Street",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    list_price: 5500000,
    min_price: 5000000,
    max_price: 6000000,
    square_footage: 2200,
    year_built: 2018,
    description: "Luxury 3BHK villa with garden and parking.",
    listing_status: "For Sale",
    property_type: "Villa",
    image: img1, // Replace with real property image
  },
  {
    property_id: 2,
    address: "45 Skyline Apartments",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    list_price: 3200000,
    min_price: 3000000,
    max_price: 3500000,
    square_footage: 1200,
    year_built: 2021,
    description: "Modern 2BHK apartment near metro station.",
    listing_status: "For Sale",
    property_type: "Apartment",
    image: img2,
  },
];

export default function PropertyPage() {
  const [propertyType, setPropertyType] = useState("All");
  const [priceRange, setPriceRange] = useState(10000000);

  // Filter properties
  const filteredProperties = sampleProperties.filter((property) => {
    const matchesType =
      propertyType === "All" || property.property_type === propertyType;
    const matchesPrice = property.list_price <= priceRange;
    return matchesType && matchesPrice;
  });

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto  px-5 gap-6 mt-28">
      {/* Filter Sidebar */}
      <aside className="w-full md:w-1/4 bg-white rounded-2xl shadow-md p-5 h-fit sticky top-28">
        <h3 className="text-xl font-semibold mb-4 text-[#484848]">Filters</h3>

        {/* Property Type */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-[#484848]">
            Property Type
          </label>
          <select
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Plot">Plot</option>
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block mb-2 font-medium text-[#484848]">
            Max Price: ₹{priceRange.toLocaleString()}
          </label>
          <input
            type="range"
            min="1000000"
            max="10000000"
            step="500000"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full bg-[#24324a]"
          />
        </div>
      </aside>

      {/* Property List */}
      <main className="flex-1 space-y-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Link
              to={`/property/${property.property_id}`}
              key={property.property_id}
              className="block"
            >
              <div
                key={property.property_id}
                className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="md:w-1/3">
                  <img
                    src={property.image}
                    alt={property.address}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-[#484848] flex items-center gap-2">
                    <Home className="w-6 h-6 text-gray-500" />{" "}
                    {property.property_type}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-gray-500" />{" "}
                    {property.address}, {property.city}, {property.state}
                  </p>

                  <p className="text-[#484848] font-bold flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-gray-500" /> ₹
                    {property.list_price.toLocaleString()}
                  </p>

                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" /> {property.square_footage}{" "}
                      sqft
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> Built{" "}
                      {property.year_built}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />{" "}
                      {property.listing_status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    {property.description}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center">No properties found.</p>
        )}
      </main>
    </div>
  );
}
