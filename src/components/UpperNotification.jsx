import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md'; 

const UpperNotification = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="bg-green-900 text-white p-4 flex justify-between items-center hidden sm:flex">
      <div className="flex items-center">
        <MdNotifications className="text-2xl mr-2" />
        <div className="text-sm">
          Delivery lead time will be impacted due to COVID-19. Stay safe!
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-sm text-gray-500 mr-2">Select Language:</span>
        <button
          className={`bg-transparent text-white border border-right border-white px-2 py-1 rounded-sm ${
            selectedLanguage === 'English' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => handleLanguageChange('English')}
        >
          English
        </button>
        <button
          className={`bg-transparent text-white border border-white px-2 py-1 rounded-sm ml-2 ${
            selectedLanguage === 'العربية' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => handleLanguageChange('العربية')}
        >
          العربية
        </button>
      </div>
    </div>
  );
};

export default UpperNotification;
