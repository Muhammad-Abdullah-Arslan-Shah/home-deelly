import React , { useState, useEffect } from "react";
import UpperNotification from "../components/UpperNotification";
import Header from "../components/Header";
import ExploringDeals from "../components/ExploringDeals";
import ServiceSection from "../components/ServiceSection";
import Deals from "../components/Deals";
import AppScreen from "../components/AppScreen";
import ContactUs from "../components/ContactUs";
import MapBox from "../components/MapBox";
import Footer from "../components/Footer";

const Home = () => {
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
    <div className="overflow-x-hidden">
      <UpperNotification />
      <Header />
      <ExploringDeals />
      <ServiceSection />

      <Deals
        title="Nearby Deals"
        description="Explore nearby deals on map and buy deals to enjoy quality food with your family"
        button="View on Maps"
        bgcolor="white"
        cardLimit={3}
        deals={deals}
        isLoading={isLoading}
        error={error}
      />

      <Deals
        title="Deals of The Day"
        description="Find deals of the day here & save money with offers and avail wide discounts on everything."
        button="Explore"
        bgcolor="yellow-100"
        cardLimit={3}
        deals={deals}
        isLoading={isLoading}
        error={error}
      />
      <AppScreen />
      <ContactUs />
      <MapBox deals={deals}/>
      <Footer />
    </div>
  );
};

export default Home;

