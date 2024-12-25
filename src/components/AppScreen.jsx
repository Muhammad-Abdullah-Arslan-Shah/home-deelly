import React from 'react';
import MobileApp from '../assets/MobileApp.png'; 
import googlePlay from '../assets/googlePlay.png';
import AppStore from '../assets/AppStore.png';
import Statistics from './Statistics';
const AppScreen = () => {
  return (
    <div className=" lg:p-24 sm:p-16 ">
    <div className="flex justify-center items-center min-h-screen bg-green-50 rounded-lg border border-green-300">
      <div className="flex flex-col items-center lg:flex-row lg:space-x-8 max-w-7xl mx-auto p-8">
        {/* Mobile App Image */}
        <div className="flex-shrink-0">
          <img
            src={MobileApp}
            alt="Mobile App"
            className="w-80 lg:w-96 drop-shadow-xl"
          />
        </div>
        {/* Text and Buttons Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Download Our App To <br/> Amazing{' '}
            <span className="text-green-600 underline">Deals</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg">
            Get new deals every day. Top deals have the best offers and share
            them with you. To avail of offers, find our app in the play store.
          </p>
          {/* App Store Buttons */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <a href="#" className="hover:opacity-90">
              <img src={googlePlay} alt="Google Play" className="h-12" />
            </a>
            <a href="#" className="hover:opacity-90">
              <img src={AppStore} alt="App Store" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Statistics/>
    </div>
  );
};

export default AppScreen;
