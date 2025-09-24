import React, { useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "./../assets/bg1.jpg";
import img2 from "./../assets/bg2.jpg";
import img3 from "./../assets/bg3.jpg";
import img4 from "./../assets/aboutus.jpg";
import {
  Home,
  MapPin,
  IndianRupee,
  Ruler,
  Calendar,
  Building2,
} from "lucide-react";

// Sample property data
const sampleProperties = [
  {
    property_id: 1,
    address: "123 Palm Street",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    list_price: 5500000,
    square_footage: 2200,
    year_built: 2018,
    description:
      "Luxury 3BHK villa with a private garden, parking, and modern amenities.",
    listing_status: "For Sale",
    property_type: "Commercial",
    images: [img1, img2, img3, img4],
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    property_id: 2,
    address: "45 Skyline Apartments",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    list_price: 3200000,
    square_footage: 1200,
    year_built: 2021,
    description: "Modern 2BHK apartment near metro station.",
    listing_status: "For Sale",
    property_type: "Apartment",
    images: [img1, img2, img3, img4],
    latitude: 19.076,
    longitude: 72.8777,
  },
   {
    property_id: 3,
    address: "45 Skyline Apartments",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    list_price: 3200000,
    square_footage: 1200,
    year_built: 2021,
    description: "Modern 2BHK apartment near metro station.",
    listing_status: "For Sale",
    property_type: "Residential",
    images: [img1, img2, img3, img4],
    latitude: 19.076,
    longitude: 72.8777,
  },
   {
    property_id: 4,
    address: "45 Skyline Apartments",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    list_price: 3200000,
    square_footage: 1200,
    year_built: 2021,
    description: "Modern 2BHK apartment near metro station.",
    listing_status: "For Sale",
    property_type: "Office Space",
    images: [img1, img2, img3, img4],
    latitude: 19.076,
    longitude: 72.8777,
  },
];

export default function PropertyDetails() {
  const { id } = useParams();
  const property = sampleProperties.find((p) => p.property_id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(
    property ? property.images[0] : null
  );

  if (!property) {
    return <h2 className="text-center mt-20">Property not found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-28 bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Image Gallery */}
<div className="p-6">
  <img
    src={selectedImage}
    alt="Main Property"
    className="w-full h-56 sm:h-72 md:h-96 lg:h-[500px] object-cover rounded-lg"
  />

  <div
    className="
      mt-4 flex gap-3 overflow-x-auto md:overflow-x-hidden flex-nowrap
      scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
      p-1
    "
  >
    {property.images.map((img, index) => (
      <div
        key={index}
        className={`flex-shrink-0 p-1 rounded-md ${
          selectedImage === img ? "ring-4 ring-blue-400" : ""
        }`}
      >
        <img
          src={img}
          alt={`Property ${index}`}
          className="w-32 h-20 sm:w-36 sm:h-24 object-cover rounded-md cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => setSelectedImage(img)}
        />
      </div>
    ))}
  </div>
</div>


      {/* Property Details */}
      <div className="p-6 space-y-4">
        <h1 className="text-3xl font-bold text-[#484848] flex items-center gap-2">
          <Home className="w-7 h-7 text-gray-500" /> {property.property_type}
        </h1>
        <p className="text-gray-600 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-500" /> {property.address},{" "}
          {property.city}, {property.state}
        </p>
        <p className="text-2xl font-bold flex items-center gap-2 text-[#484848]">
          <IndianRupee className="w-6 h-6 text-gray-500" />{" "}
          {property.list_price.toLocaleString()}
        </p>
        <div className="flex flex-wrap gap-6 text-gray-600">
          <span className="flex items-center gap-1">
            <Ruler className="w-4 h-4" /> {property.square_footage} sqft
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> Built {property.year_built}
          </span>
          <span className="flex items-center gap-1">
            <Building2 className="w-4 h-4" /> {property.listing_status}
          </span>
        </div>
        <p className="text-gray-600">{property.description}</p>
      </div>

      {/* Google Map */}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3">Location</h2>
        <iframe
          title="Property Location"
          src={`https://www.google.com/maps?q=${property.latitude},${property.longitude}&hl=es;z=14&output=embed`}
          className="w-full h-[400px] rounded-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
