
import { motion } from "framer-motion";
import image from "./../assets/images.jpg"

const items = [
  {
    title: "Residential Properties",
    desc: "Luxury apartments, family homes and gated communities.",
    img: image
  },
  {
    title: "Commercial Properties",
    desc: "Retail, office and high-return investments.",
    img: image
  },
  {
    title: "Pre-launch Projects",
    desc: "Access to upcoming projects and pre-launch offers.",
    img: image
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((i, idx) => (
            <motion.div
              key={i.title}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-700 ease-in-out overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Image section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={i.img}
                  alt={i.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">
                  {i.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {i.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
