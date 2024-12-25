import React, { useState, useEffect } from "react";
import DealCard from "./DealCard"; 

const Deals = ({ title, description, button, bgcolor, cardLimit }) => {
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://www.deelly.com/api/nearby_deals/?format=json"
        );
        if (!response.ok) {
          throw new Error(`Error fetching deals: ${response.statusText}`);
        }
        const data = await response.json();
        setDeals(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`bg-${bgcolor} p-16`}>
      {/* Display Title and Description passed as props */}
      <div className="mb-16 flex items-center justify-between">
        <div>
            { title === "Nearby Deals" ?
          (<h2 className="text-6xl font-bold text-gray-800">
            <span className="text-black">Nearby</span>{" "}
            <span className="text-green-600">Deals</span>
          </h2>)
          :(
            <h2 className="text-6xl font-bold text-gray-800">
                <span className="text-black">Deals of</span>
                <span className="text-green-600">  The Day</span>
              </h2>
          )
}
          <p className="text-black-600 text-sm mt-2">{description}</p>
        </div>
        <div>
          <button
            className="hidden md:block bg-green-800 text-white py-2 px-4 rounded-full hover:bg-green-600 mr-32"
            onClick={() => console.log("Button clicked!")}
          >
            {button}
          </button>
        </div>
      </div>

      {/* Loading or Error State */}
      {isLoading && <p>Loading deals...</p>}
      {error && <p>Error: {error}</p>}

      {/* Displaying the Deal Cards with a limit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.slice(0, cardLimit).map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
