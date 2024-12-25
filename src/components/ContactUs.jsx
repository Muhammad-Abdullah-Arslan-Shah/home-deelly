import React from 'react';
import logoBg from '../assets/logo-bg.png';

const ContactUs = () => {
  return (
    <div className="bg-yellow-100 flex items-center justify-center py-16 relative">
      
      <div
        className="absolute right-24 top-0 bottom-0 w-1/4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${logoBg})`,
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="text-gray-700 font-semibold mr-4 z-10">
        For inquiries and more information:
      </div>
      <button className="bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-3xl z-10">
        Get In Touch
      </button>
    </div>
  );
};

export default ContactUs;
