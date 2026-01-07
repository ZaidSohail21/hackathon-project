import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex  items-center py-3  bg-black border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-around w-full">
          
          {/* Logo */}
          <div className="flex items-center py-2 px-3 border-white bg-gray-900 rounded-4xl gap-2 c">
            <div className="h-8 w-8 rounded-lg  text-white flex items-center justify-center font-bold">
              E
            </div>
            <span className="text-xl font-bold  text-white">
              Entrepedia
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex py-3 border-white items-center rounded-4xl text-white bg-gray-900 gap-8 px-32 mx-32">
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Services</a>
            <a href="#" className="nav-link">Resources</a>
            <a href="#" className="nav-link">About</a>

            
          </div>
          <div className="hidden md:flex items-center border-white text-white bg-gray-900 py-2 rounded-4xl">
            <button className="hidden md:flex items-center rounded-4xl  gap-8 px-12 mx-12">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col gap-4 px-4 py-4">
            <a href="#" className="mobile-link">Products</a>
            <a href="#" className="mobile-link">Services</a>
            <a href="#" className="mobile-link">Resources</a>
            <a href="#" className="mobile-link">About</a>

            <button className="mt-2 rounded-lg bg-black py-2 text-white font-semibold">
              Explore Library
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
