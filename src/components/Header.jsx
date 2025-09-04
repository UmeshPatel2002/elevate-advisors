import React, {useState} from "react";

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-40 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary-500 to-green-600 flex items-center justify-center text-white font-bold">EA</div>
            <div>
              <a href="#" className="font-bold text-lg text-primary-500">ElevateAdvisor</a>
              <p className="text-xs text-gray-500">Property in India • Buy • Rent</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-gray-700">
            <a href="#properties" className="hover:text-primary-500">Properties</a>
            <a href="#services" className="hover:text-primary-500">Services</a>
            <a href="#developers" className="hover:text-primary-500">Developers</a>
            <a href="#testimonials" className="hover:text-primary-500">Testimonials</a>
            <a href="#contact" className="hover:text-primary-500">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919880083870" className="text-sm font-medium">+91 9880xxxxxx</a>
            <a href="https://api.whatsapp.com/send?phone=919888000000" target="_blank" rel="noreferrer" className="px-3 py-2 bg-primary-500 text-white rounded-md text-sm">WhatsApp</a>
          </div>

          <button onClick={()=>setOpen(!open)} className="md:hidden p-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="px-5 py-4 space-y-3">
            <a href="#properties" className="block">Properties</a>
            <a href="#services" className="block">Services</a>
            <a href="#developers" className="block">Developers</a>
            <a href="#testimonials" className="block">Testimonials</a>
            <a href="#contact" className="block">Contact</a>
            <a href="tel:+919880083870" className="block text-sm pt-2">Call: +91 9880083870</a>
          </div>
        </div>
      )}
    </header>
  );
}
