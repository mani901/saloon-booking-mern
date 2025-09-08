import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/hero/HeroSection";
import ServicesList from "../components/services/ServicesList";
import StylistsList from "../components/stylists/StylistsList";
import QuickBookingWidget from "../components/booking/QuickBookingWidget";
import Testimonials from "../components/testimonials/Testimonials";
import Location from "../components/location/Location";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        <HeroSection />
        <ServicesList />
        <StylistsList />
        <QuickBookingWidget />
        <Testimonials />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
