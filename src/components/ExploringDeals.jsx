import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import hotelImage from '../assets/hotel.png'; 
import DealsForm from './DealsForm';
import dummyVideo from '../assets/dummy-video.mp4';
function ExploringDeals() {
  

  return (
    <>
      <div className="flex flex-col bg-green-100 mt-6 relative">
        {/* Main Content */}
        <div className="flex flex-wrap h-auto  relative">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col mb-12 md:mb-36 p-4 md:p-8 items-start justify-center relative">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 z-10  md:text-left"
            >
              Get The Best <span className="text-green-500">Deals</span> <br />
              Near By You!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm sm:text-lg text-black font-semibold mb-8 z-10  md:text-left"
            >
              Explore nearby deals on map and buy deals
              to <br />
              enjoy quality food with your family.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-green-800 hover:bg-green-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full z-10 lg:self-center md:self-start"
            >
              Explore
            </motion.button>
           
            <img
              src={hotelImage}
              alt="Hotel"
              className="absolute hidden md:block bottom-[-50px] right-[-50px] max-w-[150px] md:max-w-xs z-1"
            />
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden relative">
            {dummyVideo ? (
              <video
                autoPlay
                muted
                loop
                className="w-full h-[250px] sm:h-[400px] md:h-full object-cover"
              >
                <source src={dummyVideo} type="video/mp4" />
              </video>
            ) : (
              <div className="text-gray-500">Loading video...</div>
            )}
          </div>
        </div>
        <div className="rounded-lg absolute z-20 bottom-[-70%] sm:bottom-[-25%] right-[-5%] left-[-5%] p-4 lg:mx-32 md:mx-16 sm:mx-8">
  <DealsForm />
</div>

      </div>

      



      
       
    
    </>
  );
}

export default ExploringDeals;
