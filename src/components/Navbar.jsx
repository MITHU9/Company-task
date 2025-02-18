// src/components/Navbar.js
import { useState } from "react";
import Hero from "./Hero";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#050506] pt-4 relative z-20">
        <div className="max-w-7xl border border-[#FFFFFF]/10 shadow-md rounded-2xl bg-[#0E0F0F] mx-auto px-4 text-white sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-gray-200 ">
                <img src="/adTask.ai.png" alt="logo" className="w-30" />
              </a>
            </div>
            <div className="hidden md:flex space-x-6 items-center">
              <a href="/products">Products</a>
              <a href="/tools">Tools</a>
              <a href="/contact">Contact Us</a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button href="/login">
                <img src="/Frame-login.png" alt="login" />
              </button>

              <button href="/login">
                <img src="/Frame-call.png" alt="login" />
              </button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/products" className="block">
                Products
              </a>
              <a href="/tools" className="block ">
                Tools
              </a>
              <a href="/contact" className="block ">
                Contact Us
              </a>
              <a href="/login" className="block ">
                Log in
              </a>
              <a href="/schedule" className="block ">
                Schedule a call
              </a>
            </div>
          </div>
        )}
      </nav>
      <section className="">
        <Hero />
      </section>
    </>
  );
};

export default Navbar;
