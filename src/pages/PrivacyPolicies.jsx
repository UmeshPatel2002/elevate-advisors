import React from "react";
import privacy from "./../assets/privacy.jpg";

export default function AboutUs() {
  return (
    <div className="bg-gray-50 mt-20">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden">
        <img
          src={privacy}
          alt="Privacy policy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4">
            Privacy Policy
          </h1>
        </div>
      </section>

            {/* Privacy Policy Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-12 text-gray-700 leading-relaxed text-justify">
        <p className="mb-6">
          At <span className="font-semibold">Elevate Estate Advisors</span>, we are committed to safeguarding your privacy while
          providing you with the highest quality real estate services in the Meerut
          Division of Uttar Pradesh, India. This Privacy Policy outlines how we collect,
          use, and protect your personal information as you interact with our website
          and services.
        </p>

        <h2 className="text-2xl font-semibold text-[#24324a] mt-8 mb-3">
          Information Collection and Use
        </h2>
        <p className="mb-6">
          Elevate Estate Advisors collects personal information from you when you
          voluntarily provide it to us through our website. This may include your name,
          email address, phone number, and any other details required for us to assist
          you with your residential or commercial real estate needs. We utilize this
          information solely to enhance your experience, respond to inquiries, process
          transactions, and keep you informed about our services.
        </p>

        <h2 className="text-2xl font-semibold text-[#24324a] mt-8 mb-3">
          Data Security
        </h2>
        <p className="mb-6">
          We understand the importance of maintaining the confidentiality and security
          of your personal data. We employ robust security measures and protocols to
          prevent unauthorized access, use, or disclosure of your information. Our
          systems are regularly updated to safeguard against data breaches and we ensure
          adherence to applicable privacy laws in India.
        </p>

        <h2 className="text-2xl font-semibold text-[#24324a] mt-8 mb-3">
          Sharing Your Information
        </h2>
        <p className="mb-6">
          Elevate Estate Advisors does not share your personal information with third
          parties except as necessary to fulfill our services or comply with legal
          obligations. We assure you that we only work with third-party partners who
          adhere to stringent data protection standards.
        </p>

        <h2 className="text-2xl font-semibold text-[#24324a] mt-8 mb-3">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          As our business grows and evolves, we may update this Privacy Policy from
          time to time. Any changes will be reflected on this page and are effective
          immediately upon posting. We encourage you to regularly review this policy to
          stay informed about how we are protecting your information.
        </p>

        <p>
          If you have any questions or concerns about this Privacy Policy, please
          contact us through our website. Your trust is important to us, and we are
          committed to ensuring that your personal information is safe and secure.
        </p>
      </section>

    </div>
  );
}

