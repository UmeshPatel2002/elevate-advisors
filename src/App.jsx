import React from "react";
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Services from "./components/Services.jsx"
import Developers from "./components/Developers.jsx"
import Testimonials from "./components/Testimonials.jsx"
import ContactForm from "./components/ContactForm.jsx"
import Footer from "./components/Footer.jsx"

export default function App(){
  return (
    <div className="min-h-screen text-gray-800 bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Developers />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

