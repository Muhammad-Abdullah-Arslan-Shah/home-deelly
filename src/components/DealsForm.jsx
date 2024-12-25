import React from 'react';

const DealsForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white p-4 shadow-lg rounded-lg mx-8 mb-4 mt-6">
        {/* First Row */}
        <div className="grid sm:grid-cols- lg:grid-cols-3 w-full mb-4 gap-4">
          {/* Dropdown 1 */}
          <select className="w-full border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="dining">Dining</option>
            <option value="drinks">Drinks</option>
            <option value="desserts">Desserts</option>
          </select>

          {/* Dropdown 2 */}
          <select className="w-full border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="all">Select All</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
          </select>

          {/* Dropdown 3 */}
          <select className="w-full border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="subcategory">Select Sub Category</option>
            <option value="veg">Vegetarian</option>
            <option value="nonveg">Non-Vegetarian</option>
          </select>
        </div>

        {/* Second Row */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 w-full mb-4 gap-4">
          {/* Dropdown 4 */}
          <select className="w-full border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="lahore">Lahore</option>
            <option value="karachi">Karachi</option>
            <option value="islamabad">Islamabad</option>
          </select>

          {/* Dropdown 5 */}
          <select className="w-full border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="destination">Destination</option>
            <option value="nearby">Nearby</option>
            <option value="city">City</option>
          </select>

          {/* Input field with search icon */}
          <div className="relative flex items-center lg:col-span-2 sm:col-span-1 m-2 w-full">
            <span className="absolute left-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
            </span>
            <div></div>
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {/* Search Button */}
          <button className="w-full sm:w-auto bg-green-800 text-white rounded-full mx-2 py-3 px-8 hover:bg-green-700">
            Search
          </button>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default DealsForm;
