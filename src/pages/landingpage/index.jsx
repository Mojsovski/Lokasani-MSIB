import React from "react";
import Navbar from "../../component/landingpage/Navbar";
import Hero from "../../component/landingpage/Hero";
import WhyUs from "../../component/landingpage/Whyus";
import ProductFeature from "../../component/landingpage/Productfeature";
import EventFeature from "../../component/landingpage/Eventfeature";
import ContactUs from "../../component/landingpage/Contactus";
import Footer from "../../component/landingpage/Footer";
import DownloadApp from "../../component/landingpage/DownloadApp";
import Testimoni from "../../component/landingpage/Testimoni";
import AboutUs from "../../component/landingpage/AboutUs";
import Perjalanan from "../../component/landingpage/Perjalanan";

const landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <ProductFeature />
      <EventFeature />
      <DownloadApp />
      <Testimoni />
      <AboutUs />
      <Perjalanan />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default landing;
