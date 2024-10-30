import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import mainlogo from '../images/mainlogo.png'
const Footer = () => {
  return (
    <div className="bg-[#000] text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <div className="flex items-center">
            <img src={mainlogo} alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">SquareUp</span>
          </div>
          <nav className="space-x-4">
            <a href="#" className="hover:text-green-400">Home</a>
            <a href="#" className="hover:text-green-400">Services</a>
            <a href="#" className="hover:text-green-400">Work</a>
            <a href="#" className="hover:text-green-400">Process</a>
            <a href="#" className="hover:text-green-400">About</a>
            <a href="#" className="hover:text-green-400">Careers</a>
            <a href="#" className="hover:text-green-400">Contact</a>
          </nav>
          <div>
            <p className="font-semibold">Stay Connected</p>
            <div className="flex space-x-2 mt-2">
              <FaFacebookF className="text-green-400 hover:text-green-600 cursor-pointer" />
              <FaTwitter className="text-green-400 hover:text-green-600 cursor-pointer" />
              <FaLinkedinIn className="text-green-400 hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <FaEnvelope className="text-green-400" />
              <span>mazegitt@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="text-green-400" />
              <span>+55 688 15 00</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt className="text-green-400" />
              <span>Baku,Azerbaijan</span>
            </div>
          </div>
          <p>&copy; 2023 SquareUp. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;