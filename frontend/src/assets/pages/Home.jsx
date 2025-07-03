import React from "react";
import Navbar from "../component/Navbar";
import LandingPage from "../component/Landingpage";
import AboutUs from "../component/Aboutus";
import ContactUs from "../component/Contactus";
import Footer from "../component/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
