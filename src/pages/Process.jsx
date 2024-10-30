import React from 'react';
import { motion } from 'framer-motion';
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

const Process = () => {
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
    
  );
};

export default Process;