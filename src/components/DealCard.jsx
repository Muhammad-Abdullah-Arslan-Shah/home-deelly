import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart, FaMapMarkerAlt } from 'react-icons/fa'; // Add Location Icon
import { HiPercentBadge } from "react-icons/hi2";
import rating from '../assets/rating.png';
import person from '../assets/person.png';

const DealCard = ({ deal }) => {
  const { images, store, business_deal, location } = deal;
  const [isLiked, setIsLiked] = useState(false);
  const [country, setCountry] = useState(''); // To store country name
  const [loading, setLoading] = useState(true); // Loading state for geocoding
  const [showMoreLocations, setShowMoreLocations] = useState(false); // Toggle additional locations

  // Dummy locations
  const dummyLocations = [
    "Dummy Location 1, City A",
    "Dummy Location 2, City B",
    "Dummy Location 3, City C",
  ];

  // Toggle the like state
  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  // Fetch country name based on lat/lng
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${location.lat}&lon=${location.lng}&format=json`
        );
        const data = await response.json();
        const countryName = data.address.country || 'Pakistan, Lahore';
        setCountry(countryName);
      } catch (error) {
        console.error('Error fetching country:', error);
        setCountry('Pakistan, Lahore');
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [location.lat, location.lng]);

  return (
    <div className="deal-card relative max-w-xs w-full bg-white rounded-lg shadow-lg flex flex-col h-full">
      {/* Heart Icon for Like functionality */}
      <div className='absolute top-1 right-2 rounded-full bg-white'>
        <button
          className="p-2 text-red-500 focus:outline-none"
          onClick={handleLikeToggle}
        >
          {isLiked ? (
            <FaHeart className="w-6 h-6" />
          ) : (
            <FaRegHeart className="w-6 h-6" />
          )}
        </button>
      </div>

      <img src={images.image} alt={business_deal.title} className="w-full h-40 rounded-t-lg object-cover" />

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          <img src={rating} alt="rating" className="w-20 h-4" />
          <div className="flex items-center">
            <HiPercentBadge className="w-6 h-6 text-green-500" />
            <span className="text-sm font-semibold">Flat{" "}{business_deal.discount_percentage}% Off</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{store.name}</h3>
        <p className="text-gray-600 text-sm">{business_deal.title}</p>

        {/* Primary Location */}
        <div className="flex items-center text-gray-500 text-xs mt-2">
          <FaMapMarkerAlt className="mr-1 text-green-500" />
          <span>{loading ? 'Loading...' : `${country}`}</span>
        </div>

        {/* Additional Locations */}
        <div className="relative flex items-center text-gray-500 text-xs mt-1">
        <div className="flex items-center text-gray-500 text-xs mt-2">
          <FaMapMarkerAlt className="mr-1 text-green-500" />
          <span>{loading ? 'Loading...' : `${country}`}</span>
        </div>
          <button
            className="text-green-500 underline mx-4"
            onClick={() => setShowMoreLocations(!showMoreLocations)}
          >
            {showMoreLocations ? 'Show Less' : `+${dummyLocations.length} More`}
          </button>

          {/* Tooltip Dropdown */}
          {showMoreLocations && (
            <div className="absolute bottom-full left-0 z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-2 w-48 transform -translate-y-2">
              <h4 className="text-sm font-semibold text-gray-800 border-b pb-1 mb-2">Locations</h4>
              <ul className="space-y-1">
                {dummyLocations.map((loc, index) => (
                  <li
                    key={index}
                    className="flex items-center hover:bg-gray-100 p-1 rounded cursor-pointer"
                  >
                    <FaMapMarkerAlt className="mr-1 text-primary" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      
      <div className="mt-auto flex items-center justify-between border-t pt-2 p-4">
        <div className="flex items-center space-x-2">
          <img src={person} alt="person" className="w-6 h-6" />
          <span className="text-xs text-black-500 text-semibold">Aloo Cart</span>
        </div>

        <button className="bg-green-800 hover:bg-green-500 text-white py-1 px-6 rounded-2xl">
          Get offer
        </button>
      </div>
    </div>
  );
};

export default DealCard;
