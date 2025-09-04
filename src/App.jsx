import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AppSide from "./Components/AppSide";
import Network from "./Components/Network";
import Steps from "./Components/Steps";
import Offers from "./Components/Offers";
import Adverts from "./Components/ImageMarquee";
import ImageMarquee from "./Components/PhoneAdvert";
import Map from "./Components/Map";
import Stories from "./Components/Stories";
import FAQS from "./Components/FAQS";
import Download from "./Components/Download";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <div
        style={{
          background: "url('/hero-background.svg') no-repeat center center",
          backgroundSize: "cover",
        }}
        className="min-h-screen  flex flex-col"
      >
        <Navbar />
        <Hero />
      </div>
      <AppSide />
      <Network />
      <Steps />

      <div className="bg-[#0C513F]  md:pt-[650px] pt-[200px] -mt-[200px] md:-mt-[600px] ">
        <Offers />
        <Adverts />
        <ImageMarquee />
      </div>
      <Map />
      <Stories />
      <FAQS />
      <div className="bg-[#000000] pt-[650px] -mt-[500px]">
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default App;
