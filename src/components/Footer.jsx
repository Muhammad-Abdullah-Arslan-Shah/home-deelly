import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import card from '../assets/cards.png';
import logo2 from '../assets/logo2.png';

const Footer = () => {
  return (
    <footer className=" py-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
      <img src={logo2} alt="Top Deals Logo" className="w-16 h-16 lg:ml-36" />
        <div>
          
          <p className="text-sm  mt-2">
          <h3 className=" my-2 text-lg font-semibold">Top Deals</h3>
            Top Deals is an e-commerce site that connects businesses with customers by providing discounted offers, service coupons, or special offers. Top Deals brings a whole e-commerce platform for business owners and customers to save a lot of money.
          </p>
        </div>

        <div className=" lg:mx-16 ">
          <h3 className="text-lg font-semibold">Our Company</h3>
          <ul className="text-sm ">
            <li><a href="/">About Us</a></li>
            <li><a href="/">Privacy & Policy</a></li>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Our Payment Partners</h3>
          <div className="flex space-x-4">
            <img src={card} alt="Visa" className="w-30 h-10" /> 
            
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-between mt-6 border-t border-gray-200 pt-4 mt-1 text-center text-sm text-gray-500">
        <p className=' pt-1 px-2'>&copy; Top Deals 2023. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-4  pt-1 px-2">
          <a href="/" className="text-gray-700 hover:text-gray-900"><FaFacebookF /></a>
          <a href="/" className="text-gray-700 hover:text-gray-900"><FaTwitter /></a>
          <a href="/" className="text-gray-700 hover:text-gray-900"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;