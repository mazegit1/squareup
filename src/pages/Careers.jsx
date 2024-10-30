import React from 'react';
import { motion } from 'framer-motion';
import { FaWrench, FaChartLine, FaShieldAlt } from 'react-icons/fa';
import { 
  FaSearch, 
  FaLightbulb, 
  FaPencilRuler, 
  FaCode, 
  FaCheckCircle, 
  FaRocket, 
  FaHandsHelping, 
  FaRedo 
} from 'react-icons/fa';

const ProcessStep = ({ stepNumber, title, description, Icon }) => {
  return (
    <motion.div
      className="p-6 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300"
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="text-green-500 text-3xl mr-3" />
        <h3 className="text-xl font-semibold text-green-500">
          {stepNumber} {title}
        </h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};
const Careers = () => {
  const steps = [
    { number: '01', title: 'Discovery', icon: FaSearch, description: 'We begin by thoroughly understanding your business goals...' },
    { number: '02', title: 'Planning and Strategy', icon: FaLightbulb, description: 'Based on the gathered information, we create a comprehensive...' },
    { number: '03', title: 'Design', icon: FaPencilRuler, description: 'Our expert designers translate the project requirements into...' },
    { number: '04', title: 'Development', icon: FaCode, description: 'Once the designs are approved, our skilled development team brings...' },
    { number: '05', title: 'Testing and Quality Assurance', icon: FaCheckCircle, description: 'We conduct rigorous testing to ensure that your digital product...' },
    { number: '06', title: 'Deployment and Launch', icon: FaRocket, description: 'When your digital product is thoroughly tested and meets...' },
    { number: '07', title: 'Post-Launch Support', icon: FaHandsHelping, description: 'Our commitment to your success doesn’t end with the launch...' },
    { number: '08', title: 'Continuous Improvement', icon: FaRedo, description: 'We believe in continuous improvement and strive to optimize...' },
  ];

  return (
    <>
    <div className="bg-black text-lightgreen p-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-lightgreen">Join Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <FaWrench className="text-lightgreen text-3xl mr-2" />
            <h2 className="text-2xl font-bold text-lightgreen">QA Tester</h2>
          </div>
          <p className="text-gray-300">Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects.</p>
          <button className="mt-4 bg-lightgreen text-black font-bold py-2 px-4 rounded bg-green-600">Apply Now</button>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <FaChartLine className="text-lightgreen text-3xl mr-2" />
            <h2 className="text-2xl font-bold text-lightgreen">SQL Tester</h2>
          </div>
          <p className="text-gray-300">Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation.</p>
          <button className="mt-4 bg-lightgreen text-black font-bold py-2 px-4 rounded bg-green-600">Apply Now</button>
        </motion.div>

        <motion.div 
          className="bg-gray-800 rounded-lg p-6 shadow-lg"
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <FaShieldAlt className="text-lightgreen text-3xl mr-2" />
            <h2 className="text-2xl font-bold text-lightgreen">Manual Tester</h2>
          </div>
          <p className="text-gray-300">Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications.</p>
          <button className="mt-4 bg-lightgreen text-black font-bold py-2 px-4 rounded bg-green-600">Apply Now</button>
        </motion.div>
      </div>
    </div>
    <div className="bg-black min-h-screen text-white py-56 px-4">
      <h2 className="text-center text-5xl font-bold mb-6 text-green-500">At SquareUp</h2>
      <p className="text-center mb-8 mx-auto max-w-2xl text-lg">
        We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            stepNumber={step.number}
            title={step.title}
            description={step.description}
            Icon={step.icon}
          />
        ))}
      </div>
    </div>
  </>
  );
}

export default Careers;