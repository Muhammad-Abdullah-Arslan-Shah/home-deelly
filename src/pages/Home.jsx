import React from "react";
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
      />

      <Deals
        title="Deals of The Day"
        description="Find deals of the day here & save money with offers and avail wide discounts on everything."
        button="Explore"
        bgcolor="yellow-100"
        cardLimit={3}
      />
      <AppScreen />
      <ContactUs />
      <MapBox />
      <Footer />
    </div>
  );
};

export default Home;

