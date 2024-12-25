import React from 'react';
import { motion } from 'framer-motion';
import saloon from '../assets/Saloon.png';
import entertainment from '../assets/entertainment.png';
import dining from '../assets/dining.png';
import cleaning from '../assets/cleaning.png';
import discount from '../assets/discount.png';
import save from '../assets/save.png';
import payment from '../assets/payment.png';

const serviceData = [
  { image: dining, title: 'Dining' },
  { image: saloon, title: 'Salon/Spa' },
  { image: entertainment, title: 'Entertainment' },
  { image: cleaning, title: 'Cleaning' },
];

const ServiceSection = () => (
  <section className="bg-gray-100 py-16 p-6">
    <div className="mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8 mt-16">
      {serviceData.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center justify-center p-8"
        >
          <img src={service.image} alt={service.title} className="w-24 h-24 mb-4 object-cover" />
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </motion.div>
      ))}
    </div>

    <div className="mx-auto grid sm:grid-cols-1 lg:grid-cols-3 p-4 gap-8 mt-16 border-t border-gray-300">
      <div className="lg:border-r border-b lg:border-b-0 sm:border-b-2 border-gray-300">
        <ServiceBlock
          image={discount} 
          title="Amazing Last Minute Discounts"
          text="Get Amazing Last Minute Discounts on your favorite categories food, of beauty, getaways & more."
        />
      </div>

      <div className="lg:border-r border-b lg:border-b-0 sm:border-b-2 border-gray-300">
        <ServiceBlock
          image={save} 
          title="Save"
          text="Save Money with Our Deals & Offers: Enjoy exclusive discounts and limited-time promotions on a variety of products"
        />
      </div>

      <div className="">
        <ServiceBlock
          image={payment} 
          title="Secure Payments"
          text="The Secure payment methods throughout the checkout process for keeping your data secure & safe."
        />
      </div>
    </div>
  </section>
);

const ServiceBlock = ({ image, title, text }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 m-2 p-2">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="col-span-2 flex items-center justify-center sm:mb-4 lg:mb-0"
    >
      <img src={image} alt={title} className="w-20 h-20 mx-2 object-cover" />
      <h2 className="text-2xl font-semibold ml-1">{title}</h2>
    </motion.div>
    
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-center text-gray-600 mr-1 lg:col-span-1 sm:col-span-1"
    >
      {text}
    </motion.p>
  </div>
);

export default ServiceSection;
