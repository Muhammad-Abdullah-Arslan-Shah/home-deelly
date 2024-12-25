import React, { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { MdOutlineRestaurantMenu, MdOutlineHomeRepairService } from 'react-icons/md';
import { FaSpa, FaTheaterMasks, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Top Section */}
      <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
        {/* Hamburger Menu & Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl text-gray-600 lg:hidden"
          >
            <GiHamburgerMenu />
          </button>
          {/* Logo */}
          <img src={logo} alt="Deely Logo" className="h-12" />
        </div>

        {/* Cart and Others */}
        <div className="flex items-center space-x-6">
          {/* Cart */}
          <div className="relative">
            <FaShoppingCart className="text-xl text-gray-600 hover:text-green-600 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-white font-bold w-5 h-5 flex items-center justify-center rounded-full">03</span>
          </div>

          {/* Login Dropdown */}
          <div className="hidden lg:block group relative">
            <FaUser className="text-xl text-gray-600 hover:text-green-600 cursor-pointer" />
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-md hidden group-hover:block">
              <a href="/customer-login" className="block px-4 py-2 hover:bg-gray-100">Customer Login</a>
              <a href="/merchant-login" className="block px-4 py-2 hover:bg-gray-100">Merchant Login</a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row lg:items-center px-4 py-4 lg:py-2 bg-white lg:bg-transparent`}
      >
        <a href="/" className="flex items-center py-2 lg:py-0 lg:ml-4 lg:mr-16 hover:text-green-600">
          <HiHome className="mr-2 text-3xl text-green-600" /> Home
        </a>
        <a href="/dining" className="flex items-center py-2 lg:py-0 lg:mr-16 hover:text-green-600">
          <MdOutlineRestaurantMenu className="mr-2 text-3xl text-green-600" /> Dining
        </a>
        <a href="/salon" className="flex items-center py-2 lg:py-0 lg:mr-16 hover:text-green-600">
          <FaSpa className="mr-2 text-lg text-green-600" /> Salon/Spa
        </a>
        <a href="/entertainment" className="flex items-center py-2 lg:py-0 lg:mr-16 hover:text-green-600">
          <FaTheaterMasks className="mr-2 text-3xl text-green-600" /> Entertainment
        </a>
        <a href="/services" className="flex items-center py-2 lg:py-0 lg:mr-16 hover:text-green-600">
          <MdOutlineHomeRepairService className="mr-2 text-3xl text-green-600" /> Home Services
        </a>
      </nav>
    </header>
  );
};

export default Header;
