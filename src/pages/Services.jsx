import React from 'react';
import ourservice from '../background/ourservice.png';
import { motion } from 'framer-motion';
import { FaUserCircle, FaSitemap, FaMousePointer, FaPenNib, FaMobileAlt } from 'react-icons/fa';
import { RiPencilRuler2Fill, RiToolsFill } from 'react-icons/ri';
import { BiNetworkChart } from 'react-icons/bi';
import { GiTeamIdea } from 'react-icons/gi';
import { FiLayers, FiActivity, FiCheckCircle, FiRepeat } from 'react-icons/fi';
import { AiOutlineSchedule, AiOutlineBug } from 'react-icons/ai';
import { MdSecurity, MdOutlineTimeline } from 'react-icons/md';
import { FaTasks, FaChartLine, FaUserShield, FaProjectDiagram } from 'react-icons/fa';

const servicesData = [
  {
    section: 'Web Development',
    items: [
      { icon: FaUserCircle, title: 'Front-End Development (HTML, CSS, JavaScript)' },
      { icon: FaSitemap, title: 'Back-End Development (PHP, Python, Ruby)' },
      { icon: BiNetworkChart, title: 'Content Management System (CMS) Development' },
      { icon: FiLayers, title: 'E-Commerce Platform Development' },
    ],
  },
  {
    section: 'Mobile App Development',
    items: [
      { icon: FaMobileAlt, title: 'Native iOS and Android App Development' },
      { icon: RiPencilRuler2Fill, title: 'Cross-Platform App Development (React Native, Flutter)' },
      { icon: FaPenNib, title: 'App Prototyping and UI/UX Design Integration' },
      { icon: GiTeamIdea, title: 'App Testing, Deployment, and Maintenance' },
    ],
  },
  {
    section: 'Custom Software Development',
    items: [
      { icon: RiToolsFill, title: 'Enterprise Software Development' },
      { icon: FiLayers, title: 'Custom Web Application Development' },
      { icon: FaMousePointer, title: 'Integration with Third-Party APIs' },
      { icon: FiLayers, title: 'Legacy System Modernization and Migration' },
    ],
  },
];

const projectServices = [
  {
    category: 'Project Planning and Scoping',
    services: [
      { icon: FaTasks, title: 'Requirements Gathering and Analysis' },
      { icon: MdOutlineTimeline, title: 'Project Roadmap and Timeline Development' },
      { icon: FaProjectDiagram, title: 'Resource Allocation and Task Assignment' },
      { icon: FaChartLine, title: 'Risk Assessment and Mitigation Strategies' },
    ],
  },
  {
    category: 'Agile Development',
    services: [
      { icon: FiRepeat, title: 'Iterative Development and Sprints' },
      { icon: FiActivity, title: 'Scrum or Kanban Methodology Implementation' },
      { icon: AiOutlineSchedule, title: 'Regular Progress Updates and Demos' },
      { icon: FiCheckCircle, title: 'Continuous Improvement and Feedback Incorporation' },
    ],
  },
  {
    category: 'Quality Assurance and Testing',
    services: [
      { icon: FaTasks, title: 'Test Planning and Execution' },
      { icon: FiLayers, title: 'Functional and Usability Testing' },
      { icon: MdSecurity, title: 'Performance and Security Testing' },
      { icon: AiOutlineBug, title: 'Bug Tracking and Issue Resolution' },
    ],
  },
];

const Services = () => {
  return (
    <>
      <div
        className="services py-56 gap-8 flex flex-col items-center justify-center bg-cover bg-center h-[40vh] md:h-[20vh] relative"
        style={{ backgroundImage: `url(${ourservice})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <motion.div
          className="relative z-10 text-white text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-6xl font-bold text-lightgreen"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Engineering Services
          </motion.h1>
          <motion.h3
            className="text-lg md:text-2xl mt-12 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            We deliver high-performance applications tailored to your specific needs.
          </motion.h3>
        </motion.div>
      </div>

      <div className="bg-[#000000] text-gray-300 py-16 px-6 md:px-12 lg:px-20">
        {servicesData.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-lightgreen">{section.section}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#1a1a1a] hover:bg-[#333333] p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lightgreen mb-4 text-3xl">
                    <item.icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#000] text-gray-300 py-16 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Project Management</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication to keep you informed throughout the development process.
          </p>
          <button className="mt-6 px-6 py-3 bg-lightgreen text-black font-semibold rounded-md">
            Our project management services include:
          </button>
        </div>

        {projectServices.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-lightgreen">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.services.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lightgreen mb-4 text-3xl">
                    <service.icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100">{service.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
