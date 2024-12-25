import React from 'react';
import { motion } from 'framer-motion';
import { FaDollarSign, FaRegClock, FaLock } from 'react-icons/fa';  

import saloon from '../assets/Saloon.png';
import entertainment from '../assets/entertainment.png';
import dining from '../assets/dining.png';
import cleaning from '../assets/cleaning.png';

const serviceData = [
  { icon: dining, title: 'Dining' },
  { icon: saloon, title: 'Salon/Spa' },
  { icon: entertainment, title: 'Entertainment' },
  { icon: cleaning, title: 'Cleaning' },
  { icon: cleaning, title: 'Cleaning' },
  { icon: cleaning, title: 'Cleaning' },
  
];

const ServiceSection = () => (
  <section className="bg-gray-100 py-16 p-6">
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 mt-16 hidden lg:grid">
      {serviceData.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className=" flex flex-col items-center justify-center p-8 "
        >
          <img src={service.icon} alt={service.title} className="w-24 mb-4" />
          <h3 className="text-xl justyfy-center font-semibold">{service.title}</h3>
        </motion.div>
      ))}
    </div>

    <div className="mx-auto grid sm:grid-cols-1 lg:grid-cols-3 p-4 gap-8 mt-16 border-t border-gray-300">

      <div className='lg:border-r  border-gray-300'>
        <ServiceBlock
          icon={<FaDollarSign/>} 
          title="Amazing Last Minute Discounts"
          text="Get Amazing Last Minute Discounts on your favorite categories food, of beauty, getaways & more."
        />
      </div>

      <div className='lg:border-r  border-gray-300'>
        <ServiceBlock
          icon={<FaRegClock  />} 
          title="Save"
          text="Save Money with our deals of & offers"
        />
      </div>

      <ServiceBlock
        icon={<FaLock />} 
        title="Secure Payments"
        text="The Secure payment methods throughout the checkout process for keeping your data secure & safe."
      />
    </div>
  </section>
);

const ServiceBlock = ({ icon, title, text }) => (
  <div className="container mx-auto mt-8 flex px-4  items-center justify-center  ">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center mb-4"
    >
      <div className="w-12 h-12 bg-green-500 rounded-full  flex items-center justify-center text-white">
        {icon}
      </div>
      <h2 className="text-2xl font-semibold mx-4">{title}</h2>
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-center text-gray-600"
    >
      {text}
    </motion.p>
  </div>
);

export default ServiceSection;
