import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import card5 from '../images/card5.png';
import card6 from '../images/card6.png';
import card7 from '../images/card7.png';
import card8 from '../images/card8.png';
import card9 from '../images/card9.png';
import card10 from '../images/card10.png';

const WorkCard = ({ title, link, description, img }) => {
  return (
    <motion.div
      className="bg-[#141414] p-4 rounded-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={img} alt={title} className="rounded-lg mb-4" />
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <a href={link} className="text-green-400 flex items-center mb-2 hover:underline">
        {link} <FaArrowRight className="ml-1" />
      </a>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const Works = () => {
  const projects = [
    { title: 'Chic Boutique', link: 'https://www.chicboutique.com', description: 'We developed a visually stunning ...', img: card1 },
    { title: 'HungryBites', link: 'https://www.hungrybites.com', description: 'HungryBites approached us to crea...', img: card2 },
    // Add all projects here
    { title: 'EventMasters', link: 'https://www.eventmasters.com', description: 'EventMasters required a comprehen...', img: card3 },
    { title: 'ProTech Solutions', link: 'https://www.protechsolutions.com', description: 'ProTech needed custom software fo...', img: card4 },
    { title: 'ProTech Solutions', link: 'https://www.protechsolutions.com', description: 'ProTech needed custom software fo...', img: card5 },
    { title: 'ProTech Solutions', link: 'https://www.protechsolutions.com', description: 'ProTech needed custom software fo...', img: card6 },
    { title: 'ProTech Solutions', link: 'https://www.protechsolutions.com', description: 'ProTech needed custom software fo...', img: card7 },
    { title: 'ProTech Solutions', link: 'https://www.protechsolutions.com', description: 'ProTech needed custom software fo...', img: card8 },
    { title: 'ProTech Solutions', link: 'https://www.protechsolutions.com', description: 'ProTech needed custom software fo...', img: card9 },
  ];

  return (
    <div className="bg-[#000] px-20 text-white py-56">
      <h2 className="text-center text-6xl font-bold mb-8">At SquareUp</h2>
      <p className="text-center mb-8 mx-auto max-w-2xl">
        We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <WorkCard 
            key={index}
            title={project.title}
            link={project.link}
            description={project.description}
            img={project.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;