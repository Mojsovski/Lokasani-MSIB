import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/img/Hero.png";
import Hero1 from "../../assets/img/Hero Section-1.png";
import Hero2 from "../../assets/img/Hero Section-2.png";
import Hero3 from "../../assets/img/Hero Section-3.png";
import Hero4 from "../../assets/img/Hero Section-4.png";
import Hero5 from "../../assets/img/Hero Section-5.png";

const Hero = () => {
  const images = [Background, Hero1, Hero2, Hero3, Hero4, Hero5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 1000); // Change image every 3000 milliseconds (3 seconds)

    // Clear the interval when the component unmounts or is no longer needed
    return () => clearInterval(intervalId);
  }, [images.length]);

  const heroStyle = {
    background: `url(${images[currentIndex]}) no-repeat center center fixed`,
    backgroundSize: "cover",
    // height: "100vh", // Adjust this value based on your design
  };


    const navigate = useNavigate();



  const handleProduct = () => {
    navigate("/auth/register/toko");
  };

  const handleCreator = () => {
    navigate("/auth/register/organisasi");
  };


  return (
    <div className="relative" style={heroStyle} id="Hero">
      <div className="container mx-auto">
        <div className="h-[1000px] flex items-center text-center justify-center ">
          {/* Hero content */}
          <div className="pt-32 pb-10 md:pt-40 md:pb-16">
          <div className="hero-section ">
          <div className="text-[90px] font-bold text-center uppercase text-white">
              Eksplorasi Seni Lokal <br />
              Secara Lebih Mendalam!
            </div>
          </div>

            <div className="text-3xl pt-6 text-white">
              Kelola event dan promosikan produk seni lokalmu dengan mudah <br />
              dan efektif di Lokasani.
            </div>
            <div className="pt-10">
              <button
                className="hidden lg:inline-block py-7 px-20 bg-yellow-400 hover:bg-blue-600 text-2xl text-white font-medium rounded-3xl transition duration-200"
                href="#"
                onClick={handleProduct}
              >
                Product creator
              </button>
              <button
                className="ml-3 hidden lg:inline-block py-7 px-20 bg-yellow-400 hover:bg-blue-600 text-2xl text-white font-medium rounded-3xl transition duration-200"
                href="#"
                onClick={handleCreator}
              >
                Event creator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
