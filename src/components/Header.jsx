import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import mainlogo from '../images/mainlogo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Header */}
      <div className="header flex items-center justify-between fixed text-white text-xl px-6 lg:px-20 py-6 w-full bg-black shadow-2xl z-50">
        <div className="header-left flex gap-4 text-4xl font-semibold items-center">
          <img src={mainlogo} alt="Main Logo" />
          <h1>SquareUp</h1>
        </div>

        {/* Middle links for larger screens */}
        <div className="header-middle hidden lg:flex items-center gap-6 text-lg">
          <Link
            to="/" // Home
            className="text-white hover:bg-[#1E1E1E] px-4 py-2 rounded-2xl transition-all text-3xl ease-in-out duration-200"
          >
            Home
          </Link>
          <Link
            to="/services" // Services
            className="text-white hover:bg-[#1E1E1E] px-4 py-2 rounded-2xl transition-all text-3xl ease-in-out duration-200"
          >
            Services
          </Link>
          <Link
            to="/works" // Work
            className="text-white hover:bg-[#1E1E1E] px-4 py-2 rounded-2xl transition-all text-3xl ease-in-out duration-200"
          >
            Work
          </Link>
          <Link
            to="/process" // Process
            className="text-white hover:bg-[#1E1E1E] px-4 py-2 rounded-2xl transition-all text-3xl ease-in-out duration-200"
          >
            Process
          </Link>
          <Link
            to="/about" // About
            className="text-white hover:bg-[#1E1E1E] px-4 py-2 rounded-2xl transition-all text-3xl ease-in-out duration-200"
          >
            About
          </Link>
          <Link
            to="/careers" // Careers
            className="text-white hover:bg-[#1E1E1E] px-4 py-2 rounded-2xl transition-all text-3xl ease-in-out duration-200"
          >
            Careers
          </Link>
        </div>

        {/* Contact Button for larger screens */}
        <div className="header-right hidden lg:block">
          <Link
            to="/contact" // Contact Us
            className="rounded-xl py-2 px-6 text-3xl font-semibold hover:bg-black hover:text-white transition-all ease-in-out duration-200 text-black bg-[#9EFF00]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-5xl cursor-pointer" onClick={toggleMenu}>
          <HiOutlineMenuAlt3 />
        </div>
      </div>

      {/* Full-screen menu for smaller screens */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex flex-col items-center justify-center z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Close Icon */}
          <div className="absolute top-8 right-8 text-3xl text-white cursor-pointer" onClick={toggleMenu}>
            <AiOutlineClose />
          </div>
          
          {/* Menu Links */}
          <Link
            to="/" // Home
            className="text-white text-4xl my-4 bg-[#1e1e1e] rounded-full px-8 py-4 hover:text-black shadow-2xl hover:bg-[#9EFF00] transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services" // Services
            className="text-white text-4xl my-4 bg-[#1e1e1e] rounded-full px-8 py-4 hover:text-black shadow-2xl hover:bg-[#9EFF00] transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/works" // Work
            className="text-white text-4xl my-4 bg-[#1e1e1e] rounded-full px-8 py-4 hover:text-black shadow-2xl hover:bg-[#9EFF00] transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            to="/process" // Process
            className="text-white text-4xl my-4 bg-[#1e1e1e] rounded-full px-8 py-4 hover:text-black shadow-2xl hover:bg-[#9EFF00] transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Process
          </Link>
          <Link
            to="/about" // About
            className="text-white text-4xl my-4 bg-[#1e1e1e] rounded-full px-8 py-4 hover:text-black shadow-2xl hover:bg-[#9EFF00] transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/careers" // Careers
            className="text-white text-4xl my-4 bg-[#1e1e1e] rounded-full px-8 py-4 hover:text-black shadow-2xl hover:bg-[#9EFF00] transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            to="/contact" // Contact Us
            className="text-white text-4xl my-4 bg-[#1e1e1e] rounded-full px-8 py-4 hover:text-black shadow-2xl hover:bg-[#9EFF00] transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Header;
