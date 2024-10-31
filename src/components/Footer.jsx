import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import mainlogo from '../images/mainlogo.png';

const Footer = () => {
  return (
    <div className="bg-[#000] text-white py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Logo and Title */}
          <div className="flex items-center mb-4 lg:mb-0">
            <img src={mainlogo} alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">SquareUp</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2 lg:space-y-0 lg:space-x-4 flex flex-col lg:flex-row items-center">
            <a href="/" className="hover:text-green-400">Home</a>
            <a href="/services" className="hover:text-green-400">Services</a>
            <a href="/works" className="hover:text-green-400">Work</a>
            <a href="/process" className="hover:text-green-400">Process</a>
            <a href="/about" className="hover:text-green-400">About</a>
            <a href="/careers" className="hover:text-green-400">Careers</a>
            <a href="/contact" className="hover:text-green-400">Contact</a>
          </nav>

          {/* Social Media */}
          <div className="mt-4 lg:mt-0 text-center lg:text-right">
            <p className="font-semibold">Stay Connected</p>
            <div className="flex justify-center lg:justify-end space-x-4 mt-2">
              <FaFacebookF className="text-green-400 hover:text-green-600 cursor-pointer" />
              <FaTwitter className="text-green-400 hover:text-green-600 cursor-pointer" />
              <FaLinkedinIn className="text-green-400 hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-6 text-center lg:text-left">
          {/* Contact Info */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
            <a href='*' className="flex items-center justify-center space-x-2">
              <FaEnvelope className="text-green-400" />
              <span>mazegitt@gmail.com</span>
            </a>
            <a href='*'   className="flex items-center justify-center space-x-2">
              <FaPhoneAlt className="text-green-400" />
              <span>+55 688 15 00</span>
            </a>
            <a href='*' className="flex items-center justify-center space-x-2">
              <FaMapMarkerAlt className="text-green-400" />
              <span>Baku, Azerbaijan</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm">&copy; 2023 SquareUp. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
