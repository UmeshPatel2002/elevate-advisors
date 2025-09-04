import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import elon from "./../assets/elon.jpg";

const testimonials = [
  {
    name: "Ananya Verma",
    quote:
      "Elevate Estate Advisors exceeded my expectations with their local expertise.",
    img: elon,
  },
  {
    name: "Rohan Kapoor",
    quote: "A seamless experience — stress-free property search.",
    img: elon,
  },
  {
    name: "Siddharth Sharma",
    quote: "Their market knowledge was invaluable.",
    img: elon,
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
   <section
  id="testimonials"
  className="bg-gray-50 py-20 relative"
>

      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14">
          What Our Clients Say
        </h2>

        {/* Swiper Slider */}
        <div className="relative group">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            grabCursor={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="min-h-[260px] flex flex-col justify-between items-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* User Image */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-primary-100 shadow-md">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Quote */}
                  <p className="text-gray-700 italic mb-4 line-clamp-4 flex-grow leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Name */}
                  <p className="text-primary-500 font-semibold tracking-wide">
                    — {t.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute top-1/2 left-2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/80 backdrop-blur-md shadow-lg hover:bg-primary-500 hover:text-white p-3 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute top-1/2 right-2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/80 backdrop-blur-md shadow-lg hover:bg-primary-500 hover:text-white p-3 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-primary-50 pointer-events-none"></div> */}

      {/* Custom Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background: #d1d5db; /* gray-300 */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6; /* primary-500 */
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
}
