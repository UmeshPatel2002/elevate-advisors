import React from "react";
import aboutus from "./../assets/aboutus.jpg";
import vishal from "./../assets/vishal khirbat.jpg";
import sushil from "./../assets/sushil tiwari.jpg";
import mission from "./../assets/mission.jpg"
import ourStory from "./../assets/our story.jpg"

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
      <section className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden bg-black/10">
        <img
          src={aboutus}
          alt="About Elevate Estate Advisors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            About Elevate Estate Advisors
          </h1>
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-16 space-y-20">
        {/* Meet Our Directors */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#484848] mb-3  text-center">
            Meet Our Directors
          </h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto mb-12 rounded-full"></div>

          {/* Director 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-6 mb-10">
            <img
              src={vishal}
              alt="Vishal Khirbat"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg object-cover shadow-lg"
            />

            <div className="text-center md:text-left text-justify leading-relaxed">
              <h3 className="text-xl font-bold text-gray-800">
                Vishal Khirbat
              </h3>
              <p className="italic text-gray-500 mb-4">Co-Founder & Director</p>
              <p className="text-gray-600 mb-2">
                Vishal Khirbat is a seasoned real estate expert with over 24
                years of leadership experience across Sales, Operations, HR
                Management, and General Administration. With a Management
                Postgraduate degree from Pune University, he has played a
                pivotal role in building and scaling high-performing teams and
                driving operational excellence in the real estate and corporate
                sectors. Vishal’s strength lies in his deep understanding of
                real estate market dynamics and his ability to align strategic
                planning with client needs. He has successfully led multiple
                projects from the ground up—ensuring timely delivery,
                transparent execution, and lasting value for stakeholders.
              </p>
              <p className="text-gray-600">
                Known for his ethical approach, strong negotiation skills, and
                people-first mindset, Vishal believes in long-term relationship
                building and delivering exceptional experiences to both clients
                and teams. His leadership is defined by innovation,
                collaboration, and an unwavering commitment to quality.
              </p>
            </div>
          </div>

          {/* Director 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md p-6 mb-10">
            <img
              src={sushil}
              alt="Vishal Khirbat"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg object-cover shadow-lg"
            />

            <div className="text-center md:text-left text-justify">
              <h3 className="text-xl font-bold text-gray-800">Sushil Tiwari</h3>
              <p className="italic text-gray-500 mb-4">Co-Founder & Director</p>
              <p className="text-gray-600 mb-2">
                Sushil Tiwari is a seasoned professional with over 16 years of
                experience in banking, financial services, and real estate. He
                specializes in financial planning, real estate development, and
                strategic business operations. Sushil has led high-performing
                teams, managed multimillion-dollar portfolios, and delivered
                end-to-end project execution. Known for his hands-on leadership
                and client-first approach, he builds lasting relationships based
                on trust and performance. His expertise spans financial
                management, risk mitigation, and customer relationship
                management.
                <br />
              </p>

              <p className="text-gray-600">
                A strong believer in innovation, he adapts swiftly to evolving
                market trends. Sushil is also committed to mentoring young
                talent and fostering industry growth. Outside of work, he enjoys
                studying market trends and engaging in community initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img
            src={mission}
            alt="Mission & Vision"
            className="rounded-xl shadow-md w-full md:w-1/2 object-cover"
          />
          <div className="text-center md:text-left text-justify w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#484848] mb-3 text-center md:text-left">
              Mission & Vision
            </h2>
            <div className="w-16 h-1 bg-pink-500 mx-auto md:mx-0 md:ml-0 md:mr-auto mb-12 rounded-full"></div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mission</h3>
                <p className="text-gray-600">
                  To provide seamless, transparent, client-focused real estate
                  solutions with integrity and expertise.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted and innovative real estate
                  consultants, redefining property transactions for a better
                  future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="text-center md:text-left w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#484848] mb-3">
              Our Story
            </h2>
            <div className="w-16 h-1 bg-pink-500 mx-auto md:mx-0 mb-12 rounded-full"></div>

            <div className="space-y-4 text-justify md:text-left">
              <p className="text-gray-600 leading-relaxed">
                At Elevate Estate Advisors LLP, our journey began with a
                vision—to redefine real estate brokerage by making property
                transactions seamless, transparent, and client-focused.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our name, "Elevate," reflects our core philosophy: to elevate
                the real estate experience through expertise, innovation, and
                unwavering integrity. Whether it’s finding a dream home,
                securing the best investment opportunities, or facilitating
                smooth property transactions, we go above and beyond to exceed
                expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As a new-age real estate consultant firm, we combine market
                insights, personalized service, and cutting-edge technology to
                simplify the buying, selling, and leasing process.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                At Elevate, we don’t just close deals—we foster long-term
                relationships. Your vision is our mission.
              </p>
            </div>
          </div>

          <img
            src={ourStory}
            alt="Our Story"
            className="rounded-xl shadow-md mt-4 w-full md:w-1/2 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
