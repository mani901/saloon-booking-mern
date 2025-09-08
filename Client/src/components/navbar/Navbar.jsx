import { useState } from "react";
import AuthModal from "@/components/auth/AuthModal";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedin, setisLoggedin] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex items-center border mx-4 max-md:w-full max-md:justify-between border-gray-700 px-6 py-4 rounded-full text-white text-sm bg-black/20 backdrop-blur-sm">
      <a href="/" aria-label="Salon Home">
        {/* Replace with your logo */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4.706" cy="16" r="4.706" fill="#FFA500" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#FFA500" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#FFA500" />
          <circle cx="27.294" cy="16" r="4.706" fill="#FFA500" />
        </svg>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        {["Services", "Stylists", "Pricing", "Gallery"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative overflow-hidden h-6 group font-medium"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-white">
              {item}
            </span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 text-orange-400">
              {item}
            </span>
          </a>
        ))}
      </div>

      {/* Desktop CTA Buttons */}
      <div className="hidden ml-14 md:flex items-center gap-4">
        <button className="border border-gray-600 hover:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact Us
        </button>
        {isLoggedin ? (
          <button className="bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300">
            Book Appointment
          </button>
        ) : (
          <AuthModal />
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0a1128] via-[#121b3d] to-[#0a1128] flex flex-col items-center justify-center gap-6 text-base">
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white text-2xl font-light"
            aria-label="Close menu"
          >
            ✕
          </button>
          {["Services", "Our Stylists", "Pricing", "Gallery"].map((item) => (
            <a
              key={item}
              onClick={closeMenu}
              className="text-white hover:text-orange-400 text-xl font-medium transition"
              href={`#${item.toLowerCase().replace(" ", "-")}`}
            >
              {item}
            </a>
          ))}
          <button
            onClick={closeMenu}
            className="border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-full text-sm font-medium transition"
          >
            Contact Us
          </button>
          {isLoggedin ? (
            <button
              onClick={closeMenu}
              className="bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 text-white px-6 py-3 rounded-full text-sm font-medium transition duration-300"
            >
              Book Appointment
            </button>
          ) : (
            <div>
              <AuthModal />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
