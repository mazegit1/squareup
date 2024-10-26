import React, { useState } from "react";
import herobg from '../background/herobg.png';
import ourservice from '../background/ourservice.png';
import { FaPenFancy } from "react-icons/fa";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { GiPowerGenerator } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { FaCrown } from "react-icons/fa";
import cardimg from '../images/card.png'
import bg from '../background/bg.png';
import mainlogo from '../images/mainlogo.png';
import { motion } from "framer-motion";

const Home = () => {
    // Array of questions and answers
    const questions = [
      {
        id: 1,
        question: "What services does SquareUp provide?",
        answer: "SquareUp offers a variety of services including payment processing, point-of-sale systems, and business management solutions.",
      },
      {
        id: 2,
        question: "How can SquareUp help my business?",
        answer: "SquareUp offers a variety of services including payment processing, point-of-sale systems, and business management solutions.",
      },
      {
        id: 3,
        question: "What industries does SquareUp work with?",
        answer: "SquareUp offers a variety of services including payment processing, point-of-sale systems, and business management solutions.",
      },
      {
        id: 4,
        question: "How long does it take to complete a project with SquareUp?",
        answer: "SquareUp offers a variety of services including payment processing, point-of-sale systems, and business management solutions.",
      },
      {
        id: 5,
        question: "Do you offer ongoing support and maintenance after the project is completed?",
        answer: "SquareUp offers a variety of services including payment processing, point-of-sale systems, and business management solutions.",
      },
      {
        id: 6,
        question: "Can you work with existing design or development frameworks?",
        answer: "SquareUp offers a variety of services including payment processing, point-of-sale systems, and business management solutions.",
      },
      {
        id: 7,
        question: "How involved will I be in the project development process?",
        answer: "SquareUp offers a variety of services including payment processing, point-of-sale systems, and business management solutions.",
      },
      {
        id: 8,
        question: "Can you help with website or app maintenance and updates?",
        answer: "SquareUp offers a variety of services including payment processing, point-of-sale systems, and business management solutions.",
      },
      // Add more questions here as needed
    ];
  
    // State to keep track of which question is open
    const [openQuestion, setOpenQuestion] = useState(null);
  
    // Toggle question visibility
    const handleToggle = (id) => {
      setOpenQuestion(openQuestion === id ? null : id);
    };
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero relative bg-[black] flex flex-col items-center justify-center text-white h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" /> {/* Dark overlay */}
        <div className="hero-content text-center p-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold mb-4">
            A Digital Product Studio <br />
            that will Work
          </h1>
          <div className="hero-links flex flex-wrap text-xl md:text-3xl gap-2 items-center justify-center">
            <h1>For:</h1>
            <a href="/" className="hover:text-[#9EFF00] bg-[#1e1e1e] px-4 md:px-6 rounded-xl shadow-2xl py-2 md:py-3 transition-all duration-200">Startups</a>
            <h1 className="hidden md:inline">,</h1>
            <a href="/" className="hover:text-[#9EFF00] bg-[#1e1e1e] px-4 md:px-6 rounded-xl shadow-2xl py-2 md:py-3 transition-all duration-200">Enterprise leaders</a>
            <h1 className="hidden md:inline">,</h1>
            <a href="/" className="hover:text-[#9EFF00] bg-[#1e1e1e] px-4 md:px-6 rounded-xl shadow-2xl py-2 md:py-3 transition-all duration-200">Media & Publishers</a>
            <h1 className="hidden md:inline">,</h1>
            <h2 className="hidden md:inline">and</h2>
            <a href="/" className="hover:text-[#9EFF00] bg-[#1e1e1e] px-4 md:px-6 rounded-xl shadow-2xl py-2 md:py-3 transition-all duration-200">Social Good</a>
          </div>
          <div className="wrapper pt-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center">
            <a href="/" className="text-xl md:text-3xl px-6 py-2 bg-[#242424] transition-all ease-in-out duration-200 hover:bg-[#9EFF00] hover:text-black text-white rounded-2xl">Our Works</a>
            <a href="/" className="text-xl md:text-3xl px-6 py-2 bg-[#9EFF00] transition-all ease-in-out duration-200 text-black hover:bg-[#242424] hover:text-white rounded-2xl">Contact us</a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="services flex flex-col items-center justify-center gap-8 bg-cover bg-center h-[40vh] md:h-[20vh] relative"
        style={{ backgroundImage: `url(${ourservice})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60" /> {/* Dark overlay */}
        <div className="relative z-10 text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          <h3 className="text-lg md:text-xl">
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </h3>
        </div>
      </div>
      <div className="wrapper bg-[#262626] p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card 1: Design */}
        <div className="card bg-[#000] text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaPenFancy className="text-6xl text-[#9eff00]  mb-4 mx-auto" />
          <h1 className=" text-xl font-semibold text-center">Design</h1>
          <h3 className=" text-center">
            At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.
          </h3>
          <h1 className="text-center mt-4 text-white bg-[#1e1e1e] py-4 text-2xl hover:bg-[#242424] font-bold cursor-pointer">Learn More</h1>
        </div>

        {/* Card 2: Engineering */}
        <div className="card bg-[#000] text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <IoExtensionPuzzleSharp className="text-6xl  text-[#9eff00] mb-4 mx-auto" />
          <h1 className=" text-xl font-semibold text-center">Engineering</h1>
          <h3 className=" text-center">
            Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.
          </h3>
          <h1 className="text-center mt-4 text-white bg-[#1e1e1e] py-4 text-2xl hover:bg-[#242424] font-bold cursor-pointer">Learn More</h1>
        </div>

        {/* Card 3: Project Management */}
        <div className="card bg-[#000] text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <GiPowerGenerator className="text-6xl  text-[#9eff00] mb-4 mx-auto" />
          <h1 className=" text-xl font-semibold text-center">Project Management</h1>
          <h3 className=" text-center">
            Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.
          </h3>
          <h1 className="text-center mt-4 text-white bg-[#1e1e1e] py-4 text-2xl hover:bg-[#242424] font-bold cursor-pointer">Learn More</h1>
        </div>
      </div>
    </div>
    <div
        className="services flex flex-col items-center justify-center gap-8 bg-cover bg-center h-[40vh] md:h-[20vh] relative"
        style={{ backgroundImage: `url(${ourservice})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60" /> {/* Dark overlay */}
        <div className="relative z-10 text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Why Choose SquareUp?</h1>
          <h3 className="text-lg md:text-xl">
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
          </h3>
        </div>
      </div>
      <div className="wrapper bg-[#262626] p-8">
      <h1 className="text-center text-5xl font-semibold text-white text-lightgreen mb-8">Our Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Card 1: Expertise */}
        <div className="card bg-[#9EFF00] p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform transform hover:scale-105">
          <FaMedal className="text-4xl text-black" />
          <h1 className="text-black text-xl font-semibold">Expertise</h1>
        </div>

        {/* Card 2: Client-Centric Approach */}
        <div className="card bg-[#9EFF00] p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform transform hover:scale-105">
          <FaPeopleArrows className="text-4xl text-black" />
          <h1 className="text-black text-xl font-semibold">Client-Centric Approach</h1>
        </div>

        {/* Card 3: Results-Driven Solutions */}
        <div className="card bg-[#9EFF00] p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform transform hover:scale-105">
          <SlEnergy className="text-4xl text-black" />
          <h1 className="text-black text-xl font-semibold">Results-Driven Solutions</h1>
        </div>

        {/* Card 4: Collaborative Partnership */}
        <div className="card bg-[#9EFF00] p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform transform hover:scale-105">
          <FaCrown className="text-4xl text-black" />
          <h1 className="text-black text-xl font-semibold">Collaborative Partnership</h1>
        </div>
      </div>
    </div>
    <div className="bg-black p-8">
      <h1 className="text-center text-3xl text-[#D8FF99] mb-8">Testimonials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(6).fill( // Replace this with your actual data source
          <div className="card bg-[#1E1E1E] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <h1 className='text-[#D8FF99]'>SquareUp has been Instrumental in Transforming our Online Presence.</h1>
            <h3 className='text-gray-300'>Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.</h3>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <img src={cardimg} alt="John Mcgregor" className="w-12 h-12 rounded-full" />
                <div className="flex flex-col">
                  <h1 className="text-[#D8FF99]">John Mcgregor</h1>
                  <h2 className="text-gray-400">CEO of Chic Boutique</h2>
                </div>
              </div>
              <a href="#" className="text-[#D8FF99] hover:underline">Open Website</a>
            </div>
          </div>
        )}
      </div>
    </div>
    <div
        className="services flex flex-col items-center justify-center gap-8 bg-cover bg-center h-[40vh] md:h-[20vh] relative"
        style={{ backgroundImage: `url(${ourservice})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60" /> {/* Dark overlay */}
        <div className="relative z-10 text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          <h3 className="text-lg md:text-xl">
          Still you have any questions? Contact our Team via hello@squareup.com
          </h3>
        </div>
      </div>
      <div className="questions px-6 sm:px-10 lg:px-20 gap-6 py-10 lg:py-20 text-white bg-[#262626] grid md:grid-cols-2">
      {questions.map(({ id, question, answer }) => (
        <div
          key={id}
          className="question flex flex-col gap-4 rounded-2xl border border-[#E6E6E6] px-6 py-4 sm:px-10 sm:py-6 lg:px-12 lg:py-8 bg-[#333333] hover:bg-[#3D3D3D] transition-colors duration-300"
        >
          <div className="flex items-center justify-between text-xl lg:text-2xl hover:text-[#C5FF66] cursor-pointer" onClick={() => handleToggle(id)}>
            <div className="flex items-center gap-4">
              <h1 className="text-[#C5FF66] text-5xxl font-semibold">{id < 10 ? `0${id}` : id}</h1>
              <h1 className="font-semibold">{question}</h1>
            </div>
            <h3 className="text-[#C5FF66] text-5xl">{openQuestion === id ? "-" : "+"}</h3>
          </div>
          {openQuestion === id && (
            <div className="answer pl-10 pr-6 pt-2 lg:pt-4 text-[#E6E6E6] transition-all duration-300">
              <p>{answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    
    </>
  );
};

export default Home;
